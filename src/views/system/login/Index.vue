<!--
 * @Description: 登录页
 * @Date: 2023-09-06 18:11:26
 * @LastEditTime: 2024-07-25 17:14:47
-->
<template>
  <div :class="prefixCls">
    <component :is="componentList[currentComponentIndex]"></component>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import LoginTemplate1 from './LoginTemplate1.vue'
import LoginTemplate2 from './LoginTemplate2.vue'

const prefixCls = ref('login-toggle')
const name = useRoute().query?.name || '0'

const currentComponentIndex = shallowRef(0)
const componentList = [LoginTemplate1, LoginTemplate2]

watch(
  () => name,
  () => {
    if (+name < componentList.length) {
      currentComponentIndex.value = +name
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="less" scoped>
@prefix-cls: ~'login-toggle';
</style>
