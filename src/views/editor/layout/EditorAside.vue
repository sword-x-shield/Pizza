<template>
  <aside class="editor_aside">
    drag components
  </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'EditorAside'
})
</script>
<style lang="scss" scoped>
.editor_aside {
  height: 100%;
  min-width: 240px;
  background: #fff;
  box-shadow: var(--primaryShadow);
}
</style>
