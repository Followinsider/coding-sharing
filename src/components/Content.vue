<template>
	<div>
		<nav>
			<ul class="tag">
				<li><a href="javascript:void(0)">推荐</a></li>
				<li><a href="javascript:void(0)">最新</a></li>
				<li><a href="javascript:void(0)">最热</a></li>
			</ul>
		</nav>
		<div>
			<div class="container-content">	
				<ul class="content-box">
					<li class="content-list">
						<div class="info-box">
							<div class="info-row meta-row">
								<ul class="meta-list">
									<li><a href="javascript:void(0)" class="user">lcx</a></li>
									<li><a href="javascript:void(0)" class="user">2022.10.30</a></li>
									<li><a href="javascript:void(0)" class="user">开发者</a></li>
								</ul>
							</div>
							<div class="info-row title-row">
								<router-link to="post" class="info-title"><h3>Hello! Coding_Charing!</h3></router-link>
							</div>
							<div class="info-row abstract-row">
								<span>
									Coding_Charing共享平台
								</span>
							</div>
							<div class="info-row action-row">
								<ul class="meta-list">
									<li class="action_item">
										<a href="#" class="action">
											<img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e9d76988a7ae3392dc967cfbb64cd887.svg" alt="">
											<span class="count">9999</span>
										</a>
									</li>
									<li class="action_item">
										<a href="#" class="action">
											<img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/4d5744f4ef07e8f1ffcc18697b71b12a.svg" alt="">
											<span class="count">9999</span>
										</a>
									</li>
									<li></li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				
				<div class="aside">
					<h3>相关网址推荐</h3>
					<el-collapse >
						<el-collapse-item title="JavaScript" name="1">
							<div>
								<a href="https://underscorejs.org/" target="_blank">Underscore.js</a>
								<p>一套完善的函数式编程的接口，更方便地在JavaScript中实现函数式编程</p>
							</div>
							<div>
								<a href="https://github.com/ftlabs/fastclick" target="_blank">fastclick</a>
								<p>用于消除物理点击和click移动浏览器上事件触发之间的 300 毫秒延迟</p>
							</div>
						</el-collapse-item>
						<el-collapse-item title="CSS" name="2">
							<div>
								<a href="https://cssfx.netlify.app/" target="_blank">cssfx</a>
								<p>精美简单的点击复制 CSS 效果</p>
							</div>
							<div>
								<a href="https://hashflags.io/" target="_blank">Twitter Hashflags</a>
								<p>Twitter 点赞动画</p>
							</div>
						</el-collapse-item>
						<el-collapse-item title="编程工具" name="3">
							<div>
								<a href="https://www.toptal.com/developers/gitignore" target="_blank">gitignore.io</a>
								<p>为项目创建有用的 .gitignore 文件</p>
							</div>
							<div>
								<a href="https://any86.github.io/any-rule/" target="_blank">any-rule</a>
								<p>常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台</p>
							</div>
						</el-collapse-item>
						<el-collapse-item title="Web UI库" name="4">
							<div>
								<a href="https://element-plus.org/zh-CN/" target="_blank">ElementUI Plus</a>
								<p>一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库</p>
							</div>
							<div>
								<a href="https://www.antdv.com/docs/vue/introduce-cn" target="_blank">Ant Design of Vue</a>
								<p>Ant Design 的 Vue 实现，开发和服务于企业级后台产品</p>
							</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</div>
		</div>			
	</div>
</template>

<script>
export default {
	name: 'Content',
	data() {
		return {
			
		}
	},
	methods: {
		
    }
};
</script>

<style scoped>
.aside {
	width: 35%;
	height: 600px;
	margin-left: 20px;
}

/deep/ .el-collapse-item__content {
	padding-bottom: 5px;
    font-size: 13px;
    color: #303133;
    line-height: 1.769230769230769;
}
</style>


