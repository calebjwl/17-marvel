<template lang="html">
  <div class="grid__item">
    <div class="card">
      <div class="pic-wrapper">
        <img :src="`${comics.thumbnail.path}.${comics.thumbnail.extension}`" alt="" class="card__pic">
      </div>
      <p class="card__number">#{{ comics.issueNumber }}</p>
      <p class="card__caption">{{ comics.title }}</p>
      <button @click="$emit('readmore', comics)" class="read-more">Read More</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comics'],
  data() {
    return {
    };
  },

  methods: {
  },
};
</script>
