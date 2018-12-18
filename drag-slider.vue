<template>
  <div class="range-slider" ref="slider"
    :class="`range-slider-${direction}`">
    <div class="range-slider-track" ref="ranger">
      <span class="dragger" ref="dragger"></span>
      <span class="active" :style="{
        width: percent + '%'
      }"></span>
    </div>
  </div>
</template>
<script>
import RS from './range/slider'

const horizontal = 'horizontal'

export default {
  name: 'DragSlider',
  props: {
    // 方向, 默认水平
    direction: {
      type: String,
      default: horizontal
    }
  },
  data() {
    return {
      percent: 0
    }
  },
  mounted() {
    RS(
      this.$refs.slider,
      this.change,
      this.direction === horizontal ? false : this.direction,
      {
        ranger: this.$refs.ranger,
        dragger: this.$refs.dragger
      }
    )
  },
  methods: {
    change(value, target, event) {
      this.percent = value
      this.$emit('change', {
        value,
        target,
        event
      })
    }
  }
}
</script>

<style lang="scss">
$height: 6px;
.range-slider {
  // margin: 0 5px 10px;
  // 默认水平
  &-track {
    width: auto;
    height: 16px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      left: 0;
      width: 100%;
      height: $height;
      border-radius: 2px;
      background-color: #E7E5E1;
    }
    .dragger {
      display: block;
      width: 16px;
      height: inherit;
      border-radius: 50%;
      position: relative;
      z-index: 4;
      background-color: #fff;
      cursor: inherit;
      box-shadow: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);
    }
    .active {
      position: absolute;
      height: $height;
      background-color: #EC4C42;
      z-index: 3;
      left: 0;
      top: 5px;
      border-radius: 2px;
    }
  }
  // 竖直
  &-vertical {
    display: inline-block;
    vertical-align: middle;
    margin: 5px 10px 5px 0;
    .range-slider-track {
      // n-resize
      cursor: pointer;
      width: 16px;
      height: 100px;
      &:before {
        top: 0;
        right: auto;
        left: 5px;
        width: 6px;
        height: 100%;
      }
      .dragger {
        width: inherit;
        height: 10px;
      }
    }
  }
}
</style>
