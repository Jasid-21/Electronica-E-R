<template>
  <div ref="el" class="service-displayer max-w-4xl mx-auto text-white relative" :class="{ rtl, visible }">
    <img :src="require('@/assets/images/' + service.imgUrl)" class="service-img object-cover h-full w-full absolute left-0 top-0" alt="Service image">
    <div class="background-screen absolute w-full h-full top-0 left-0 bg-black/50"></div>
    <div class="info-container px-8 py-12 relative">
      <h2 class="service-title text-3xl font-semibold md:text-3xl">{{ service.name }}</h2>
      <div>
        <p class="service description">
          {{ service.description }}
        </p>
        <br>
        <a v-if="service.button"
          class="p-3 border border-white text-white"
          :href="service.buttonLink">
          {{ service.button }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { PropType, ref } from 'vue';
import Service from '@/types/Service.type';

const props = defineProps({
  service: { type: Object as PropType<Service>, required: true },
  rtl: { type: Boolean, default: false },
});
const el = ref<HTMLElement>();
const visible = useElementVisibility(el);
console.log(visible.value)
</script>

<style scoped lang="scss">
.service-displayer {
  box-shadow: 0 0 10px rgb(168, 168, 168);
  translate: -95% 0;
  opacity: 0;
  transition-property: translate, opacity;
  transition-duration: 300ms;
  transition-timing-function: ease;

  &.rtl {
    direction: rtl;
    translate: 95% 0;
  }

  .info-container {
    direction: ltr;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 2rem;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  }

  &.visible {
    translate: 0 0;
    opacity: 1;
  }
}
</style>
