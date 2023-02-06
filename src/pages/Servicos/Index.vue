<template>
  <q-page padding>
    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-4 q-mb-md text-h6 text-left">
            {{ $t('Serviços Adicionais') }}
          </div>
          <div class="col-8 q-mb-md">
            <div class="row justify-end">
              <q-btn
                :label ="$t('Novo serviço adicional')"
                icon   ="add"
                size   ="md"
                color  ="primary"
                class  ="q-ml-sm"
                :to    ="{
                  name: 'ServicosAdicionaisCreate'
                }"
              />
            </div>
          </div>
        </div>
      </q-card-section>

      <ServicosAdicionaisTabela />

    </q-card>
  </q-page>
</template>

<script>
import ServicosAdicionaisTabela from './../../components/servicos/ServicosAdicionaisTabela';

export default {
  components: {
    ServicosAdicionaisTabela,
  },

  computed: {
    user() {
      return this.$store.getters['auth/user'] || {};
    },
  },

  data () {
    return {

    }
  },

  methods: {

  },
}
</script>
