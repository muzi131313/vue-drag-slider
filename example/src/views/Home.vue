<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <drag-slider class="drag-slider"
      :percent.sync="percent"
      :color="{
        active: 'blueviolet',
        background: 'aliceblue'
      }"
      :disable="true"
      @change="percentChange">
      <div class="tooltip" slot="tooltip">
        {{percent}}
      </div>
    </drag-slider>
    <drag-slider class="drag-slider"
      :percent.sync="percent2"
      :color="{
        active: 'cadetblue',
        background: 'darkkhaki'
      }"
      @change="percentChange">
      <div class="label" slot="label">
        percent
        <span class="right">{{percent2}}</span>
      </div>
    </drag-slider> -->

    <button @click="goImages">go images</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { DragSlider } from '../../../src/drag-slider'

export default {
  name: 'home',
  components: {
    // DragSlider
    HelloWorld
  },
  data() {
    return {
      percent: 30,
      percent2: 50
    }
  },
  methods: {
    percentChange(value, target, event) {
      console.log('change value: ', value)
    },
    goImages() {
      console.log('goImage')
      this.$router.push({
        name: 'images'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-slider {
  height: 10px;
  width: 255px;
  margin: 50px auto 0 auto;
}
.clear {
  clear: both;
}
.label {
  text-align: left;
  margin-bottom: 5px;
  .right {
    float: right;
  }
}
</style>
