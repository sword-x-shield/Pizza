<template>
  <div class="homePage_container">
    <div class="pageHeader_container">
      <div class="pageHeader_icon--container">
        <a class="pageHeader_icon" href="/">Pizza</a>
      </div>
    </div>
    <div class="homePage_content">
      <img alt="Pizza logo" :src="Pizza">
      <div class="homePage_content--font">Welcome To Pizza 🍕 A Low Code Platform</div>
      <a href="/editor">
        <a-button type="primary" shape="round" size="large">
          <template #icon>
            Quick Start
            <ArrowRightOutlined />
          </template>
        </a-button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pizza from '@/assets/Pizza.png'
import { Avatar, Button } from 'ant-design-vue'
import { ArrowRightOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    [Avatar.name]: Avatar,
    [Button.name]: Button,
    [ArrowRightOutlined.name]: ArrowRightOutlined
  },
  setup() {
    return { Pizza }
  }
})
</script>

<style lang="scss" scoped>
.homePage_content {
  margin: -50px -58px 0;
  padding: 100px 0;
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
    background: url('../../assets/Pizza-Dark.svg') no-repeat 0 / contain;
  }
}
</style>
