<template>
  <div class="row">
    <div class="col-12 q-mt-md">
      <q-table flat
        :data   ="items"
        :columns="settings.columns"
        row-key ="id"
        :loading="loading"
      >
        <template v-slot:top>
          <div class="col-xs-12 q-pa-md">
            <q-input stack-label
              label   ="Buscar por serviço"
              debounce="1000"
              v-model ="filters.servico"
              class   ="full-width"
            />
          </div>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="nome"  :props="props">{{ props.row.nome  }}</q-td>
            <q-td key="depto" :props="props">{{ props.row.depto }}</q-td>
            <q-td key="preco" :props="props">
              {{ props.row.preco | money }}
            </q-td>
            <q-td key="acoes" :props="props" auto-width>
              <div class="col q-gutter-xs items-center justify-center">
                <q-btn outline
                  color ="primary"
                  size  ="sm"
                  :label="$t('Editar')"
                  :to   ="{
                    name  : 'ServicosAdicionaisEdit',
                    params: {
                      id: props.row.id
                    }
                  }"
                />
                <q-btn
                  color ="red"
                  size  ="sm"
                  @click=""
                  :label="$t('Apagar')"
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
import { mapGetters }  from 'vuex';
import { formatMoney } from '@controleonline/quasar-common-ui/src/utils/formatter';

const SETTINGS = {
  columns       : [
    {
      name : 'nome',
      field: row => row.nome,
      align: 'left',
      label: 'Nome da Empresa'
    },
    {
      name : 'depto',
      field: row => row.depto,
      align: 'left',
      label: 'Departamento'
    },
    {
      name : 'preco',
      field: row => row.preco,
      align: 'left',
      label: 'Preço'
    },
    { name: 'acoes' },
  ],
};

Object.freeze(SETTINGS);

export default {
  data() {
    return {
      items   : [],
      settings: SETTINGS,
      saving  : false,
      loading : false,
      filters : {
        servico: ''
      }
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
    onRequest() {
      let params = {};
      let items  = [];

      items.push({
        id   : 1,
        nome : 'Consulta Presencial Posto Fiscal (SP)',
        depto: 'Outros',
        preco: 149,
      });

      items.push({
        id   : 2,
        nome : 'Consultoria Pessoa Física',
        depto: 'Outros',
        preco: 99,
      });

      items.push({
        id   : 3,
        nome : 'Calculo de Rescisão PF',
        depto: 'Outros',
        preco: 19.90,
      });

      items.push({
        id   : 4,
        nome : 'Criação de Currículo',
        depto: 'Outros',
        preco: 9.90,
      });

      items.push({
        id   : 5,
        nome : 'Consultoria Trabalhista',
        depto: 'Outros',
        preco: 100,
      });

      this.items = items;
    },
  },

  filters: {
    money(value) {
      return formatMoney(value, 'BRL', 'pt-br');
    }
  },
};
</script>
