<template>
  <div class="range-slider" ref="slider"
    :class="`range-slider-${direction}`">
    <slot name="label"></slot>
    <div class="range-slider-track" ref="ranger">
      <span class="bg" :style="{
        backgroundColor: color.background
      }"></span>
      <span class="dragger" ref="dragger">
        <slot name="tooltip" class="tooltip"></slot>
      </span>
      <span class="active" :style="{
        width: percentVal + '%',
        backgroundColor: color.active
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
    },
    // 默认百分比
    percent: {
      type: Number,
      default: 0
    },
    // 颜色
    color: {
      type: Object,
      default() {
        return {
          active: '#EC4C42',
          background: '#E7E5E1'
        }
      }
    },
    // 阻止默认事件例外的selector
    exceptClasses: {
      type: Array,
      default() {
        return []
      }
    },
    // 是否可以拖动
    disable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rs: null,
      percentVal: this.percent || 0,
      tooltipWidth: 0,
      tooltipLeft: ''
    }
  },
  // computed: {
  //   tooltipLeft() {
  //     const tooltip = this.$refs.tooltip
  //     const dragger = this.$refs.dragger
  //     console.log(tooltip)
  //     if (tooltip && dragger) {
  //       return tooltip.offsetWidth + dragger.offsetLeft
  //     }
  //     return 0
  //   }
  // },
  mounted() {
    this.rs = RS(
      this.$refs.slider,
      {
        value: this.percentVal,
        drag: this.drag,
        create: this.create,
        stop: this.stop
      },
      // this.change,
      this.direction === horizontal ? false : this.direction,
      {
        ranger: this.$refs.ranger,
        dragger: this.$refs.dragger,
        exceptClasses: this.exceptClasses,
        disable: this.disable
      }
    )
  },
  methods: {
    // 计算tooltip的left值
    tooltipLeftCalc(value) {
      // const tooltipWidth = this.tooltipWidth
      // if (tooltipWidth) {
      //   this.tooltipLeft = `calc(${value}% - ${tooltipWidth / 2}px)`
      // }
    },
    create(value, target) {
      // TODO: 查找tooltip dom
      const slider = this.$refs.slider
      const tooltip = slider.querySelector('.tooltip')
      const dragger = this.$refs.dragger
      if (tooltip && dragger) {
        this.tooltipWidth = tooltip.offsetWidth
        this.tooltipLeft = (dragger.offsetWidth - this.tooltipWidth) / 2 + 'px'
        tooltip.style.left = this.tooltipLeft
        // this.tooltipLeftCalc(value)
      }
    },
    drag(value, target, event) {
      this.percentVal = value
      // this.tooltipLeftCalc(value)
      this.$emit('update:percent', value)
      this.$emit('change', {
        value,
        target,
        event
      })
    },
    stop(value, target, event) {

    }
  },
  beforeDestroy() {
    this.rs()
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
    // &:before
    // 背景
    .bg {
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
    // 拖拽
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
    // 激活色
    .active {
      position: absolute;
      height: $height;
      background-color: #EC4C42;
      z-index: 3;
      left: 0;
      top: 5px;
      border-radius: 2px;
    }
    // 弹框
    .tooltip {
      position: absolute;
      top: -190%;
      left: -50%;
      font-size: 14px;
      white-space: nowrap;
      padding: 2px 5px;
      min-width: 20px;
      border-radius: 5px;
      border: 1px solid #EC4C42;
      background-color: #EC4C42;
      color: #fff;
      &:before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-color: inherit;
        transform: translate(-50%, 0);
      }
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
      // &:before
      .bg {
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
