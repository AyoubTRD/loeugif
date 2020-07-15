<template>
  <div class="loading">
    <p>{{ message || "Loeuf is getting you some gifs"}}</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["message"]
};
</script>

<style>
@keyframes slideBg {
  from {
    background-position-x: 0%;
    color: #222;
  }
  50% {
    background-position: 100%;
    color: #fff;
  }
  to {
    background-position-x: 0%;
    color: #222;
  }
}
.loading {
  padding: 25px;
  background-image: linear-gradient(to right, #eee, #bbb, #eee);
  background-size: 200%;
  border-radius: 7px;
  text-align: left;
  animation: slideBg 2s infinite;
}
</style>