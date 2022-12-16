<template>
    <div class="editor">
        <div class="info">
            <div class="left">
                <span class="icon_back" @click="goBack"><i class="el-icon-arrow-left"></i></span>
                <el-input 
                    v-model="title" 
                    placeholder="输入文章标题..." 
                    class="title" 
                    size="middle"
                    maxlength="30"
                    show-word-limit
                >
                </el-input>
            </div>
            
            <div class="right">
                <div class="right_tag">
                    <span>文章所属分类</span>
                    <el-select v-model="tags" placeholder="请选择">
                        <el-option
                        v-for="item in ttags"
                        :key="item.id"
                        :value="item.name">
                        </el-option>
                    </el-select>
                </div>
                <div class="right_publish">
                    <el-button plain @click="toUser">草稿箱</el-button>
                    <el-button type="info" @click="savaDrafts">保存草稿</el-button>
                    <el-button type="primary" class="publish" @click="publish">发布</el-button>
                    <el-dropdown @command="handleCommand" class="dropdown">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="avatar"></el-avatar>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus" command="user">我的主页</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <mavon-editor v-model="tblogbodyParam.content" :toolbars="toolbars" @change="change" @save="save"></mavon-editor>
    </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor';
import {mapState} from 'vuex';
export default {
    name: 'Edit',
    components: {mavonEditor},
    data() {
        return {
            tblogbodyParam: {
                content: '',
                contentHtml: '',
            },
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                // subfield: true, // 单双栏模式
                preview: true, // 预览
            },
            title:'',
            tags: '',
        }
    },
    methods: {
        toUser() {
            this.$router.push('user')
        },
        collectData() {
            let object = {};
            object.ttags = [];
            object.tblogbodyParam = this.tblogbodyParam;
            object.title = this.title;
            object.ttags = this.ttags.filter(item => item.name == this.tags);
            object.userId = this.userId;
            console.log(object);
            return object;
        },
        clearData() {
            this.tblogbodyParam.content = '';
            this.contentHtml = '';
            this.title = '';
            this.tags = '';
        },
        async publish() {
            let object = this.collectData();
            try {
                if (object.tblogbodyParam.content !== '' && object.title && object.ttags.length > 0 && object.userId) {
                    await this.$store.dispatch('publish',object);
                    this.$message.success('发布成功！');
                    this.clearData();
                }else {
                    this.$message.error('请检查是否填写内容/标题/文章所属分类');
                }
            }catch(error) {
                console.log(error)
            }
        },

        change: _.debounce(function(value, render) {
            this.tblogbodyParam.contentHtml = render;
        },800),

        save(value,render) {
            this.tblogbodyParam.content = value;
            this.tblogbodyParam.contentHtml = render;
            this.$message.success('保存成功');
        },

        async savaDrafts() {
            let object = this.collectData();
            try {
                if (object.tblogbodyParam.content !== '' && object.title && object.ttags.length > 0 && object.userId) {
                    await this.$store.dispatch('saveBlog',object);
                    this.$message.success('保存草稿成功');
                    this.clearData();
                }else {
                    this.$message.error('请检查是否填写内容/标题/文章所属分类');
                }
            }catch(error) {
                console.log(error)
            }
        },

        handleCommand() {
            this.$router.push('/home');
        },
        
        goBack() {
            if (this.title !== '' || this.tblogbodyParam.content !== '') {
                this.$message.info('离开之前请保存草稿')
            }else {
                this.$router.push('/')
            }
        }
    },
    mounted() {
        this.$store.dispatch('getTag')
        this.$store.dispatch('userInfo')
    },
    computed: {
        ...mapState({
            ttags: state => state.article.tagList,
            userId: state => state.user.userInfo.user.id
        }),
    }
}
</script>

<style scoped>
@import url('mavon-editor/dist/css/index.css');
.publish {
    margin-right: 14px;
}
.info {
    height: 80px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
}
.left {
    width: 40%;
    line-height: 80px;
    display: flex;
}
.right {
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin-left: 12px;
    line-height: 80px;
}
.right_tag {
    flex: 2 1 auto;
}
.right_publish {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
}
button:focus {
    outline: 0;
}
.avatar {
	margin-left: 12px;
    align-items: center;
}
.dropdown {
    display: flex;
}
.icon_back {
    font-size: 25px;
    margin-right: 20px;
}
.icon_back:hover {
    cursor: pointer;
}
</style>