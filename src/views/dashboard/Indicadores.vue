<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="1"></v-col>
      <v-col cols="12" lg="10">
        <BaseCard heading="Indicadores">
          <TabelaAgro></TabelaAgro> </BaseCard
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Indicadores',
  components: {
    TabelaAgro: () =>
      import(
        '@/components/vuetifyComponents/tables-simple/TabelaAgro'
      ),
  },
};
</script>
