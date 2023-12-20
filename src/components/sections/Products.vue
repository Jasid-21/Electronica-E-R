<template>
  <section class="products bg-background2 overflow-x-hidden" id="productos">
    <div class="header-container flex flex-col items-start gap-y-2 2sm:flex-row 2sm:justify-between 2sm:items-end">
      <div class="title-container">
        <h2 class="title text-3xl text-text font-semibold">Destacados</h2>
        <span class="subtitle text-text">Encuentra lo que buscas en nuestro catálogo de dispositivos</span>
      </div>
      <a href="/catalogo" class="bg-text text-white text-center w-20 py-3">Ver todo</a>
    </div>
    <br><br>
    <div class="fetured-displayer flex justify-center flex-wrap gap-x-10 gap-y-16">
      <ProductCard v-for="(p, idx) of products.filter((p) => p.featured)" :key="idx" :product="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import j_products from '@/json/Products.json';
import Product from '@/types/Product.type';
import ProductCard from '../ProductCard.vue';

const products: Product[] = j_products.products;
</script>

<style scoped lang="scss">
</style>
