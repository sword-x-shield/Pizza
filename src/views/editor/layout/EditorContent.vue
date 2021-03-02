<template>
  <div class="editor_content">
    <img alt="Pizza logo" :src="Pizza">
    <div>Welcome to pizza 🍕</div>
    <div>拖拽布局组件至此处以开始搭建</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Pizza from '@/assets/Pizza.png'
export default defineComponent({
  name: 'EditorContent',
  setup() {
    return { Pizza }
  }
})
</script>
<style lang="scss" scoped>
.editor_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>
