/*
* @Author:吴晓斌
* @Date:2021-01-13
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2021-01-13 18:59:32
*/
//健康测评页面
<template>
  <div class="healthEvaluation">
    <van-nav-bar @click-left="clickLeft" @click-right="clickRight">
      <template #left>
        <van-icon name="arrow-left" size="18" color="white" />
      </template>
      <template #title>
        <span style="color:white">健康测评</span>
      </template>
      <template #right>
        <van-icon slot="icon" class-prefix="old-icon" name="shouye-copy" size="18" color="white" />
      </template>
    </van-nav-bar>
    <div class="tips">请按照您最近30天的身体情况选择</div>
    <van-form input-align="right" label-width="180px" @submit="onSubmit">
      <div class="label-text">性别选择</div>
      <van-field name="sex" label="请选择您的性别">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="man" checked-color="#A12831">男</van-radio>
            <van-radio name="woman" checked-color="#A12831">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="label-text">平和体质测试</div>
      <div v-for="(item, index) in pinghe" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">气虚体质测试</div>
      <div v-for="(item, index) in qixu" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">阳虚体质测试</div>
      <div v-for="(item, index) in yangxu" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">阴虚体质测试</div>
      <div v-for="(item, index) in yinxu" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">气郁体质测试</div>
      <div v-for="(item, index) in qiyu" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">痰湿体质测试</div>
      <div v-for="(item, index) in tanshi" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">湿热体质测试</div>
      <div v-for="(item, index) in shire" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">血瘀体质测试</div>
      <div v-for="(item, index) in xueyu" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div class="label-text">特禀体质测试</div>
      <div v-for="(item, index) in tebing" :key="index">
        <van-field :name="item.name" :label="`${index+1}.${item.label}`">
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1" checked-color="#A12831">是</van-radio>
              <van-radio name="0" checked-color="#A12831">不是</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
      <div style="margin: 16px;">
        <van-button round block native-type="submit" color="#A12831">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Icon, Form, Field, Button, RadioGroup, Radio } from 'vant'
Vue.use(NavBar)
  .use(Icon)
  .use(Form)
  .use(Field)
  .use(Button)
  .use(RadioGroup)
  .use(Radio)
