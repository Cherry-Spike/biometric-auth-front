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
          <v-card-text class="d-flex justify-center flex-column">
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
              :type="ocultar ? 'text' : 'password'"
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
              class="text-capitalize mt-5 element-0 white--text font-weight-medium"
              Extra
              large
              Button
              color="green"
              @click="onSubmit"
              >Enviar</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        outlined
        top
        :color="color"
      >
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn :color="color" text v-bind="attrs" @click="snackbar = false">
            Fechar
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      loading: false,
      login: '',
      senha: '',
      arquivo: '',
      text: '',
      color: '',
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
        await this.$store
          .dispatch('login', formData)
          .then(() => {
            this.$router.push('/dashboard');
            this.color = 'success';
            this.text = 'Bem-vindo!';
          })
          .catch((err) => {
            this.color = 'warning';
            this.text = err.response.data.error.message
              ? err.response.data.error.message
              : err.response.data.message;
          });
      } finally {
        this.loading = false;
        if (this.text) {
          this.snackbar = true;
        }
      }
    },
  },
};
</script>
