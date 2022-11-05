<template>
  <div>
    <div class="main">
      <el-card style="margin:10px" shadow="hover" v-for="(message, index) in Messages" :key="index">
        <div>
          <div style="width:40px;height: 100%;border-radius: 100px;display:inline-block;">
            <img style="width:100%;height: 100%;border-radius: 100px" src="@/assets/logo.png" class="image">
          </div>
          <div style="display:inline-block;margin-left: 30px;width: 400px">
            <p class="message" style="font-weight:bold">{{ message.name }}</p>
            <p style="font-weight: lighter" class="message">
              {{ message.info }}
            </p>
            <p class="message">
              阅读：
              <i class="el-icon-view"></i>
              {{ message.number }}
              &nbsp;&nbsp;
              收藏：
              <i class="el-icon-star-off"></i>
              {{ message.favorite }}
              &nbsp;&nbsp;
            </p>

          </div>

          <div style="width:150px;height: 100%;display:inline-block">
            <div style="display: inline-block;width: 90px;margin-right: 5px;">
              <el-button type="danger" round >
                <i class="el-icon-delete">删除</i>
              </el-button>
              <br><br>
            </div>

            <div style="display: inline-block;width: 50px">
              <el-button type="primary" round>
                <i class="el-icon-edit-outline">评论</i>
              </el-button>
              <br><br>
            </div>
            <p style="text-align: center">{{ message.data }}</p>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "pagecollection",
  data() {
    return {
      total: 99,
      Messages: [
        {
          "info": "1哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          "name": "1原理解析",
          "number": 1999,
          "data": "2022-3-27",
          favorite: 999,
        },
        {
          "info": "2哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          "name": "2原理解析",
          "number": 2999, "data": "2022-3-27",
          favorite: 999,
        },
        {
          "info": "3哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          "name": "3原理解析",
          "number": 3999,
          "data": "2022-3-27",
          favorite: 999,
        },
        {
          "info": "4哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          "name": "4原理解析",
          "number": 4999,
          "data": "2022-3-27",
          favorite: 999,
        },

      ]
    }
  },
}
</script>
  
<style scoped>
.message {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>
  