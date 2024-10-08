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
          <img :src="image.urls.regular" class="images__item-image" />
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
import type { UnsplashImage, UnsplashService } from '~/types/unsplash'; // Use 'import type'
import { UnsplashServiceFunction } from '~/services/UnsplashService'; // Regular import for the class

const props = defineProps({
  searchQuery: {
    type: String,
    default: 'africa',
  },
});

// State to track images and loading
const images = ref<UnsplashImage[]>([]);  // Use the UnsplashImage type for images
const loading = ref(true);
const unsplashService = new UnsplashServiceFunction();

// Fetch images based on the search query
async function fetchImages(query: string) {
  try {
    loading.value = true;
    const data = await unsplashService.getPhotos(query);
    images.value = data;
  } catch (error) {
    console.error("Error fetching images:", error);
    // Show some error feedback to the user, like a message or alert
  } finally {
    loading.value = false;
  }
}


// Watch the search query prop and fetch images when it changes
watch(() => props.searchQuery, (newQuery) => {
  fetchImages(newQuery);
});

// Fetch images on mount
fetchImages(props.searchQuery);
</script>

  <style scoped>
  @import '@/assets/styles/main.scss';
  @import '@/assets/styles/skeleton.scss';
  </style>
  