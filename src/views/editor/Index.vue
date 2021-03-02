<template>
  <div class="editor_container">
    <editor-head />
    <article class="editor_wrap">
      <editor-aside class="editor_aside" />
      <editor-content />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditorHead from './layout/EditorHead.vue'
import EditorContent from './layout/EditorContent.vue'
import EditorAside from './layout/EditorAside.vue'
export default defineComponent({
  name: 'PizzaEditor',
  components: {
    EditorHead,
    EditorContent,
    EditorAside
  }
})
</script>
<style lang="scss" scoped>
  .editor_container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .editor_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: var(--headHeight);
  }
  .editor_aside {
    flex: 0 0 240px;
  }
</style>

