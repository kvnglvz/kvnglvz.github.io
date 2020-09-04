<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 md6 sm8>
      <v-card v-for="item in projects" :key="item.key" outlined>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle v-if="item.subtitle">{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="item.images.length === 0" />
        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194" />
        <v-card-text v-if="item.description">{{ item.description }}</v-card-text>
        <v-divider v-if="item.images.length === 0" />
        <v-chip-group class="pl-2">
          <v-chip v-for="tech in item.techUsed" :key="tech" small>{{ tech }}</v-chip>
        </v-chip-group>
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
        key: 'watson-ai-project',
        title: 'Watson AI Project',
        subtitle: undefined,
        images: [],
        description: 'AI Project I made',
        techUsed: ['Vue.js', 'Nuxt.js', 'Node', 'Express.js', 'IBM Watson', 'Vuetify (Material)']
      }, {
        key: 'node-mapper-v2',
        title: 'Node Mapper v2',
        subtitle: 'Instant messaging real time conversation mapper',
        images: [],
        description: 'Replacement for current node mapper',
        techUsed: ['Node', 'Express.js', 'RabbitMQ']
      }]
    }
  }
}
</script>
