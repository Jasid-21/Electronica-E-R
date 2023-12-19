<template>
  <Transition>
    <div v-if="active" ref="drawer" class="drawer w-72 h-screen bg-l_primary fixed top-0 left-0 z-10 p-4 text-text">
      <div class="logo-container font-semibold flex items-center pb-4 gap-x-2 border-b border-gray-500">
        <img src="../assets/logo.png" alt="Logo" class="w-14">
        <h1 class="font-semibold text-xl">Electrónica B&R</h1>
      </div>
      <br>
      <div class="links-container flex flex-col gap-y-4">
        <a v-for="(l, idx) of links" :key="idx" :href="l.link" @click="linkClicked"
          class="link-item text-lg h-8 font-semibold w-full"
          :class="{ important: l.important }">
            <span class="">{{ l.name }}</span>
        </a>
      </div>
    </div>
</Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Link from '@/types/Link.type';
import j_links from '@/json/links.json';
import { onClickOutside } from '@vueuse/core';

//* Defined.
const emit = defineEmits(['close-drawer']);
const props = defineProps({
  active: { type: Boolean, default: false }
});
const links: Link[] = j_links.links;
const drawer = ref<HTMLElement>();

//* Functions.
const linkClicked = () => {
  emit('close-drawer');
}

//* Hooks.
onClickOutside(drawer, (e: Event) => {
  e.stopPropagation();
  emit('close-drawer');
});
</script>

<style scoped lang="scss">
.link-item.important {
  position: relative;

  &::before {
    content: '';
    background-color: #1da178;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -5px;
  }
}

.v-enter-from,
.v-leave-to {
  left: -600px;
}

.v-enter-to,
.v-leave-from {
  left: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 180ms ease;
}
</style>
