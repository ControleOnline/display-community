<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <q-card style="min-height: 90vh;">
          <div class="q-pa-md text-h6">
            {{ $t('Checklists') }}
          </div>

          <q-tabs
            align  ="justify"
            v-model="currentTab"
            class  ="bg-white text-primary"
          >
            <q-tab
              name  ="aguardando_envio"
              :label="$t('Aguardando Envio de Informações')"
            />
            <q-tab
              name  ="aguardando_aprovacao"
              :label="$t('Aguardando Aprovação')"
            />
            <q-tab
              name  ="recusado"
              :label="$t('Recusado')"
            />
            <q-tab
              name  ="aprovado"
              :label="$t('Aprovado')"
            />
          </q-tabs>

          <q-separator />

          <q-tab-panels
            v-model="currentTab"
          >
            <q-tab-panel name="aguardando_envio">
              <ChecklistTabela
                status="aguardando_envio"
              />
            </q-tab-panel>

            <q-tab-panel name="aguardando_aprovacao">
              <ChecklistTabela
                status="aguardando_aprovacao"
              />
            </q-tab-panel>

            <q-tab-panel name="recusado">
              <ChecklistTabela
                status="recusado"
              />
            </q-tab-panel>

            <q-tab-panel name="aprovado">
              <ChecklistTabela
                status="aprovado"
              />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ChecklistTabela from '../../components/stepsregistration/ChecklistTabela';

export default {
  name      : 'StepsRegistration',

  components: {
    ChecklistTabela,
  },

  computed: {
    user() {
      return this.$store.getters['auth/user'] || {};
    },
  },

  data () {
    return {
      currentTab: 'aguardando_envio',
    }
  },

  methods: {

  },
}
</script>
