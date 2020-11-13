<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleFixHeader -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class>
    <v-list-item-subtitle class="text-wrap">
      Informações sobre os agrotóxicos utilizados:
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nome do composto</th>
              <th class="text-left">Risco</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.nome">
              <td>{{ item.nome }}</td>
              <td>{{ item.risco }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabelaAgro',

  data: () => ({
    desserts: [
      {
        nome: 'Metconazol',
        risco: 'Alto',
      },
      {
        nome: 'Fluazinam',
        risco: 'Baixo',
      },
      {
        nome: 'Imibenconazol',
        risco: 'Medio',
      },
    ],
  }),
};
</script>
