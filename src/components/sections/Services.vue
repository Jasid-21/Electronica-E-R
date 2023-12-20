<template>
  <section class="services overflow-x-hidden relative bg-l_primary" id="servicios">
    <!--<div class="dark-screen bg-black/30 absolute top-0 left-0 right-0 bottom-0"></div>-->
    <div class="section-title text-text text-3xl font-semibold text-center">¿Qué te ofrecemos?</div>
    <br><br><br>
    <div class="services-displayer flex flex-col gap-32">
      <ServiceDisplayer v-for="(s, idx) of services" :key="idx" :service="s" :rtl="idx%2==0" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Service from '@/types/Service.type';
import ServiceDisplayer from '../ServiceDisplayer.vue';
import j_services from '@/json/services.json';

const services: Service[] = j_services.services;
</script>

<style scoped lang="scss">
.services {
  background: url('../../assets/svg/vertical.svg');
  background-size: contain;
  background-position: top;
}

@media (min-width: 768px) {
  .services {
    background: url('../../assets/svg/stacked-peaks-haikei (1).svg');
    background-position: top center;
    background-size: contain;
  }
}
</style>
