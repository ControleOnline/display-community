<template>
  <q-form
    ref    ="myForm"
    @submit="onSubmit"
  >
    <div class="row q-col-gutter-xs q-pb-xs">
      <div class="col-xs-12">
        <q-input stack-label lazy-rules
          v-model="item.nome"
          type   ="text"
          :label ="$t('Nome')"
          :rules ="[isInvalid()]"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-select stack-label
          :label  ="$t('Departamento')"
          v-model ="item.depto"
          :options="deptos"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules reverse-fill-mask
          prefix   ="R$"
          v-model  ="item.preco"
          type     ="text"
          :label   ="$t('Preço')"
          mask     ="#,##"
          fill-mask="0"
        />
      </div>
    </div>

    <div class="row justify-end">
      <q-btn
        :loading="saving"
        icon    ="save"
        type    ="submit"
        :label  ="$t('Salvar')"
        size    ="md"
        color   ="primary"
        class   ="q-mt-md"
      />
    </div>
  </q-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    id: {
      required: false,
      default : null
    },
  },

  data() {
    return {
      saving    : false,
      loading   : false,
      personType: 'PJ',
      item      : {
        nome : null,
        depto: null,
        preco: null,
      },
      deptos: [
        {
          label: 'Fiscal',
          value: 'fiscal',
        },
        {
          label: 'Contábil',
          value: 'fiscal',
        },
        {
          label: 'Depto Pessoal',
          value: 'depto_pessoal',
        },
        {
          label: 'Societário',
          value: 'societario',
        },
        {
          label: 'Outros',
          value: 'outros',
        },
      ],
    };
  },

  methods: {
    onSubmit () {
      this.$refs.myForm.validate()
        .then(success => {
          if (success) {
            let payload = {};

            this.$emit('save', payload);
          }
      })
    },

    uploadFile(item, file) {
      if (!file) {
        return;
      }
    },

    removeFile(data) {
      if (window.confirm(this.$t('Tem certeza que deseja eliminar este arquivo?'))) {

      }
    },

    downloadFile(file) {
      /*
      return this.api.private(`download/${this.id}/files/${file.id}`)
        .then(response => response.blob())
        .then((blob) => {
          if (!exportFile(file.name, blob, blob.type)) {
            throw new Error(this.$t('Download error'));
          }
        });
      */
    },

    onCEPFound(address) {
      this.item.estado      = address.state;
      this.item.cidade      = address.city;
      this.item.bairro      = address.district;
      this.item.cep         = address.postalCode;
      this.item.logradouro  = address.street;
      this.item.complemento = '';
    },

    isInvalid(key) {
      return val => {
        switch (key) {
          case 'email'   :
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
              return 'O email informado não é válido';
          break;
          default:
            if (!(val && val.length > 0))
              return 'Este campo é obrigatório';
        }
        return true;
      };
    },
  },
};
</script>
