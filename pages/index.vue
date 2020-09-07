<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 md6 sm8>
      <v-card class="mb-2" outlined width="530">
        <v-img src="/bg.jpg" class="align-end" contain>
          <v-avatar size="128" class="ml-4 profile">
            <v-img src="/profpic.jpg" />
          </v-avatar>
          <v-card-title>
            <h1>Hey there! I'm Kevin</h1>
          </v-card-title>
        </v-img>
        <v-card-text>
          I'm a programmer hailing from the city of pines located in the highlands of the Cordilleras. I make web and mobile experiences.
        </v-card-text>
      </v-card>
      <h3 class="ml-4">Works</h3>
      <v-divider class="mb-2" />
      <v-card v-for="(item, index) in projects" :key="index" outlined class="mb-2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle v-if="item.subtitle">{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="item.media.length === 0" />
        <v-img v-if="item.media.length === 1" :src="item.media[0]" aspect-ratio="1" @click="openGallery(index, 0)" />
        <v-row v-if="item.media.length === 2" no-gutters>
          <v-col>
            <v-img :src="item.media[0]" aspect-ratio="0.5" @click="openGallery(index, 0)" />
          </v-col>
          <v-col>
            <v-img :src="item.media[1]" aspect-ratio="0.5" @click="openGallery(index, 1)" />
          </v-col>
        </v-row>
        <v-row v-if="item.media.length === 3" no-gutters>
          <v-col>
            <v-img :src="item.media[0]" aspect-ratio="0.5" @click="openGallery(index, 0)" />
          </v-col>
          <v-col>
            <v-img :src="item.media[1]" aspect-ratio="1" @click="openGallery(index, 1)" />
            <v-img :src="item.media[2]" aspect-ratio="1" @click="openGallery(index, 2)" />
          </v-col>
        </v-row>
        <v-row v-if="item.media.length >= 4" no-gutters>
          <v-col cols="9">
            <v-img :src="item.media[0]" aspect-ratio="1" @click="openGallery(index, 0)" />
          </v-col>
          <v-col>
            <v-img :src="item.media[1]" aspect-ratio="1" @click="openGallery(index, 1)" />
            <v-img :src="item.media[2]" aspect-ratio="1" @click="openGallery(index, 2)" />
            <v-img v-if="item.media.length === 4" :src="item.media[3]" aspect-ratio="1" @click="openGallery(index, 3)" />
            <v-img v-else-if="item.media.length > 4" :src="item.media[3]" aspect-ratio="1" @click="openGallery(index, 3)">
              <v-overlay absolute>
                <h1>{{ `+${item.media.length - 4}` }}</h1>
              </v-overlay>
            </v-img>
          </v-col>
        </v-row>
        <v-card-text v-if="item.description">{{ item.description }}</v-card-text>
        <v-divider />
        <v-card-text class="overline ma-0 pt-0 pb-0">Technology used:</v-card-text>
        <v-chip-group>
          <v-chip v-for="(tech, techIndex) in item.techUsed" :key="techIndex" small :class="[techIndex === 0 ? 'ml-4' : undefined]">{{ tech }}</v-chip>
        </v-chip-group>
      </v-card>
      <v-dialog
        :value="galleryOverlay"
        content-class="elevation-0"
        @click:outside="closeGallery()"
      >
        <v-carousel v-model="galleryIndex" :hide-delimiters="true" :show-arrows="selectedGallery && selectedGallery.length > 1">
          <v-carousel-item v-for="(media, mediaIndex) of selectedGallery" :key="mediaIndex">
            <v-img :src="media" height="100%" contain>
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-carousel-item>
          <v-btn absolute top right @click="closeGallery()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-carousel>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      galleryOverlay: false,
      galleryIndex: undefined,
      selectedGallery: undefined,
      projects: [{
        title: 'Watson AI Project',
        subtitle: undefined,
        media: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/250/200/300', 'https://picsum.photos/id/100/200/300', 'https://picsum.photos/id/99/1024/768', 'https://picsum.photos/id/33/200/300'],
        description: 'AI Project I made',
        techUsed: ['Vue.js', 'Nuxt.js', 'Node', 'Express.js', 'IBM Watson', 'Vuetify (Material)']
      }, {
        title: 'Node Mapper v2',
        subtitle: 'Instant messaging real time conversation mapper',
        media: ['https://picsum.photos/id/20/200/300'],
        description: 'Replacement for current node mapper',
        techUsed: ['Node', 'Express.js', 'RabbitMQ']
      }, {
        title: 'Yurei Ninja',
        subtitle: 'Instant messaging real time conversation mapper',
        media: ['https://picsum.photos/id/16/200/300', 'https://picsum.photos/id/67/200/300'],
        description: 'Replacement for current node mapper',
        techUsed: ['Node', 'Express.js', 'RabbitMQ']
      }, {
        title: 'What Bread',
        subtitle: 'Instant messaging real time conversation mapper',
        media: ['https://picsum.photos/id/78/200/300', 'https://picsum.photos/id/52/200/300', 'https://picsum.photos/id/25/200/300'],
        description: 'Replacement for current node mapper',
        techUsed: ['Node', 'Express.js', 'RabbitMQ']
      }]
    }
  },
  methods: {
    openGallery (projectIndex, galleryIndex) {
      this.selectedGallery = this.projects[projectIndex].media
      this.galleryIndex = galleryIndex
      this.galleryOverlay = true
    },
    closeGallery () {
      this.galleryOverlay = false
      this.selectedGallery = undefined
    }
  }
}
</script>
