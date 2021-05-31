/*
* @Author:吴晓斌
* @Date:2021-04-22
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2021-04-22 09:57:58
*/
//社区公告页面
<template>
  <div class="communityNotice">
    <van-nav-bar>
      <template #left>
        <van-icon name="arrow-left" size="18" color="white" @click="clickLeft" />
      </template>
      <template #title>
        <span style="color:white">社区公告</span>
      </template>
      <template #right>
        <van-icon
          slot="icon"
          class-prefix="old-icon"
          name="shouye-copy"
          size="18"
          color="white"
          @click="clickRight"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Icon, Tab, Tabs } from 'vant'

Vue.use(NavBar)
  .use(Icon)
  .use(Tab)
  .use(Tabs)

export default {
  name: 'CommunityNotice',
  components: {

  },
  data: () => {
    return {
      active: 0
    }
  },
  created() {
  },
  methods: {
    clickLeft() {
      this.$router.go(-1)
    },
    clickRight() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_settings.scss";

.communityNotice {
  min-height: 100vh;
}

.van-nav-bar {
  background-color: $main-color;
}

.buttonTextBox {
  text-align: center;

  &--buttonText {
    font-family: PingFangSC-Regular;
    color: #989898;
    font-size: 12px;
  }
}
</style>
