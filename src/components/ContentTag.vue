<template>
    <div :class="{'view-nav':isMoveDown,'top':!isMoveDown,'container':true}">
            <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <a class="p-2 text-muted" href="javascript:void(0)">综合</a>
                    <a class="p-2 text-muted" href="javascript:void(0)">前端</a>
                    <a class="p-2 text-muted" href="javascript:void(0)">后端</a>
                    <a class="p-2 text-muted" href="javascript:void(0)">移动端</a>
                    <a class="p-2 text-muted" href="javascript:void(0)">算法</a>
                    <a class="p-2 text-muted" href="javascript:void(0)">UI设计</a>
                    <a class="p-2 text-muted" href="javascript:void(0)">校内课程</a>
                </nav>
            </div>
        </div>
</template>

<script>
export default {
    name: "ContentTag",
    props: {
        isMoveDown: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>