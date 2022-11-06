<template>
    <div>
        <div class="grid-container">
            <div class="grid-item" v-for="q in questions" :key="q">
                <el-card class="box-card">
                    <span>{{ q.title }}</span>
                    <div>
                        <el-button type="text" @click="showDetails(q)">详情</el-button>
                    </div>
                </el-card>
                <div class="border" v-show="details">
                    <div class="text">
                        {{ q.title }}
                    </div>
                </div>
            </div>
        </div>
        <el-pagination class="pageDivide" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Friends',
    data() {
        return {
            details: false,
            'questions': {
                '1': {
                    title: '在超过10万条记录的页面显示时，如何处理分页，有多少种替代方案？',
                    tag: 'Java',
                    containt: '在笔试时遇到的题目，不懂怎么做',
                    details:false
                },
                '2': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
                '3': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
                '4': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
                '5': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
                '6': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
                '7': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
                '8': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
                '9': {
                    title: 'q1',
                    tag: 'Java',
                    containt: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
                    details:false
                },
            }
        }
    },
    methods: {
        showDetails(q) {
            console.log(q);
        }
    }
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
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
}

.border {
    width: 50%;
    background-color: aqua;
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
</style>