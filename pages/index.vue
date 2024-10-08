<template>
  <div>

    <Header @search="onSearch" />
    <ImageGrid :searchQuery="searchQuery" @openModal="openModal" /> 
    <Modal 
      v-if="showModal" 
      :showModal="showModal"  
      :modalImage="modalImage"  
      @close="closeModal" 
    />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '~/components/Header.vue';
import ImageGrid from '~/components/ImageGrid.vue';
import Modal from '~/components/Modal.vue';
import ScrollToTop from '~/components/ScrollToTop.vue';

// State to track search query, modal visibility, and selected image
const searchQuery = ref('africa');  // Default search query
const showModal = ref(false);  // Modal visibility state
const modalImage = ref({});  // The image selected for the modal

// Handle search event from Header component
function onSearch(query) {
  searchQuery.value = query;  // Update search query
}

// Function to open the modal with the selected image
function openModal(image) {
  console.log('Image passed to modal:', image);  // Debugging log
  modalImage.value = image;  // Set the selected image
  showModal.value = true;  // Show the modal
}

// Function to close the modal
function closeModal() {
  showModal.value = false;  // Hide the modal
}
</script>

<style scoped>
@import '@/assets/styles/main.scss';

</style>
