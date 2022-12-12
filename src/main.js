import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import './assets/css/bootstrap.css'
import './assets/css/coding_charing.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
import {Alert, Message, Dropdown, DropdownMenu, DropdownItem, Button, Avatar, Link, Collapse, CollapseItem, Input, Select, Option, Backtop} from 'element-ui'
Vue.component(Alert.name,Alert)
Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(Button.name,Button)
Vue.component(Avatar.name,Avatar)
Vue.component(Link.name,Link)
Vue.component(Collapse.name,Collapse)
Vue.component(CollapseItem.name,CollapseItem)
Vue.component(Input.name,Input)
Vue.component(Select.name,Select)
Vue.component(Option.name,Option)
Vue.use(Backtop.name,Backtop)

Vue.prototype.$message = Message



//引入仓库
import store from '@/store';

// 引入第三方icon
// import "./assets/icon/iconfont.css";

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
}).$mount('#app')
