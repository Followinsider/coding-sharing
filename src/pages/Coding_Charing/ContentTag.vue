<template>
    <div :class="{'view-nav':isMoveDown,'top':!isMoveDown,'container':true}">
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
                <el-link class="tag" v-for="t in ttags" :key="t.id" @click="getTagBlog(t.id)">{{t.name}}</el-link>
            </nav>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: "ContentTag",
    props: {
        isMoveDown: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapState({
            ttags: state => state.article.tagList,
        })
    },
    mounted() {
        this.$store.dispatch('getTag')
    },
    methods: {
        async getTagBlog(id) {
            try {
                this.$router.push({name: 'Coding-Charing', query: {id}})
				await this.$store.dispatch('getTagBlog', {page: 1, limit: 5, id});
			}catch (error) {
				this.$message.error(error);
			}
        }
    }
}
</script>

<style scoped>
.tag {
	line-height: 40px;
    font-size: 1.1rem;
}

</style>