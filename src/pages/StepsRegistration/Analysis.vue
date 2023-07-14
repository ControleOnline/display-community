<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <q-card class="q-mb-sm">
          <q-card-section>
            <q-breadcrumbs>
              <q-breadcrumbs-el
                icon="home"
                :to ="{ name: 'DashboardIndex' }"
              />
              <q-breadcrumbs-el
                label="Checklists"
                icon ="list"
                :to  ="{ name: 'StepsRegistration' }"
              />
              <q-breadcrumbs-el
                label="Analise"
              />
            </q-breadcrumbs>
          </q-card-section>
        </q-card>

        <q-card style="min-height: 90vh;">
          <q-card-section>
            <FormAnalise
              :id="id"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import FormAnalise from '../../components/stepsregistration/FormAnalise';

export default {
  name      : 'StepsRegistrationAnalysis',

  components: {
    FormAnalise,
  },

  created() {
    if (this.$route.params.id) {
      this.id = decodeURIComponent(this.$route.params.id);
    }
  },

  computed: {
    user() {
      return this.$store.getters['auth/user'] || {};
    },
  },

  data () {
    return {
      id: null,
    }
  },

  methods: {

  },
}
</script>
