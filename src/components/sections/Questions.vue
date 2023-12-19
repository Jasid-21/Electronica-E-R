<template>
  <section class="questions" id="preguntas">
    <h2 class="section-title text-3xl font-semibold">Preguntas frecuentes</h2>
    <span class=" text-sm italic">Encuentra las preguntas más frecuentes de nuestros clientes</span>
    <br><br>
    <ul class="questions-container">
      <li class="question-item flex flex-col border-t border-gray-400 mb-8 pt-2 md:flex-row"
        v-for="(q, idx) of questions" :key="idx">
        <h4 class="question text-lg font-semibold w-full md:w-1/2">
          {{ q.question }}
        </h4>
        <p class="answer w-full italic md:w-1/2">
          {{ q.answer }}
        </p>
      </li>
    </ul>

    <br><br>
    <h3 class="text-2xl font-semibold">Aún tienes preguntas?</h3>
    <span>Descubre nuestros métodos de contacto a continuación</span>
    <br><br>
    <a href="#contacto" class="p-2 border bg-text text-white">Contacto</a>
  </section>
</template>

<script setup lang="ts">
import j_questions from '@/json/Questions..json';
import QAns from '@/types/QAns.type';

const questions: QAns[] = j_questions.questions;
</script>

<style scoped lang="scss">

</style>
