<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="2"></v-col>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text class="green darken-1">
            <h3
              class="title white--text font-weight-regular"
            >
              Registro de Usuário
            </h3>
            <h6 class="white--text subtitle-2 font-weight-light">
              Por favor preencha os campos abaixo:
            </h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field
              label="Nome"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              type="Sobrenome"
              v-model="emailtext"
              label="Sobrenome"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              v-model="password"
              filled
              background-color="transparent"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Senha"
              hint="Pelo menos 8 caracteres"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-textarea
              filled
              name="input-7-4"
              rows="3"
              label="Textarea"
              value
              background-color="transparent"
            ></v-textarea>
            <div class="mt-4">
              <v-select
                :items="items"
                filled
                label="Selecionar o Cargo"
                background-color="transparent"
              ></v-select>
            </div>
            <v-btn class="white--text text-capitalize mt-5 element-0" color="green"
              >Enviar</v-btn
            >
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
    dtext: '',
    emailtext: '',
    password: '',
    disableinput: '',
    checkbox1: '',
    checkbox2: '',
    checkbox3: '',
    show1: false,
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => "The email and password you entered don't match",
    },
    items: ['Cargo1', 'Cargo2', 'Cargo3'],
  }),
  components: {},
};
</script>
