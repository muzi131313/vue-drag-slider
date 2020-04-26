// import http from '@/http'
import axiosPro from 'axios-pro'
import mappers from '@/http/mappers'
// import MemoryStore from '@/lib/memory_stats.js'

export default Vue => {
  // MemoryStore()
  Vue.prototype.$BASE_URL = process.env.BASE_URL
  Vue.use(axiosPro, {
    mappers,
    config: {
      handlers: {
        timeout (msg) {
          console.log('timeout: ', msg)
        },
        data (data = {}) {
          const code = data.code
          console.log('errorInfo: ', code)
        },
        error (errorInfo) {
          console.log('errorInfo: ', errorInfo)
        }
      }
    }
  })
}
