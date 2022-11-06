<template>
	<!-- 导航栏的粘性布局后续还需改善 -->
	<div class="scroll" @scroll="handleScroll">

		<!-- 顶部栏，包含系统功能的选项 -->
        <Header :isMoveDown="isMoveDown"></Header>

		<!-- 文章标签 -->
		<ContentTag :isMoveDown="isMoveDown"/>

		<main role="main" class="container">
			<Content/>
		</main>

		<!-- 知识共享最后给一句鸡汤 -->
		<footer class="blog-footer">
			<p>好看的在最后</p>
			<p>
				<a href="javascript:void(0)">回到顶部</a>
			</p>
		</footer>
	</div>
</template>

<script>
import Content from '../../components/Content.vue';
import Header from '../../components/Header.vue';
import ContentTag from '../../components/ContentTag.vue';
import header from '@/mixin/header'
export default {
	name: "Coding-Charing",
	mixins: [header],
	data() {
		return {
			
		}
	},
	components: {Content, Header, ContentTag},
};
</script>

<style>
ul {
	margin-bottom: 0;
}

.a-distance {
	margin-right: 4px;
}

.el-dropdown {
	vertical-align: top;
}

.el-dropdown+.el-dropdown {
	margin-left: 15px;
}

.el-icon-arrow-down {
	font-size: 12px;
}

.login {
	margin-left: 30px;
}
.content-box {
	display: flex;
	position: relative;
	flex-direction: column;
	width: 75%;
}

.content-list {
	list-style: none;
	border-bottom: 2px solid rgba(178, 186, 194, .15);
	margin-bottom: 26px;
}

.tag {
	width: 160px;
	/* height: 16px; */
	display: flex;
	justify-content: space-around;
}

.tag>li {
	list-style: none;
	margin: 10px 2px;
}

.user {
	color: gray;
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

/* .visiable {
	transform: translateZ(0);
} */
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
	transform: translate3d(0, -0.4rem, 0);
	top: 1rem;
	width: 100%;
	z-index: 100;
}


.text-muted {
	line-height: 40px;
}

.row {
	margin: 0;
}

.el-dropdown {
	vertical-align: 0;
}

.scroll {
	overflow: scroll;
	height: 100vh;
}
</style>