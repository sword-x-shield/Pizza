<template>
  <div class="homePage_container">
    <div class="pageHeader_container">
      <div class="pageHeader_icon--container">
        <a class="pageHeader_icon">Pizza</a>
      </div>
      <div>
        <a-avatar>
          <template #icon><UserOutlined /></template>
        </a-avatar>
      </div>
    </div>
    <div class="homePage_content">
      <img alt="Pizza logo" :src="Pizza">
      <div>Welcome to pizza 🍕</div>
      <div>Pizza is a low code platform</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pizza from '@/assets/Pizza.png'
import { Avatar } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    [Avatar.name]: Avatar,
    UserOutlined
  },
  setup() {
    return { Pizza }
  }
})
</script>

<style lang="scss" scoped>
.homePage_content {
  text-align: center;
  margin-top: 100px;
  font-size: 24px;
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
  height: 50px;
  padding: 0 58px;
  white-space: nowrap;
  background: #fff;
  box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
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
    background: url('../../assets/Pizza.png') no-repeat 0 / contain;
  }
}
</style>
