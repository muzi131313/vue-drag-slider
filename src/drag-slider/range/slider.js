/*!
 * ==========================================================
 *  RANGE SLIDER 2.0.1
 * ==========================================================
 * Author: Taufik Nurrohman <https://github.com/tovic>
 * License: MIT
 * ----------------------------------------------------------
 */

function RS(target, event, vertical, options) {
  event = event || {}

  var ranger = options.ranger
  var dragger = options.dragger
  var exceptClasses = options.exceptClasses

  var win = window
  var doc = document
  // var ranger = doc.createElement('div')
  // var dragger = doc.createElement('span')
  var drag = false
  var rangerSize = 0
  var draggerSize = 0
  var rangerDistance = 0
  var cacheValue = 0
  var size = vertical ? 'offsetHeight' : 'offsetWidth'
  var css = vertical ? 'top' : 'left'
  var page = vertical ? 'pageY' : 'pageX'
  var offset = vertical ? 'offsetTop' : 'offsetLeft'
  var client = vertical ? 'clientY' : 'clientX'
  var scroll = vertical ? 'scrollTop' : 'scrollLeft'
  vertical = vertical || event.vertical || false

  function isSet(x) {
    return typeof x !== 'undefined'
  }

  function isFunc(x) {
    return typeof x === 'function'
  }

  // 浏览器是否支持passive
  // doc: https://juejin.im/post/5ad804c1f265da504547fe68
  function passiveSupported() {
    var passiveSupported = false
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function() {
          passiveSupported = true
        }
      })

      if (window.addEventListener) {
        window.addEventListener('test', null, options)
        setTimeout(() => {
          window.removeEventListener('test', null, options)
        }, 0)
      }
    }
    catch (err) {
      console.warn('passiveSupported() error: ', err)
    }
    return passiveSupported
  }

  function getCoordinate(el) {
    var x = el[offset]
    while ((el = el.offsetParent)) {
      x += el[offset]
    }
    return x
  }

  function on(ev, el, fn) {
    if (el.addEventListener) {
      var isPassiveSupported = passiveSupported()
      // https://developers.google.com/web/updates/2016/06/passive-event-listeners?hl=zh-cn
      el.addEventListener(ev, fn, isPassiveSupported ? { passive: false } : false)
    }
    else if (el.attachEvent) {
      el.attachEvent('on' + ev, fn)
    }
    else {
      el['on' + ev] = fn
    }
  }

  function off(ev, el, fn) {
    if (el.removeEventListener) {
      el.removeEventListener(ev, fn)
    }
    else if (el.detachEvent) {
      el.detachEvent('on' + ev, fn)
    }
    else {
      el['on' + ev] = null
    }
  }

  // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
  var getClosest = function(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector
        || Element.prototype.mozMatchesSelector
        || Element.prototype.msMatchesSelector
        || Element.prototype.oMatchesSelector
        || Element.prototype.webkitMatchesSelector
        || function(s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s)
          var i = matches.length
          while (--i >= 0 && matches.item(i) !== this) {
            // nothing
          }
          return i > -1
        }
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem
    }
    return null
  }

  // function addClass(s, el) {
  //   if (el.classList) {
  //     el.classList.add(s)
  //   }
  //   else {
  //     el.className += ' ' + s
  //   }
  // }

  // addClass('range-slider', target)
  // addClass('range-slider-' + (vertical ? 'vertical' : 'horizontal'), target)
  // addClass('range-slider-track', ranger)
  // addClass('dragger', dragger)

  // `RS(target, function(a, b, c) {})`
  if (isFunc(event)) {
    event = {
      drag: event
    }
  }

  function edge(a, b, c) {
    if (a < b) return b
    if (a > c) return c
    return a
  }

  function preventDefault(e) {
    var target = e.target
    // console.log('target: ', target)
    if (exceptClasses && exceptClasses.length) {
      var flag = false
      for (var i = 0; i < exceptClasses.length; i++) {
        var exceptClass = exceptClasses[i]
        var findDom = getClosest(target, '.' + exceptClass)
        var exceptDom = document.querySelector('.' + exceptClass)
        // console.log('findDom: ', findDom, exceptDom, exceptDom === target)
        if (findDom
          || (exceptDom && exceptDom === target)) {
          flag = true
        }
      }
      if (flag) {
        return
      }
    }
    // doc: https://www.chromestatus.com/features/5093566007214080
    if (e.preventDefault) e.preventDefault()
    return false
  }

  function setSize() {
    rangerSize = ranger[size]
    rangerDistance = getCoordinate(ranger)
    draggerSize = dragger[size]
  }

  function dragInit() {
    cacheValue = edge(isSet(event.value) ? event.value : 0, 0, 100)
    dragger.style[css] = (cacheValue / 100) * rangerSize - draggerSize / 2 + 'px'
    if (isFunc(event.create)) event.create(cacheValue, target)
    if (isFunc(event.drag)) event.drag(cacheValue, target)
  }

  function dragStart(e) {
    setSize()
    drag = true
    dragUpdate(e)
    on('touchmove', doc, dragMove)
    on('mousemove', doc, dragMove)
    if (isFunc(event.start)) event.start(cacheValue, target, e)
    return preventDefault(e)
  }

  function dragMove(e) {
    dragUpdate(e)
    return preventDefault(e)
  }

  function dragStop(e) {
    drag = false
    off('touchmove', doc, dragMove)
    off('mousemove', doc, dragMove)
    if (isFunc(event.stop)) event.stop(cacheValue, target, e)
    return preventDefault(e)
  }

  function dragUpdate(e) {
    e = e || win.event
    var pos = e.touches ? e.touches[0][page] : e[page]
    var move = edge(pos - rangerDistance, 0, rangerSize)
    var value = edge(((pos - rangerDistance) / rangerSize) * 100, 0, 100)
    if (!pos) pos = e[client] + doc.body[scroll] + doc.documentElement[scroll]
    if (drag) {
      dragger.style[css] = move - draggerSize / 2 + 'px'
      cacheValue = Math.round(value)
      if (isFunc(event.drag)) event.drag(cacheValue, target, e)
    }
  }

  on('touchstart', ranger, dragStart)
  on('mousedown', ranger, dragStart)

  on('touchend', doc, dragStop)
  on('mouseup', doc, dragStop)

  on('resize', win, function(e) {
    setSize()
    drag = false
    dragger.style[css] = (cacheValue / 100) * rangerSize - draggerSize / 2 + 'px'
  })

  ranger.appendChild(dragger)
  target.appendChild(ranger)

  setSize()
  dragInit()

  return target
}

export default RS
