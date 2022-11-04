import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from "lodash";
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import {Alert, Message, Dropdown, DropdownMenu, DropdownItem, Button, Avatar, Link, Collapse, CollapseItem} from 'element-ui'
Vue.component(Alert.name,Alert)
Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(Button.name,Button)
Vue.component(Avatar.name,Avatar)
Vue.component(Link.name,Link)
Vue.component(Collapse.name,Collapse)
Vue.component(CollapseItem.name,CollapseItem)

Vue.prototype.$message = Message


import mavonEditor from 'mavon-editor'
Vue.use(mavonEditor)

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
}).$mount('#app')
