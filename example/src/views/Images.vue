<template>
  <div>
    <ul>
      <li v-for="(image, key) in images" :key="key">
        <image :src="image.src" width="100px"></image>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Images',
  data() {
    return {
      images: []
    }
  },
  created() {
    for (var i = 0; i < 100; i++) {
      this.images.push({
        src: 'https://alipic.lanhuapp.com/webd6b1e153-7375-4843-9c46-c520a1c36127?x-oss-process=image/resize,h_234/format,webp'
      })
    }
  }
}
</script>
