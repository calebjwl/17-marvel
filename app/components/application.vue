<template lang="html">
  <div class="app">
    <div class="navbar">
      <div class="navbar__logo">
        <img src="img/marvel-logo.png" alt="" class="marvel">
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div v-if="seriesInfo" class="sidebar">
          <img :src=" `${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}` " alt="" class="sidebar__pic">
          <p class="sidebar__title">{{ seriesInfo.title }}</p>
          <p class="year">{{seriesInfo.startYear}} - {{seriesInfo.endYear}}</p>
          <div class="creators">
            <h1 class="title">Creators</h1>
            <ul class="creator-list">
              <li v-for="item in seriesInfo.creators.items" class="creator">{{ item.name }}</li>
            </ul>
          </div>
        </div>

        <div class="series">
          <div class="characters">
            <h1 class="title">Characters</h1>
            <div class="grid">
              <character-item v-for="item in characterData" v-bind:characters="item"></character-item>
          </div>

          <div class="comics">
            <h1 class="title">Comics</h1>
            <div class="grid">
              <comic-item v-for="item in comicData" v-bind:comics="item"></comic-item>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-if="modal">
      <button class="exit">X</button>
      <p class="modal-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
import store from '../store';
import CharacterItem from './character-item.vue';
import ComicItem from './comic-item.vue';
import { seriesInfoSearch } from '../actions';

export default {
  components: {
    CharacterItem,
    ComicItem
  },

  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      comicData: this.$select('comicData'),
      characterData: this.$select('characterData'),
      modal: this.$select('modal'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch('avengers'));
  },

  methods: {
  },
};
</script>
