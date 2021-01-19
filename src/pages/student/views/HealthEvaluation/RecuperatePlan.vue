/*
* @Author:吴晓斌
* @Date:2021-01-13
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2021-01-13 19:54:21
*/
//调养方案页面
<template>
  <div class="recuperatePlan">
    <van-nav-bar @click-left="clickLeft" @click-right="clickRight">
      <template #left>
        <van-icon name="arrow-left" size="18" color="white" />
      </template>
      <template #title>
        <span style="color:white">调养方案</span>
      </template>
      <template #right>
        <van-icon slot="icon" class-prefix="old-icon" name="shouye-copy" size="18" color="white" />
      </template>
    </van-nav-bar>
    <div v-for="(item, index) in plan" :key="index">
      <div class="stepContainer">
        <div class="stepHead">
          <div class="stepNumber">0{{ index+1 }}</div>
          <div class="stepTitle">{{ item.stepName }}</div>
        </div>
        <div class="stepContent">
          <pre>{{ item.stepContent }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Icon, Progress } from 'vant'
Vue.use(NavBar)
  .use(Icon)
  .use(Progress)
export default {
  name: 'RecuperatePlan',
  data: () => {
    return {
      plan: [
        {
          stepName: '体质机理',
          stepContent: '指人体平时阳气不足，导致身体部分功能的衰退。\n长期偏嗜寒凉食物也会形成这种体质。\n发病原因：\n内因：\n肾阳虚、情绪\n外因：\n1.冰镇饮品\n2.冷气下做爱\n3.熬夜\n4.不当清热解毒\n5.大量出汗\n6.冬天赤脚穿凉鞋\n7.夏天冷气封毛孔\n8.经常使用抗生素等。'
        },
        {
          stepName: '不同辩证',
          stepContent: '心阴虚心血虚\n肝肾阴虚\n肾气虚证\n肾精亏虚证\n肝阴虚\n肺阴虚\n肾阴虚\n胃阴虚\n阴虚内热\n脾阴虚证\n心阴虚\n肺肾阴虚'
        },
        {
          stepName: '体质特征',
          stepContent: '总体特征：\n怕冷，阳气不足，常感到手脚发凉，衣服比别人穿得多，夏天不喜欢吹空调。\n形体特征：\n肌肉松软不实。\n耐夏不耐冬；易感风、寒、湿邪。'
        },
        {
          stepName: '常见表现',
          stepContent: '大便稀溏，小便颜色清，量多、性欲减退,；\n平素畏冷，四肢发凉,手足不温，喜热饮食，精神不振，牙齿松动,脱发,耳鸣,耳聋,气喘,腰背酸痛,畏寒怕冷,面色苍白,身体乏力,心跳过缓或过速,自汗,口淡不渴,消化不良。\n舌边有齿印,舌质淡白胖嫩、脉虚迟或沉弱、沉迟等阳虚类症状。'
        },
        {
          stepName: '心理特征',
          stepContent: '性格多沉静、内向。\n肝阳虚的人善恐、心阳虚的人善悲。\n因此，要善于调节自己的感情，消除或减少不良情绪的影响。'
        },
        {
          stepName: '发病倾向',
          stepContent: '发病多为寒证，易患阳痿、痰饮、肿胀、泄泻等病；感邪易从寒化'
        },
        {
          stepName: '饮食禁忌',
          stepContent: '忌性寒凉、味苦的食物。\n如梨子、西瓜、香蕉、荸荠、绿豆,木耳,苦瓜,萝卜,苦菜,莴苣,冬瓜等不宜多食。\n少饮绿茶。'
        },
        {
          stepName: '调养原则',
          stepContent: '温阳补气。'
        }
      ]
    }
  },
  created() {
    this.getRecuperatePlan()
  },
  methods: {
    clickLeft() {
      this.$router.go(-1)
    },
    clickRight() {
      this.$router.push('/home')
    },
    getRecuperatePlan() {
      var type = this.$route.query.type
      console.log(type)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_settings.scss";
.recuperatePlan{
  background: rgb(244, 246, 245);
}
.van-nav-bar {
  background-color: $main-color;
}
.stepContainer{
  background-color: #fff;
  border: 1px solid $main-color;
  margin-bottom: 10px;
}
.stepHead{
  height: 40px;
  background-color: $main-color;
  display: flex;
  justify-content: flex-start;
}
.stepNumber{
  border-radius: 50px;
  padding: 5px;
  color: white;
  font-size: 20px;
  margin: auto 0;
  height: 20px;
  line-height: 20px;
  background-color: #f15353;
}
.stepTitle{
  color: white;
  line-height: 40px;
  font-size: 20px;
  margin: 0 10px;
}
.stepContent{
  padding: 0 15px;
}
pre{
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
