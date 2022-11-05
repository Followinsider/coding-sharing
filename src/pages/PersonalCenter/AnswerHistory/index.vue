<template>
    <div>
        <div style="width: 80%;margin-left: 10%" class="main">
            <el-card style="margin:10px" shadow="hover" v-for="(message, index) in Messages" :key="index">

                <div style="height:100px">

                    <div style="display:inline-block;margin-left: 5%;width: 60%">
                        <p class="message" style="font-weight:bold">{{ message.name }}</p>
                        <p style="font-weight: lighter;color: #46433b" class="message">
                            {{ message.info }}
                        </p>
                        <br>

                    </div>

                    <div style="width:18%;height: 100%;display:inline-block;text-align: center;">
                        <div style="display: inline-block;width: 95px;margin-top: 20%;margin-left: 24%">
                            <el-button type="danger" round style="height: 50%;width: 100%;display: inline-block">
                                <i class="el-icon-delete">删除</i>
                            </el-button>
                            <br><br>
                        </div>
                        <p style="text-align: center;">{{ message.date }}</p>
                    </div>

                </div>
                <br>
            </el-card>
        </div>
        <br>
        <div class="footer" style="margin: 0 auto;width: 100%;text-align: center;">
            <div class="block">
                <el-pagination background layout="total, prev, pager, next, jumper" :total=total>
                </el-pagination>
            </div>
        </div>

    </div>

</template>
  
<script>
export default {
    name: "answerHistory",
    data() {
        return {
            total: 2,
            Messages: [
                {
                    "name": "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                    "info": "Time...............",
                    "date": "2022-5-1"
                },
                {
                    "name": "吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼",
                    "info": "Time.................",
                    "date": "2022-5-1"
                },
            ]
        }
    },
}
</script>
  
<style scoped>
.message {
    width: 30em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
  