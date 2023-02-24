<template>
  <q-form ref="myForm" @submit="onSubmit" class="q-mt-md">
    <div class="row q-col-gutter-xs q-pb-xs">
      <div class="q-pa-md text-h6">
        {{ $t('Parte 1') }}
      </div>
      <div class="col-xs-12 q-mb-sm">
        <q-editor v-model="item.parte1" min-height="5rem" />
      </div>
      <div class="q-pa-md text-h6">
        {{ $t('Parte 2') }}
      </div>
      <div class="col-xs-12 q-mb-sm">
        <q-editor v-model="item.parte2" min-height="5rem" />
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
export default {
  data() {
    return {
      item  : {
        parte1: '',
        parte2: '',
      },
      saving: false,
    };
  },

  methods : {
    onSubmit () {
      this.$refs.myForm.validate()
        .then(success => {
          if (success) {
            let payload = {};

            this.$emit('save', payload);
          }
      })
    },

    reset() {
      this.saving = false;
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
