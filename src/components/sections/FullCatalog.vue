<template>
  <section class="full-catalog">
    <form class="catalog-filter grid grid-cols-4 gap-2 max-w-2xl mx-auto border border-gray-600 rounded-lg p-4">
      <div class="field-container col-start-1 col-end-3 text-sm italic font-semibold">
        <label for="name">By name</label>
        <input type="text" id="name" v-model="name" class="w-full h-7 border border-gray-600 rounded-md px-1" placeholder="Ej. Arduino uno">
      </div>
      <div class="field-container text-sm italic font-semibold">
        <label for="name">Min price</label>
        <input type="number" id="name" v-model="minP" class="w-full h-7 border border-gray-600 rounded-md px-1" placeholder="0.00">
      </div>
      <div class="field-container text-sm italic font-semibold">
        <label for="name">Max price</label>
        <input type="number" id="name" v-model="maxP" class="w-full h-7 border border-gray-600 rounded-md px-1" placeholder="23000.00">
      </div>
    </form>
    <br><br>
    <div class="fetured-displayer flex justify-center flex-wrap gap-x-10 gap-y-16">
      <ProductCard v-for="(p, idx) of external_apply_filter()" :key="idx" :product="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ApplyFilter from '@/functions/ApplyFilter.func';
import j_products from '@/json/Products.json';
import Product from '@/types/Product.type';
import ProductCard from '../ProductCard.vue';

//* Defined.
const products: Product[] = j_products.products;
const name = ref<string>('');
const minP = ref<number>(0);
const maxP = ref<number>(Infinity);

//* Functions.
const external_apply_filter = () => {
  return ApplyFilter(name.value, minP.value, maxP.value, products);
}
</script>

<style scoped lang="scss">

</style>
