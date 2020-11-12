<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="2"></v-col>
      <v-col cols="12" lg="8">
        <BaseCard heading="Usuários Cadastrados">
          <TableSimpleFixHeader></TableSimpleFixHeader> </BaseCard
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UsuariosCadastrados',
  components: {
    TableSimpleFixHeader: () =>
      import(
        '@/components/vuetifyComponents/tables-simple/TableSimpleFixHeader'
      ),
  },
};
</script>
