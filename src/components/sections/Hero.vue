<template>
  <section class="hero min-h-screen">
    <div class="grid items-center grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 md:gap-8 text-white mt-24">
      <h2 class="text-3xl font-bold">
        Descubre los mejores dispositivos electrónicos
      </h2>
      <div>
        <p class=" text-lg">
          Explora nuestra colección de aparatos y repuestos con los que crear tus proyectos de electrónica.
        </p>
        <br>
        <div class="buttons-container flex gap-8 items-center">
          <a href="/catalogo" class="bg-primary text-text font-semibold p-2">Ver todo</a>
          <a href="#productos" class="text-white font-semibold border p-2">Lo más vendido</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hero {
  //background-image: url('');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-image: linear-gradient(rgba(0, 0, 0, 0.6),
                       rgba(0, 0, 0, 0.6)), url('../../assets/images/arduino_1.jpg')
}
</style>
