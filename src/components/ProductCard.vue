<template>
  <div class="prduct-card" ref="el" :class="{ visible }">
    <img :src="require('@/assets/images/' + product.imgUrl)" :alt="product.name"
      class="product-img w-full h-52 mb-4 object-cover">
    <h4 class="product-name text-base font-semibold">{{ product.name }}</h4>
    <span class="relevant-info text-sm">{{ product.relevant }}</span>
    <br>
    <span class="price text-base italic font-semibold">${{ product.price }}/u</span>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import Product from '@/types/Product.type';

const props = defineProps({
  product: { type: Object as PropType<Product>, required: true },
});
const el = ref<HTMLElement>();
const visible = useElementVisibility(el);
</script>

<style scoped lang="scss">
.prduct-card {
  width: 100%;
  max-width: 250px;

  //scale: 1.5;
  opacity: 0;

  transition-property: scale, opacity;
  transition-duration: 350ms;
  transition-timing-function: ease;

  &.visible {
    scale: 1;
    opacity: 1;
  }
}
</style>
