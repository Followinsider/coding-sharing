<template>
    <div class="scroll" @scroll="handleScroll">
        <Header :isMoveDown="isMoveDown"></Header>
        <!-- 文章标签 -->
		<ContentTag :isMoveDown="isMoveDown"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ContentTag from '@/components/ContentTag.vue';
import header from '@/mixin/header';
export default {
    name: 'Friends',
    components: {Header, ContentTag} ,
    mixins: [header]
}
</script>

<style>
.scroll {
	overflow: scroll;
	height: 100vh;
}
</style>