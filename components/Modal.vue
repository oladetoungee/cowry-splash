<template>
    <div class="modal" v-if="showModal">
      <div class="modal__body">
        <img :src="modalImage.urls?.regular" class="modal__image" />
        <div class="modal__info">
          <h3>{{ modalImage.user?.name || 'Unknown User' }}</h3>
          <p>{{ modalImage.user?.location || 'Unknown Location' }}</p>
        </div>
      </div>
      <p class="modal__close" @click="closeModal">&times;</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  // Define the props for the modal component
  const props = defineProps({
    showModal: {
      type: Boolean,
      required: true,
    },
    modalImage: {
      type: Object,
      required: true,  // Ensure the prop is required
    },
  });
  
  // Emit close event
  const emit = defineEmits(['close']);
  
  function closeModal() {
    emit('close');  // Emit the close event when user clicks the close button
  }

  </script>
  
  <style scoped>
  @import '@/assets/styles/main.scss';
  </style>
  