import TabMain from './src/views/TabMain.vue'
import TabInit from './src/views/TabInit.vue'

export default [
  {
    path: '/',
    name: 'main',
    component: TabMain
  },
  {
    path: '/init',
    name: 'init',
    component: TabInit
  }
]
