<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="8">
        <BaseCard heading="Table Simple - Fixed header">
          <TableSimpleFixHeader></TableSimpleFixHeader> </BaseCard
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BasicDashboard',
  components: {
    TableSimpleFixHeader: () =>
      import(
        '@/components/vuetifyComponents/tables-simple/TableSimpleFixHeader'
      ),
  },
};
</script>
