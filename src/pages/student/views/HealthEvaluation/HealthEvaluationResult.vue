/*
* @Author:吴晓斌
* @Date:2021-01-13
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2021-04-22 11:23:28
*/
//健康测评结果页面
<template>
  <div class="healthEvaluationResult">
    <van-nav-bar @click-left="clickLeft" @click-right="clickRight">
      <template #left>
        <van-icon name="arrow-left" size="18" color="white" />
      </template>
      <template #title>
        <span style="color:white">测评结果</span>
      </template>
      <template #right>
        <van-icon slot="icon" class-prefix="old-icon" name="shouye-copy" size="18" color="white" />
      </template>
    </van-nav-bar>
    <div class="tips">以下是您的健康测评结果</div>
    <div class="result-container">
      <div v-for="(item, index) in result" :key="index">
        <div class="label">
          <div class="label-text">{{ item.label }}</div>
          <div v-show="item.degree" class="button-text" @click="toRecuperatePlan(item.label)">点击这里查看调养办法</div>
        </div>
        <van-progress :percentage="item.degree" stroke-width="6" :show-pivot="showPivot" :color="item.color" />
        <div class="result-text" :class="item.degreeClass">{{ item.degreeText }}</div>
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
  name: 'HealthEvaluationResult',
  data: () => {
    return {
      showPivot: false,
      result: [
        {
          label: '平和体质',
          degree: 0,
          degreeText: '不是',
          degreeClass: '',
          color: ''
        },
        {
          label: '气虚体质',
          degree: 33,
          degreeText: '轻度',
          degreeClass: 'mild',
          color: '#00c5dc'
        },
        {
          label: '阳虚体质',
          degree: 33,
          degreeText: '轻度',
          degreeClass: 'mild',
          color: '#00c5dc'
        },
        {
          label: '阴虚体质',
          degree: 66,
          degreeText: '中度',
          degreeClass: 'moderate',
          color: '#ffb822'
        },
        {
          label: '气郁体质',
          degree: 66,
          degreeText: '中度',
          degreeClass: 'moderate',
          color: '#ffb822'
        },
        {
          label: '痰湿体质',
          degree: 33,
          degreeText: '轻度',
          degreeClass: 'mild',
          color: '#00c5dc'
        },
        {
          label: '湿热体质',
          degree: 100,
          degreeText: '重度',
          degreeClass: 'severe',
          color: '#f4516c'
        },
        {
          label: '血瘀体质',
          degree: 33,
          degreeText: '轻度',
          degreeClass: 'mild',
          color: '#00c5dc'
        },
        {
          label: '特禀体质',
          degree: 33,
          degreeText: '轻度',
          degreeClass: 'mild',
          color: '#00c5dc'
        }
      ]
    }
  },
  methods: {
    clickLeft() {
      this.$router.go(-1)
    },
    clickRight() {
      this.$router.push('/home')
    },
    toRecuperatePlan(type) {
      this.$router.push({
        path: '/recuperatePlan',
        query: {
          type
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_settings.scss";
.van-nav-bar {
  background-color: $main-color;
}
.tips{
  text-align:center;
  height: 30px;
  line-height: 30px;
  margin: 10px;
  font-size: 15px;
  color: $main-color;
}
.result-container{
  width: 80%;
  margin: 0 auto;
  padding-top: 10px;
  background-color: #fff;
}
.label{
  display: flex;
  justify-content: flex-start;
}
.label-text{
  height: 20px;
  line-height: 20px;
  font-size:15px;
}
.button-text{
  margin-left: 5px;
  margin-bottom: 4px;
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  background-color: #00c5dc;
  padding: 2px 5px;
  color: white;
  border-radius: 20px;
}
.result-text{
  margin-top:5px;
  text-align:end;
  font-size:18px;
}
.mild{
  color: #00c5dc;
}
.moderate{
  color: #ffb822;
}
.severe{
  color: #f4516c;
}

</style>
