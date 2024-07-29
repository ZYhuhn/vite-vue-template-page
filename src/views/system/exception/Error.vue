<!--
 * @Description: 系统异常页面 403、404 等
 * @Date: 2023-09-06 17:09:25
 * @LastEditTime: 2024-07-29 15:25:22
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useSwitchPage } from '@/hooks'
import { getImageUrl } from '@/utils/util'

export default defineComponent({
  name: 'ErrorPage',
  setup() {
    const prefixCls = ref('error')
    const switchPage = useSwitchPage()

    const imgIndex = ref(0)
    function setImgIndex() {
      imgIndex.value += 1
      if (imgIndex.value > 14) {
        imgIndex.value = 0
      }
    }

    return {
      prefixCls,
      getImageUrl,
      backHome: () => {
        switchPage({ name: 'DataManage' })
      },
      imgIndex,
      setImgIndex
    }
  }
})
</script>

<template>
  <section :class="[prefixCls]">
    <div :class="`${prefixCls}__content-wrap`">
      <img
        :src="getImageUrl(`404/404_${imgIndex}.svg`)"
        :data-img-index="imgIndex"
        alt="404"
        @click="setImgIndex"
      />
      <div :class="`${prefixCls}__msg`">
        <span>抱歉，您访问的页面不存在！</span>
        <br />
        <span>访问链接可能错误，或者无权限访问该页面。</span>
        <a-button type="link" @click="backHome">返回首页</a-button>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@prefix-cls: ~'error';

.@{prefix-cls} {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__content-wrap {
    width: 30rem;
    height: 30rem;
    transform: translateY(-15%);
  }

  &__msg {
    max-width: 408px;
    color: @gray-7;
    line-height: 1.5rem;
    text-align: center;
  }
}
</style>
