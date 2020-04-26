<template>
  <div>
    <button @click="emit">emit</button>
    <button @click="back">back</button>
    <ul id="ul" ref="ul">
      <li v-for="(image, key) in images" :key="key" style="width: 100%; height: 30px;">
        <image :src="image.src" width="100px"></image>
      </li>
    </ul>
    <empty ref="empty"></empty>
  </div>
</template>
<script>
// import BusFactory from 'vue-happy-bus'
import Empty from './empty.vue'
let NUM = 100

export default {
  name: 'Images',
  data() {
    return {
      images: []
      // bus: BusFactory(this)
    }
  },
  components: {
    Empty
  },
  mounted() {
    // 在生命周期中进行 $on
    // this.bus.$on('event name', () => {
    //   // do  something
    //   console.log('event name')
    // })
    this.$refs.empty.$on('myevent', this.myevent)
    this.$root.eventHub.$on('changeTeamName', this.changeTeamName)
    let ulDom = document.querySelector('#ul')
    for (let i = 0; i < NUM; i++) {
      this.images.push({
        src: 'https://alipic.lanhuapp.com/webd6b1e153-7375-4843-9c46-c520a1c36127?x-oss-process=image/resize,h_234/format,webp'
      })
    }
    setTimeout(() => {
      let liDoms = ulDom.querySelectorAll('li')
      console.log('liDoms: ', liDoms)
      for (let i = 0; i < NUM; i++) {
        let liDom = liDoms[i]
        liDom.addEventListener('click', this.liClick)
      }
    }, 1e3)
  },
  methods: {
    myevent() {
      console.log('myevent')
    },
    changeTeamName() {
      console.log('this: ', this)
      console.log('changeTeamName...')
    },
    emit() {
      this.$root.eventHub.$emit('changeTeamName')
    },
    liClick() {
      console.log('liClick')
    },
    resetEvent() {
      let ulDom = this.$refs.ul
      let liDoms = ulDom.querySelectorAll('li')
      console.log('liDoms: ', liDoms)
      for (let i = 0; i < NUM; i++) {
        let liDom = liDoms[i]
        liDom.removeEventListener('click', this.liClick)
      }
    }
  },
  beforeDestroy() {
    console.log('[Images.vue] beforeDestory()...')
    this.resetEvent()
    this.$root.eventHub.$off('changeTeamName', this.changeTeamName)
    this.$refs.empty.$off('myevent', this.myevent)
  }
}
</script>
