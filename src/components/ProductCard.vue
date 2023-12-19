<template>
  <div class="prduct-card">
    <img :src="require('@/assets/images/' + product.imgUrl)" :alt="product.name"
      class="product-img w-full h-52 mb-4 object-cover">
    <h4 class="product-name text-base font-semibold">{{ product.name }}</h4>
    <span class="relevant-info text-sm">{{ product.relevant }}</span>
    <br>
    <span class="price text-base italic font-semibold">${{ product.price }}/u</span>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Product from '@/types/Product.type';

const props = defineProps({
  product: { type: Object as PropType<Product>, required: true },
});
</script>

<style scoped lang="scss">
.prduct-card {
  width: 100%;
  max-width: 250px;
}
</style>
