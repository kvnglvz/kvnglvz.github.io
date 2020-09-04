<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 md6 sm8>
      <v-card outlined>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>IBM Watson + Nuxt.js</v-list-item-title>
            <v-list-item-subtitle>A project for something ... </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194" />
        <v-card-text>Hi there</v-card-text>
        <v-card-text>
          <v-chip small>Vue.js</v-chip>
          <v-chip small>Nuxt.js</v-chip>
          <v-chip small>IBM Watson</v-chip>
        </v-card-text>
      </v-card>
      <v-card outlined>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>IBM Watson + Nuxt.js</v-list-item-title>
            <!-- <v-list-item-subtitle>A project for something ... </v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194" />
        <v-card-text>Hi there</v-card-text>
        <v-card-text>
          <v-chip small>Vue.js</v-chip>
          <v-chip small>Nuxt.js</v-chip>
          <v-chip small>IBM Watson</v-chip>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      projects: [{
      }]
    }
  }
}
</script>
