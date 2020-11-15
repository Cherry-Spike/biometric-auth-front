<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleFixHeader -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class>
    <v-list-item-subtitle class="text-wrap">
      Informações sobre os agrotóxicos utilizados:
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-simple-table fixed-header height="450px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Principio Ativo</th>
              <th class="text-left">GUS</th>
              <th class="text-left">EPA</th>
              <th class="text-left">GOSS Sed.</th>
              <th class="text-left">GOSS Dis.</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.nome">
              <td>{{ item.nome }}</td>
              <td>{{ item.gus }}</td>
              <td>{{ item.epa }}</td>
              <td>{{ item.gossSed }}</td>
              <td>{{ item.gossDis }}</td>
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
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Fluazinam',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Imibenconazol',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
      {
        nome: 'Teste',
        gus: '-',
        epa: '-',
        gossSed: '-',
        gossDis: '-',
      },
    ],
  }),
};
</script>
