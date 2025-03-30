<script setup lang="ts">
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

import SideBar from "@/components/SideBar.vue";
import MainPanel from "@/components/MainPanel.vue";
</script>

<template>
  <main>
    <Splitter style="min-height: 100vh">
      <SplitterPanel
        class="flex align-items-center justify-content-center sidebar"
        :size="18"
        :minSize="10"
      >
        <SideBar />
      </SplitterPanel>
      <SplitterPanel class="flex align-items-center justify-content-center content" :size="82">
        <MainPanel />
      </SplitterPanel>
    </Splitter>
  </main>
</template>

<style scoped>
.sidebar {
  padding: 1rem;
  background-color: var(--p-purple-100);
}
.content {
  padding: 0.3rem;
  padding-left: 0.2rem;
  background-color: var(--p-purple-50);
}
</style>
