<template>
  <q-form
    ref    ="myForm"
    @submit="onSubmit"
  >
    <div class="row q-col-gutter-xs q-pb-xs">
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules
          v-model     ="item.email1"
          type        ="text"
          class       ="q-mb-sm"
          :label      ="$t('Email 1')"
          placeholder ="Digite o email"
          :rules      ="[isInvalid('email')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules
          v-model     ="item.email2"
          type        ="text"
          class       ="q-mb-sm"
          :label      ="$t('Email 2')"
          placeholder ="Digite o email"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label unmasked-value
          v-model    ="item.phone1"
          type       ="text"
          class      ="q-mb-sm"
          :label     ="$t('Telefone 1')"
          mask       ="(##) ####-####"
          placeholder="Digite seu telefone"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label unmasked-value
          v-model    ="item.phone2"
          type       ="text"
          class      ="q-mb-sm"
          :label     ="$t('Telefone 2')"
          mask       ="(##) ####-####"
          placeholder="Digite seu telefone"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label unmasked-value
          v-model    ="item.celphone1"
          type       ="text"
          class      ="q-mb-sm"
          :label     ="$t('Celular 1')"
          mask       ="(##) #####-####"
          placeholder="Digite seu telefone celular"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label unmasked-value
          v-model    ="item.celphone2"
          type       ="text"
          class      ="q-mb-sm"
          :label     ="$t('Celular 2')"
          mask       ="(##) #####-####"
          placeholder="Digite seu telefone celular"
        />
      </div>
      <div class="col-xs-12">
        <q-input stack-label lazy-rules
          v-model    ="item.address"
          type       ="text"
          :label     ="$t('Endereço')"
          class      ="q-mb-sm"
        />
      </div>
    </div>

    <div class="row justify-end">
      <q-btn
        :loading="saving"
        icon    ="save"
        type    ="submit"
        label   ="Salvar"
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
  data() {
    return {
        saving : false,
        loading: false,
        item   : {
          email1   : '',
          email2   : '',
          phone1   : '',
          phone2   : '',
          celphone1: '',
          celphone2: '',
          address  : '',
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
