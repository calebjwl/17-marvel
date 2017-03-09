<template lang="html">
  <div class="grid__item">
    <div class="card">
      <div class="pic-wrapper">
        <img :src="`${comics.thumbnail.path}.${comics.thumbnail.extension}`" alt="" class="card__pic">
      </div>
      <p class="card__number">#1</p>
      <p class="card__caption">Bill Murray</p>
      <button class="read-more">Read More</button>
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
