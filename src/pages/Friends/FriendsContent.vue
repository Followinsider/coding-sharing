<template>
    <div class="grid-container">
        <div class="grid-item" v-for="q in questionList" :key="q.id">
            
            <!-- 展示的文章列表 -->
            <el-card class="box-card" shadow="hover">
                <el-tag type="success">{{ q.gmtCreate }}</el-tag>
                <el-button type="text" @click="showDetails">详情</el-button>
                <div class="box-card-content">
                    <span class="box-card-content-title">{{ q.content }}</span>
                </div>
            </el-card>

            <!-- 展示单篇文章详情 -->
            <el-drawer
                title=""
                :visible.sync="details"
                :direction="direction"
                :before-close="handleClose"
                size='50%'
                :show-close = false
            >
                <template slot="title">
                    <span>{{q.content}}</span>
                    <ul class="meta-list">
                        <li><img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt=""></li>
                        <li>{{ q.username }}</li>
                        <li>{{ q.gmtCreate }}</li>
                    </ul>
                </template>

                <Comment/>

            </el-drawer>
        </div>
        
    </div>
</template>

<script>
import Comment from '@/components/Comment';
import { mapState } from 'vuex';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'FriendsContent',
    components: { Comment },
    data() {
        return {
            details: false,
            inputValue: '',
            direction: 'rtl',
            page: 1,
            limit: 5
        }
    },
    computed: {
        ...mapState({
            questionList: state => state.question.questionMsg.items,
        }),
    },
    methods: {
        showDetails() {
            this.details = !this.details;
        },
        handleClose(done) {
            done();
        },
        // 获取问题列表
        async getQuestions(page, limit ) {
            try {
                await this.$store.dispatch('getQuestionList',{page, limit});
            }catch (error) {
                this.$message.error(error);
            }
        },

        // 获取page 和 limit 用于对接分页查询接口
        getPageAndLimit_question(page,limit) {
			this.page = page;
			this.limit = limit;
			this.getQuestions(this.page, this.limit);
		}
        
    },
    mounted() {
        this.getQuestions(this.page, this.limit);

		this.$bus.$on('getFriends_PageAndLimit',this.getPageAndLimit_question);
        
    },
    beforeDestroy() {
        this.$bus.$off('getFriends_PageAndLimit');
        
    }
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px 120px;
}

.grid-item {
    margin-top: 15px;
}

.box-card {
    width: 300px;
    height: 200px;
}

.pageDivide {
    margin: 30px;
    text-align: center;
    height: 50px;
    border-bottom-color: #aaa;
}

ul {
    margin: 25px;
}

ul li {
    list-style: none;
    display: inline;
    padding: 10px;
}

ul li img {
    height: 40px;
    width: 40px
}

.meta-list {
    margin: 0;
}

</style>