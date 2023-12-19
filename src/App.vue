<template>
  <navbar />
  <router-view/>
  <footer class="bg-text text-white grid grid-cols-1 grid-rows-3 sm:grid-cols-12 sm:grid-rows-1 gap-4 items-center">
    <div class="logo-container col-start-1 col-end-2 sm:col-start-1 sm:col-end-4">
      <img src="./assets/logo.png" alt="Logo" class="mx-auto w-16 rounded-full">
      <h1 class="mt-2 text-center font-semibold text-lg">Electrónica B&R</h1>
    </div>
    <ul class="links-container flex gap-2 gap-y-1 flex-wrap justify-center sm:col-start-4 sm:col-end-10">
      <li v-for="(l, idx) of links" :key="idx">
        <a :href="l.link">{{ l.name }}</a>
      </li>
    </ul>
    <ul class="contact-container sm:col-start-10 sm:col-end-13 grid grid-cols-2 justify-items-center sm:block">
      <li class="contact-item font-semibold mb-2 text-end"
        v-for="(c, idx) of contact_items.filter((c) => !c.schedule)" :key="idx">
        <fai :icon="c.icon" />
        &nbsp;
        <span>{{ c.content }}</span>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import j_links from '@/json/links.json';
import j_contacts from '@/json/contact.json';
import Link from './types/Link.type';
import Contact from './types/Contact.type';
import Navbar from './components/Navbar.vue';

const links: Link[] = j_links.links;
const contact_items: Contact[] = j_contacts.contact;
</script>

<style lang="scss">
:root {
  --y_pad: 4.5rem;
  --x_pad: 1rem;

  @media (min-width: 640px) {
    --x_pad: 5rem;
  }

  @media (min-width: 768px) {
    --x_pad: 7rem;
  }
}

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav a.router-link-exact-active {
  color: #42b983;
}

section, footer, nav {
  padding:var(--y_pad) var(--x_pad);
}
</style>
