import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(true);

  const setLoader = (param: boolean) => isLoading.value = param;

  return { isLoading, setLoader }
})