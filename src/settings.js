// 引入sentry
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
// 基本配置
export default (Vue) => {
  // 如果是非线上环境，不加载 VConsole
  if (process.env.NODE_ENV !== 'production') {
    var VConsole = require('vconsole/dist/vconsole.min.js')
    // eslint-disable-next-line
        var vConsole = new VConsole();

    Vue.config.performance = true
  }
}
