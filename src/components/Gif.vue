<template>
  <div class="gif">
    <img :src="gif.images.downsized.url" alt />
  </div>
</template>

<script>
export default {
  name: "Gif",
  props: ["gif"],
  created() {
    console.log(this.gif);
  }
};
</script>

<style>
.gif img {
  width: 100%;
}
.gif {
  margin-bottom: 10px;
}
</style>