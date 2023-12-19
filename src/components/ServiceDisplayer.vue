<template>
  <div class="service-displayer text-white relative" :class="{ rtl }">
    <img :src="require('@/assets/images/' + service.imgUrl)" class="object-cover h-full w-full absolute left-0 top-0" alt="Service image">
    <div class="info-container px-8 py-12 bg-black/50 relative grid gap-4 grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
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
import { PropType } from 'vue';
import Service from '@/types/Service.type';

const props = defineProps({
  service: { type: Object as PropType<Service>, required: true },
  rtl: { type: Boolean, default: false },
});
</script>

<style scoped lang="scss">
.service-displayer {
  &.rtl {
    direction: rtl;
  }

  .info-container {
    direction: ltr;
  }
}
</style>