export default {
  name: 'HealthEvaluation',
  data: () => {
    return {
      sex: '',
      pinghe: [
        {
          name: '精力充沛',
          label: '您精力充沛吗？',
          value: ''
        },
        {
          name: '容易疲劳',
          label: '您容易疲劳吗？',
          value: ''
        },
        {
          name: '说话声音低弱无力',
          label: '您说话声音低弱无力吗？',
          value: ''
        },
        {
          name: '常感到闷闷不乐、情绪低沉',
          label: '您常感到闷闷不乐、情绪低沉吗？',
          value: ''
        },
        {
          name: '冬天怕冷、夏天不喜欢吹空调或电扇',
          label: '您冬天怕冷、夏天不喜欢吹空调或电扇吗？',
          value: ''
        },
        {
          name: '能适应外界自然和社会环境的变化',
          label: '您能适应外界自然和社会环境的变化吗？',
          value: ''
        },
        {
          name: '容易失眠',
          label: '您容易失眠吗？',
          value: ''
        },
        {
          name: '容易忘事（健忘）',
          label: '您容易忘事（健忘）吗？',
          value: ''
        }
      ],
      qixu: [
        {
          name: '容易气短（呼吸短促，接不上气）',
          label: '您容易气短（呼吸短促，接不上气）吗？',
          value: ''
        },
        {
          name: '容易心慌',
          label: '您容易心慌吗？',
          value: ''
        },
        {
          name: '容易头晕或站起时晕眩',
          label: '您容易头晕或站起时晕眩吗？',
          value: ''
        },
        {
          name: '比别人容易感冒',
          label: '您比别人容易感冒吗？',
          value: ''
        },
        {
          name: '喜欢安静、懒得说话',
          label: '您喜欢安静、懒得说话吗？',
          value: ''
        },
        {
          name: '活动量稍大就容易出虚汗',
          label: '您活动量稍大就容易出虚汗吗？',
          value: ''
        }
      ],
      yangxu: [
        {
          name: '手脚发凉',
          label: '您手脚发凉吗？',
          value: ''
        },
        {
          name: '胃脘部、背部或腰膝部怕冷',
          label: '您胃脘部、背部或腰膝部怕冷吗？',
          value: ''
        },
        {
          name: '感到怕冷、衣服比别人穿得多',
          label: '您感到怕冷、衣服比别人穿得多吗？',
          value: ''
        },
        {
          name: '比别人容易患感冒',
          label: '您比别人容易患感冒吗？',
          value: ''
        },
        {
          name: '吃（喝）凉的东西会感到不舒服或怕吃凉的',
          label: '您吃（喝）凉的东西会感到不舒服或怕吃凉的吗？',
          value: ''
        },
        {
          name: '受凉或吃（喝）凉的东西后，容易腹泻、拉肚子',
          label: '您受凉或吃（喝）凉的东西后，容易腹泻、拉肚子吗？',
          value: ''
        }
      ],
      yinxu: [
        {
          name: '感到手脚心发热',
          label: '您感到手脚心发热吗？',
          value: ''
        },
        {
          name: '感觉身体、脸上发热',
          label: '您感觉身体、脸上发热吗？',
          value: ''
        },
        {
          name: '皮肤或口唇干',
          label: '您皮肤或口唇干吗？',
          value: ''
        },
        {
          name: '口唇的颜色比一般人红',
          label: '您口唇的颜色比一般人红吗？',
          value: ''
        },
        {
          name: '容易便秘或大便干燥',
          label: '您容易便秘或大便干燥吗？',
          value: ''
        },
        {
          name: '面部两颧潮红或偏红',
          label: '您面部两颧潮红或偏红吗？',
          value: ''
        },
        {
          name: '感到眼睛干涩',
          label: '您感到眼睛干涩吗？',
          value: ''
        },
        {
          name: '感到口干咽燥、总想喝水',
          label: '您感到口干咽燥、总想喝水吗？',
          value: ''
        }
      ],
      qiyu: [
        {
          name: '精神紧张、焦虑不安',
          label: '您精神紧张、焦虑不安吗？',
          value: ''
        },
        {
          name: '多愁善感、感情脆弱',
          label: '您多愁善感、感情脆弱吗？',
          value: ''
        },
        {
          name: '容易感到害怕或受到惊吓',
          label: '您容易感到害怕或受到惊吓吗？',
          value: ''
        },
        {
          name: '胁肋部或乳房胀痛',
          label: '您胁肋部或乳房胀痛吗？',
          value: ''
        },
        {
          name: '无缘无故叹气',
          label: '您无缘无故叹气吗？',
          value: ''
        },
        {
          name: '咽喉部有异物感，且吐之不出、咽之不下',
          label: '您咽喉部有异物感，且吐之不出、咽之不下吗？',
          value: ''
        }
      ],
      tanshi: [
        {
          name: '感到胸闷或腹部胀满',
          label: '您感到胸闷或腹部胀满吗？',
          value: ''
        },
        {
          name: '感到身体沉重不轻松或不爽快',
          label: '您感到身体沉重不轻松或不爽快吗？',
          value: ''
        },
        {
          name: '腹部肥满松软',
          label: '您腹部肥满松软吗？',
          value: ''
        },
        {
          name: '上眼睑比别人肿（上眼睑有轻微隆起的现象）',
          label: '您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？',
          value: ''
        },
        {
          name: '嘴里有黏黏的感觉',
          label: '您嘴里有黏黏的感觉吗？',
          value: ''
        },
        {
          name: '平时痰多，特别是感到咽喉部总有痰堵着',
          label: '您平时痰多，特别是感到咽喉部总有痰堵着吗？',
          value: ''
        },
        {
          name: '舌苔厚腻或有舌苔厚厚的感觉',
          label: '您舌苔厚腻或有舌苔厚厚的感觉吗？',
          value: ''
        }
      ],
      shire: [
        {
          name: '面部或鼻部有油腻感或者油亮发光',
          label: '您面部或鼻部有油腻感或者油亮发光吗？',
          value: ''
        },
        {
          name: '脸上容易生痤疮或皮肤容易生疮疖',
          label: '您脸上容易生痤疮或皮肤容易生疮疖吗？',
          value: ''
        },
        {
          name: '感到口苦或嘴里有异味',
          label: '您感到口苦或嘴里有异味吗？',
          value: ''
        },
        {
          name: '大便黏滞不爽、有解不尽的感觉',
          label: '您大便黏滞不爽、有解不尽的感觉吗？',
          value: ''
        },
        {
          name: '小便时尿道有发热感、尿色浓（深）',
          label: '您小便时尿道有发热感、尿色浓（深）吗？',
          value: ''
        },
        {
          name: '带下色黄（白带颜色发黄）（限女性回答）',
          label: '您带下色黄（白带颜色发黄）吗？（限女性回答）',
          value: ''
        }
      ],
      xueyu: [
        {
          name: '皮肤在不知觉中会出现青紫瘀斑（皮下出血）',
          label: '您皮肤在不知觉中会出现青紫瘀斑（皮下出血）吗？',
          value: ''
        },
        {
          name: '两颧部有细微血丝',
          label: '您两颧部有细微血丝吗？',
          value: ''
        },
        {
          name: '身体上有哪里疼痛',
          label: '您身体上有哪里疼痛吗？',
          value: ''
        },
        {
          name: '面色晦黯或容易出现褐斑',
          label: '您面色晦黯或容易出现褐斑吗？',
          value: ''
        },
        {
          name: '会出现黑眼圈',
          label: '您会出现黑眼圈吗？',
          value: ''
        },
        {
          name: '容易忘事（健忘）',
          label: '您容易忘事（健忘）吗？',
          value: ''
        },
        {
          name: '口唇颜色偏黯',
          label: '您口唇颜色偏黯吗？',
          value: ''
        }
      ],
      tebing: [
        {
          name: '没有感冒也会打喷嚏',
          label: '您没有感冒也会打喷嚏吗？',
          value: ''
        },
        {
          name: '没有感冒也会鼻塞、流鼻涕',
          label: '您没有感冒也会鼻塞、流鼻涕吗？',
          value: ''
        },
        {
          name: '有因季节、温度变化或异味等原因而咳喘的现象',
          label: '您有因季节、温度变化或异味等原因而咳喘的现象吗？',
          value: ''
        },
        {
          name: '容易过敏（药物、食物、气味、花粉、季节交替时、气候变化等）',
          label: '您容易过敏（药物、食物、气味、花粉、季节交替时、气候变化等）吗？',
          value: ''
        },
        {
          name: '皮肤起荨麻疹（风团、风疹块、风疙瘩）',
          label: '您的皮肤起荨麻疹（风团、风疹块、风疙瘩）吗？',
          value: ''
        },
        {
          name: '皮肤因过敏出现过紫癜（紫红色瘀点、瘀斑）',
          label: '您的皮肤因过敏出现过紫癜（紫红色瘀点、瘀斑）吗？',
          value: ''
        },
        {
          name: '皮肤一抓就红，并出现抓痕',
          label: '您的皮肤一抓就红，并出现抓痕吗？',
          value: ''
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
    onSubmit(values) {
      console.log('submit', values)
      this.$router.push('/healthEvaluationResult')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_settings.scss";
.healthEvaluation{
  background: rgb(244, 246, 245);
}
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
.label-text{
  text-align:center;
  height: 30px;
  line-height: 30px;
  margin: 5px 0;
  font-size:15px;
  color:white;
  background-color: $main-color;
}

</style>
