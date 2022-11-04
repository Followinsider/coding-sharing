<template>
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
</template>

<script>
export default {
    name: "Content-Detail",
    data() {
        isLogin: false
    },
    methods: {
        toEdit() {
            console.log(123)
        },
        login_register() {
            console.log("登录！")
        },
        handleCommand(command) {
			if (command === 'user') {
				this.$router.push('user')
			}else if (command === 'logout') {
				this.isLogin = false
			}
		},
    }
}
</script>

<style></style>