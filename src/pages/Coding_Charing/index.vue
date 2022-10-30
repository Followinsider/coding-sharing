<template>
	<!-- 导航栏的粘性布局后续还需改善 -->
	<div class="scroll" @scroll="handleScroll">
		<header :class="{visiable:!isMoveDown,'blog-header py-3':true}">
		<!-- <header class="blog-header py-3"> -->
			<div class="row flex-nowrap justify-content-between align-items-center">
				<div class="col-4 pt-1">
					<a class="text-muted a-distance" href="#">Coding知识共享</a>
					<a class="text-muted a-distance" href="#">师兄师姐说</a>
				</div>
				
				<div class="col-4 d-flex justify-content-end align-items-center">
					<div class="create_login">
						<el-dropdown split-button type="primary" @click="toEdit">
						创作者中心
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>我的中心</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						<el-button type="primary" plain class="login" @click="login_register">登录 | 注册
						</el-button>
					</div>
					<!-- <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a> -->
				</div>
			</div>
		</header>
		<div :class="{'view-nav':isMoveDown,'top':!isMoveDown,'container':true}">
			<div class="nav-scroller py-1 mb-2">
				<nav class="nav d-flex justify-content-between">
					<a class="p-2 text-muted" href="#">综合</a>
					<a class="p-2 text-muted" href="#">前端</a>
					<a class="p-2 text-muted" href="#">后端</a>
					<a class="p-2 text-muted" href="#">移动端</a>
					<a class="p-2 text-muted" href="#">算法</a>
					<a class="p-2 text-muted" href="#">UI设计</a>
					<a class="p-2 text-muted" href="#">校内课程</a>
				</nav>
			</div>
		</div>

		<main role="main" class="container">
			<Content/>
		</main>

		<!-- 知识共享最后给一句鸡汤 -->
		<footer class="blog-footer">
			<p>
			哈哈哈哈哈哈哈
			</p>
			<p>
				<a href="#">回到顶部</a>
			</p>
		</footer>
	</div>
</template>

<script>
import Content from './Content.vue'
export default {
	name: "Coding-Charing",
	data() {
		return {
			isMoveDown: true,
			oldScrollTop: 0,
		}
	},
	components: {Content},
	methods: {
		toEdit() {
			this.$router.push('edit')
		},
		login_register() {
			this.$router.push('login')
		},
		handleScroll(e) {
			let scrollStep = e.target.scrollTop - this.oldScrollTop;
			this.oldScrollTop = e.target.scrollTop;
			if (scrollStep > 0) {
				this.isMoveDown = true;
			}else {
				this.isMoveDown = false;
			}
			
		}
	},
};
</script>

<style>
@import url('../../assets/css/bootstrap.css');
@import url('../../assets/css/coding_charing.css');
ul {
	margin-bottom: 0;	
}
.a-distance {
	margin-right: 4px;
}
.el-dropdown {
	vertical-align: top;
}
.el-dropdown + .el-dropdown {
	margin-left: 15px;
}
.el-icon-arrow-down {
	font-size: 12px;
}
.login {
	margin-left: 30px;
}
button:focus {
	outline: 0;
}
.content-box {
	display: flex;
	position: relative;
	flex-direction: column;
	width: 75%;
}
.content-list {
	list-style: none;
	border-bottom: 2px solid rgba(178,186,194,.15);
	margin-bottom: 26px;
}
.tag {
	width: 160px;
	/* height: 16px; */
	display: flex;
	justify-content: space-around;
}
.tag > li {
	list-style: none;
	margin: 10px 2px;
}
.user {
	color:gray;
	font-size: 14px;
}

.info-box {
	display: flex;
	flex-direction: column;
}

.meta-list {
	display: flex;
	list-style: none;
	align-items: baseline;
	white-space: nowrap;
}
.meta-list li {
	margin-right: 10px;
}
.info-title {
	color: black;
}

.info-abstract {
	color: black;
}
.info-abstract:hover {
	color: none;
}

.action {
	display: flex;
    border: 1px solid rgb(237, 238, 239);
}
.action:hover {
	text-decoration: none;
}
.action_item {
	margin-top: 12px;
	font-size: 14px;
}
.count {
	color: #b2bac2;
    margin-left: 0.2em;
    font-weight: 700;
}

.container-content {
	display: flex;
}
.aside {
	width: 25%;
	height: 600px;
}


.scroll {
	overflow: scroll;
	height: 100vh;
}
.visiable {
	/* position: fixed;
	top: 0;
	width: 100%;
	border-bottom: 0; */
	transform: translateZ(0);
}
.view-nav {
	position: fixed;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    transition: all .2s;
    transform: translateZ(0);
	top: -0.4rem;
	width: 100%;
	z-index: 100;
	margin: 0 11%;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
	background-color: #fff;
}
.top {
	transform: translate3d(0,-0.4rem,0);
	top: 1rem;
    width: 100%;
	z-index: 100;
}


.text-muted {
	line-height: 40px;
}
</style>