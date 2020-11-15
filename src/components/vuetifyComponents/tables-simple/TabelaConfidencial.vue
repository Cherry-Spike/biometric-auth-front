<template>
  <div class>
    <v-list-item-subtitle class="text-wrap">
      Tarefas em Andamento 
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-simple-table fixed-header height="450px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Descrição</th>
              <th class="text-left">Data Inicio</th>
              <th class="text-left">Aprovação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.nome">
              <td>{{ item.nome }}</td>
              <td>{{ item.data }}</td>
              <td>{{ item.aprovacao }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabelaConfidencial',

  data: () => ({
    desserts: [
      {
        nome: 'Inquérito instaurados aos donos das propriedades em Minas sobre o uso dos agrotoxicos',
        data: '20/10',
        aprovacao: 'Pendente',
      },
      {
        nome: 'Multas aplicadas as propriedades e/ou acordos feitos',
        data: '06/07',
        aprovacao: 'Aprovado',
      },
      {
        nome: 'Aprovação da nova pec/NF5646',
        data: '14/04',
        aprovacao: 'Pendente',
      },
      {
        nome: 'Nova formulação de agrotoxicos para uso na agropecuaria',
        data: '23/09',
        aprovacao: 'Aprovado',
      },
    ],
  }),
};
</script>
