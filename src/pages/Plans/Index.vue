<template>
  <q-page padding>
    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-4 q-mb-md text-h6 text-left">
            {{ $t('Planos') }}
          </div>
          <div class="col-8 q-mb-md">
            <div class="row justify-end">
              <q-btn
                :label ="$t('Novo plano')"
                icon   ="add"
                size   ="md"
                color  ="primary"
                class  ="q-ml-sm"
                :to    ="{
                  name: 'PlansCreate'
                }"
              />
            </div>
          </div>
        </div>
      </q-card-section>

      <q-tabs
        align  ="justify"
        v-model="currentTab"
        class  ="bg-white text-primary"
      >
        <q-tab
          name  ="mei_servicos"
          :label="$t('MEI Serviços')"
        />
        <q-tab
          name  ="mei_servicos_comercio"
          :label="$t('MEI Serviços e Comercio')"
        />
        <q-tab
          name  ="simples_servicos"
          :label="$t('Simples Serviços')"
        />
        <q-tab
          name  ="simples_servicos_comercio"
          :label="$t('Simples Serviços e Comércio')"
        />
        <q-tab
          name  ="lucro_presumido"
          :label="$t('Lucro Presumido Serviços')"
        />
        <q-tab
          name  ="outros"
          :label="$t('Outros')"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="currentTab"
      >
        <q-tab-panel name="mei_servicos">
          <PlanoTabela
            tipo="mei_servicos"
          />
        </q-tab-panel>

        <q-tab-panel name="mei_servicos_comercio">
          <PlanoTabela
            tipo="mei_servicos_comercio"
          />
        </q-tab-panel>

        <q-tab-panel name="simples_servicos">
          <PlanoTabela
            tipo="simples_servicos"
          />
        </q-tab-panel>

        <q-tab-panel name="simples_servicos_comercio">
          <PlanoTabela
            tipo="simples_servicos_comercio"
          />
        </q-tab-panel>

        <q-tab-panel name="lucro_presumido">
          <PlanoTabela
            tipo="lucro_presumido"
          />
        </q-tab-panel>

        <q-tab-panel name="outros">
          <PlanoTabela
            tipo="outros"
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import PlanoTabela from '../../components/plans/PlanoTabela';

export default {
  name      : 'PlansIndex',

  components: {
    PlanoTabela,
  },

  computed: {
    user() {
      return this.$store.getters['auth/user'] || {};
    },
  },

  data () {
    return {
      currentTab: 'mei_servicos',
    }
  },

  methods: {

  },
}
</script>
