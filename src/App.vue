<template>
  <div>
    <Navbar />
    <div class="container main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #efefef;
  font-family: Arial, Helvetica, sans-serif;
}
button {
  padding: 16px 25px;
  border-radius: 4px;
  border: none;
  background: #e0e0e0;
  border-top: 3px solid #efefef;
  border-bottom: 3px solid #bbb;
  color: #222;
  text-transform: uppercase;
  font-weight: 900;
  font-family: inherit;
  cursor: pointer;
  transition: 0.3s;
}
button:focus {
  transform: translateY(3px);
}
.container {
  margin: 0 25px;
}
.main-content {
  padding: 30px 25px;
  border-radius: 7px;
  border: 1px solid #aaa;
  background: #fff;
}
</style>
