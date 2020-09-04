<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 md6 sm8>
      <v-card v-for="(item, index) in projects" :key="index" outlined>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle v-if="item.subtitle">{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="item.media.length === 0" />
        <v-img v-if="item.media.length === 1" :src="item.media[0]" aspect-ratio="1" />
        <v-row v-if="item.media.length === 2" no-gutters>
          <v-col>
            <v-img :src="item.media[0]" aspect-ratio="0.5" />
          </v-col>
          <v-col>
            <v-img :src="item.media[1]" aspect-ratio="0.5" />
          </v-col>
        </v-row>
        <v-row v-if="item.media.length === 3" no-gutters>
          <v-col>
            <v-img :src="item.media[0]" aspect-ratio="0.5" />
          </v-col>
          <v-col>
            <v-img :src="item.media[1]" aspect-ratio="1" />
            <v-img :src="item.media[2]" aspect-ratio="1" />
          </v-col>
        </v-row>
        <v-row v-if="item.media.length >= 4" no-gutters>
          <v-col cols="9">
            <v-img :src="item.media[0]" aspect-ratio="1" @click="openGallery(index)" />
          </v-col>
          <v-col>
            <v-img :src="item.media[1]" aspect-ratio="1" />
            <v-img :src="item.media[2]" aspect-ratio="1" />
            <v-img v-if="item.media.length === 4" :src="item.media[3]" aspect-ratio="1" />
            <v-img v-else-if="item.media.length > 4" :src="item.media[3]" aspect-ratio="1">
              <v-overlay absolute>
                <h1>{{ `+${item.media.length - 4}` }}</h1>
              </v-overlay>
            </v-img>
          </v-col>
        </v-row>
        <v-card-text v-if="item.description">{{ item.description }}</v-card-text>
        <v-divider />
        <v-card-text class="overline ma-0 pt-0 pb-0">Technology used:</v-card-text>
        <v-chip-group class="tech-list">
          <v-chip v-for="(tech, techIndex) in item.techUsed" :key="techIndex" small>{{ tech }}</v-chip>
        </v-chip-group>
      </v-card>
      <v-overlay :value="galleryOverlay">
        <!-- Gallery -->
        <v-flex md12>
          <v-carousel height="500" :hide-delimiters="true">
            <v-carousel-item v-for="(media, mediaIndex) of selectedGallery" :key="mediaIndex" :src="media" />
          </v-carousel>
          <v-btn icon @click="closeGallery()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-flex>
      </v-overlay>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      galleryOverlay: false,
      selectedGallery: undefined,
      projects: [{
        key: 'watson-ai-project',
        title: 'Watson AI Project',
        subtitle: undefined,
        media: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/250/200/300', 'https://picsum.photos/id/100/200/300', 'https://picsum.photos/id/99/200/300', 'https://picsum.photos/id/99/200/300'],
        description: 'AI Project I made',
        techUsed: ['Vue.js', 'Nuxt.js', 'Node', 'Express.js', 'IBM Watson', 'Vuetify (Material)']
      }, {
        key: 'node-mapper-v2',
        title: 'Node Mapper v2',
        subtitle: 'Instant messaging real time conversation mapper',
        media: [],
        description: 'Replacement for current node mapper',
        techUsed: ['Node', 'Express.js', 'RabbitMQ']
      }]
    }
  },
  methods: {
    openGallery (projectIndex) {
      this.selectedGallery = this.projects[projectIndex].media
      this.galleryOverlay = true
    },
    closeGallery () {
      this.galleryOverlay = false
      this.selectedGallery = undefined
    }
  }
}
</script>

<style scoped>
  .tech-list:first-child {
    padding-left: 100px;
  }
</style>
