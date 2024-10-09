//this helps to block the body scroll when a modal is open and unlock it when modal closes
import { ref } from 'vue';

export function useBodyScrollLock() {
  const scrollPosition = ref(0);

  const lockScroll = () => {
    scrollPosition.value = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition.value}px`;
    document.body.style.width = '100%';
  };

  const unlockScroll = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition.value);
  };

  return { lockScroll, unlockScroll };
}
