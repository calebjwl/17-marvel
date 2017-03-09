<template lang="html">
  <div class="grid__item">
    <div class="card">
      <div class="pic-wrapper">
        <img :src="`${characters.thumbnail.path}.${characters.thumbnail.extension}`" alt="" class="card__pic">
      </div>
      <p class="card__caption">{{characters.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['characters'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
