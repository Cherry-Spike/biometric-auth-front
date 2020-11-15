<template>
  <div>
    <div>
        <v-row>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="teal fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 teal--text text--darken-2">
                            <h5 class="text-truncate text-uppercase">Projetos</h5>
                            <h1>53</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 teal--text text--accent-4">
                            <h5 class="text-truncate text-uppercase">Gastos</h5>
                            <h1 >23%</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="success fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 teal--text text--accent-3">
                            <h5 class="text-truncate text-uppercase">Completo</h5>
                            <h1>213</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card height="170" scrollable elevation="4" class="overflow-y-auto">
                    <v-card-text>
                        <p>O nível de agrotóxicos presente nos alimentos tem preocupado cada vez mais a sociedade e as organizações que se posicionam contra o uso
                          desses defensivos agrícolas. A Anvisa, por meio do Programa de Análise de Resíduos de Agrotóxicos em Alimentos (PARA), divulgou uma pesquisa,
                          feita entre os anos de 2013 e 2015, que avaliou mais de 12 mil amostras de alimentos.
                          O risco apresentado pela pesquisa refere-se às intoxicações que podem ocorrer dentro de um período de 24 horas após o consumo do alimento.
                          A escolha dos alimentos para a pesquisa foi realizada segundo a representatividade deles na alimentação dos brasileiros.
                          Veja a seguir a lista de alimentos com maior potencial de risco devido ao uso de agrotóxicos:
                          - Laranja: de 744 amostras, 90 apresentavam potencial de risco agudo.
                          - Abacaxi: de 240 amostras, 12 apresentavam potencial de risco agudo.
                          - Couve: de 228 amostras, 6 apresentavam potencial de risco agudo.
                          - Uva: de 224 amostras, 5 apresentavam potencial de risco agudo.
                          De acordo com o relatório, apesar da maioria das irregularidades apontadas não apontarem para danos à saúde do consumidor, de modo geral, mostra-se a
                          preocupação com a saúde do agricultor se por acaso ele o utilize os agrotóxicos sem seguir as recomendações corretas de uso.
                          Outro relatório divulgado também pela Anvisa, mas em 2010, mostrou os alimentos que apresentam maior concentração de agrotóxicos.
                          Foram utilizadas 2.488 amostras. O pimentão é o produto com maior concentração de agrotóxico, seguido pelo morango, uva e cenoura.
                        <p>Agrotóxicos no Brasil</p>
                        <p>
                          O Brasil é considerado uma das maiores potências no setor agropecuário do mundo. Paralelamente, o país também se encontra no topo quando
                          o assunto é comercialização de agrotóxicos. De acordo com a Revista Pesquisa Fapesp, a comercialização dos defensivos agrícolas no Brasil movimenta
                          cerca de US$ 10 bilhões por ano.
                          Houve também um expressivo aumento no uso entre os anos de 2010 e 2017. No ano de 2017, foram usados no Brasil cerca de 540 mil toneladas de agroquímicos,
                          aproximadamente 50% a mais que em 2010 segundo informações divulgadas pelo Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama).
                          Mas é válido ressaltar que apesar do grande comércio de agrotóxicos no país, o seu uso por hectare é baixo em relação a outros países,
                          sendo possível afimarque a produtividade do Brasil é elevada e o uso de agrotóxicos por área produzida torna-se baixo.
                          É possível dizer que o uso de agrotóxicos no Brasil está relacionado principalmente a fatores climáticos, 
                          visto que o país possui clima tropical em maior parte do seu território.Sendo assim, não há períodos de inverno (baixas temperaturas) em algumas regiões,
                          favorecendo o ciclo de pragas e doenças.</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="mx-auto text-center">
                    <v-card-title class="teal--text">
                        Projeção dos Gastos - 2021
                    </v-card-title>
                    <v-sparkline 
                        :value="sparklineData" 
                        padding="18"
                        label-size="4"
                        color="teal"
                        :gradient="['#64FFDA','#4DB6AC']" 
                        :line-width="2"
                        :stroke-linecap="'round'">
                    </v-sparkline>
                    <v-card-actions class="py-4 justify-center">
                        <v-btn color="teal darken-1 white--text">Report</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'TabelaIndicadores',

  data: () => ({
    sparklineData: [
      423,
      446,
      675,
      510,
      590,
      610,
      423,
      ],
    }),
};
</script>
