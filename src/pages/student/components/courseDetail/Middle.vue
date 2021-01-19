/*
* @Author: 杨志杰
* @Date: 2020-05-05 18:35:11
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2021-01-13 17:00:01
*/
//课程详细信息组件
<template>
  <div class="courseDetail_container">
    <!-- <div class="courseImage--container">
      <van-image
        class="courseImage--image"
        width="100%"
        height="100%"
        :src="courseInfo.courseImgUrl"
      />
    </div> -->
    <public-video :video-url="videoUrl" />
    <div class="courseMessage--container">
      <div class="courseMessage--courseName">{{ courseInfo.courseName }}</div>
      <div class="courseMessage--startTime">
        时间
        <span class="value">{{ courseInfo.startTime }} 开课</span>
      </div>
      <div class="courseMessage--teacher courseMessage--others">
        老师
        <span class="value"> {{ courseInfo.teacherName }}</span>
      </div>
      <div class="courseMessage--chooseCourse courseMessage--others">
        选课
        <div class="chooseCourseItem">
          <div class="chooseCourseTime">{{ courseInfo.classHour+'课时' }}</div>
          <div class="chooseCourseType">{{ courseInfo.courseLabel }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Image as VanImage } from 'vant'
import Video from '@/components/Video'
Vue.use(VanImage)

export default {
  name: 'CourseDetailMiddle',
  components: {
    'public-video': Video
  },
  props: {
    courseInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    videoUrl: {
      type: String,
      default: () => {
        return ''
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '@/scss/_settings.scss';

  .courseDetail_container {
    width: 100%;

    .courseImage {
      &--container {
        width: 100%;
        height: 190px;
      }
    }

    .courseMessage {
      &--container {
        width: 100%;
        padding: {
          top: 16px;
          left: 20px;
        }

        font: {
          family: PingFangSC-Regular;
          size: 14px;
        }
        color: #6D7278;

        .value {
          margin-left: 18px;
          color: $font-color;
        }
      }

      &--courseName {
        font: {
          family: PingFangSC-Semibold;
          size: 18px;
        }
        color: rgba(0, 0, 0, 0.85);

        margin-bottom: 16px;
      }

      &--others {
        margin-top: 8px;
      }

      &--chooseCourse {
        .formatItemDiv {
          display: inline-block;
          border-radius: 4px;

          width: 52px;
          height: 22px;
          line-height: 22px;
          text-align: center;

          font-size: 12px;
          color: $white;

          margin-right: 10px;
        }

        @mixin chooseCourseItemStyle($background) {
          @extend .formatItemDiv;
          background: $background;
        }

        .chooseCourseItem {
          margin-left: 18px;
          display: inline;
        }

        .chooseCourseTime {
          @include chooseCourseItemStyle($deep-purple);
        }

        .chooseCourseType {
          @include chooseCourseItemStyle($ching);
        }
      }
    }
  }

</style>
