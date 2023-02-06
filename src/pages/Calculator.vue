<template>
  <q-page class="bg-page" padding>

    <div class="row text-center text-white">
      <div class="col-12 text-h5 q-pb-md q-pt-md">
        VEM COM A GENTE
      </div>
      <div class="col-12 text-h4 text-weight-bolder q-pb-md">
        QUER REDUÇÃO DE CUSTO E RENTABILIDADE?
      </div>
      <div class="col-12 text-h6 text-weight-bold q-pb-md">
        Simule aqui quanto ficará para cuidarmos da sua contabilidade
      </div>
    </div>

    <div class="q-pa-md row justify-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="card-header">MEI SERVIÇOS</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <ul class="q-pl-md">
            <li style="text-align: left;">1 Funcionário</li>
            <li style="text-align: left;">Faturamento até R$ 6.750/mês</li>
            <li style="text-align: left;">Sistema Financeiro: Básico</li>
            <li style="text-align: left;">Suporte MEI</li>
          </ul>
        </q-card-section>
        <q-card-actions align="around">
          <q-btn unelevated rounded
            class="full-width text-purple"
            color="accent"
          >
            Contratar
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="card-header">MEI SERVIÇOS E COMÉRCIO</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <ul class="q-pl-md">
            <li style="text-align: left;">1 Funcionário</li>
            <li style="text-align: left;">Faturamento até R$ 6.750/mês</li>
            <li style="text-align: left;">Sistema Financeiro: Básico</li>
            <li style="text-align: left;">Suporte MEI</li>
          </ul>
        </q-card-section>
        <q-card-actions align="around">
          <q-btn unelevated rounded
            class="full-width text-purple"
            color="accent"
          >
            Contratar
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="card-header">SIMPLES SERVIÇOS</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="q-gutter-md q-mt-md">
            <q-select outlined dense emit-value map-options
              v-model ="products[0].plan"
              :options="options"
              :rules  ="[val => val !== null || 'Selecione um tipo']"
              @input  ="calculate(0)"
            />
            <q-input outlined dense reverse-fill-mask
              v-model    ="products[0].socios"
              placeholder="Nº Socios"
              mask       ="#"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(0)"
            />
            <q-input outlined dense reverse-fill-mask
              v-model    ="products[0].funcionarios"
              placeholder="Nº Funcionários"
              mask       ="#"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(0)"
            />
            <q-input outlined dense reverse-fill-mask
              prefix     ="R$"
              v-model    ="products[0].faturamento"
              placeholder="Faturamento"
              mask       ="#,##"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(0)"
            />
            <div class="text-center text-h4">
              {{ products[0].price }}
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="around">
          <q-btn unelevated rounded
            class="full-width text-purple"
            color="accent"
          >
            Contratar
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="card-header">SIMPLES SERVIÇOS E COMÉRCIO</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="q-gutter-md q-mt-md">
            <q-select outlined dense emit-value map-options
              v-model ="products[1].plan"
              :options="options"
              :rules  ="[val => val !== null || 'Selecione um tipo']"
              @input  ="calculate(1)"
            />
            <q-input outlined dense reverse-fill-mask
              v-model    ="products[1].socios"
              placeholder="Nº Socios"
              mask       ="#"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(1)"
            />
            <q-input outlined dense reverse-fill-mask
              v-model    ="products[1].funcionarios"
              placeholder="Nº Funcionários"
              mask       ="#"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(1)"
            />
            <q-input outlined dense reverse-fill-mask
              prefix     ="R$"
              v-model    ="products[1].faturamento"
              placeholder="Faturamento"
              mask       ="#,##"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(1)"
            />
            <div class="text-center text-h4">
              {{ products[1].price }}
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="around">
          <q-btn unelevated rounded
            class="full-width text-purple"
            color="accent"
          >
            Contratar
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="card-header">LUCRO PRESUMIDO SERVIÇOS</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="q-gutter-md q-mt-md">
            <q-select outlined dense emit-value map-options
              v-model ="products[2].plan"
              :options="options"
              :rules  ="[val => val !== null || 'Selecione um tipo']"
              @input  ="calculate(2)"
            />
            <q-input outlined dense reverse-fill-mask
              v-model    ="products[2].socios"
              placeholder="Nº Socios"
              mask       ="#"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(2)"
            />
            <q-input outlined dense reverse-fill-mask
              v-model    ="products[2].funcionarios"
              placeholder="Nº Funcionários"
              mask       ="#"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(2)"
            />
            <q-input outlined dense reverse-fill-mask
              prefix     ="R$"
              v-model    ="products[2].faturamento"
              placeholder="Faturamento"
              mask       ="#,##"
              :rules     ="[val => val !== null || 'Informe um valor']"
              @input     ="calculate(2)"
            />
            <div class="text-center text-h4">
              {{ products[2].price }}
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="around">
          <q-btn unelevated rounded
            class="full-width text-purple"
            color="accent"
          >
            Contratar
          </q-btn>
        </q-card-actions>
      </q-card>

    </div>

  </q-page>
