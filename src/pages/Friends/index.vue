<template>
    <div class="scroll" @scroll="handleScroll">
        <Header :isMoveDown="isMoveDown"></Header>
        <!-- 文章标签 -->
        <ContentTag :isMoveDown="isMoveDown" />
        <div style="">
            <div class="grid-container">
                <div class="grid-item" v-for="q in questions" :key="q.id">
                    <el-card class="box-card">
                        <span>{{ q.title }}</span>
                        <span style="float:right;">
                            <el-tag type="success">{{ q.tag }}</el-tag>
                        </span>
                        <div>
                            <el-button type="text" @click="showDetails(q)">详情</el-button>
                        </div>
                    </el-card>
                    <div class="border" v-show="q.details">
                        <el-button style="position:fixed;right:50px;bottom:50px" class="el-icon-close"
                            @click="showDetails(q)">关闭</el-button>
                        <h5>{{ q.title }}</h5>
                        <ul>
                            <li><img src="@/assets/logo.png" alt=""></li>
                            <li>{{ q.asker }}</li>
                            <li>{{ q.ask_time }}</li>
                        </ul>
                        <!-- 只有提问者本人或是评论者本人才有删除的权限 -->
                        <el-button-group style="float:left;margin:12px 35px">
                            <el-button type="primary" icon="el-icon-edit" size="mini" @click="showComment(q)">评论
                            </el-button>
                            <el-button type="primary" icon="el-icon-share" size="mini">分享</el-button>
                            <el-button type="primary" icon="el-icon-delete" size="mini">删除</el-button>
                        </el-button-group>
                        <div v-show="q.isComment">
                            <el-input placeholder="请输入内容" v-model="input1" clearable>
                            </el-input>
                        </div>
                        <br>
                        <el-collapse style="margin:30px;">
                            <el-collapse-item v-for="c in q.comments" :key="c.comment_id"
                                :title="c.commentor + '  ' + c.comment_time" :name="c.comment_id">
                                <div>{{ c.containt }}</div>
                                <el-button-group style="float:right;margin: 10px;">
                                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="showReply(c)">回复
                                    </el-button>
                                    <el-button type="primary" icon="el-icon-share" size="mini">分享</el-button>
                                    <el-button type="primary" icon="el-icon-delete" size="mini">删除</el-button>
                                </el-button-group>
                                <div v-show="c.isReply">
                                    <el-input placeholder="请输入内容" v-model="input1" clearable>
                                    </el-input>
                                </div>
                            </el-collapse-item>
                        </el-collapse>

                    </div>
                </div>
            </div>
            <el-pagination class="pageDivide" background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ContentTag from '@/components/ContentTag.vue';
import header from '@/mixin/header';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Friends',
    components: { Header, ContentTag },
    mixins: [header],
    data() {
        return {
            input1: '',
            'questions': [
                {
                    id: 1,
                    title: '在超过10万条记录的页面显示时，如何处理分页，有多少种替代方案？',
                    tag: 'Java',
                    containt: '在笔试时遇到的题目，不懂怎么做',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                        {
                            comment_id: 'C4',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                        {
                            comment_id: 'C5',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 3,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 4,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 5,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 6,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 7,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 8,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
                {
                    id: 9,
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details: false,
                    asker: 'user01',
                    ask_time: '2020-02-25 12:00:17',
                    isComment: false,
                    comments: [
                        {
                            comment_id: 'C1',
                            commentor: 'user02',
                            containt: 'SQL Server 存储过程的分页方案比拼 .http://blog.csdn.net/lihonggen0/article/details/103511',
                            comment_time: '2020-02-26',
                            isReply: false
                        },
                        {
                            comment_id: 'C2',
                            commentor: 'user03',
                            containt: '可以用存储过程。还有用分页语句去写。个人一般用的分页语句，比较简单。',
                            comment_time: '2020-02-27',
                            isReply: false
                        },
                        {
                            comment_id: 'C3',
                            commentor: 'user04',
                            containt: '页面上一下子显示不了太多行的是吧？那就需要用到pagesize了，设置pagesize控制一下子显示的行数上限。分页取数据的时候，要显示多少就取多少，而不是取全部（系统自带的listview控件的分页机制就是取全部）',
                            comment_time: '2020-03-02',
                            isReply: false
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        showDetails(q) {
            q.details = !q.details;
        },
        showComment(q) {
            q.isComment = !q.isComment;
        },
        showReply(c) {
            c.isReply = !c.isReply;
        }
    }
}
</script>

<style>
.scroll {
    overflow: scroll;
    height: 100vh;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px 160px;
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

.border {
    width: 50%;
    background-color: #fff;
    height: 100%;
    position: fixed;
    padding: 135px 30px 30px;
    top: 0;
    right: 0;
    bottom: 0;
    border-left-width: 1px;
    overflow-y: scroll;
    color: black;
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
</style>