<template>
    <div class="content-detail-background">
        <Header></Header>
        <main role="main" class="container">
            <div class="row">
                <article class="col-md-8 blog-main article_content">
                    <div class="blog-post">
                        <h2 class="blog-post-title">{{contentInfo.title}}</h2>
                        <p class="blog-post-meta">{{contentInfo.time}} <a href="https://github.com/Followinsider" target="_blank">{{contentInfo.name}}</a></p>
                        <template>
                            <el-skeleton :loading="loading"/>
                            <div v-html="pageHTML" v-show="!loading"></div>
                        </template>
                    </div>
                    <div class="divider"></div>
                    <Comment/>
                </article>
                <aside class="col-md-4 blog-sidebar">
                    <div class="aside_introduce">
                        <h4 class="font-italic">往期文章</h4>
                        <ol class="list-unstyled mb-0">
                            <li><a href="javascript:void(0)">March 2014</a></li>
                            <li><a href="javascript:void(0)">February 2014</a></li>
                        </ol>
                    </div>

                    <div class="aside_introduce">
                        <h4 class="font-italic">联系方式</h4>
                        <ol class="list-unstyled">
                            <li><a href="javascript:void(0)">GitHub</a></li>
                            <li><a href="javascript:void(0)">掘金</a></li>
                            <li><a href="javascript:void(0)">微博</a></li>
                        </ol>
                    </div>

                    <!-- 后续 粘滞效果 需要再完善 -->
                    <div class="aside_content">
                        <nav class="article-catalog">
                            <div class="catalog-title">
                                目录
                            </div>
                            <div class="catalog-body">
                                <ul>
                                    <li
                                        :class="{active: activeIndex === index ?  true : false, 'item': true}" 
                                        v-for="(i, index) in contentList" 
                                        :key="index" 
                                        :title="i.content" 
                                        @click="jump(index)"
                                    >
                                    <div :style="{ marginLeft: size(i.id) }">
                                        {{ i.content }}
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                </aside>
            </div>
        </main>
    </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Comment from '../../components/Comment.vue';
import {mavonEditor} from 'mavon-editor';

export default {
    name: "ContentDetail",
    data() {
        return {
            pageHTML: '',
            contentList: [],
            activeIndex: 1,
            contentInfo: JSON.parse(localStorage.getItem('contentInfo')),
            loading: true
        }
    },
    components: {Header, Comment},
    methods: {
        async getBlogContent() {
            try {
                let result = await this.$store.dispatch('getBlogContent',this.$route.query.id);
                const markdownIt = mavonEditor.getMarkdownIt()
                this.pageHTML = markdownIt.render(result.TBlogvo.content);
                this.content();
                this.loading = false;
            }catch (error) {
                console.log(error);
            }
        },
        async view() {
			try {
				await this.$store.dispatch('viewBlog',this.$route.query.id);
			}catch (error) {
				console.log(error);
			}
		},
        content() {
            const toc = this.pageHTML.match(/<(h[1-6]).*?\>.*?<\/[hH][1-6]>/g);
            if (toc) {
                toc.forEach((item, index) => {
                    let _toc = `<div class="jump-site" id=${index}>${item}</div>`;
                    this.pageHTML = this.pageHTML.replace(item, _toc);
                });
                this.contentList= toc.map((item) => {
                    let data = item.match(/^<[Hh](\d).*?><a.*?><\/a>(.*?)</);
                    return { id: data[1], content: data[2] };
                });
            }
        },
        size(num) {
            return num * 10 + "px";
        },
        jump(index) {
            this.activeIndex = index;
            let target = document.getElementById(index).offsetTop;
            if (target) {
                window.scrollTo({
                    top: target - 80,
                });
            }
        },
    },
    mounted() {
        this.view();
        this.getBlogContent();
    },

}
</script>

<style scoped>
.divider {
    /* border-bottom: 1px solid rgba(178,186,194,0.3); */
    width: 120%;
    margin-left: -5%;
    height: 20px;
    background-color: rgb(244, 245, 245);
}
.article-catalog {
    background: #fff;
    border-radius: 4px;
    border: 1px solid gray;
    overflow: auto;
    height: 85vh;
}
.catalog-title {
    font-weight: 500;
    padding: 1.333rem 0;
    margin: 0 1.667rem;
    font-size: 16px;
    line-height: 2rem;
    color: #1d2129;
    border-bottom: 1px solid #e4e6eb;
}
.catalog-body {
    margin: 8px 4px 0 0;
    overflow: auto;
    position: relative;
}
.catalog-list {
    position: relative;
    line-height: 22px;
    padding: 0 0 12px;
}
.catalog-list .item {
    margin: 0;
    padding: 0;
    font-size: 1.167rem;
    font-weight: 400;
    line-height: 22px;
    color: #333;
    list-style: none;
    display: inline=block;
}

.item:hover {
    cursor: pointer;
    background-color: rgb(247, 248, 250);
}
.active {
    color: #007bff;
}
.aside_introduce {
    padding: 0.5rem;
    border: 1px solid #fff;
    padding: 1rem 1.6rem;
    background-color: #fff;
    margin-bottom: 1.6rem;
}
.aside_content {
    position: sticky;
    top: 78px;
}
.row {
    margin-top: 1.5rem;
}
.content-detail-background {
    background-color: rgb(244, 245, 245);
}
.article_content {
    border: 1px solid #fff;
    padding: 1rem 1.6rem;
    background-color: #fff;
}
</style>