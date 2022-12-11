<template>
    <div class="scroll" @scroll="handleScroll">
        <Header :isMoveDown="isMoveDown"></Header>
        <!-- 文章标签 -->
        <ContentTag :isMoveDown="isMoveDown" />

        <FriendsContent/>

        <footer class="blog-footer">
			<Pagination/>
		</footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ContentTag from '@/pages/Coding_Charing/ContentTag.vue';
import header from '@/mixin/header';
import FriendsContent from './FriendsContent.vue';
import Pagination from '@/components/Pagination.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Friends',
    components: { Header, ContentTag, FriendsContent, Pagination, },
    mixins: [header],
}
</script>

<style scoped>
.scroll {
    overflow-y: scroll;
    height: 100vh;
}
</style>