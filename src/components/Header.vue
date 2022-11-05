<template>
    <header :class="{visiable:!isMoveDown,'blog-header py-3':true}">
        <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
                <el-button type="primary" icon="el-icon-share" @click="jumpSharing">Coding知识共享</el-button>
                <el-button type="success" icon="el-icon-chat-dot-square" @click="jumpFriends">师兄师姐说</el-button>
                <el-button type="info" icon="el-icon-question" @click="toQuestion">新建问题</el-button>
                <!-- <el-button type="info" icon="el-icon-question" @click="test">测试</el-button> -->
            </div>
            
            <div class="col-4 d-flex justify-content-end align-items-center">
                <div class="create_login">
                    <el-dropdown split-button type="primary" @click="toEdit">
                    创作者中心
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>我的中心</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-button type="primary" plain class="login" @click="login_register" v-show="!isLogin">登录 | 注册
                    </el-button>
                    <el-dropdown @command="handleCommand">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" v-show="isLogin" class="avatar"></el-avatar>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus" command="user">我的主页</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-user" command="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: "Header",
    props: {
        isMoveDown: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isLogin: false,
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo.user
        }),
        
    },
    methods: {
        // 编辑内容
		toEdit() {
            if (this.userInfo.id) {
                this.$router.push('edit')
            }else {
                this.$message.info('请先登录')
            }
		},
		// 登录和注册相关
		login_register() {
			this.$router.push('login')
			// this.isLogin = true
		},
		// 头像下拉框的选择
		handleCommand(command) {
			if (command === 'user') {
				this.$router.push('user')
			}else if (command === 'logout') {
                localStorage.removeItem('TOKEN');
				this.isLogin = false
			}
		},
        toQuestion() {
			this.$router.push('question')
		},
        jumpSharing() {
            this.$router.push('/')
        },
        jumpFriends() {
            this.$router.push('/friends')
        },
    },
    mounted() {
        this.$store.dispatch('userInfo')
    },
    watch: {
        userInfo() {
            if (this.userInfo.id) {
                this.isLogin = true;
            }
        }
    }
}
</script>

<style scoped>
.visiable {
	transform: translateZ(0);
}
button:focus {
	outline: 0;
}
.avatar {
	margin-left: 12px;
}
.create_login {
	display: flex;
	justify-content: center;
    align-content: center;
}
</style>