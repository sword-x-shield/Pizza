<template>
  <div class="homePage_container">
    <div class="pageHeader_container">
      <div class="pageHeader_icon--container">
        <a class="pageHeader_icon" href="/">Pizza</a>
      </div>
      <div>
        <a-button shape="round" @click="changeLanguage">
          {{ locale==='en'?'中文':'English' }}
        </a-button>
      </div>
    </div>
    <div class="homePage_introduce">
      <img alt="Pizza logo" :src="Pizza">
      <div class="homePage_introduce--font">{{ t('platform') }}</div>
      <a href="/editor">
        <a-button type="primary" shape="round" size="large">
          <template #icon>
            {{ t('quick') }}
            <ArrowRightOutlined />
          </template>
        </a-button>
      </a>
    </div>
    <div class="homePage_content">
      <div class="homePage_features--container">
        <transition-group
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <div v-if="isShow" :key="1" class="homePage_features--item" data-index="1">
            <DragSvg class="homePage_svg" />
            <dl>
              <dt>{{ t('features.Simple.dt') }}</dt>
              <dd>{{ t('features.Simple.dd') }}</dd>
            </dl>
          </div>
          <div v-if="isShow" :key="2" class="homePage_features--item" data-index="2">
            <ComponentSvg class="homePage_svg" />
            <dl>
              <dt>{{ t('features.Diverse.dt') }}</dt>
              <dd>{{ t('features.Diverse.dd') }}</dd>
            </dl>
          </div>
          <div v-if="isShow" :key="3" class="homePage_features--item" data-index="3">
            <RepectSvg class="homePage_svg" />
            <dl>
              <dt>{{ t('features.Reusable.dt') }}</dt>
              <dd>{{ t('features.Reusable.dd') }}</dd>
            </dl>
          </div>
          <div v-if="isShow" :key="4" class="homePage_features--item" data-index="4">
            <OnlineSvg class="homePage_svg" />
            <dl>
              <dt>{{ t('features.Obvious.dt') }}</dt>
              <dd>{{ t('features.Obvious.dd') }}</dd>
            </dl>
          </div>
        </transition-group>
      </div>
      <div class="homePage_showCase--container">
        <p>{{ t('case') }}</p>
        <a-carousel>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </div>
    </div>
    <div class="homePage_footer">
      <div class="homePage_footer--iconContainer">
        <a href="https://github.com/sword-x-shield/Pizza">
          <icon-font type="pizza-github" class="homePage_footer--icon" />
        </a>
      </div>
      <span class="homePage_footer--font">© Copyright - sword-x-shield</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Pizza from '@/assets/Pizza.png'
import { Avatar, Button, Carousel } from 'ant-design-vue'
import { ArrowRightOutlined, createFromIconfontCN } from '@ant-design/icons-vue'
import OnlineSvg from '@/assets/svg/online.svg'
import DragSvg from '@/assets/svg/drag.svg'
import RepectSvg from '@/assets/svg/repect.svg'
import ComponentSvg from '@/assets/svg/component.svg'

const IconFont = createFromIconfontCN()

export default defineComponent({
  name: 'HomePage',
  components: {
    [Avatar.name]: Avatar,
    [Button.name]: Button,
    [Carousel.name]: Carousel,
    ArrowRightOutlined,
    IconFont,
    OnlineSvg,
    DragSvg,
    RepectSvg,
    ComponentSvg
  },
  setup() {
    const isShow = ref(false)
    const { t, locale } = useI18n({
      useScope: 'global'
    })
    const changeLanguage = () => {
      locale.value = locale.value === 'en' ? 'cn' : 'en'
    }
    const beforeEnter = (el:HTMLElement) => {
      el.style.opacity = '0'
    }
    const enter = (el:HTMLElement, done:()=>void) => {
      const delay:number = Number(el.dataset.index) * 300
      setTimeout(() => {
        el.style.transition = 'opacity 1s '
        el.style.opacity = '1'
        done()
      }, delay)
    }
    onMounted(() => {
      setTimeout(() => {
        isShow.value = !isShow.value
      })
    })
    return { Pizza, changeLanguage, locale, t, beforeEnter, enter, isShow }
  }
})
</script>

<style lang="scss" scoped>
.homePage_introduce {
  padding: 60px 0;
  background-color: #f5f6f8;
  text-align: center;
  &--font{
    margin: 16px 0 32px;
    opacity: .78;
    font-size: 18px;
    color:#454d64;
  }
}

.pageHeader_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  height: var(--headHeight);
  padding: 0 58px;
  white-space: nowrap;
  background: #fff;
  box-shadow: var(--primaryShadow);
}

.pageHeader_icon {
  display: inline-block;
  height: 40px;
  color: #080e29;
  font-weight: 500;
  text-decoration: none;
  font-size: 24px;
  line-height: 40px;
  &:not([data-plaintext]) {
    padding-left: 56px;
    background: url('../../assets/svg/Pizza-Dark.svg') no-repeat 0 / contain;
  }
}

.homePage_content{
  padding: 40px 100px 100px 100px;
}

.homePage_showCase{
  &--container{
  text-align: center;
  width: 800px;
  margin: 0 auto;
    p{
      font-size: 24px;
    }
  }
}

.homePage_features{
  &--container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 96px;
    grid-row-gap: 56px;
    padding-bottom: 72px;
  }
  &--item{
    text-align: center;
    dl dt{
      margin-bottom: 12px;
      font-size: 20px;
      line-height: 1;
      color: #454d64;
      text-align: center;
    }
    dl dd{
      text-align: center;
      color: #454d64;
    }
  }
}

.homePage_footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: #000000;
  &--iconContainer{
    padding: 20px;
  }
  &--icon{
    cursor: pointer;
    font-size: 40px;
    transition: all 0.2s ease-in-out;
    &:hover{
      transform: scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
  &--font{
    color: #fff;
  }
}

.homePage_svg{
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 300px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  height: 300px;
  color: #fff;
}
</style>
