<template>
  <header class="header">
    <div class="header__form-con">
      <!-- Conditionally show search form or query statement -->
      <form class="header__form" @submit.prevent="onSearch" v-if="!isSearching">
        <span class="header__icon">
          <!-- Search icon -->
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
        <!-- Reset search -->
        <button @click="resetSearch" class="header__reset-btn">
          <i class="mdi mdi-refresh"></i> Reset
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const searchQuery = ref('');  // this variable Holds the search query
const isSearching = ref(false);  // this tracks if searching is actively being done

// Handles the search process
const emit = defineEmits(['search']);
function onSearch() {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value);
    isSearching.value = true;
  }
}

// Resets the search
function resetSearch() {
  searchQuery.value = '';
  isSearching.value = false;
}
</script>

<style scoped>
@import '@/assets/styles/main.scss';
</style>
