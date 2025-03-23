<script setup lang="ts">
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'

import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <main>
    <Splitter style="height: 100vh">
      <SplitterPanel
        class="flex align-items-center justify-content-center sidebar"
        :size="17"
        :minSize="10"
      >
        <SideBar />
      </SplitterPanel>
      <SplitterPanel class="flex align-items-center justify-content-center" :size="83">
        Panel 2
      </SplitterPanel>
    </Splitter>
  </main>
</template>

<style scoped>
.sidebar {
  padding: 0.625rem;
  background-color: var(--p-purple-100);
}
</style>
