<template>
  <div class="row">
    <div class="col-12 q-mt-md">
      <q-table flat
        :data   ="items"
        :columns="settings.columns"
        row-key ="id"
        :loading="loading"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="empresa"        :props="props">{{ props.row.empresa        }}</q-td>
            <q-td key="cliente"        :props="props">{{ props.row.cliente        }}</q-td>
            <q-td key="cpfResponsavel" :props="props">{{ props.row.cpfResponsavel }}</q-td>
            <q-td key="cnpj"           :props="props">{{ props.row.cnpj           }}</q-td>
            <q-td key="status"         :props="props">{{ props.row.status         }}</q-td>
            <q-td key="acoes"          :props="props">
              <div class="col q-gutter-xs items-center justify-center">
                <q-btn outline
                  :label="$t('Analisar')"
                  size  ="sm"
                  :to   ="{
                    name  : 'StepsRegistrationAnalysis',
                    params: {
                      id: 1616532664
                    }
                  }"
                />
                <q-btn outline
                  :label="$t('Histórico')"
                  size  ="sm"
                  :to   ="{
                    name  : 'StepsRegistrationHistory',
                    params: {
                      id: 34
                    }
                  }"
                />
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const SETTINGS = {
  columns       : [
    {
      name : 'empresa',
      field: row => row.empresa,
      align: 'left',
      label: 'Empresa'
    },
    {
      name : 'cliente',
      field: row => row.cliente,
      align: 'left',
      label: 'Cliente'
    },
    {
      name : 'cpfResponsavel',
      field: row => row.cpfResponsavel,
      align: 'left',
      label: 'CPF Responsável'
    },
    {
      name : 'cnpj',
      field: row => row.cnpj,
      align: 'left',
      label: 'CNPJ'
    },
    {
      name : 'status',
      field: row => row.status,
      align: 'left',
      label: 'Status'
    },
    { name: 'acoes'  },
  ],
};

Object.freeze(SETTINGS);

export default {
  props: {
    status: {
      type    : String,
      required: true,
    },
  },

  data() {
    return {
      items   : [],
      settings: SETTINGS,
      saving  : false,
      loading : false,
    };
  },

  created() {
    this.onRequest();
  },

  computed: {
    ...mapGetters({
      myCompany: 'people/currentCompany',
    }),

    user() {
      return this.$store.getters['auth/user'];
    },
  },

  watch: {
    myCompany(company) {
      this.onRequest();
    },
  },

  methods: {
    onSave(data) {
      this.onRequest();

      this.$q.notify({
        message : 'Os dados foram salvos com sucesso',
        position: 'bottom',
        type    : 'positive',
      });
    },

    removeItem(item) {
      if (window.confirm('Tem certeza que deseja eliminar este registro?')) {
        item._bussy = true;
      }
    },

    cleanItem(id) {
      let item   = this.items.find(obj => obj['id'] == id);
      let indx   = this.items.indexOf(item);
      this.items = [...this.items.slice(0, indx), ...this.items.slice(indx + 1)];
    },

    onRequest() {
      let params = {};
      let items  = [];

      items.push({
        id            : 1,
        empresa       : 'ABERTURA DE EMPRESA - CINTIA MACIEL',
        cliente       : 'CINTIA MACIEL',
        cpfResponsavel: '000.000.000-00',
        cnpj          : '00.000.000/0000-00',
        status        : 'Aguardando envio das informações complementares',
        _bussy        : false,
      });

      items.push({
        id            : 2,
        empresa       : 'ABERTURA DE EMPRESA - Lara Cruvinel',
        cliente       : 'Lara Cruvinel',
        cpfResponsavel: '000.000.000-00',
        cnpj          : '00.000.000/0000-00',
        status        : 'Aguardando envio das informações complementares',
        _bussy        : false,
      });

      items.push({
        id            : 3,
        empresa       : 'ABERTURA DE EMPRESA - Damião Jacome Silva',
        cliente       : 'Damião Jacome Silva',
        cpfResponsavel: '000.000.000-00',
        cnpj          : '00.000.000/0000-00',
        status        : 'Aguardando envio das informações complementares',
        _bussy        : false,
      });

      items.push({
        id            : 4,
        empresa       : 'ABERTURA DE EMPRESA - Damião Jacome Silva',
        cliente       : 'Damião Jacome Silva',
        cpfResponsavel: '000.000.000-00',
        cnpj          : '00.000.000/0000-00',
        status        : 'Aguardando envio das informações complementares',
        _bussy        : false,
      });

      items.push({
        id            : 5,
        empresa       : 'ABERTURA DE EMPRESA - Damião Jacome Silva',
        cliente       : 'Damião Jacome Silva',
        cpfResponsavel: '000.000.000-00',
        cnpj          : '00.000.000/0000-00',
        status        : 'Aguardando envio das informações complementares',
        _bussy        : false,
      });

      this.items = items;
    },
  },
};
</script>
