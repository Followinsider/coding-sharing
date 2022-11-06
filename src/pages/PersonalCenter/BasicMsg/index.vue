<!-- eslint-disable vue/valid-v-for -->
<template>
    <div>
        <div>
            <h3>基本信息</h3>
            <hr>
            <el-descriptions :column="1" border>
                <!-- <el-descriptions-item v-for="i in userInfo" :label="i.label" v-model="i.value"> -->
                <el-descriptions-item v-for="i in userInfo" :key="i.label" v-model="i.value">
                    <span class="message" v-show="!i.edit">{{ i.label }}</span>
                    <span class="message" v-show="!i.edit">{{ i.value }}</span>
                    <span @click="edit(i)" v-show="!i.edit"><i class="el-icon-edit edit">编辑</i></span>
                    <span v-show="i.edit">
                        <el-input style="display: inline;" v-model="i.value"></el-input>
                        <el-button @click="edit(i)" type="success" icon="el-icon-check" size="mini" circle></el-button>
                    </span>
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div>
            <h3>教育信息</h3>
            <hr>
            <el-descriptions :column="1" border>key
                <el-descriptions-item v-for="i in userStudy" :key="i.label" v-model="i.value">
                    <span class="message" v-show="!i.edit">{{ i.value }}</span>
                    <span @click="edit(i)" v-show="!i.edit"><i class="el-icon-edit edit">编辑</i></span>
                    <span v-show="i.edit">
                        <el-input style="display: inline;" v-model="i.value"></el-input>
                        <el-button @click="edit(i)" type="success" icon="el-icon-check" size="mini" circle></el-button>
                    </span>
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div>
            <h3>工作信息</h3>
            <hr>
            <el-descriptions :column="1" border>
                <el-descriptions-item v-for="i in userWork" :key="i.label" v-model="i.value">
                    <span class="message" v-show="!i.edit">{{ i.value }}</span>
                    <span @click="edit(i)" v-show="!i.edit"><i class="el-icon-edit edit">编辑</i></span>
                    <span v-show="i.edit">
                        <el-input style="display: inline;" v-model="i.value"></el-input>
                        <el-button @click="edit(i)" type="success" icon="el-icon-check" size="mini" circle></el-button>
                    </span>
                </el-descriptions-item>
            </el-descriptions>
        </div>
    </div>
</template>
    
<script>
export default {
    
    name: "showinfo",
    data() {
        return {
            userInfo: {
                1: { name: 'username', label: '用户名', value: 'uuuuu', edit: false },
                2: { name: 'userID', label: '用户ID', value: 'U9999', edit: false },
                3: { name: 'usersex', label: '性别', value: '女', edit: false },
                4: { name: 'userMsg', label: '个人简介', value: '无', edit: false },
                5: { name: 'phonenumber', label: '手机号', value: 88888, edit: false },
                6: { name: 'email', label: '邮箱号', value: '888@qq.com', edit: false },
                7: { name: 'useraddress', label: '所在地区', value: '未填写', edit: false },
                8: { name: 'direction', label: '学习方向', value: 'Java', edit: false },
                9: { name: 'whenwork', label: '开始工作', value: '否', edit: false },
            },
            userStudy: {
                1: { name: 'school', label: '学校名称', value: '广东工业大学', edit: false },
                2: { name: 'profession', label: '专业', value: '信息管理与信息系统', edit: false },
                3: { name: 'schoolBegin', label: '入学时间', value: '2020-09至2023-09', edit: false },
                4: { name: 'xueli', label: '学历', value: '本科', edit: false },
            },
            userWork: {
                1: { name: 'company', label: '公司名称', value: '未填写', edit: false },
                2: { name: 'zhiwei', label: '职位', value: '未填写', edit: false },
                3: { name: 'suoshuhangye', label: '所属行业', value: '未选择', edit: false }
            }
        }
    },
    methods: {
        edit(i) {
            i.edit = !i.edit;
        }
    }
}
</script>
    
<style scoped>
.message {
    width: 10em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
}

h3 {
    margin-top: 15px;
    margin-bottom: 5px;
}

.el-descriptions {
    margin-top: 10px;
}

div {
    margin: 30px;
}

.edit {
    cursor: pointer;
}

.el-input>>>.el-input__inner {
    height: 40px;
    width: 300px;
    display: inline;
}
</style>
    