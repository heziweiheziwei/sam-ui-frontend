<script setup lang="ts">
import {
  ReInfinite,
  RePie,
  ReLine,
  ReBar
} from "/@/components/ReCharts/index";
import { ref } from "vue";

let loading = ref<boolean>(true);

setTimeout(() => {
  loading.value = !loading.value;
}, 800);
</script>

<template>
  <div class="welcome">
    <el-row :gutter="24" style="margin: 20px">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="20"
        :xl="20"
        style="margin-bottom: 20px"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <el-card>
          <template #header>
            <div>
              <span>Event</span>
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <ReInfinite />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="8"
        style="margin-bottom: 20px"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card>
          <template #header>
            <div>
              <span>GitHub饼图信息</span>
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <RePie />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="8"
        style="margin-bottom: 20px"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card>
          <template #header>
            <div>
              <span>GitHub折线图信息</span>
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <ReLine />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="8"
        :xl="8"
        style="margin-bottom: 20px"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card>
          <template #header>
            <div>
              <span>GitHub柱状图信息</span>
            </div>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <ReBar />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style module scoped>
.size {
  height: 335px;
}
</style>

<style lang="scss" scoped>
.main-content {
  margin: 0;
}

.welcome {
  height: 100%;

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #fff;

    .left-mark {
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
      }

      span {
        font-size: 14px;
      }
    }
  }
}
</style>
