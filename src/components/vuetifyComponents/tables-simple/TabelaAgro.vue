<template>
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
            <tr v-for="item in informacoes" :key="item.id">
              <td>{{ item.descricao }}</td>
              <td>{{ item.gus }}</td>
              <td>{{ item.epa }}</td>
              <td>{{ item.gossSed }}</td>
              <td>{{ item.gossDis }}</td>
              <td>{{ item.endereco }}</td>
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
    informacaoes: [
      {
        id: '',
        descricao: '',
        gus: '',
        epa: '',
        gossSed: '',
        gossDis: '',
        endereco: '',
      },
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    obterInformacoes() {
      this.$http
        .get(
          'https://biometric-auth-api.herokuapp.com/v1/informacao',
          this.$store.getters.obterUsuario.id
        )
        .then((resp) => {
          this.informacaoes = resp.data.data;
        });
    },
  },
  beforeMount() {
    this.obterInformacoes(this.$store.getters.obterUsuario().id);
  },
};
</script>
