<template>
  <v-container>
    <v-row no-gutters justify="center">
      <v-col xs="12" sm="6" md="4">
        <v-col>
          <v-avatar size="128" class="ml-1 profile">
            <v-img src="/profpic.jpg" />
          </v-avatar>
          <h1>Kevin Galvez</h1>
          <p>Hi! I'm Kevin. I'm a programmer. I mostly work on mobile applications. I work in Baguio city. In my spare time, I practice the piano and cook pasta.</p>
        </v-col>

        <v-card>
          <v-card-text>
            Once upon a time ...
            <br/>
            This had content ...
            <br/>
            ...
            <br/>
            But now it's gone!
            <br/>
            Kidding!
            <br/>
            I'm still fixing some stuff here and there.
            <br/>
            Do visit next time!
            <br/>
            Thank You!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-layout column justify-center align-center>
      <v-flex xs12 sm4 md4>
        <v-card class="mb-2">
          
          
          
          
          
          
          
          
          
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
          <v-card-text v-if="item.description">{{ item.description }}</v-card-text>
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
    </v-layout> -->
  </v-container>
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
    };
  },
  methods: {
    openGallery (projectIndex, galleryIndex) {
      this.selectedGallery = this.projects[projectIndex].media;
      this.galleryIndex = galleryIndex;
      this.galleryOverlay = true;
    },
    closeGallery () {
      this.galleryOverlay = false;
      this.selectedGallery = undefined;
    }
  }
};
</script>
