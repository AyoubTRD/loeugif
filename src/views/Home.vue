<template>
  <div class="home">
    <Loading v-if="loading" />
    <Gifs v-else />
  </div>
</template>

<script>
import Gifs from "../components/Gifs";
import Loading from "../components/Loading";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Gifs,
    Loading
  },
  computed: {
    ...mapGetters(["loading"])
  },
  methods: {
    ...mapActions(["getGifs"])
  },
  async created() {
    console.log("Getting gifs");
    await this.getGifs();
  }
};
</script>
