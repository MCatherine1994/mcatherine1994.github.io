<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import LifeJourney from '@/components/LifeJourney.vue'
import MLProjects from '@/components/MLProjects.vue'
</script>

<template>
  <div class="card">
    <Tabs value="journey">
      <TabList>
        <Tab value="journey">Journey</Tab>
        <Tab value="projects">Machine Learning Projects</Tab>
        <Tab value="personal">Peronsal Life</Tab>
      </TabList>
      <TabPanels style="min-height: 100vh">
        <TabPanel value="journey">
          <LifeJourney />
        </TabPanel>
        <TabPanel value="projects">
          <MLProjects />
        </TabPanel>
        <TabPanel value="personal">
          <p class="m-0">placeholder</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>
