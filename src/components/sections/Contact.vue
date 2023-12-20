<template>
  <section class="contact bg-gray-300 grid gap-8 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1" id="contacto">
    <div class="contact-info">
      <h3 class="text-xl font-semibold">Descubre nuestros métodos de contacto</h3>
      <br>
      <div class="contact-item flex items-center gap-x-2 mb-2"
        v-for="(i, idx) of contact_items" :key="idx">
        <fai :icon="i.icon" />
        <span>{{ i.content }}</span>
      </div>
    </div>
    <div class="request-form-container md:flex md:flex-col">
      <h3 class="text-xl font-semibold">O déjanos tu número. Nosotros te contactamos.</h3>
      <br>
      <form class=" bg-white rounded border border-black p-4 w-60 md:self-center">
        <label for="number" class="font-semibold">Escribe tu número.</label>
        <input type="number" class="w-full border border-gray-400 rounded-sm pl-1"
          placeholder="Ej. 3113454507">
        <br><br>
        <button class="bg-text w-full rounded-sm text-white font-semibold">
          Enviar
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import j_contacts from '@/json/contact.json';
import Contact from '@/types/Contact.type';

const contact_items: Contact[] = j_contacts.contact;
</script>

<style scoped>

</style>
