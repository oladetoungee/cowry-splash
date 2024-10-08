<template>
    <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top">
      ↑ 
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isVisible = ref(false);  // Controls visibility of the button
  
  function handleScroll() {
    // Toggle button visibility when scrolled down 100px
    isVisible.value = window.scrollY > 100;
  }
  
  function scrollToTop() {
    // for smooth scrolling to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  
  // to add and remove scroll event listener
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  @import '@/assets/styles/ScrollToTop.scss';
  </style>
  