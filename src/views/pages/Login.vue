<template>
  <v-container fluid class="down-top-padding d-flex mt-16">
    <v-row class="justify-center">
      <v-col cols="12" lg="4" sm="6">
        <v-card>
          <v-card-text>
            <h1
              class="display-1 blue-grey--text text--darken-2 font-weight-regular text-center"
            >
              Login
            </h1>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field
              v-model="login"
              label="Usuário"
              filled
              background-color="transparent"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="senha"
              filled
              background-color="transparent"
              :append-icon="ocultar ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="ocultar ? 'text' : 'senha'"
              name="input-10-1"
              label="Senha"
              hint="Mínimo 8 caracteres"
              counter
              @click:append="ocultar = !ocultar"
            ></v-text-field>
            <v-file-input
              v-model="arquivo"
              show-size
              accept="image/png, image/jpeg, image/jpg"
              label="Impressão Digital"
              :rules="[rules.required]"
            ></v-file-input>

            <v-btn
              :loading="loading"
              :disabled="loading"
              class="text-capitalize mt-5 element-0 align-self-center white--text"
              color="green"
              @click="onSubmit"
              >Enviar</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      login: '',
      senha: '',
      arquivo: '',
      message: '',
      ocultar: false,
      token: null,
      rules: {
        required: (v) => !!v || 'Obrigatório.',
        min: (v) => v.length >= 8 || 'Mínimo 8 caracteres.',
      },
    };
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      const formData = new FormData();
      formData.append('arquivo', this.arquivo);
      formData.append('login', this.login);
      formData.append('senha', this.senha);
      try {
        await axios
          .post('http://localhost:8081/v1/autenticacao', formData, {
            headers: {
              'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            },
          })
          .then((response) => {
            this.token = response.data.conteudo;
            console.log(this.token);
          })
          .catch((error) => {
            console.log(error.toJSON());
          });
      } catch (error) {
        console.log(error.toJSON());
      }
      this.loading = false;
    },
  },
};
</script>
