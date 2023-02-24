<template>
  <q-page padding>
    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-12 q-mb-md text-h6 text-left">
            {{$t('Novo serviço adicional')}}
          </div>
          <div class="col-12 q-mb-md">
            <FormServicoAdicional />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters }       from 'vuex';
import FormServicoAdicional from './../../components/servicos/FormServicoAdicional';

export default {
  components: {
    FormServicoAdicional
  },

  data () {
    return {
    }
  },
}
</script>
