<template>
  <div>
    <div class="gifs">
      <div class="col" v-for="(col, i) in columns" :key="i">
        <div class="gifs-col" v-for="gif in col" :key="gif.id">
          <Gif :gif="gif" />
        </div>
      </div>
    </div>
    <div class="loadmore">
      <Loading v-if="loading" message="L'oeuf is getting you more gifs" />
      <button v-else @click="handleClick">Load more</button>
    </div>
  </div>
</template>

<script>
import Gif from "./Gif";
import Loading from "./Loading";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Gifs",
  components: {
    Gif,
    Loading
  },
  computed: {
    ...mapGetters(["gifs"]),
    columns() {
      const columns = [[], [], []];
      let currentCol = 0;
      for (let i = 0; i < this.gifs.length; i++) {
        columns[currentCol].push(this.gifs[i]);
        currentCol++;
        if (currentCol >= columns.length) currentCol = 0;
      }
      return columns;
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions(["loadMore"]),
    async handleClick() {
      this.loading = true;
      await this.loadMore();
      this.loading = false;
    }
  }
};
</script>

<style>
.gifs {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 10px;
}
.loadmore {
  text-align: center;
  margin-top: 25px;
}
</style>