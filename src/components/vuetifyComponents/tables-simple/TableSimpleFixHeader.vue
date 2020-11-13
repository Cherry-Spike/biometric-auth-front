<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleFixHeader -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class>
    <v-list-item-subtitle class="text-wrap">
      Informações dos usuários cadastrados:
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">Cargo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.cargo }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableSimpleFixHeader',

  data: () => ({
    desserts: [
      {
        name: 'Jhon Jones',
        cargo: 'Cargo1',
      },
      {
        name: 'Goku',
        cargo: 'Cargo1',
      },
      {
        name: 'Chuck Norris',
        cargo: 'BigBoss',
      },
      {
        name: 'Pioio',
        cargo: 'Cargo1',
      },
      {
        name: 'EverTown',
        cargo: 'Cargo1',
      },
      {
        name: 'Biden<Trump',
        cargo: 'Cargo1',
      },
      {
        name: 'Arnold Swharsjhda',
        cargo: 'Cargo1',
      },
      {
        name: 'Batma',
        cargo: 'Cargo1',
      },
      {
        name: 'Jailson',
        cargo: 'Cargo1',
      },
      {
        name: 'Gross',
        cargo: 'Cargo1',
      },
    ],
  }),
};
</script>
