<template>
  <div>
    <!-- Display the Welcome component if showWelcome is true -->
    <Welcome v-if="showWelcome" />

    <!-- Main Page Content -->
    <div v-else>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '~/components/Header.vue';
import ImageGrid from '~/components/ImageGrid.vue';
import Modal from '~/components/Modal.vue';
import ScrollToTop from '~/components/ScrollToTop.vue';
import Welcome from '~/components/Welcome.vue';  

// State variables for search, modal visibility, and selected image
const searchQuery = ref('africa');  // Default search term as directed in the instructions
const showModal = ref(false);  // Controls if the modal is visible
const modalImage = ref({});  // Stores the image to display in the modal

// Controls whether to show the welcome screen
const showWelcome = ref(true);  // This initially show the welcome screen

// Hide the welcome screen after 3 seconds
onMounted(() => {
  setTimeout(() => {
    showWelcome.value = false;
  }, 3000); 
});

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
