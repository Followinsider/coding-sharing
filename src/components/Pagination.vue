<template>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
    >
    </el-pagination>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Pagination",
    computed: {
        ...mapState({
            articleList: state => state.article.articleList,
            question: state => state.question.questionMsg
        }),
        total() {
            return this.$route.name === 'Coding-Charing' ? this.articleList.total : this.question.total
        }
    },
    data() {
        return {
            currentPage: 1,
            page: 5,
        }
    },
    methods: {

        // 更改每一页展示多少 将会触发
		handleSizeChange(val) {
            this.currentPage = 1;
            this.page = val;
            this.transmitPageAndLimit();
		},

		// 点击更改不同页 将会触发
		handleCurrentChange(val) {
			this.currentPage = val;
            this.transmitPageAndLimit();
            
		},

        transmitPageAndLimit() {
            if (this.$route.name === 'Coding-Charing') {
                this.$bus.$emit('getCodingCharing_PageAndLimit',this.currentPage,this.page);
            }else {
                this.$bus.$emit('getFriends_PageAndLimit',this.currentPage,this.page);
            }
        },

    }
}
</script>

<style>

</style>