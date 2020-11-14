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
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.cargo }}</td>
              <td class="text-right">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    class="mx-2"
                    icon
                    v-bind="attrs"
                    v-on="on"
                      ><v-icon>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                    </template>
                  <span>Editar</span>
                </v-tooltip>
                <v-tooltip bottom color="red">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    class="mx=2"
                    icon
                    v-bind="attrs"
                    v-on="on"
                      ><v-icon color="red">
                        mdi-delete
                      </v-icon>
                    </v-btn>
                    </template>
                  <span>Deletar</span>
                </v-tooltip>
              </td>
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
