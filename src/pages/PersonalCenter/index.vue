<template>
    <div>
        <Header/>
        <div class="main">       
            <el-container style="height: 600px; border: 1px solid #eee">
                <el-aside width="200px" style="background-color: white">
                    <el-menu class="el-menu-vertical-demo" default-active="1">
                        <router-link :to="{name: 'welcome'}">
                            <el-menu-item index="1">
                                <i class="el-icon-house"></i>
                                首页
                            </el-menu-item>
                        </router-link>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-postcard"></i>个人信息
                            </template>
                            <el-menu-item-group>
                                <router-link class="alink" :to="{ name: 'showinfo' }">
                                    <el-menu-item index="2-1">
                                        基本信息
                                    </el-menu-item>
                                </router-link>

                                <router-link class="alink" :to="{ name: 'countcontrol' }">
                                    <el-menu-item index="2-3">
                                        账号管理
                                    </el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-star-on"></i>个人收藏</template>
                            <el-menu-item-group>
                                <router-link class="alink" :to="{ name: 'questioncollection' }">
                                    <el-menu-item index="3-1">
                                        问答收藏
                                    </el-menu-item>
                                </router-link>
                                <router-link class="alink" :to="{ name: 'pagecollection' }">
                                    <el-menu-item index="3-2">
                                        文章收藏
                                    </el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-star-on"></i>浏览历史</template>
                            <el-menu-item-group>
                                <router-link class="alink" :to="{ name: 'answerHistory' }">
                                    <el-menu-item index="4-1">
                                        评论
                                    </el-menu-item>
                                </router-link>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>


                <el-container>
                    <el-main>
                        <div style="width: 80%;margin: 0 auto">
                            <router-view></router-view>
                        </div>
                    </el-main>
                </el-container>

            </el-container>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {Header},
    data() {
        return {
            userInfo: {
                1: { name: 'username', label: '用户名', value: 'uuuuu', edit: false },
                2: { name: 'userID', label: '用户ID', value: 'U9999', edit: false },
                4: { name: 'userMsg', label: '个人简介', value: '无', edit: false },
                7: { name: 'useraddress', label: '所在地区', value: '未填写', edit: false },
                8: { name: 'direction', label: '学习方向', value: 'Java', edit: false },
            },
        }
    },
    
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.ii {
    list-style: none;
}

.ii>li {
    display: inline;
    padding: 10px;
}

.main {
    background-color: #fff;
    border-radius: 20px;
    width: 1200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.el-header {
    position: relative;
    height: 60px;
}

.ii>li:first-child {
    margin-left: 150px;
    line-height: 60px;
}

.circle {
    display: inline;
    border-radius: 50%;
    margin: 10px;
    left: 50px;
    position: absolute;
}

.circle>img {
    display: inline;
    width: 40px;
    height: 40px;
}

.router-link-active {
    text-decoration: none;
}

.alink {
    text-decoration: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

a:hover {
    text-decoration: none; 
}
</style>