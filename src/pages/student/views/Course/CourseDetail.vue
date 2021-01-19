/*
* @Author:庞泽邦
* @Date:2020-05-03
 * @Last Modified by: 吴晓斌
 * @Last Modified time: 2021-01-13 16:56:55
*/
<template>
  <div>
    <van-nav-bar @click-left="clickLeft" @click-right="share">
      <template #left>
        <van-icon name="arrow-left" size="18" color="white" />
      </template>
      <template #title>
        <span style="color:white">课程详情</span>
      </template>
      <template #right>
        <van-icon slot="icon" class-prefix="old-icon" name="fenxiang" size="18" color="white" />
      </template>
    </van-nav-bar>
    <van-skeleton title :row="18" :loading="loading">
      <div v-if="!isEmpty">
        <course-detail-middle :course-info="courseInfo" :video-url="video" />
        <van-tabs v-model="active" color="#A12831" swipe-threshold="5" animated>
          <van-tab title="课程介绍">
            <course-intro :course-intro-text="courseInfo.courseSpecificIntroduction" />
          </van-tab>
          <van-tab title="课程列表">
            <course-list :course-list="courseList" />
          </van-tab>
          <van-tab title="主讲老师">
            <course-teacher :teacher-name="courseInfo.teacherName" :label="courseInfo.teacherIntroduction" />
          </van-tab>
          <van-tab title="学员评价">
            <course-evaluation :comment-list="commentList" />
          </van-tab>
        </van-tabs>
        <div style="height:60px" />
        <div class="submit_wrap--container">
          <course-submit :num="courseInfo.payNum" :price="courseInfo.coursePrice" />
        </div>
        <ShareCourse v-model="showPopup" :price="courseInfo.coursePrice" :course-name="courseInfo.courseName" :num="courseInfo.payNum" />
      </div>
      <div v-else>
        <van-empty image="error" description="暂无此课程详情" />
      </div>
    </van-skeleton>
  </div>
</template>
<script>
import Vue from 'vue'
import CourseDetailMiddle from '@/pages/student/components/courseDetail/Middle'
import CourseIntro from '../../../student/components/courseDetail/CourseIntro'
import CourseList from '../../../student/components/courseDetail/CourseList'
import CourseTeacher from '../../../student/components/courseDetail/CourseTeacher'
import CourseEvaluation from '../../../student/components/courseDetail/CourseEvaluation'
import CourseSubmit from '../../../student/components/courseDetail/CourseSubmit'
import ShareCourse from '@/components/ShareCourse'
import { getCourseDetail } from '@/api/student/courseDetail'

import { NavBar, Icon, Tab, Tabs, Empty, Skeleton } from 'vant'

Vue.use(NavBar)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(Empty)
  .use(Skeleton)
