<template>
  <q-form
    ref    ="myForm"
    @submit="onSubmit"
  >
    <div class="row q-col-gutter-xs q-pb-xs">
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules
          v-model="item.nome"
          type   ="text"
          class  ="q-mb-sm"
          :label ="$t('Nome')"
          :rules ="[isInvalid('email')]"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          prefix   ="R$"
          v-model  ="item.preco"
          type     ="text"
          :label   ="$t('Preço')"
          mask     ="#,##"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-select stack-label
          :label  ="$t('Tipo')"
          v-model ="item.tipo"
          :options="tipoContratos"
          class   ="full-width"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          v-model  ="item.maxSociosGratis"
          type     ="text"
          :label   ="$t('Máximo Sócios Grátis')"
          mask     ="#"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          v-model  ="item.maxFuncGratis"
          type     ="text"
          :label   ="$t('Máximo Funcionários Grátis')"
          mask     ="#"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          prefix   ="R$"
          v-model  ="item.maxFatGratis"
          type     ="text"
          :label   ="$t('Máximo Faturamento Grátis')"
          mask     ="#,##"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          prefix   ="R$"
          v-model  ="item.valorPorSocio"
          type     ="text"
          :label   ="$t('Valor por sócio')"
          mask     ="#,##"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          prefix   ="R$"
          v-model  ="item.valorPorFunc"
          type     ="text"
          :label   ="$t('Valor por funcionário')"
          mask     ="#,##"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          prefix   ="R$"
          v-model  ="item.valorDoIntFat"
          type     ="text"
          :label   ="$t('Valor do Intervalo de Faturamento')"
          mask     ="#,##"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-input stack-label lazy-rules reverse-fill-mask
          prefix   ="R$"
          v-model  ="item.valorporIntFat"
          type     ="text"
          :label   ="$t('Valor por Intervalo de Faturamento')"
          mask     ="#,##"
          fill-mask="0"
        />
      </div>
      <div class="col-xs-12 q-mb-sm">
        <div>
          {{ $t('Descrição') }}
        </div>
        <q-editor
          v-model   ="item.descricao"
          min-height="5rem"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-sm">
        <q-toggle
          v-model="item.contaAzul"
          :label ="$t('Conta Azul')"
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
  props: {
    id: {
      required: false,
      default : null
    },
  },

  data() {
    return {
      saving : false,
      loading: false,
      item   : {
        nome           : null,
        preco          : null,
        tipo           : null,
        maxSociosGratis: 0,
        maxFuncGratis  : 0,
        maxFatGratis   : 0,
        valorPorSocio  : 0,
        valorPorFunc   : 0,
        valorDoIntFat  : 0,
        valorporIntFat : 0,
        descricao      : '',
        contaAzul      : false,
      },
      tipoContratos: [
        {
          label: 'MEI Serviços',
          value: 'mei_servicos',
        },
        {
          label: 'MEI Serviços e Comercio',
          value: 'mei_servicos_comercio',
        },
        {
          label: 'Simples Serviços',
          value: 'simples_servicos',
        },
        {
          label: 'Simples Serviços e Comércio',
          value: 'simples_servicos_comercio',
        },
        {
          label: 'Lucro Presumido Serviços',
          value: 'lucro_presumido',
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
