<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="1"></v-col>
      <v-col cols="12" lg="10">
        <BaseCard heading="Confidencial">
          <TabelaConfidencial></TabelaConfidencial> </BaseCard
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Confidencial',
  components: {
    TabelaConfidencial: () =>
      import(
        '@/components/vuetifyComponents/tables-simple/TabelaConfidencial'
      ),
  },
};
</script>
