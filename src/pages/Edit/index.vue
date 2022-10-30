<template>
    <div class="MyEdit">
        <div>
            <MarkdownPro/>
            <MarkdownPreview/>
        </div>
    </div>
</template>

<script>
import { MarkdownPro,MarkdownPreview } from 'vue-meditor'
export default {
    name: 'Edit',
    data() {
        return {

        }
    },
    components: {
        MarkdownPro,MarkdownPreview
    }
}
</script>

<style>
.MyEdit {
    height: 100vh;
}
.markdown .markdown-toolbars span[data-v-f36f14d2] {
    color: black;
}

</style>