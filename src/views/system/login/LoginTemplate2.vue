<template>
  <comp-scrollbar>
    <div :class="prefixCls" wrapStyle="min-width:1200px; min-height:900px; ">
      <div :class="`${prefixCls}__container`">
        <div :class="`${prefixCls}__content`">
          <section :class="`${prefixCls}__left-wrap`">
            <div :class="`${prefixCls}__left-top`">
              <img src="@/assets/illustration/flat/Coding.svg" />
            </div>
            <div :class="`${prefixCls}__left-bottom`">
              欢迎使用！
              xx系统是针对xx行业数据特性打造的高精准数据智能计算技术系统，融合了逻辑规则与机器学习等人工智能技术,既解决了在传统xx研发模式中，依赖专家经验的高时间成本和设计方案局限性问题,也能生成可解释的设计方案,确保xx的有效性。
            </div>
          </section>

          <section :class="`${prefixCls}__right-wrap`">
            <div :class="`${prefixCls}__right-content`">
              <div :class="`${prefixCls}__head`">
                {{ $t('actions.login') }}
              </div>
              <span :class="`${prefixCls}__title`">
                {{ $t('fields.title') }}
              </span>

              <a-form
                :model="formState"
                :class="`${prefixCls}__form`"
                @finish="handleFinish"
              >
                <a-form-item>
                  <a-input
                    v-model:value="formState.username"
                    v-trim
                    size="large"
                    autocomplete="off"
                    placeholder="请输入 test"
                    :class="`${prefixCls}__form-input`"
                    @change="removeLoginFailed"
                  />
                </a-form-item>
                <a-form-item>
                  <a-input-password
                    v-model:value="formState.password"
                    size="large"
                    placeholder="请输入 123456"
                    autocomplete="off"
                    :class="`${prefixCls}__form-input`"
                    @change="removeLoginFailed"
                  />
                </a-form-item>
                <a-form-item>
                  <a-button
                    type="primary"
                    block
                    html-type="submit"
                    size="large"
                    :class="`${prefixCls}__btn`"
                    :disabled="
                      formState.username === '' || formState.password === ''
                    "
                  >
                    {{ $t('actions.login') }}
                  </a-button>
                </a-form-item>
                <span
                  :class="[`${prefixCls}__failed`, { showFailed: !errorMsg }]"
                >
                  {{ errorMsg }}
                </span>
              </a-form>

              <div :class="`${prefixCls}__triangle`">
                <div :class="`${prefixCls}__topLeft`"></div>
                <div :class="`${prefixCls}__topRight`"></div>
                <div :class="`${prefixCls}__btmLeft`"></div>
                <div :class="`${prefixCls}__btmRight`"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </comp-scrollbar>
</template>

<script setup lang="ts">
import { ref, reactive, UnwrapRef } from 'vue'
import { useRoute } from 'vue-router'
import { useSwitchPage, useI18n } from '@/hooks'

interface FormState {
  username: string
  password: string
}

const prefixCls = ref('login')
const switchPage = useSwitchPage()
const { $t } = useI18n()
const route = useRoute()

const errorMsg = ref('')
const formState: UnwrapRef<FormState> = reactive({
  username: '',
  password: ''
})

function goHomePage() {
  if (route.query.redirect) {
    window.location.href = route.query.redirect as string
  } else {
    switchPage({ name: 'DataManage' })
  }
}
function removeLoginFailed() {
  errorMsg.value = ''
}
const handleFinish = async () => {
  if (formState.username === 'test' && formState.password === '123456') {
    goHomePage()
  } else {
    errorMsg.value = $t('login.error')
  }
}
</script>

<style lang="less" scoped>
@prefix-cls: ~'login';

