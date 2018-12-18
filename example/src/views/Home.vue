<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <drag-slider class="drag-slider"
      :percent="30"
      :color="{
        active: 'blueviolet',
        background: 'aliceblue'
      }">
      <div class="label" slot="label">
        label
      </div>
      <div class="tooltip" slot="tooltip">
        tooltip
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
.label {
  text-align: left;
}
</style>
