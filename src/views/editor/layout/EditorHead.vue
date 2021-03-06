<template>
  <header class="pageHeader_container">
    <div class="pageHeader_icon--container">
      <a class="pageHeader_icon" href="/">Pizza</a>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'EditorHead'
})
</script>
<style lang="scss" scoped>
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
  background: var(--primaryColor);
  box-shadow: var(--primaryShadow);
}
.pageHeader_icon {
  display: inline-block;
  height: 40px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 2px;
  &:not([data-plaintext]) {
    padding-left: 56px;
    background: url('../../../assets/Pizza-Light.svg') no-repeat 0 / contain;
  }
}
</style>
