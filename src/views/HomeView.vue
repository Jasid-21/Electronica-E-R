<template>
  <div class="home">
    <Hero />
    <Services />
    <Products />
    <Comments />
    <Questions />
    <Contact />
  </div>
</template>

<script lang="ts" setup>
import Hero from '@/components/sections/Hero.vue';
import Services from '@/components/sections/Services.vue';
import Products from '@/components/sections/Products.vue';
import Comments from '@/components/sections/Comments.vue';
import Questions from '@/components/sections/Questions.vue';
import Contact from '@/components/sections/Contact.vue';
</script>
