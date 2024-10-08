<template>
  <button v-show="isVisible" @click="scrollToTop" class="scroll-to-top">
    ↑ 
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

function handleScroll() {
  // Show the button when scrolled down 100px or more
  isVisible.value = window.scrollY > 100;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

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