export default {
  name: 'CourseDetail',
  components: {
    CourseDetailMiddle,
    CourseIntro,
    CourseList,
    CourseTeacher,
    CourseEvaluation,
    CourseSubmit,
    ShareCourse
  },
  data: () => {
    return {
      active: 0,
      showPopup: false,
      courseInfo: {},
      courseList: [],
      commentList: [],
      isEmpty: false,
      loading: true,
      health1: {
        'code': 200,
        'msg': '正常返回',
        'data': {
          'courseId': 'health1',
          'courseName': '第一集 聊聊健康的“元点”',
          'coursePrice': 0,
          'payNum': 100,
          'startTime': '2020-12-08 08:00:00',
          'releaseTime': null,
          'classHour': 1,
          'courseLabel': '养生',
          'courseBasicIntroduction': null,
          'courseSpecificIntroduction': '第一集 聊聊健康的“元点”',
          'videoUrl': 'https://all.bnuz.edu.cn/ComprehensiveSys/upload/works/partyService/第一集  聊聊健康的“元点”(1).mp4',
          'teacherId': '2ffee950-9961-49c5-87fb-fed70651b544',
          'teacherName': '测试',
          'teacherIntroduction': '该教师是测试教师',
          'contentDtoList': [
            {
              'id': 112,
              'picURL': null,
              'name': 'X114',
              'time': '2021-01-07 01:55:49',
              'content': 'hhh'
            },
            {
              'id': 111,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:44:05',
              'content': '测试2'
            },
            {
              'id': 110,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:40:46',
              'content': '测试'
            }
          ],
          'elderLessonDtoList': [
            {
              'sequenceId': '2',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '3',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '4',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '1',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            }
          ],
          'everPurchased': true
        }
      },
      health2: {
        'code': 200,
        'msg': '正常返回',
        'data': {
          'courseId': '202009232314',
          'courseName': '第二集 啥是健康？您什么时候重视健康的？',
          'coursePrice': 0,
          'payNum': 100,
          'startTime': '2020-12-08 08:00:00',
          'releaseTime': null,
          'classHour': 1,
          'courseLabel': '养生',
          'courseBasicIntroduction': null,
          'courseSpecificIntroduction': '第二集 啥是健康？您什么时候重视健康的？',
          'videoUrl': 'https://all.bnuz.edu.cn/ComprehensiveSys/upload/works/partyService/第二集 啥是健康？您什么时候重视健康的？.mp4',
          'teacherId': '2ffee950-9961-49c5-87fb-fed70651b544',
          'teacherName': '测试',
          'teacherIntroduction': '该教师是测试教师',
          'contentDtoList': [
            {
              'id': 112,
              'picURL': null,
              'name': 'X114',
              'time': '2021-01-07 01:55:49',
              'content': 'hhh'
            },
            {
              'id': 111,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:44:05',
              'content': '测试2'
            },
            {
              'id': 110,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:40:46',
              'content': '测试'
            }
          ],
          'elderLessonDtoList': [
            {
              'sequenceId': '2',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '3',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '4',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '1',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            }
          ],
          'everPurchased': true
        }
      },
      health3: {
        'code': 200,
        'msg': '正常返回',
        'data': {
          'courseId': '202009232314',
          'courseName': '第三集 “天人合一”——古人诠释健康的真谛',
          'coursePrice': 0,
          'payNum': 100,
          'startTime': '2020-12-08 08:00:00',
          'releaseTime': null,
          'classHour': 1,
          'courseLabel': '养生',
          'courseBasicIntroduction': null,
          'courseSpecificIntroduction': '第三集 “天人合一”——古人诠释健康的真谛',
          'videoUrl': 'https://all.bnuz.edu.cn/ComprehensiveSys/upload/works/partyService/第三集 “天人合一”——古人诠释健康的真谛.mp4',
          'teacherId': '2ffee950-9961-49c5-87fb-fed70651b544',
          'teacherName': '测试',
          'teacherIntroduction': '该教师是测试教师',
          'contentDtoList': [
            {
              'id': 112,
              'picURL': null,
              'name': 'X114',
              'time': '2021-01-07 01:55:49',
              'content': 'hhh'
            },
            {
              'id': 111,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:44:05',
              'content': '测试2'
            },
            {
              'id': 110,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:40:46',
              'content': '测试'
            }
          ],
          'elderLessonDtoList': [
            {
              'sequenceId': '2',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '3',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '4',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '1',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            }
          ],
          'everPurchased': true
        }
      },
      health4: {
        'code': 200,
        'msg': '正常返回',
        'data': {
          'courseId': '202009232314',
          'courseName': '第四集 闲话脏腑的关系',
          'coursePrice': 0,
          'payNum': 100,
          'startTime': '2020-12-08 08:00:00',
          'releaseTime': null,
          'classHour': 1,
          'courseLabel': '养生',
          'courseBasicIntroduction': null,
          'courseSpecificIntroduction': '第四集 闲话脏腑的关系',
          'videoUrl': 'https://all.bnuz.edu.cn/ComprehensiveSys/upload/works/partyService/第四集 闲话脏腑的关系.mp4',
          'teacherId': '2ffee950-9961-49c5-87fb-fed70651b544',
          'teacherName': '测试',
          'teacherIntroduction': '该教师是测试教师',
          'contentDtoList': [
            {
              'id': 112,
              'picURL': null,
              'name': 'X114',
              'time': '2021-01-07 01:55:49',
              'content': 'hhh'
            },
            {
              'id': 111,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:44:05',
              'content': '测试2'
            },
            {
              'id': 110,
              'picURL': null,
              'name': 'X114',
              'time': '2020-12-21 11:40:46',
              'content': '测试'
            }
          ],
          'elderLessonDtoList': [
            {
              'sequenceId': '2',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '3',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '4',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            },
            {
              'sequenceId': '1',
              'courseId': '202009232314',
              'lessonName': '测试1',
              'lessonLength': null
            }
          ],
          'everPurchased': true
        }
      },
      video: ''
    }
  },
  created() {
    this.getCourseDetail()
  },
  methods: {
    clickLeft() {
      this.$router.go(-1)
    },
    share() {
      this.showPopup = true
    },
    async getCourseDetail() {
      try {
        const courseId = this.$route.query.courseId || ''
        var res = {}
        switch (courseId) {
          case 'health1':
            res = this.health1
            this.video = this.health1.data.videoUrl
            break
          case 'health2':
            res = this.health2
            this.video = this.health2.data.videoUrl
            break
          case 'health3':
            res = this.health3
            this.video = this.health3.data.videoUrl
            break
          case 'health4':
            res = this.health4
            this.video = this.health4.data.videoUrl
            break
          default:
            res = await getCourseDetail(courseId)
            break
        }
        if (!res.data) {
          this.isEmpty = true
        } else {
          this.courseInfo = res.data
          this.courseList = res.data.elderLessonDtoList
          this.commentList = res.data.contentDtoList
        }
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/_settings.scss';
.van-nav-bar {
  background-color: $main-color;
}
.submit_wrap--container {
  position: fixed;
  bottom: -1px;
  width: 100%;
  max-width: 600px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 2px 4px 0;
  border-radius: 5px;
}
</style>
