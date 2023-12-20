<template>
  <nav class=" text-text fixed left-0 right-0 top-0 flex justify-between gap-x-4 items-center py-4 z-50 bg-secondary/90">
    <div @click="ToHome" class="logo-container flex gap-x-2 items-center hover:cursor-pointer">
      <img src="../assets/logo.png" alt="Logo image" class="border border-black rounded-full">
      <h1 class="sm:text-xl text-xl font-semibold">Electrónica B&R</h1>
    </div>

    <ul class="links-container hidden lg:flex gap-4 items-center text-inherit font-semibold">
      <li class="link-item" v-for="(l, idx) of links" :key="idx"
        :class="{ important: l.important, 'before:bg-accent':l.important }">
        <a :href="l.link">{{ l.name }}</a>
      </li>
    </ul>

    <a href="/catalogo" class="bg-black self-center p-3 text-white hidden sm:block">
      Productos
    </a>

    <button class="lg:hidden bg-text text-white py-2 px-3 text-xl" @click="openDrawer">
      <fai icon="fa-solid fa-bars" />
    </button>

    <Drawer :active="active" @close-drawer="closeDrawer" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Link from '@/types/Link.type';
import j_links from '@/json/links.json';
import Drawer from './Drawer.vue';

//* Defined.
const links: Link[] = j_links.links;
const router = useRouter();
const active = ref<boolean>(false);

//* Functions.
const ToHome = () => {
  router.push('/');
};

const openDrawer = () => {
  active.value = true;
}

const closeDrawer = () => {
  active.value = false;
}

</script>

<style scoped lang="scss">
.link-item.important {
  position: relative;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -5px;
  }
}
</style>
