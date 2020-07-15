<template>
  <nav>
    <div class="container">
      <router-link to="/" class="nav-brand">LoeuGif</router-link>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          aria-label="Search"
          v-model="searchKeyword"
          placeholder="Search for gifs"
        />
      </form>
    </div>
  </nav>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      searchKeyword: ""
    };
  },
  methods: {
    ...mapActions(["searchGifs"]),
    async handleSubmit() {
      await this.searchGifs(this.searchKeyword);
    }
  }
};
</script>

<style>
nav {
  margin-bottom: 25px;
  background: #fff;
  height: 75px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
body {
  padding-top: 100px;
}
nav a {
  color: #222;
  font-size: 40px;
  text-decoration: none;
  font-family: 700;
  margin-right: 20px;
}
nav .container {
  display: flex;
  height: 40px;
  align-items: center;
}

nav form {
  height: 30px;
  width: 100%;
  margin-left: 10px;
}

nav input {
  width: 100%;
  height: 100%;
  display: inline-block;
  border: none;
  padding-left: 10px;
  border-left: 2px solid #aaa;
  outline: none;
  transition: 0.4s;
}

nav input:focus {
  border-left-color: #222;
}
</style>