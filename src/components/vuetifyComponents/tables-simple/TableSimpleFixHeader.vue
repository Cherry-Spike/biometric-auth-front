<template>
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
              <th class="text-left">Nivel</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in usuarios" :key="item.nome">
              <td>{{ item.nome }}</td>
              <td>{{ item.cargoDescricao }}</td>
              <td>{{ item.nivelDescricao }}</td>
              <td class="text-right">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-2" icon v-bind="attrs" v-on="on"
                      ><v-icon> mdi-pencil </v-icon>
                    </v-btn>
                  </template>
                  <span>Editar</span>
                </v-tooltip>
                <v-tooltip bottom color="red">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      @click="deletar(item.id)"
                      class="mx=2"
                      icon
                      v-bind="attrs"
                      v-on="on"
                      ><v-icon color="red"> mdi-delete </v-icon>
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
    usuarios: [
      {
        cargoDescricao: '',
        cargoId: 0,
        id: 0,
        login: '',
        nivelDescricao: '',
        nivelId: 0,
        nome: '',
        sobrenome: '',
      },
    ],
  }),
  methods: {
    obterUsuarios() {
      this.$http
        .get('https://biometric-auth-api.herokuapp.com/v1/usuario')
        .then((resp) => {
          this.usuarios = resp.data.data;
        });
    },
    deletar(id) {
      this.$http
        .delete('https://biometric-auth-api.herokuapp.com/v1/usuario/', id)
        .then(() => {});
    },
  },
  beforeMount() {
    this.obterUsuarios();
  },
};
</script>
