import { createStore } from 'vuex'

const storeModulesFiles = import.meta.globEager('./modules/*.ts')

const storeModules = Reflect.ownKeys(storeModulesFiles).reduce((modules: any, modulePath: string | symbol) => {
  let moduleName: string = ''
  if (typeof modulePath !== 'symbol') {
    moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
    modules[moduleName] = storeModulesFiles[modulePath].default
  }
  return modules
}, {})

const store = createStore({
  modules: storeModules
})

export default store
