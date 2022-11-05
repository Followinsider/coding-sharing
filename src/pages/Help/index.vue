<template>
    <div>
        <el-page-header @back="goBack" content="主页面">
        </el-page-header>
        <div class="main">
            <h2 style="margin-top: 30px;margin-bottom: 10px;">提问</h2>
            <div class="title">
                <el-input type="text" style="margin-top: 20px;width: 90%;" placeholder="请输入问题" v-model="question_title"
                    maxlength="100" show-word-limit>
                </el-input>
                <div>
                    <textarea class="description" placeholder="添加问题描述（选填）" v-model="question_description"></textarea>
                </div>
            </div>
            <el-button type="primary" plain>发布<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Help',
    data() {
        return {
            question_title: '',
            question_description: ''
        }
    }, methods: {
        goBack() {
            this.$router.push('/')
        }
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
    margin-bottom: 10px;
    /* border: 1px solid #aaa; */
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
    height: 180px;
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
</style>