</template>

<script>
import { formatMoney } from '@controleonline/quasar-common-ui/src/utils/formatter';

const OPTIONS = [
  {
    label: 'Tipo de plano',
    value: null,
  },
  {
    label: 'Bronze',
    value: 'bronze',
  },
  {
    label: 'Prata',
    value: 'prata',
  },
  {
    label: 'Ouro',
    value: 'ouro',
  },
  {
    label: 'Mensal',
    value: 'mensal',
  },
];

const PLANS = {
  'simples_basico'  : {
    'bronze': 69.9,
  	'prata' : 114.9,
  	'ouro'  : 144.9,
  	'mensal': 89.9
  },
  'simples_comercio': {
    'bronze': 99.9,
  	'prata' : 149.9,
  	'ouro'  : 209.9,
  	'mensal': 119.9
  },
  'lucro_presumido' : {
    'bronze': 199.9,
  	'prata' : 244.9,
  	'ouro'  : 274.9,
  	'mensal': 209.9
  },
};

Object.freeze(OPTIONS);

export default {
  data() {
    return {
      products: [
        {
          plan        : OPTIONS[0],
          socios      : null,
          funcionarios: null,
          faturamento : null,
          price       : 'R$ 0'
        },
        {
          plan        : OPTIONS[0],
          socios      : null,
          funcionarios: null,
          faturamento : null,
          price       : 'R$ 0'
        },
        {
          plan        : OPTIONS[0],
          socios      : null,
          funcionarios: null,
          faturamento : null,
          price       : 'R$ 0'
        },
      ],
      options: OPTIONS
    };
  },

  methods: {
    calculate(index) {
      let total        = 0;
      let socios       = 0;
      let funcionarios = 0;
      let faturamento  = 0;

      if (this.products[index].socios !== null && this.products[index].socios.length) {
        socios = parseFloat(this.products[index].socios);
      }

      if (this.products[index].funcionarios !== null && this.products[index].funcionarios.length) {
        funcionarios = parseFloat(this.products[index].funcionarios);
      }

      if (this.products[index].faturamento !== null && this.products[index].faturamento.length) {
        faturamento = parseFloat(this.products[index].faturamento.replace(",", "."));
      }

      if (this.products[index].plan !== null) {
        switch(index) {
          case 0:
            total = PLANS['simples_basico'  ][this.products[index].plan];
          break;
          case 1:
            total = PLANS['simples_comercio'][this.products[index].plan];
          break;
          case 2:
            total = PLANS['lucro_presumido' ][this.products[index].plan];
          break;
        }

        // add socios

        if (socios > 2) {
          total = total + (socios * 28);
        }

        // add funcionarios

        total = total + (funcionarios * 28);

        // add faturamento

        if (faturamento > 30000) {
          total = total + ((Math.round((faturamento - 30000) / 5000)) * 20);
        }
      }

      if (total > 0) {
        this.products[index].price = formatMoney(total, 'BRL', 'pt-br');
      }
      else {
        this.products[index].price = 'R$ 0';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-page {
  background-color   : #e46a32;
  background         : url('~assets/calculator_bg.jpg');
  background-position: center center !important;
  background-repeat  : no-repeat !important;
  background-size    : cover !important;
  -webkit-transition : background opacity 3s ease-in-out;
  -moz-transition    : background opacity 3s ease-in-out;
  -o-transition      : background opacity 3s ease-in-out;
  transition         : background opacity 3s ease-in-out;
}

.my-card {
  width          : 100%;
  max-width      : 230px;
  display        : flex;
  flex-direction : column;
  justify-content: space-between;

  & li {
    font-size: 16px;
  }

  & .card-header {
    display        : flex;
    justify-content: center;
    align-content  : center;
    flex-direction : column;
    min-height     : 50px;
    text-align     : center;
    font-weight    : bold;
  }
}
</style>
