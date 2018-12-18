<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <drag-slider class="drag-slider">
      <div class="label" slot="label">
        label
      </div>
    </drag-slider>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import DragSlider from '../../../src/drag-slider'

export default {
  name: 'home',
  components: {
    DragSlider
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.drag-slider {
  height: 10px;
  width: 255px;
  margin: 50px auto 0 auto;
}
</style>
