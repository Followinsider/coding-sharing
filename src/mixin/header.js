export default {
    data() {
        return {
            isMoveDown: false,
            oldScrollTop: 0,
        }
    },
    methods: {
		// 控制滚动轮
		handleScroll(e) {
			let scrollStep = e.target.scrollTop - this.oldScrollTop;
			this.oldScrollTop = e.target.scrollTop;
			if (scrollStep > 0) {
				this.isMoveDown = true
			} else {
				this.isMoveDown = false
			}
		},
		
	},
}