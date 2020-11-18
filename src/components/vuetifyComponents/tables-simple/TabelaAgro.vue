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
              <th class="text-left">Endereço</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in informacaoes" :key="item.id">
              <td>{{ item.descricao }}</td>
              <td>{{ item.riscoSubterraneoGus }}</td>
              <td>{{ item.riscoSubterraneoEpa }}</td>
              <td>{{ item.riscoSuperficialGossSedimental }}</td>
              <td>{{ item.riscoSuperficialGossDissolvido }}</td>
              <td>{{ item.endereco }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TabelaAgro',
  data() {
    return {
      informacaoes: [
        {
          id: 1,
          descricao: '',
          nivel: {
            id: 1,
            descricao: '1',
          },
          riscoSubterraneoGus: '',
          riscoSubterraneoEpa: '',
          riscoSuperficialGossSedimental: '',
          riscoSuperficialGossDissolvido: '',
          endereco: '',
        },
      ],
      usuarioId: 0,
    };
  },
  computed: {
    ...mapState(['usuario']),
  },
  beforeMount() {
    let username = this.usuario.login;
    this.obterUsuarioPorLogin(username);
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    obterInformacoes(usuarioId) {
      this.$http
        .get(
          'https://biometric-auth-api.herokuapp.com/v1/informacao/' + usuarioId
        )
        .then((resp) => {
          this.informacaoes = resp.data.data;
        });
    },
    obterUsuarioPorLogin(username) {
      this.$http
        .get('https://biometric-auth-api.herokuapp.com/v1/usuario/{login}', {
          params: { login: username },
        })
        .then((resp) => {
          this.usuarioId = resp.data.data.id;
          this.obterInformacoes(resp.data.data.id);
        });
    },
  },
};
</script>
