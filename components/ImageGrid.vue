<template>
  <div class="container">
    <!-- Show skeleton placeholders while loading -->
    <div v-if="loading" class="placeholder-con">
      <div v-for="n in 10" :key="n" class="images__item placeholder">
        <div class="images__item-image"></div>
        <div class="images__item-info">
          <h3 class="placeholder__child"></h3>
          <p class="placeholder__child"></p>
        </div>
      </div>
    </div>

    <!-- Show actual images once loading is complete -->
    <div v-else class="images">
      <div
        v-for="image in images"
        :key="image.id"
        class="images__item"
        @click="$emit('openModal', image)"
      >
        <!-- I added alt attribute for SEO and lazy loading for optimization -->
        <img 
          :src="image.urls.regular" 
          class="images__item-image" 
          :alt="image.alt_description || 'Image by ' + image.user.name" 
          loading="lazy"
        />
        <div class="images__item-info">
          <h3>{{ image.user.name }}</h3>
          <p>{{ image.user.location || 'Unknown Location' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { UnsplashImage } from '~/types/unsplash'; 
import { UnsplashServiceFunction } from '~/services/UnsplashService';

const props = defineProps({
searchQuery: {
  type: String,
  default: 'africa',
},
});

// State to store images and loading status with the Unsplash service
const images = ref<UnsplashImage[]>([]);
const loading = ref(true);
const unsplashService = new UnsplashServiceFunction();

// Fetches images from the Unsplash API we are calling
async function fetchImages(query: string) {
try {
  loading.value = true;
  const data = await unsplashService.getPhotos(query);
  images.value = data;
} catch (error) {
  console.error("Error fetching images:", error);
} finally {
  loading.value = false;
}
}

// Watches for changes in the search query
watch(() => props.searchQuery, (newQuery) => {
fetchImages(newQuery);
});

// Initial fetch on component mount
fetchImages(props.searchQuery);
</script>

<style scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/skeleton.scss';
</style>
