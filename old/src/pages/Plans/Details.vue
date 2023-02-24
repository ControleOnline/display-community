<template>
  <q-page padding>
    <q-card class="q-mb-sm">
      <q-card-section>
        <q-breadcrumbs>
          <q-breadcrumbs-el
            icon="home"
            :to ="{ name: 'DashboardIndex' }"
          />
          <q-breadcrumbs-el
            label="Planos"
            icon ="table_view"
            :to  ="{ name: 'PlansIndex' }"
          />
          <q-breadcrumbs-el
            label="Edição de plano"
          />
        </q-breadcrumbs>
      </q-card-section>
    </q-card>

    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-12 q-mb-md">
            <FormPlano
              :id="id"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import FormPlano      from '../../components/plans/FormPlano';

export default {
  components: {
    FormPlano
  },

  created() {
    if (this.$route.params.id) {
      this.id = decodeURIComponent(this.$route.params.id);
    }
  },

  data () {
    return {
      id: null,
    }
  },
}
</script>
