<template>
  <div>
    <!-- <button @click="emit">emit</button> -->
    <button id="btn" @click="back">back</button>
    <ul id="ul" ref="ul">
      <li v-for="(image, key) in images" :key="key">
        image: {{image.src}}
        <image :src="image.src" width="100px"></image>
      </li>
    </ul>
    <!-- <empty ref="empty" v-if="images.length === 0"></empty> -->
  </div>
</template>
<script>
// import BusFactory from 'vue-happy-bus'
// import Empty from './empty.vue'
let NUM = 10000

export default {
  name: 'Images',
  data() {
    return {
      images: []
      // bus: BusFactory(this)
    }
  },
  // components: {
  //   Empty
  // },
  mounted() {
    // 在生命周期中进行 $on
    // this.bus.$on('event name', () => {
    //   // do  something
    //   console.log('event name')
    // })
    // this.$refs.empty.$on('myevent', this.myevent)
    // this.$root.eventHub.$on('changeTeamName', this.changeTeamName)

    this.initData()

    // setTimeout(this.initEvent, 1e3)
  },
  methods: {
    initData() {
      for (let i = 0; i < NUM; i++) {
        this.images.push({
          src: 'https://alipic.lanhuapp.com/webd6b1e153-7375-4843-9c46-c520a1c36127?x-oss-process=image/resize,h_234/format,webp'
        })
      }
    },
    initEvent() {
      let ulDom = document.querySelector('#ul')
      let liDoms = ulDom.querySelectorAll('li')
      console.log('liDoms: ', liDoms)
      for (let i = 0; i < NUM; i++) {
        let liDom = liDoms[i]
        liDom.addEventListener('click', this.liClick)
      }
    },
    myevent() {
      console.log('myevent')
    },
    back() {
      this.$router.back()
    },
    changeTeamName() {
      console.log('this: ', this)
      console.log('changeTeamName...')
    },
    // emit() {
    //   this.$root.eventHub.$emit('changeTeamName')
    // },
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
    // this.resetEvent()

    // this.$root.eventHub.$off('changeTeamName', this.changeTeamName)
    // this.$refs.empty.$off('myevent', this.myevent)
  }
}
</script>
<style scoped>
#btn {
  margin: 30px 0;
}
#ul {
  height: 100px;
  overflow-y: scroll;
}
#ul li {
  width: 100%;
  height: 30px;
}
</style>
