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
            <q-td key="name" :props="props">{{ props.row.name }}</q-td>
            <q-td auto-width>
              <q-btn outline
                color ="primary"
                :label="$t('Editar')"
                size  ="sm"
                :to   ="{
                  name  : 'PlansDetails',
                  params: {
                    id: props.row.id
                  }
                }"
              />
            </q-td>
            <q-td auto-width>
              <q-btn
                color   ="red"
                :label  ="$t('Apagar')"
                size    ="sm"
                @click  ="removeItem(props.row)"
                :disable="items.length == 1"
                :loading="props.row._bussy"
              />
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
      name : 'name',
      field: row => row.name,
      align: 'left',
      label: 'Nome'
    },
    {
      name : 'id',
      field: row => row.id,
    },
    { name: 'action' },
  ],
};

Object.freeze(SETTINGS);

export default {
  props: {
    tipo: {
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
        id    : 1,
        name  : 'Mensal',
        _bussy: false,
      });

      items.push({
        id    : 2,
        name  : 'Bronze',
        _bussy: false,
      });

      items.push({
        id    : 3,
        name  : 'Prata',
        _bussy: false,
      });

      this.items = items;
    },
  },
};
</script>
