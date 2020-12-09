<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  created () {
    document.querySelector('body').style.backgroundColor = this.$vuetify.theme.backgroundColor;
  }
};
</script>