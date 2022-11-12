<template>
    <div>
        <Header></Header>
        <main role="main" class="container">
            <div class="row">
                <div class="col-md-8 blog-main">
                    <div class="blog-post">
                        <h2 class="blog-post-title">{{$route.params.title}}</h2>
                        <p class="blog-post-meta">{{$route.params.time}} <a href="https://github.com/Followinsider">{{$route.params.name}}</a></p>

                        <div v-html="pageHTML"></div>

                    </div>

                    <div class="divider"></div>
                    <Comment/>
                    
                </div>

                <aside class="col-md-4 blog-sidebar">
                    <div class="p-4">
                        <h4 class="font-italic">往期文章</h4>
                        <ol class="list-unstyled mb-0">
                            <li><a href="javascript:void(0)">March 2014</a></li>
                            <li><a href="javascript:void(0)">February 2014</a></li>
                            <li><a href="javascript:void(0)">January 2014</a></li>
                            <li><a href="javascript:void(0)">December 2013</a></li>
                            <li><a href="javascript:void(0)">November 2013</a></li>
                            <li><a href="javascript:void(0)">October 2013</a></li>
                            <li><a href="javascript:void(0)">September 2013</a></li>
                            <li><a href="javascript:void(0)">August 2013</a></li>
                            <li><a href="javascript:void(0)">July 2013</a></li>
                            <li><a href="javascript:void(0)">June 2013</a></li>
                            <li><a href="javascript:void(0)">May 2013</a></li>
                            <li><a href="javascript:void(0)">April 2013</a></li>
                        </ol>
                    </div>

                    <div class="p-4">
                        <h4 class="font-italic">联系方式</h4>
                        <ol class="list-unstyled">
                            <li><a href="javascript:void(0)">GitHub</a></li>
                            <li><a href="javascript:void(0)">Twitter</a></li>
                            <li><a href="javascript:void(0)">Facebook</a></li>
                        </ol>
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
        }
    },
    components: {Header, Comment},
    methods: {
        async getBlogContent() {
            try {
                let result = await this.$store.dispatch('getBlogContent',this.$route.params.id);
                const markdownIt = mavonEditor.getMarkdownIt()
                this.pageHTML = markdownIt.render(result.TBlogvo.content);
            }catch (error) {
                console.log(error);
            }
        },
        async view() {
			try {
				await this.$store.dispatch('viewBlog',this.$route.params.id);
			}catch (error) {
				console.log(error);
			}
		},
    },
    mounted() {
        this.getBlogContent();
        this.view();
    }

}
</script>

<style scoped>
.divider {
    border-bottom: 1px solid rgba(178,186,194,0.3);
}
</style>