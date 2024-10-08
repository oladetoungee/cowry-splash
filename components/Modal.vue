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
// Props to control modal visibility and image data
const props = defineProps({
showModal: {
  type: Boolean,
  required: true,
},
modalImage: {
  type: Object,
  required: true,  // Modal needs an image object
},
});

// Emit close event to parent
const emit = defineEmits(['close']);

function closeModal() {
emit('close');  // Trigger closing of the modal when user clicks
}

</script>

<style scoped>
@import '@/assets/styles/main.scss';
</style>
