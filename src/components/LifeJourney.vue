<script setup lang="ts">
import { ref, defineOptions, onMounted } from 'vue'
import Timeline from 'primevue/timeline'
import Tag from 'primevue/tag'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Tooltip from 'primevue/tooltip'
import Carousel from 'primevue/carousel'
import UBCVlog from '@/components/UBCVlog.vue'
import { MemoryService } from '@/service/MemoryService'
import { JourneySerivce } from '@/service/JourneyService'

defineOptions({
  directives: {
    Tooltip, // register Primevue Tooltip locally
  },
})

onMounted(() => {
  MemoryService.getVicMemory().then((data) => (vicMemorys.value = data))
  JourneySerivce.getJourney().then((data) => (events.value = data))
})

const vicMemorys = ref() // image informations for study in Victoria
const expandedKeys = ref({})
const events = ref()
</script>

<template>
  <Timeline :value="events" class="timeline">
    <template #marker="slotProps">
      <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm">
        <i :class="slotProps.item.icon"></i>
      </span>
    </template>
    <template #opposite="slotProps">
      <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
      <br />
      <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.company }}</small>
    </template>
    <template #content="slotProps">
      <Panel :header="slotProps.item.position" toggleable style="margin-bottom: 2rem">
        <Tag
          severity="info"
          :value="language"
          v-for="language in slotProps.item.language"
          :key="language"
          v-if="slotProps.item.language"
          class="techstack-tag"
        />
        <Tag
          severity="success"
          :value="database"
          v-for="database in slotProps.item.database"
          :key="database"
          v-if="slotProps.item.database"
          class="techstack-tag"
        />
        <Tag
          severity="warn"
          :value="deployment"
          v-for="deployment in slotProps.item.deployment"
          :key="deployment"
          v-if="slotProps.item.deployment"
          class="techstack-tag"
        />
        <p
          v-if="slotProps.item.summary"
          v-html="slotProps.item.summary.replace(/\n/g, '<br>')"
          style="margin-top: 0.4rem; margin-bottom: 0.8rem"
        ></p>
        <PanelMenu
          v-model:expandedKeys="expandedKeys"
          :model="slotProps.item.detail"
          v-if="slotProps.item.detail"
          style="margin-top: 0.25rem"
        />
        <span v-for="(course, index) in slotProps.item.courses" :key="course.name">
          <u v-tooltip.top="{ autoHide: false, value: course.tooltip }" class="hover-underline">{{
            course.name
          }}</u>
          <span v-if="index !== slotProps.item.courses.length - 1">, </span>
        </span>
        <UBCVlog v-if="slotProps.item.date == 'Sep, 2024'" />
        <div class="card">
          <Carousel
            :value="vicMemorys"
            :numVisible="3"
            :numScroll="3"
            circular
            :autoplayInterval="3000"
            v-if="slotProps.item.date == 'Sep, 2015'"
          >
            <template #item="slotVicProps">
              <div
                class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
                style="margin-right: 1rem"
              >
                <div class="mb-4">
                  <div class="relative mx-auto">
                    <img
                      :src="'/img/' + slotVicProps.data.image"
                      :alt="slotVicProps.data.description"
                      class="rounded"
                      style="width: 100%; height: auto"
                    />
                  </div>
                </div>
                <div class="mb-4 font-medium">{{ slotVicProps.data.description }}</div>
              </div>
            </template>
          </Carousel>
        </div>
      </Panel>
    </template>
  </Timeline>
</template>

<style scoped>
.timeline {
  padding-top: 0.825rem;
}

.techstack-tag {
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
}

.hover-underline {
  cursor: pointer;
}

.hover-underline:hover {
  text-decoration: none;
}
</style>
