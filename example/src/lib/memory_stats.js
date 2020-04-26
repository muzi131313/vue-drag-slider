/**
 * @name MemoryStore
 * @description 内存查看
 * @created 2020年03月30日15:12:35
 */
export default function MemoryStore() {
  var script = document.createElement('script')
  script.onload = function() {
    // eslint-disable-next-line no-undef
    var stats = new MemoryStats()

    var elem = stats.domElement
    elem.style.position = 'fixed'
    elem.style.left = '0px'
    elem.style.bottom = '0px'
    elem.style.zIndex = 100000

    document.body.appendChild(stats.domElement)

    requestAnimationFrame(function rAFloop() {
      stats.update()
      requestAnimationFrame(rAFloop)
    })
  }

  script.src = 'https://rawgit.com/paulirish/memory-stats.js/master/memory-stats.js'
  document.head.appendChild(script)
}
