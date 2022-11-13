<template>
	<div>
		<nav>
			<ul class="tag">
				<li><span @click="pushTag($event)" :class="{tag_span: active1 }">推荐</span></li>
				<li><span @click="pushTag($event)" :class="{tag_span: active2 }">最新</span></li>
				<li><span @click="pushTag($event)" :class="{tag_span: active3 }">最热</span></li>
			</ul>
		</nav>
		<div>
			<div class="container-content">	
				<ul class="content-box">
					<li class="content-list" v-for="a in articleList.items" :key="a.id">
						<div class="info-box">
							<div class="info-row meta-row">
								<ul class="meta-list">
									<li><a href="javascript:void(0)" class="user">{{a.username}}</a></li>
									<li><a href="javascript:void(0)" class="user">{{a.gmtCreate}}</a></li>
									<li><a href="javascript:void(0)" class="user">{{a.ttags[0].name}}</a></li>
								</ul>
							</div>
							<div class="info-row title-row">
								<a @click="jumpToContentDetail(a)" class="info-title"><h3>{{a.title}}</h3></a>
							</div>
							<div class="info-row abstract-row">
								<span>
									{{a.content}}
								</span>
							</div>
							<div class="info-row action-row">
								<ul class="meta-list">
									<li class="action_item">
										<a @click="star(a.id)" class="action">
											<span>
												<img class="star_class" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e9d76988a7ae3392dc967cfbb64cd887.svg" alt="">
											</span>
											<span class="count">{{a.starts}}</span>
										</a>
									</li>
									<li class="action_item">
										<a href="javascript:void(0)" class="action">
											<i class="el-icon-view eyes"></i>
											<span class="count">{{a.view}}</span>
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
import { mapState } from 'vuex';

export default {
	name: 'Content',
	data() {
		return {
			tagParams: {
				"starts": "推荐",
				"date": "",
				"view": ""
			},
			page: 1,
			limit: 5,
			active1: false,
			active2: false,
			active3: false,
		}
	},
	computed: {
		...mapState({
            articleList: state => state.article.articleList,
        }),
	}
	,
	methods: {
		async getArticleList(page, limit, bodyParams) {
			try {
				await this.$store.dispatch('getArticleList', {page, limit, bodyParams});
			}catch (error) {
				this.$message.error(error);
			}
		},
		pushTag(e) {
			this.clearFlag();
			if (e.target.innerText === '推荐') {
				this.tagParams.starts = e.target.innerText;
				this.active1 = true;
			}else if (e.target.innerText === '最新') {
				this.tagParams.date = e.target.innerText;
				this.active2 = true;
			}else {
				this.tagParams.view = e.target.innerText;
				this.active3 = true;
			}
			this.getArticleList(this.page, this.limit, this.tagParams);

		},
		
		clearFlag() {
			this.tagParams.starts == '' ?  this.tagParams.starts : this.tagParams.starts = '';
			this.tagParams.date == '' ?  this.tagParams.date : this.tagParams.date = '';
			this.tagParams.view == '' ?  this.tagParams.view : this.tagParams.view = '';
			this.active1 = false;
			this.active2 = false;
			this.active3 = false;
		},
		
		async star(id) {
			try {
				await this.$store.dispatch('starBlog',id);
				this.getArticleList(this.page, this.limit, this.tagParams);
			}catch(error) {
				console.log(error);
			}
		},

		getPageAndLimit(page,limit) {
			this.page = page;
			this.limit = limit;
			this.getArticleList(this.page, this.limit, this.tagParams);
		},
		jumpToContentDetail(a) {
			localStorage.setItem('contentInfo', JSON.stringify({name: a.username, time: a.gmtCreate, title: a.title}));
			this.$router.push({name: 'ContentDetail', query: {id: a.id}});
		}
    },
	mounted() {
		this.getArticleList(this.page, this.limit, this.tagParams);

		this.$bus.$on('getCodingCharing_PageAndLimit',this.getPageAndLimit);
	},
	beforeDestroy() {
		this.$bus.$off('getCodingCharing_PageAndLimit');
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
.star_class {
	vertical-align: text-bottom;
}

.tag span:hover{
	cursor: pointer;
	text-decoration: underline;
	color: rgb(64, 158, 255);
}

.tag_span{
	color: rgb(64, 158, 255);
}
.eyes {
	color: gray;
}

.info-title:hover{
	cursor: pointer;
	text-decoration: underline;
}
</style>


