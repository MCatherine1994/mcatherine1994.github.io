<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Tag from 'primevue/tag'
</script>

<template>
  <div class="card">
    <Accordion :value="['0', '1', '2']" multiple>
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="flex items-center gap-2 w-full">
            <Tag severity="info" value="Machine Learning" class="project-tag" />
            <span class="font-bold whitespace-nowrap"
              >Predicting academic success of undergraduate students</span
            >
          </span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Build a classification model using the k-Nearest Neighbors algorithm to predict student
            dropout and academic success based on information available at enrollment (including
            academic path, demographics, and socio-economic factors).
          </p>
          <p class="m-0">
            <i class="pi pi-github"></i>
            Github Repository:
            <a href="https://github.com/UBC-MDS/academic-success-prediction"
              >https://github.com/UBC-MDS/academic-success-prediction</a
            >
          </p>
          <p class="m-0">
            <i class="pi pi-receipt"></i> Quarto Report:
            <a
              href="https://ubc-mds.github.io/academic-success-prediction/report/academic-success-prediction"
              >https://ubc-mds.github.io/academic-success-prediction/report/academic-success-prediction</a
            >
          </p>
          <p class="m-0">
            <i class="pi pi-receipt"></i> Blog:
            <a href="https://mcatherine1994.github.io/542Lab2Blog/posts/welcome/"
              >https://mcatherine1994.github.io/542Lab2Blog/posts/welcome/</a
            >
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader
          ><span class="flex items-center gap-2 w-full">
            <Tag severity="success" value="Data Visualization" class="project-tag" />
            <span class="font-bold whitespace-nowrap">Pharmaceutical Spending Dashboard</span>
          </span></AccordionHeader
        >
        <AccordionContent>
          <p class="m-0">
            Group project to create an intuitive tool to help healthcare policy administrators
            across the world to make knowlegeable decisions around drug price policies. This
            dashboard takes in the scattered worldwide information and presents it as a
            decision-ready intelligence for daily decision-making.
          </p>
          <p class="m-0">
            <i class="pi pi-github"></i>
            Github Repository:
            <a href="https://github.com/UBC-MDS/DSCI-532_2025_17_pharma_spend_dashboard"
              >https://github.com/UBC-MDS/DSCI-532_2025_17_pharma_spend_dashboard</a
            >
          </p>
          <p class="m-0">
            <i class="pi pi-link"></i> Deployment:
            <a href="https://dsci-532-2025-17-pharma-spend-dashboard.onrender.com/"
              >https://dsci-532-2025-17-pharma-spend-dashboard.onrender.com/</a
            >
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader
          ><span class="flex items-center gap-2 w-full">
            <Tag severity="success" value="Data Visualization" class="project-tag" />
            <span class="font-bold whitespace-nowrap">Country Comparison Dashboard</span>
          </span></AccordionHeader
        >
        <AccordionContent>
          <p class="m-0">
            This interactive dashboard provides a comprehensive platform for comparing key global
            metrics across selected countries (USA, Russia, China, India, Canada, and Australia). By
            visualizing a wide range of economic, social, healthcare, military, and environmental
            data over time, the app allows users to explore trends, patterns, and growth rates
            across various indicators such as GDP, inflation, literacy rate, military expenditure,
            and CO2 emissions. This enables users to gain insights into global performance and
            development, supporting informed decision-making and facilitating cross-country
            comparisons.
          </p>
          <p class="m-0">
            <i class="pi pi-github"></i>
            Github Repository:
            <a href="https://github.ubc.ca/mds-2024-25/DSCI_532_individual-assignment_cmeng"
              >https://github.ubc.ca/mds-2024-25/DSCI_532_individual-assignment_cmeng</a
            >
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
.project-tag {
  margin-right: 0.625rem;
}
</style>
