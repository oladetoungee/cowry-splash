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

// State variables for search, modal visibility, and selected image
const searchQuery = ref('africa');  // Default search term is Africa as directed
const showModal = ref(false);  // Controls if the modal is visible
const modalImage = ref({});  // Stores the image to display in the modal

// Updates the search query based on user input
function onSearch(query) {
  searchQuery.value = query;
}

// Opens the modal with the selected image
function openModal(image) {
  modalImage.value = image;
  showModal.value = true;
}

// Closes the modal
function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
@import '@/assets/styles/main.scss';
</style>
