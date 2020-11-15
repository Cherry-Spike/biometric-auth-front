<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="2"></v-col>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text class="green">
            <h3 class="title white--text font-weight-regular">
              Registro de Usuário
            </h3>
            <h6 class="white--text subtitle-2 font-weight-light">
              Por favor preencha os campos abaixo:
            </h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="nome"
                label="Nome"
                filled
                :rules="[rules.required]"
                background-color="transparent"
              ></v-text-field>
              <v-text-field
                type="Sobrenome"
                v-model="sobrenome"
                label="Sobrenome"
                filled
                :rules="[rules.required]"
                background-color="transparent"
              ></v-text-field>
              <div class="mt-3">
                <v-select
                  :items="cargosArray"
                  filled
                  :rules="[rules.required]"
                  label="Selecionar o Cargo"
                  background-color="transparent"
                  :value="cargos.id"
                ></v-select>
              </div>
              <v-text-field
                type="Login"
                v-model="login"
                label="Login"
                filled
                :rules="[rules.required]"
                background-color="transparent"
              ></v-text-field>
              <v-text-field
                v-model="senha"
                filled
                background-color="transparent"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'Senha'"
                name="input-10-1"
                label="Senha"
                hint="Pelo menos 8 caracteres"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-file-input class="mt-8"
              outlined
              v-model="arquivo"
              show-size
              accept="image/png, image/jpeg, image/jpg"
              label="Inserir impressão digital"
              :rules="[rules.required]"
            ></v-file-input>
              <v-btn
                class="white--text text-capitalize mt-5 element-0"
                color="teal darken-1"
                :disabled="!valid"
                @click="validate"
                >Enviar</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Registro',
  data: () => ({
    nome: '',
    senha: '',
    disableinput: '',
    checkbox1: '',
    checkbox2: '',
    checkbox3: '',
    show1: false,
    valid: true,
    rules: {
      required: (value) => !!value || 'Preencha o campo.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
    },
    cargos: [
      {
        id: 0,
        descricao: '',
        nivel: { id: 0, descricao: '' },
      },
    ],
    cargosArray: [''],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    obterCargos() {
      this.$http
        .get('https://biometric-auth-api.herokuapp.com/v1/cargos')
        .then((resp) => {
          this.cargosArray = resp.data.data.map((x) => x.descricao);
          this.cargos = resp.data.data;
        });
    },
  },
  beforeMount() {
    this.obterCargos();
  },
};
</script>