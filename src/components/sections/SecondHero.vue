<template>
  <section class="second-hero w-full h-96">
    <h2 class="section-title text-4xl font-semibold text-white text-center mt-24">
      {{ title }}
    </h2>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.second-hero {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  background-image: linear-gradient(rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)), url('../../assets/images/arduino_1.jpg');
}

</style>
