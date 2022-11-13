<template>
    <div>
        <el-page-header @back="goBack" content="主页面" style="font-size: 36px;">
        </el-page-header>
        <div class="main">
            <div class="main_question">
                <span style="font-size: 26px;margin-right: 12px;">提问</span>
                <span>
                    <el-select v-model="tagId" placeholder="请选择问题分类">
                        <el-option
                            v-for="item in ttags"
                            :key="item.id"
                            :value="item.name">
                        </el-option>
                    </el-select>
                </span>
            </div>
            
            <div class="title">
                <div>
                    <textarea class="description" placeholder="添加问题描述（必填）" v-model="content"></textarea>
                </div>
            </div>
            <el-button type="primary" plain @click="publish_question" class="publish_question">发布<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Question',
    data() {
        return {
            content: '',
            tagId: '',
        }
    },
    methods: {
        goBack() {
            if (this.content !== '') {
                this.$message.info('此时还有问题描述未发布')
            }else {
                this.$router.push('/')
            }
        },
        async publish_question() {
            let obj = {};
            obj.content = this.content;
            obj.tagId = this.tagId;
            obj.userId = this.userId;
            try {
                await this.$store.dispatch('askQuestion',obj);
                this.$message.success('发布成功');
                this.content = '';
                this.tagId = '';
            }catch (error) {
                console.log(error);
            }
        },

    },
    mounted() {
        this.$store.dispatch('getTag')
        this.$store.dispatch('userInfo')
    },
    computed: {
        ...mapState({
            ttags: state => state.article.tagList,
            userId: state => state.user.userInfo.user.id
        })
    }
}
</script>
<style scoped>
.main {
    text-align: center;
    /*让div内部文字居中*/
    border-radius: 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
    width: 700px;
    height: 450px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-style: solid;
    border-color: #aaa;
}

.title {
    margin: 0 auto;
    height: 280px;
    width: 600px;
}

.description {
    margin: 10px auto;
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    font-size: 14px;
    color: #606266;
    height: 280px;
    line-height: 40px;
    padding: 0 15px;
    width: 90%;
    resize: none;
    outline-color: #409EFF;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.description::input-placeholder {
    color: #C0C4CC;
}

.description::input-placeholder {
    color: #C0C4CC;
}

.description::-webkit-input-placeholder {
    color: #C0C4CC;
}

.description::-moz-placeholder {
    color: #C0C4CC;
}

.description::-moz-placeholder {
    color: #C0C4CC;
}

.description::-ms-input-placeholder {
    color: #C0C4CC;
}
.main_question {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
}
.publish_question {
    margin-top: 40px;
}
</style>