.@{prefix-cls} {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100vw;
  min-width: 1200px;
  height: 100vh;
  padding: 100px;
  background: #36f;

  &__container {
    width: 80%;
    min-width: 1000px;
    height: 70%;
    min-height: 600px;
    padding: 16px;
    background-color: #5c85ff;
    border-radius: 28px;
  }

  &__content {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f4f7fe;
    border-radius: 12px; // 父元素 radius - padding
  }

  &__left-wrap {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 400px;
    height: 100%;
    background: repeat
      url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 1422 800'%3E%3Cg stroke-width='3.5' stroke='hsl(212, 100%25, 88%25)' fill='none' stroke-linecap='butt'%3E%3Cline x1='0' y1='0' x2='54' y2='54'%3E%3C/line%3E%3Cline x1='108' y1='0' x2='54' y2='54'%3E%3C/line%3E%3Cline x1='162' y1='0' x2='108' y2='54'%3E%3C/line%3E%3Cline x1='216' y1='0' x2='162' y2='54'%3E%3C/line%3E%3Cline x1='270' y1='0' x2='216' y2='54'%3E%3C/line%3E%3Cline x1='324' y1='0' x2='270' y2='54'%3E%3C/line%3E%3Cline x1='378' y1='0' x2='324' y2='54'%3E%3C/line%3E%3Cline x1='378' y1='0' x2='432' y2='54'%3E%3C/line%3E%3Cline x1='432' y1='0' x2='486' y2='54'%3E%3C/line%3E%3Cline x1='540' y1='0' x2='486' y2='54'%3E%3C/line%3E%3Cline x1='540' y1='0' x2='594' y2='54'%3E%3C/line%3E%3Cline x1='594' y1='0' x2='648' y2='54'%3E%3C/line%3E%3Cline x1='702' y1='0' x2='648' y2='54'%3E%3C/line%3E%3Cline x1='756' y1='0' x2='702' y2='54'%3E%3C/line%3E%3Cline x1='756' y1='0' x2='810' y2='54'%3E%3C/line%3E%3Cline x1='864' y1='0' x2='810' y2='54'%3E%3C/line%3E%3Cline x1='864' y1='0' x2='918' y2='54'%3E%3C/line%3E%3Cline x1='918' y1='0' x2='972' y2='54'%3E%3C/line%3E%3Cline x1='972' y1='0' x2='1026' y2='54'%3E%3C/line%3E%3Cline x1='1080' y1='0' x2='1026' y2='54'%3E%3C/line%3E%3Cline x1='1080' y1='0' x2='1134' y2='54'%3E%3C/line%3E%3Cline x1='1188' y1='0' x2='1134' y2='54'%3E%3C/line%3E%3Cline x1='1188' y1='0' x2='1242' y2='54'%3E%3C/line%3E%3Cline x1='1296' y1='0' x2='1242' y2='54'%3E%3C/line%3E%3Cline x1='1296' y1='0' x2='1350' y2='54'%3E%3C/line%3E%3Cline x1='1404' y1='0' x2='1350' y2='54'%3E%3C/line%3E%3Cline x1='1404' y1='0' x2='1458' y2='54'%3E%3C/line%3E%3Cline x1='0' y1='54' x2='54' y2='108'%3E%3C/line%3E%3Cline x1='54' y1='54' x2='108' y2='108'%3E%3C/line%3E%3Cline x1='108' y1='54' x2='162' y2='108'%3E%3C/line%3E%3Cline x1='216' y1='54' x2='162' y2='108'%3E%3C/line%3E%3Cline x1='270' y1='54' x2='216' y2='108'%3E%3C/line%3E%3Cline x1='270' y1='54' x2='324' y2='108'%3E%3C/line%3E%3Cline x1='324' y1='54' x2='378' y2='108'%3E%3C/line%3E%3Cline x1='432' y1='54' x2='378' y2='108'%3E%3C/line%3E%3Cline x1='432' y1='54' x2='486' y2='108'%3E%3C/line%3E%3Cline x1='486' y1='54' x2='540' y2='108'%3E%3C/line%3E%3Cline x1='594' y1='54' x2='540' y2='108'%3E%3C/line%3E%3Cline x1='648' y1='54' x2='594' y2='108'%3E%3C/line%3E%3Cline x1='702' y1='54' x2='648' y2='108'%3E%3C/line%3E%3Cline x1='756' y1='54' x2='702' y2='108'%3E%3C/line%3E%3Cline x1='756' y1='54' x2='810' y2='108'%3E%3C/line%3E%3Cline x1='864' y1='54' x2='810' y2='108'%3E%3C/line%3E%3Cline x1='918' y1='54' x2='864' y2='108'%3E%3C/line%3E%3Cline x1='918' y1='54' x2='972' y2='108'%3E%3C/line%3E%3Cline x1='1026' y1='54' x2='972' y2='108'%3E%3C/line%3E%3Cline x1='1026' y1='54' x2='1080' y2='108'%3E%3C/line%3E%3Cline x1='1134' y1='54' x2='1080' y2='108'%3E%3C/line%3E%3Cline x1='1188' y1='54' x2='1134' y2='108'%3E%3C/line%3E%3Cline x1='1188' y1='54' x2='1242' y2='108'%3E%3C/line%3E%3Cline x1='1242' y1='54' x2='1296' y2='108'%3E%3C/line%3E%3Cline x1='1296' y1='54' x2='1350' y2='108'%3E%3C/line%3E%3Cline x1='1404' y1='54' x2='1350' y2='108'%3E%3C/line%3E%3Cline x1='1458' y1='54' x2='1404' y2='108'%3E%3C/line%3E%3Cline x1='54' y1='108' x2='0' y2='162'%3E%3C/line%3E%3Cline x1='108' y1='108' x2='54' y2='162'%3E%3C/line%3E%3Cline x1='108' y1='108' x2='162' y2='162'%3E%3C/line%3E%3Cline x1='162' y1='108' x2='216' y2='162'%3E%3C/line%3E%3Cline x1='216' y1='108' x2='270' y2='162'%3E%3C/line%3E%3Cline x1='324' y1='108' x2='270' y2='162'%3E%3C/line%3E%3Cline x1='378' y1='108' x2='324' y2='162'%3E%3C/line%3E%3Cline x1='378' y1='108' x2='432' y2='162'%3E%3C/line%3E%3Cline x1='486' y1='108' x2='432' y2='162'%3E%3C/line%3E%3Cline x1='486' y1='108' x2='540' y2='162'%3E%3C/line%3E%3Cline x1='594' y1='108' x2='540' y2='162'%3E%3C/line%3E%3Cline x1='648' y1='108' x2='594' y2='162'%3E%3C/line%3E%3Cline x1='648' y1='108' x2='702' y2='162'%3E%3C/line%3E%3Cline x1='702' y1='108' x2='756' y2='162'%3E%3C/line%3E%3Cline x1='756' y1='108' x2='810' y2='162'%3E%3C/line%3E%3Cline x1='864' y1='108' x2='810' y2='162'%3E%3C/line%3E%3Cline x1='864' y1='108' x2='918' y2='162'%3E%3C/line%3E%3Cline x1='972' y1='108' x2='918' y2='162'%3E%3C/line%3E%3Cline x1='1026' y1='108' x2='972' y2='162'%3E%3C/line%3E%3Cline x1='1080' y1='108' x2='1026' y2='162'%3E%3C/line%3E%3Cline x1='1134' y1='108' x2='1080' y2='162'%3E%3C/line%3E%3Cline x1='1188' y1='108' x2='1134' y2='162'%3E%3C/line%3E%3Cline x1='1242' y1='108' x2='1188' y2='162'%3E%3C/line%3E%3Cline x1='1242' y1='108' x2='1296' y2='162'%3E%3C/line%3E%3Cline x1='1296' y1='108' x2='1350' y2='162'%3E%3C/line%3E%3Cline x1='1404' y1='108' x2='1350' y2='162'%3E%3C/line%3E%3Cline x1='1404' y1='108' x2='1458' y2='162'%3E%3C/line%3E%3Cline x1='54' y1='162' x2='0' y2='216'%3E%3C/line%3E%3Cline x1='108' y1='162' x2='54' y2='216'%3E%3C/line%3E%3Cline x1='108' y1='162' x2='162' y2='216'%3E%3C/line%3E%3Cline x1='216' y1='162' x2='162' y2='216'%3E%3C/line%3E%3Cline x1='216' y1='162' x2='270' y2='216'%3E%3C/line%3E%3Cline x1='324' y1='162' x2='270' y2='216'%3E%3C/line%3E%3Cline x1='324' y1='162' x2='378' y2='216'%3E%3C/line%3E%3Cline x1='378' y1='162' x2='432' y2='216'%3E%3C/line%3E%3Cline x1='486' y1='162' x2='432' y2='216'%3E%3C/line%3E%3Cline x1='486' y1='162' x2='540' y2='216'%3E%3C/line%3E%3Cline x1='540' y1='162' x2='594' y2='216'%3E%3C/line%3E%3Cline x1='594' y1='162' x2='648' y2='216'%3E%3C/line%3E%3Cline x1='648' y1='162' x2='702' y2='216'%3E%3C/line%3E%3Cline x1='702' y1='162' x2='756' y2='216'%3E%3C/line%3E%3Cline x1='810' y1='162' x2='756' y2='216'%3E%3C/line%3E%3Cline x1='810' y1='162' x2='864' y2='216'%3E%3C/line%3E%3Cline x1='918' y1='162' x2='864' y2='216'%3E%3C/line%3E%3Cline x1='972' y1='162' x2='918' y2='216'%3E%3C/line%3E%3Cline x1='972' y1='162' x2='1026' y2='216'%3E%3C/line%3E%3Cline x1='1026' y1='162' x2='1080' y2='216'%3E%3C/line%3E%3Cline x1='1080' y1='162' x2='1134' y2='216'%3E%3C/line%3E%3Cline x1='1188' y1='162' x2='1134' y2='216'%3E%3C/line%3E%3Cline x1='1242' y1='162' x2='1188' y2='216'%3E%3C/line%3E%3Cline x1='1242' y1='162' x2='1296' y2='216'%3E%3C/line%3E%3Cline x1='1296' y1='162' x2='1350' y2='216'%3E%3C/line%3E%3Cline x1='1404' y1='162' x2='1350' y2='216'%3E%3C/line%3E%3Cline x1='1404' y1='162' x2='1458' y2='216'%3E%3C/line%3E%3Cline x1='54' y1='216' x2='0' y2='270'%3E%3C/line%3E%3Cline x1='108' y1='216' x2='54' y2='270'%3E%3C/line%3E%3Cline x1='162' y1='216' x2='108' y2='270'%3E%3C/line%3E%3Cline x1='162' y1='216' x2='216' y2='270'%3E%3C/line%3E%3Cline x1='270' y1='216' x2='216' y2='270'%3E%3C/line%3E%3Cline x1='324' y1='216' x2='270' y2='270'%3E%3C/line%3E%3Cline x1='378' y1='216' x2='324' y2='270'%3E%3C/line%3E%3Cline x1='432' y1='216' x2='378' y2='270'%3E%3C/line%3E%3Cline x1='486' y1='216' x2='432' y2='270'%3E%3C/line%3E%3Cline x1='486' y1='216' x2='540' y2='270'%3E%3C/line%3E%3Cline x1='540' y1='216' x2='594' y2='270'%3E%3C/line%3E%3Cline x1='648' y1='216' x2='594' y2='270'%3E%3C/line%3E%3Cline x1='648' y1='216' x2='702' y2='270'%3E%3C/line%3E%3Cline x1='702' y1='216' x2='756' y2='270'%3E%3C/line%3E%3Cline x1='756' y1='216' x2='810' y2='270'%3E%3C/line%3E%3Cline x1='864' y1='216' x2='810' y2='270'%3E%3C/line%3E%3Cline x1='918' y1='216' x2='864' y2='270'%3E%3C/line%3E%3Cline x1='918' y1='216' x2='972' y2='270'%3E%3C/line%3E%3Cline x1='972' y1='216' x2='1026' y2='270'%3E%3C/line%3E%3Cline x1='1026' y1='216' x2='1080' y2='270'%3E%3C/line%3E%3Cline x1='1134' y1='216' x2='1080' y2='270'%3E%3C/line%3E%3Cline x1='1188' y1='216' x2='1134' y2='270'%3E%3C/line%3E%3Cline x1='1242' y1='216' x2='1188' y2='270'%3E%3C/line%3E%3Cline x1='1242' y1='216' x2='1296' y2='270'%3E%3C/line%3E%3Cline x1='1350' y1='216' x2='1296' y2='270'%3E%3C/line%3E%3Cline x1='1404' y1='216' x2='1350' y2='270'%3E%3C/line%3E%3Cline x1='1404' y1='216' x2='1458' y2='270'%3E%3C/line%3E%3Cline x1='54' y1='270' x2='0' y2='324'%3E%3C/line%3E%3Cline x1='108' y1='270' x2='54' y2='324'%3E%3C/line%3E%3Cline x1='108' y1='270' x2='162' y2='324'%3E%3C/line%3E%3Cline x1='162' y1='270' x2='216' y2='324'%3E%3C/line%3E%3Cline x1='270' y1='270' x2='216' y2='324'%3E%3C/line%3E%3Cline x1='270' y1='270' x2='324' y2='324'%3E%3C/line%3E%3Cline x1='324' y1='270' x2='378' y2='324'%3E%3C/line%3E%3Cline x1='378' y1='270' x2='432' y2='324'%3E%3C/line%3E%3Cline x1='432' y1='270' x2='486' y2='324'%3E%3C/line%3E%3Cline x1='486' y1='270' x2='540' y2='324'%3E%3C/line%3E%3Cline x1='594' y1='270' x2='540' y2='324'%3E%3C/line%3E%3Cline x1='594' y1='270' x2='648' y2='324'%3E%3C/line%3E%3Cline x1='702' y1='270' x2='648' y2='324'%3E%3C/line%3E%3Cline x1='702' y1='270' x2='756' y2='324'%3E%3C/line%3E%3Cline x1='810' y1='270' x2='756' y2='324'%3E%3C/line%3E%3Cline x1='864' y1='270' x2='810' y2='324'%3E%3C/line%3E%3Cline x1='864' y1='270' x2='918' y2='324'%3E%3C/line%3E%3Cline x1='972' y1='270' x2='918' y2='324'%3E%3C/line%3E%3Cline x1='972' y1='270' x2='1026' y2='324'%3E%3C/line%3E%3Cline x1='1080' y1='270' x2='1026' y2='324'%3E%3C/line%3E%3Cline x1='1080' y1='270' x2='1134' y2='324'%3E%3C/line%3E%3Cline x1='1188' y1='270' x2='1134' y2='324'%3E%3C/line%3E%3Cline x1='1242' y1='270' x2='1188' y2='324'%3E%3C/line%3E%3Cline x1='1296' y1='270' x2='1242' y2='324'%3E%3C/line%3E%3Cline x1='1350' y1='270' x2='1296' y2='324'%3E%3C/line%3E%3Cline x1='1404' y1='270' x2='1350' y2='324'%3E%3C/line%3E%3Cline x1='1404' y1='270' x2='1458' y2='324'%3E%3C/line%3E%3Cline x1='54' y1='324' x2='0' y2='378'%3E%3C/line%3E%3Cline x1='54' y1='324' x2='108' y2='378'%3E%3C/line%3E%3Cline x1='162' y1='324' x2='108' y2='378'%3E%3C/line%3E%3Cline x1='162' y1='324' x2='216' y2='378'%3E%3C/line%3E%3Cline x1='270' y1='324' x2='216' y2='378'%3E%3C/line%3E%3Cline x1='324' y1='324' x2='270' y2='378'%3E%3C/line%3E%3Cline x1='324' y1='324' x2='378' y2='378'%3E%3C/line%3E%3Cline x1='432' y1='324' x2='378' y2='378'%3E%3C/line%3E%3Cline x1='432' y1='324' x2='486' y2='378'%3E%3C/line%3E%3Cline x1='540' y1='324' x2='486' y2='378'%3E%3C/line%3E%3Cline x1='540' y1='324' x2='594' y2='378'%3E%3C/line%3E%3Cline x1='594' y1='324' x2='648' y2='378'%3E%3C/line%3E%3Cline x1='648' y1='324' x2='702' y2='378'%3E%3C/line%3E%3Cline x1='702' y1='324' x2='756' y2='378'%3E%3C/line%3E%3Cline x1='810' y1='324' x2='756' y2='378'%3E%3C/line%3E%3Cline x1='864' y1='324' x2='810' y2='378'%3E%3C/line%3E%3Cline x1='918' y1='324' x2='864' y2='378'%3E%3C/line%3E%3Cline x1='972' y1='324' x2='918' y2='378'%3E%3C/line%3E%3Cline x1='1026' y1='324' x2='972' y2='378'%3E%3C/line%3E%3Cline x1='1080' y1='324' x2='1026' y2='378'%3E%3C/line%3E%3Cline x1='1080' y1='324' x2='1134' y2='378'%3E%3C/line%3E%3Cline x1='1188' y1='324' x2='1134' y2='378'%3E%3C/line%3E%3Cline x1='1188' y1='324' x2='1242' y2='378'%3E%3C/line%3E%3Cline x1='1242' y1='324' x2='1296' y2='378'%3E%3C/line%3E%3Cline x1='1296' y1='324' x2='1350' y2='378'%3E%3C/line%3E%3Cline x1='1404' y1='324' x2='1350' y2='378'%3E%3C/line%3E%3Cline x1='1404' y1='324' x2='1458' y2='378'%3E%3C/line%3E%3Cline x1='0' y1='378' x2='54' y2='432'%3E%3C/line%3E%3Cline x1='108' y1='378' x2='54' y2='432'%3E%3C/line%3E%3Cline x1='108' y1='378' x2='162' y2='432'%3E%3C/line%3E%3Cline x1='162' y1='378' x2='216' y2='432'%3E%3C/line%3E%3Cline x1='216' y1='378' x2='270' y2='432'%3E%3C/line%3E%3Cline x1='270' y1='378' x2='324' y2='432'%3E%3C/line%3E%3Cline x1='324' y1='378' x2='378' y2='432'%3E%3C/line%3E%3Cline x1='378' y1='378' x2='432' y2='432'%3E%3C/line%3E%3Cline x1='432' y1='378' x2='486' y2='432'%3E%3C/line%3E%3Cline x1='540' y1='378' x2='486' y2='432'%3E%3C/line%3E%3Cline x1='594' y1='378' x2='540' y2='432'%3E%3C/line%3E%3Cline x1='648' y1='378' x2='594' y2='432'%3E%3C/line%3E%3Cline x1='648' y1='378' x2='702' y2='432'%3E%3C/line%3E%3Cline x1='702' y1='378' x2='756' y2='432'%3E%3C/line%3E%3Cline x1='756' y1='378' x2='810' y2='432'%3E%3C/line%3E%3Cline x1='810' y1='378' x2='864' y2='432'%3E%3C/line%3E%3Cline x1='918' y1='378' x2='864' y2='432'%3E%3C/line%3E%3Cline x1='918' y1='378' x2='972' y2='432'%3E%3C/line%3E%3Cline x1='972' y1='378' x2='1026' y2='432'%3E%3C/line%3E%3Cline x1='1026' y1='378' x2='1080' y2='432'%3E%3C/line%3E%3Cline x1='1080' y1='378' x2='1134' y2='432'%3E%3C/line%3E%3Cline x1='1188' y1='378' x2='1134' y2='432'%3E%3C/line%3E%3Cline x1='1188' y1='378' x2='1242' y2='432'%3E%3C/line%3E%3Cline x1='1242' y1='378' x2='1296' y2='432'%3E%3C/line%3E%3Cline x1='1296' y1='378' x2='1350' y2='432'%3E%3C/line%3E%3Cline x1='1350' y1='378' x2='1404' y2='432'%3E%3C/line%3E%3Cline x1='1404' y1='378' x2='1458' y2='432'%3E%3C/line%3E%3Cline x1='0' y1='432' x2='54' y2='486'%3E%3C/line%3E%3Cline x1='54' y1='432' x2='108' y2='486'%3E%3C/line%3E%3Cline x1='108' y1='432' x2='162' y2='486'%3E%3C/line%3E%3Cline x1='216' y1='432' x2='162' y2='486'%3E%3C/line%3E%3Cline x1='270' y1='432' x2='216' y2='486'%3E%3C/line%3E%3Cline x1='324' y1='432' x2='270' y2='486'%3E%3C/line%3E%3Cline x1='378' y1='432' x2='324' y2='486'%3E%3C/line%3E%3Cline x1='432' y1='432' x2='378' y2='486'%3E%3C/line%3E%3Cline x1='486' y1='432' x2='432' y2='486'%3E%3C/line%3E%3Cline x1='540' y1='432' x2='486' y2='486'%3E%3C/line%3E%3Cline x1='540' y1='432' x2='594' y2='486'%3E%3C/line%3E%3Cline x1='648' y1='432' x2='594' y2='486'%3E%3C/line%3E%3Cline x1='702' y1='432' x2='648' y2='486'%3E%3C/line%3E%3Cline x1='702' y1='432' x2='756' y2='486'%3E%3C/line%3E%3Cline x1='810' y1='432' x2='756' y2='486'%3E%3C/line%3E%3Cline x1='810' y1='432' x2='864' y2='486'%3E%3C/line%3E%3Cline x1='918' y1='432' x2='864' y2='486'%3E%3C/line%3E%3Cline x1='972' y1='432' x2='918' y2='486'%3E%3C/line%3E%3Cline x1='1026' y1='432' x2='972' y2='486'%3E%3C/line%3E%3Cline x1='1026' y1='432' x2='1080' y2='486'%3E%3C/line%3E%3Cline x1='1134' y1='432' x2='1080' y2='486'%3E%3C/line%3E%3Cline x1='1188' y1='432' x2='1134' y2='486'%3E%3C/line%3E%3Cline x1='1242' y1='432' x2='1188' y2='486'%3E%3C/line%3E%3Cline x1='1242' y1='432' x2='1296' y2='486'%3E%3C/line%3E%3Cline x1='1296' y1='432' x2='1350' y2='486'%3E%3C/line%3E%3Cline x1='1404' y1='432' x2='1350' y2='486'%3E%3C/line%3E%3Cline x1='1458' y1='432' x2='1404' y2='486'%3E%3C/line%3E%3Cline x1='54' y1='486' x2='0' y2='540'%3E%3C/line%3E%3Cline x1='54' y1='486' x2='108' y2='540'%3E%3C/line%3E%3Cline x1='162' y1='486' x2='108' y2='540'%3E%3C/line%3E%3Cline x1='162' y1='486' x2='216' y2='540'%3E%3C/line%3E%3Cline x1='216' y1='486' x2='270' y2='540'%3E%3C/line%3E%3Cline x1='270' y1='486' x2='324' y2='540'%3E%3C/line%3E%3Cline x1='378' y1='486' x2='324' y2='540'%3E%3C/line%3E%3Cline x1='378' y1='486' x2='432' y2='540'%3E%3C/line%3E%3Cline x1='432' y1='486' x2='486' y2='540'%3E%3C/line%3E%3Cline x1='540' y1='486' x2='486' y2='540'%3E%3C/line%3E%3Cline x1='540' y1='486' x2='594' y2='540'%3E%3C/line%3E%3Cline x1='594' y1='486' x2='648' y2='540'%3E%3C/line%3E%3Cline x1='648' y1='486' x2='702' y2='540'%3E%3C/line%3E%3Cline x1='702' y1='486' x2='756' y2='540'%3E%3C/line%3E%3Cline x1='756' y1='486' x2='810' y2='540'%3E%3C/line%3E%3Cline x1='864' y1='486' x2='810' y2='540'%3E%3C/line%3E%3Cline x1='918' y1='486' x2='864' y2='540'%3E%3C/line%3E%3Cline x1='918' y1='486' x2='972' y2='540'%3E%3C/line%3E%3Cline x1='1026' y1='486' x2='972' y2='540'%3E%3C/line%3E%3Cline x1='1026' y1='486' x2='1080' y2='540'%3E%3C/line%3E%3Cline x1='1134' y1='486' x2='1080' y2='540'%3E%3C/line%3E%3Cline x1='1134' y1='486' x2='1188' y2='540'%3E%3C/line%3E%3Cline x1='1242' y1='486' x2='1188' y2='540'%3E%3C/line%3E%3Cline x1='1242' y1='486' x2='1296' y2='540'%3E%3C/line%3E%3Cline x1='1350' y1='486' x2='1296' y2='540'%3E%3C/line%3E%3Cline x1='1350' y1='486' x2='1404' y2='540'%3E%3C/line%3E%3Cline x1='1458' y1='486' x2='1404' y2='540'%3E%3C/line%3E%3Cline x1='54' y1='540' x2='0' y2='594'%3E%3C/line%3E%3Cline x1='54' y1='540' x2='108' y2='594'%3E%3C/line%3E%3Cline x1='108' y1='540' x2='162' y2='594'%3E%3C/line%3E%3Cline x1='162' y1='540' x2='216' y2='594'%3E%3C/line%3E%3Cline x1='216' y1='540' x2='270' y2='594'%3E%3C/line%3E%3Cline x1='270' y1='540' x2='324' y2='594'%3E%3C/line%3E%3Cline x1='324' y1='540' x2='378' y2='594'%3E%3C/line%3E%3Cline x1='432' y1='540' x2='378' y2='594'%3E%3C/line%3E%3Cline x1='432' y1='540' x2='486' y2='594'%3E%3C/line%3E%3Cline x1='486' y1='540' x2='540' y2='594'%3E%3C/line%3E%3Cline x1='594' y1='540' x2='540' y2='594'%3E%3C/line%3E%3Cline x1='648' y1='540' x2='594' y2='594'%3E%3C/line%3E%3Cline x1='702' y1='540' x2='648' y2='594'%3E%3C/line%3E%3Cline x1='756' y1='540' x2='702' y2='594'%3E%3C/line%3E%3Cline x1='756' y1='540' x2='810' y2='594'%3E%3C/line%3E%3Cline x1='864' y1='540' x2='810' y2='594'%3E%3C/line%3E%3Cline x1='864' y1='540' x2='918' y2='594'%3E%3C/line%3E%3Cline x1='972' y1='540' x2='918' y2='594'%3E%3C/line%3E%3Cline x1='1026' y1='540' x2='972' y2='594'%3E%3C/line%3E%3Cline x1='1026' y1='540' x2='1080' y2='594'%3E%3C/line%3E%3Cline x1='1080' y1='540' x2='1134' y2='594'%3E%3C/line%3E%3Cline x1='1188' y1='540' x2='1134' y2='594'%3E%3C/line%3E%3Cline x1='1188' y1='540' x2='1242' y2='594'%3E%3C/line%3E%3Cline x1='1242' y1='540' x2='1296' y2='594'%3E%3C/line%3E%3Cline x1='1296' y1='540' x2='1350' y2='594'%3E%3C/line%3E%3Cline x1='1404' y1='540' x2='1350' y2='594'%3E%3C/line%3E%3Cline x1='1404' y1='540' x2='1458' y2='594'%3E%3C/line%3E%3Cline x1='54' y1='594' x2='0' y2='648'%3E%3C/line%3E%3Cline x1='108' y1='594' x2='54' y2='648'%3E%3C/line%3E%3Cline x1='108' y1='594' x2='162' y2='648'%3E%3C/line%3E%3Cline x1='162' y1='594' x2='216' y2='648'%3E%3C/line%3E%3Cline x1='216' y1='594' x2='270' y2='648'%3E%3C/line%3E%3Cline x1='270' y1='594' x2='324' y2='648'%3E%3C/line%3E%3Cline x1='324' y1='594' x2='378' y2='648'%3E%3C/line%3E%3Cline x1='378' y1='594' x2='432' y2='648'%3E%3C/line%3E%3Cline x1='486' y1='594' x2='432' y2='648'%3E%3C/line%3E%3Cline x1='486' y1='594' x2='540' y2='648'%3E%3C/line%3E%3Cline x1='540' y1='594' x2='594' y2='648'%3E%3C/line%3E%3Cline x1='648' y1='594' x2='594' y2='648'%3E%3C/line%3E%3Cline x1='702' y1='594' x2='648' y2='648'%3E%3C/line%3E%3Cline x1='702' y1='594' x2='756' y2='648'%3E%3C/line%3E%3Cline x1='810' y1='594' x2='756' y2='648'%3E%3C/line%3E%3Cline x1='864' y1='594' x2='810' y2='648'%3E%3C/line%3E%3Cline x1='864' y1='594' x2='918' y2='648'%3E%3C/line%3E%3Cline x1='918' y1='594' x2='972' y2='648'%3E%3C/line%3E%3Cline x1='1026' y1='594' x2='972' y2='648'%3E%3C/line%3E%3Cline x1='1080' y1='594' x2='1026' y2='648'%3E%3C/line%3E%3Cline x1='1134' y1='594' x2='1080' y2='648'%3E%3C/line%3E%3Cline x1='1134' y1='594' x2='1188' y2='648'%3E%3C/line%3E%3Cline x1='1188' y1='594' x2='1242' y2='648'%3E%3C/line%3E%3Cline x1='1296' y1='594' x2='1242' y2='648'%3E%3C/line%3E%3Cline x1='1350' y1='594' x2='1296' y2='648'%3E%3C/line%3E%3Cline x1='1404' y1='594' x2='1350' y2='648'%3E%3C/line%3E%3Cline x1='1404' y1='594' x2='1458' y2='648'%3E%3C/line%3E%3Cline x1='54' y1='648' x2='0' y2='702'%3E%3C/line%3E%3Cline x1='108' y1='648' x2='54' y2='702'%3E%3C/line%3E%3Cline x1='162' y1='648' x2='108' y2='702'%3E%3C/line%3E%3Cline x1='216' y1='648' x2='162' y2='702'%3E%3C/line%3E%3Cline x1='270' y1='648' x2='216' y2='702'%3E%3C/line%3E%3Cline x1='324' y1='648' x2='270' y2='702'%3E%3C/line%3E%3Cline x1='378' y1='648' x2='324' y2='702'%3E%3C/line%3E%3Cline x1='432' y1='648' x2='378' y2='702'%3E%3C/line%3E%3Cline x1='432' y1='648' x2='486' y2='702'%3E%3C/line%3E%3Cline x1='486' y1='648' x2='540' y2='702'%3E%3C/line%3E%3Cline x1='540' y1='648' x2='594' y2='702'%3E%3C/line%3E%3Cline x1='648' y1='648' x2='594' y2='702'%3E%3C/line%3E%3Cline x1='648' y1='648' x2='702' y2='702'%3E%3C/line%3E%3Cline x1='756' y1='648' x2='702' y2='702'%3E%3C/line%3E%3Cline x1='810' y1='648' x2='756' y2='702'%3E%3C/line%3E%3Cline x1='864' y1='648' x2='810' y2='702'%3E%3C/line%3E%3Cline x1='864' y1='648' x2='918' y2='702'%3E%3C/line%3E%3Cline x1='918' y1='648' x2='972' y2='702'%3E%3C/line%3E%3Cline x1='972' y1='648' x2='1026' y2='702'%3E%3C/line%3E%3Cline x1='1026' y1='648' x2='1080' y2='702'%3E%3C/line%3E%3Cline x1='1134' y1='648' x2='1080' y2='702'%3E%3C/line%3E%3Cline x1='1134' y1='648' x2='1188' y2='702'%3E%3C/line%3E%3Cline x1='1242' y1='648' x2='1188' y2='702'%3E%3C/line%3E%3Cline x1='1296' y1='648' x2='1242' y2='702'%3E%3C/line%3E%3Cline x1='1350' y1='648' x2='1296' y2='702'%3E%3C/line%3E%3Cline x1='1350' y1='648' x2='1404' y2='702'%3E%3C/line%3E%3Cline x1='1404' y1='648' x2='1458' y2='702'%3E%3C/line%3E%3Cline x1='54' y1='702' x2='0' y2='756'%3E%3C/line%3E%3Cline x1='54' y1='702' x2='108' y2='756'%3E%3C/line%3E%3Cline x1='108' y1='702' x2='162' y2='756'%3E%3C/line%3E%3Cline x1='162' y1='702' x2='216' y2='756'%3E%3C/line%3E%3Cline x1='270' y1='702' x2='216' y2='756'%3E%3C/line%3E%3Cline x1='270' y1='702' x2='324' y2='756'%3E%3C/line%3E%3Cline x1='378' y1='702' x2='324' y2='756'%3E%3C/line%3E%3Cline x1='432' y1='702' x2='378' y2='756'%3E%3C/line%3E%3Cline x1='486' y1='702' x2='432' y2='756'%3E%3C/line%3E%3Cline x1='486' y1='702' x2='540' y2='756'%3E%3C/line%3E%3Cline x1='540' y1='702' x2='594' y2='756'%3E%3C/line%3E%3Cline x1='648' y1='702' x2='594' y2='756'%3E%3C/line%3E%3Cline x1='702' y1='702' x2='648' y2='756'%3E%3C/line%3E%3Cline x1='756' y1='702' x2='702' y2='756'%3E%3C/line%3E%3Cline x1='756' y1='702' x2='810' y2='756'%3E%3C/line%3E%3Cline x1='810' y1='702' x2='864' y2='756'%3E%3C/line%3E%3Cline x1='918' y1='702' x2='864' y2='756'%3E%3C/line%3E%3Cline x1='918' y1='702' x2='972' y2='756'%3E%3C/line%3E%3Cline x1='1026' y1='702' x2='972' y2='756'%3E%3C/line%3E%3Cline x1='1080' y1='702' x2='1026' y2='756'%3E%3C/line%3E%3Cline x1='1134' y1='702' x2='1080' y2='756'%3E%3C/line%3E%3Cline x1='1188' y1='702' x2='1134' y2='756'%3E%3C/line%3E%3Cline x1='1188' y1='702' x2='1242' y2='756'%3E%3C/line%3E%3Cline x1='1296' y1='702' x2='1242' y2='756'%3E%3C/line%3E%3Cline x1='1350' y1='702' x2='1296' y2='756'%3E%3C/line%3E%3Cline x1='1350' y1='702' x2='1404' y2='756'%3E%3C/line%3E%3Cline x1='1404' y1='702' x2='1458' y2='756'%3E%3C/line%3E%3Cline x1='54' y1='756' x2='0' y2='810'%3E%3C/line%3E%3Cline x1='108' y1='756' x2='54' y2='810'%3E%3C/line%3E%3Cline x1='108' y1='756' x2='162' y2='810'%3E%3C/line%3E%3Cline x1='162' y1='756' x2='216' y2='810'%3E%3C/line%3E%3Cline x1='216' y1='756' x2='270' y2='810'%3E%3C/line%3E%3Cline x1='324' y1='756' x2='270' y2='810'%3E%3C/line%3E%3Cline x1='378' y1='756' x2='324' y2='810'%3E%3C/line%3E%3Cline x1='378' y1='756' x2='432' y2='810'%3E%3C/line%3E%3Cline x1='432' y1='756' x2='486' y2='810'%3E%3C/line%3E%3Cline x1='486' y1='756' x2='540' y2='810'%3E%3C/line%3E%3Cline x1='540' y1='756' x2='594' y2='810'%3E%3C/line%3E%3Cline x1='594' y1='756' x2='648' y2='810'%3E%3C/line%3E%3Cline x1='648' y1='756' x2='702' y2='810'%3E%3C/line%3E%3Cline x1='702' y1='756' x2='756' y2='810'%3E%3C/line%3E%3Cline x1='756' y1='756' x2='810' y2='810'%3E%3C/line%3E%3Cline x1='810' y1='756' x2='864' y2='810'%3E%3C/line%3E%3Cline x1='918' y1='756' x2='864' y2='810'%3E%3C/line%3E%3Cline x1='918' y1='756' x2='972' y2='810'%3E%3C/line%3E%3Cline x1='1026' y1='756' x2='972' y2='810'%3E%3C/line%3E%3Cline x1='1026' y1='756' x2='1080' y2='810'%3E%3C/line%3E%3Cline x1='1080' y1='756' x2='1134' y2='810'%3E%3C/line%3E%3Cline x1='1134' y1='756' x2='1188' y2='810'%3E%3C/line%3E%3Cline x1='1242' y1='756' x2='1188' y2='810'%3E%3C/line%3E%3Cline x1='1242' y1='756' x2='1296' y2='810'%3E%3C/line%3E%3Cline x1='1350' y1='756' x2='1296' y2='810'%3E%3C/line%3E%3Cline x1='1404' y1='756' x2='1350' y2='810'%3E%3C/line%3E%3Cline x1='1404' y1='756' x2='1458' y2='810'%3E%3C/line%3E%3C/g%3E%3C/svg%3E");
    background-position: left bottom;
    background-size: 100%;
    background-origin: content-box;
  }

  &__left-top {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 50px;

    img {
      width: 60%;
      min-width: 250px;
      max-width: 350px;
    }
  }

  &__left-bottom {
    display: flex;
    align-items: center;
    height: 30%;
    padding: 16px;
    color: #fff;
    background: #36f;
  }

  &__right-wrap {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 600px;
    height: 100%;
    min-height: 460px;
    background-color: @gray-1;
  }

  &__right-content {
    width: 20rem;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    color: @heading-color;
    font-size: 1.75rem;
    line-height: 1.75rem;
    border-bottom: 1px solid #f0f0f1;
  }

  &__title {
    color: @gray-8;
    font-size: 1rem;
  }

  &__form {
    margin-top: 2rem;
  }

  &__form-input {
    font-size: 0.875rem;
    background-color: @gray-3;
  }

  &__failed {
    display: block;
    height: 1.5rem;
    color: @error-color;
    line-height: 1.5rem;
    visibility: visible;
  }

  .showFailed {
    visibility: hidden;
  }

  // input 输入
  :deep(.ant-input) {
    color: @gray-8;
    border: 1px solid @border-color-base;

    &::placeholder {
      color: @gray-6;
    }

    &:hover,
    &:focus {
      border-color: @primary-color-5;
    }
  }

  // 密码输入
  :deep(.ant-input-affix-wrapper) {
    // content 内层
    > input.ant-input {
      background-color: @gray-3;
      border: none;
    }
  }

  // 修改禁用按钮样式
  :deep(
      .ant-btn-primary[disabled],
      .ant-btn-primary[disabled]:hover,
      .ant-btn-primary[disabled]:focus,
      .ant-btn-primary[disabled]:active
    ) {
    color: #fff;
    text-shadow: none;
    background: @primary-color;
    border-color: @primary-color;
    box-shadow: none;
    opacity: 0.5;
  }

  // 浏览器自动填入
  :deep(input:-webkit-autofill) {
    background-color: #fff;
    background-image: none;
    transition: background-color 50000s ease-in-out 0s;
    -webkit-text-fill-color: #595958 !important;
  }

  &__triangle {
    width: 0;
    height: 0;
  }

  &__topLeft {
    position: absolute;
    top: 0;
    left: 0;
    border-top: 10rem solid #f6fbfd;
    border-right: 10rem solid transparent;
  }

  &__topRight {
    position: absolute;
    top: 0;
    right: 0;
    border-top: 10rem solid #f6fbfd;
    border-left: 10rem solid transparent;
  }

  &__btmLeft {
    position: absolute;
    bottom: 0;
    left: 0;
    border-right: 10rem solid transparent;
    border-bottom: 10rem solid #f6fbfd;
  }

  &__btmRight {
    position: absolute;
    right: 0;
    bottom: 0;
    border-bottom: 10rem solid #f6fbfd;
    border-left: 10rem solid transparent;
  }
}
</style>
