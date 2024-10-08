<template>
  <header class="header">
    <div class="header__form-con">
      <!-- Conditionally render the search form or result in the same space -->
      <form class="header__form" @submit.prevent="onSearch" v-if="!isSearching">
        <span class="header__icon">
          <!-- Material Design Search Icon -->
          <i class="mdi mdi-magnify"></i>
        </span>
        <input
          v-model="searchQuery"
          type="text"
          class="header__search"
          placeholder="Search for photo"
        />
      </form>
      <div v-else class="search-result">
        <h1>Search Result for <span>"{{ searchQuery }}"</span> </h1>
        <!-- Reset Button with Icon -->
        <button @click="resetSearch" class="header__reset-btn">
          <i class="mdi mdi-refresh"></i> Reset
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Search query
const searchQuery = ref('');

// Flag to indicate if a search has been performed
const isSearching = ref(false);

// Emit the search query when the form is submitted
const emit = defineEmits(['search']);

function onSearch() {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value);  // Emit the search query
    isSearching.value = true;           // Set search flag to true
  }
}

// Function to reset the search
function resetSearch() {
  searchQuery.value = '';     // Clear the search query
  isSearching.value = false;  // Reset the search flag
}
</script>

<style scoped>
@import '@/assets/styles/main.scss';


</style>
