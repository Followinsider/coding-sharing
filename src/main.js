import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from "lodash";
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import {Alert, Message, Dropdown, DropdownMenu, DropdownItem, Button} from 'element-ui'
Vue.component(Alert.name,Alert)
Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(Button.name,Button)

Vue.prototype.$message = Message
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
