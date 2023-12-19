<template>
  <section class="services flex flex-col gap-32" id="servicios">
    <ServiceDisplayer v-for="(s, idx) of services" :key="idx" :service="s" :rtl="idx%2==0" />
  </section>
</template>

<script setup lang="ts">
import Service from '@/types/Service.type';
import ServiceDisplayer from '../ServiceDisplayer.vue';
import j_services from '@/json/services.json';

const services: Service[] = j_services.services;
</script>

<style scoped lang="scss">

</style>
