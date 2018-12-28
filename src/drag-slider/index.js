/**
 * @file index.js
 * @desc {{description}}{{drag slider entry}}
 * @createTime 2018-12-18 15:29:39
 * @author {{muzi131313}} {{muzi131313@163.com}}{{}}
 */
import dragSlider from './drag-slider'

const install = (Vue, opts = {}) => {
  // 如果安装过就忽略
  if (install.installed) return

  Vue.component(dragSlider.name, dragSlider)
}

// 自动安装 方便打包成压缩文件, 用<script scr=''></script>的方式引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export const DragSlider = dragSlider

export default {
  install
}
