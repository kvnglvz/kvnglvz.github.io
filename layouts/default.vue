<template>
  <v-app dark>
    <v-app-bar :clipped-left="true" fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      title: 'Kevin Galvez | A developer from the highlands'
    }
  }
}
</script>
