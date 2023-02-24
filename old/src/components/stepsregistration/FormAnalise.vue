<template>
  <q-form
    ref    ="myForm"
    @submit="onSubmit"
  >
    <div class="row q-col-gutter-xs q-pb-xs">
      <div class="col-xs-12 q-pa-md text-subtitle1">
        {{ item.empresa }}
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules unmasked-value
          v-model="item.cpfResponsavel"
          type   ="text"
          :label ="$t('CPF')"
          :mask  ="'###.###.###-##'"
          :rules ="[isInvalid('document')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules unmasked-value
          v-model="item.cnpj"
          type   ="text"
          :label ="$t('CNPJ')"
          :mask  ="'##.###.###/####-##'"
          :rules ="[isInvalid('document')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules
          v-model="item.email"
          type   ="text"
          :label ="$t('Email')"
          :rules ="[isInvalid('email')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules unmasked-value
          v-model="item.phone"
          type   ="text"
          :label ="$t('Telefone')"
          mask   ="(##) ####-####"
          :rules ="[isInvalid('phone')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules unmasked-value
          v-model="item.celphone"
          type   ="text"
          :label ="$t('Celular')"
          mask   ="(##) #####-####"
          :rules ="[isInvalid('phone')]"
        />
      </div>
      <div class="row q-col-gutter-sm q-pb-xs">
        <div class="col-xs-12 col-sm-grow">
          <CEPSearchInput
            ref      ="cepSearchRef"
            @found   ="onCEPFound"
            @error   ="(error) => {
              this.item.cep = error.postalCode;

              this.$q.notify({
                message : error.message,
                position: 'bottom',
                type    : 'warning',
              });
            }"
          />
        </div>
        <div class="col-xs-12 col-sm-grow">
          <q-input stack-label lazy-rules
            v-model="item.logradouro"
            type   ="text"
            :label ="$t('Logradouro')"
            :rules ="[isInvalid('street')]"
          />
        </div>
        <div class="col-xs-12 col-sm-grow">
          <q-input stack-label
            v-model="item.bairro"
            type   ="text"
            :label ="$t('Bairro')"
            :rules ="[isInvalid('district')]"
          />
        </div>
        <div class="col-xs-12 col-sm-grow">
          <q-input stack-label lazy-rules
            v-model="item.complemento"
            type   ="text"
            :label ="$t('Complemento')"
          />
        </div>
        <div class="col-xs-12 col-sm-grow">
          <q-input stack-label lazy-rules
            v-model="item.cidade"
            type   ="text"
            :label ="$t('Cidade')"
            :rules ="[isInvalid('city')]"
          />
        </div>
        <div class="col-xs-12 col-sm-4">
          <q-input stack-label lazy-rules
            v-model="item.estado"
            type   ="text"
            :label ="$t('Estado')"
            mask   ="AA"
            :rules ="[isInvalid('state')]"
          />
        </div>
      </div>
      <div class="col-xs-12">
        <q-file stack-label bottom-slots
          v-model   ="item.requerimento"
          :label    ="$t('Requerimento')"
          @input    ="(file) => {
            uploadFile(null, file);
          }"
          :accept   ="'.pfx,.pdf'"
          :loading  ="false"
          :clearable="true"
        >
          <template v-slot:append>
            <q-icon
              v-if ="true"
              name ="attachment"
              color="primary"
            />
            <q-btn flat round dense
              v-if    ="true"
              color   ="red"
              icon    ="delete"
              @click  ="removeFile(null)"
              :loading="false"
            />
            <q-btn flat round dense
              v-if    ="true"
              color   ="blue"
              icon    ="cloud_download"
              @click  ="downloadFile({ id: 1, name: 'file.xml' })"
            />
          </template>
        </q-file>
      </div>
      <div class="col-xs-12">
        <q-file stack-label bottom-slots
          v-model   ="item.certDigital"
          :label    ="$t('Certificado Digital A1')"
          @input    ="(file) => {
            uploadFile(null, file);
          }"
          :accept   ="'.pfx,.pdf'"
          :loading  ="false"
          :clearable="true"
        >
          <template v-slot:append>
            <q-icon
              v-if ="true"
              name ="attachment"
              color="primary"
            />
            <q-btn flat round dense
              v-if    ="true"
              color   ="red"
              icon    ="delete"
              @click  ="removeFile(null)"
              :loading="false"
            />
            <q-btn flat round dense
              v-if    ="true"
              color   ="blue"
              icon    ="cloud_download"
              @click  ="downloadFile({ id: 1, name: 'file.xml' })"
            />
          </template>
        </q-file>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input stack-label lazy-rules
          v-model="item.codSimpNacional"
          type   ="text"
          :label ="$t('Código do Simples Nacional')"
          :rules ="[isInvalid('code')]"
        />
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input stack-label lazy-rules
          v-model="item.senhaPrefeitura"
          type   ="text"
          :label ="$t('Senha Prefeitura')"
          :rules ="[isInvalid('password')]"
        />
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input stack-label lazy-rules
          v-model="item.senhaDaSefaz"
          type   ="text"
          :label ="$t('Senha da Sefaz')"
          :rules ="[isInvalid('password')]"
        />
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input stack-label lazy-rules
          v-model="item.senhaCertDigit"
          type   ="text"
          :label ="$t('Senha do Certificado Digital')"
          :rules ="[isInvalid('password')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules
          v-model="item.nomeContador"
          type   ="text"
          :label ="$t('Nome do Contador')"
          :rules ="[isInvalid('name')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-input stack-label lazy-rules unmasked-value
          v-model="item.phoneContador"
          type   ="text"
          :label ="$t('Telefone do Contador')"
          mask   ="(##) #####-####"
          :rules ="[isInvalid('phone')]"
        />
      </div>
    </div>

    <div class="row justify-between">
      <q-btn
        :loading="saving"
        icon    ="cancel"
        type    ="submit"
        :label  ="$t('Recusar')"
        size    ="md"
        color   ="negative"
        class   ="q-mt-md"
      />
      <q-btn
        :loading="saving"
        icon    ="check"
        type    ="submit"
        :label  ="$t('Aprovar')"
        size    ="md"
        color   ="positive"
        class   ="q-mt-md"
      />
    </div>
  </q-form>
</template>

<script>
import CEPSearchInput from '@controleonline/quasar-common-ui/src/components/Common/CEPSearchInput.vue';

export default {
  props: {
    id: {
      required: false,
      default : null,
    },
  },

  components: {
    CEPSearchInput
  },

  data() {
    return {
        saving : false,
        loading: false,
        item   : {
          id             : this.id,
          empresa        : 'ABERTURA DE EMPRESA - CINTIA MACIEL - CINTIA MACIEL',
          cpfResponsavel : null,
          cnpj           : null,
          phone          : null,
          celphone       : null,
          cep            : null,
          logradouro     : null,
          bairro         : null,
          complemento    : null,
          cidade         : null,
          estado         : null,
          requerimento   : null,
          certDigital    : null,
          codSimpNacional: null,
          senhaPrefeitura: null,
          senhaDaSefaz   : null,
          senhaCertDigit : null,
          nomeContador   : null,
          phoneContador  : null,
        },
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

    onCEPFound(address) {
      this.item.estado      = address.state;
      this.item.cidade      = address.city;
      this.item.bairro      = address.district;
      this.item.cep         = address.postalCode;
      this.item.logradouro  = address.street;
      this.item.complemento = '';
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
