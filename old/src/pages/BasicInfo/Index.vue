<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <q-card style="min-height: 90vh;">
          <div class="q-pa-md text-h6">
            {{ $t('Informações básicas') }}
          </div>

          <q-tabs
            align  ="justify"
            v-model="currentTab"
            class  ="bg-white text-primary"
          >
            <q-tab
              name  ="dados_principais"
              :label="$t('Dados principais')"
            />
            <q-tab
              name  ="contrato"
              :label="$t('Contrato')"
            />
          </q-tabs>

          <q-separator />

          <q-tab-panels
            v-model="currentTab"
          >
            <q-tab-panel name="dados_principais">
              <DadosPrincipais />
            </q-tab-panel>

            <q-tab-panel name="contrato">
              <Contrato />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import DadosPrincipais from '../../components/basicinfo/FormDadosPrincipais';
import Contrato        from '../../components/basicinfo/FormContrato';

export default {
  name      : 'BasicInfoIndex',

  components: {
    DadosPrincipais,
    Contrato,
  },

  computed: {
    user() {
      return this.$store.getters['auth/user'] || {};
    },
  },

  data () {
    return {
      currentTab: 'dados_principais',
    }
  },

  methods: {

  },
}
</script>
