<template>
  <section class="comments bg-gray-200" id="testimonios">
    <Transition>
      <div class="comment-container w-full max-w-2xl mx-auto mt-16" v-if="current">
        <p class="comment text-center font-semibold">
          {{ current.content }}
        </p>
        <br>
        <div class="user text-center">
          <span>-- {{ current.author }} --</span>
        </div>
      </div>
    </Transition>

    <Transition>
      <div class="comment-container w-full max-w-2xl mx-auto mt-16" v-if="next">
        <p class="comment text-center font-semibold">
          {{ next.content }}
        </p>
        <br>
        <div class="user text-center">
          <span>-- {{ next.author }} --</span>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import j_comments from '@/json/comments.json';
import Comment from '@/types/Comment.type';
import { ref } from 'vue';

const comments: Comment[] = j_comments.comments;
const index = ref<number>(0);
const current = ref<Comment | null>(comments[0] || null);
const next = ref<Comment | null>(null);

setInterval(() => {
  index.value++;
  if (index.value >= comments.length) {
    index.value = 0;
  }

  if (!next.value) {
    current.value = null;
    setTimeout(() => {
      next.value = comments[index.value];
    }, 180);
    return;
  }

  next.value = null;
  setTimeout(() => {
    current.value = comments[index.value];
  }, 180);
}, 5000);

</script>

<style scoped lang="scss">
.comments {
  height: 400px;

  .comment-container {
    max-height: 80%;

    .comment {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .user {
      height: 10%;
    }
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 180ms ease;
  }
}
</style>
