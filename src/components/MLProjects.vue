<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Tag from "primevue/tag";
</script>

<template>
  <div class="card">
    <Accordion :value="['0', '1', '2', '3']" multiple>
      <AccordionPanel value="0">
        <AccordionHeader>
          <span class="flex items-center gap-2 w-full">
            <Tag severity="info" value="Machine Learning" class="project-tag" />
            <span class="font-bold whitespace-nowrap project-tag"
              >Credit Card Default Prediction (2024)</span
            >
            <Tag severity="warn" value="Python Skilearn" class="project-tag" />
          </span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            A machine learning classification project predicting credit card default. 
            This project follows the complete ML workflow—starting with exploratory data analysis (EDA), 
            followed by feature engineering, feature selection and importance analysis, 
            model comparison, and hyperparameter optimization. 
            It evaluates and compares the performance of <strong>Logistic Regression</strong>, 
            <strong>Random Forest</strong>, <strong>LightGBM</strong>, and <strong>XGBoost models</strong>.
          </p>
          <p class="m-0">
            <i class="pi pi-github icon"></i>
            Github Repository:
            <a href="https://github.com/MCatherine1994/credit-card-default-prediction"
              >https://github.com/MCatherine1994/credit-card-default-prediction</a
            >
          </p>
          <p class="m-0">
            <i class="pi pi-receipt icon"></i> Quarto Report:
            <a
              href="https://mcatherine1994.github.io/credit-card-default-prediction/project.html"
              >https://mcatherine1994.github.io/credit-card-default-prediction/project.html</a
            >
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>
          <span class="flex items-center gap-2 w-full">
            <Tag severity="info" value="Machine Learning" class="project-tag" />
            <span class="font-bold whitespace-nowrap project-tag"
              >Predicting academic success of undergraduate students (2024)</span
            >
            <Tag severity="warn" value="Python Skilearn" class="project-tag" />
          </span>
        </AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Build a classification model using the k-Nearest Neighbors algorithm to predict student
            dropout and academic success based on information available at enrollment (including
            academic path, demographics, and socio-economic factors).
          </p>
          <p class="m-0">
            <i class="pi pi-github icon"></i>
            Github Repository:
            <a href="https://github.com/UBC-MDS/academic-success-prediction"
              >https://github.com/UBC-MDS/academic-success-prediction</a
            >
          </p>
          <p class="m-0">
            <i class="pi pi-receipt icon"></i> Quarto Report:
            <a
              href="https://ubc-mds.github.io/academic-success-prediction/report/academic-success-prediction"
              >https://ubc-mds.github.io/academic-success-prediction/report/academic-success-prediction</a
            >
          </p>
          <p class="m-0">
            <i class="pi pi-receipt icon"></i> Blog:
            <a href="https://mcatherine1994.github.io/542Lab2Blog/posts/welcome/"
              >https://mcatherine1994.github.io/542Lab2Blog/posts/welcome/</a
            >
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader
          ><span class="flex items-center gap-2 w-full">
            <Tag severity="success" value="Data Visualization" class="project-tag" />
            <span class="font-bold whitespace-nowrap project-tag"
              >Pharmaceutical Spending Dashboard (2025)</span
            >
            <Tag severity="warn" value="Python Dash" class="project-tag" /> </span
        ></AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            Group project to create an intuitive tool to help healthcare policy administrators
            across the world to make knowlegeable decisions around drug price policies. This
            dashboard takes in the scattered worldwide information and presents it as a
            decision-ready intelligence for daily decision-making.
          </p>
          <p class="m-0">
            <i class="pi pi-github icon"></i>
            Github Repository:
            <a href="https://github.com/UBC-MDS/DSCI-532_2025_17_pharma_spend_dashboard"
              >https://github.com/UBC-MDS/DSCI-532_2025_17_pharma_spend_dashboard</a
            >
          </p>
          <p class="m-0">
            <i class="pi pi-link icon"></i> Deployment:
            <a href="https://dsci-532-2025-17-pharma-spend-dashboard.onrender.com/"
              >https://dsci-532-2025-17-pharma-spend-dashboard.onrender.com/</a
            >
            <br />
            <small class="text-surface-500 dark:text-surface-400"
              >Note: The project is deployed on <a href="https://render.com/">Render.com</a>. The
              initial loading takes around 2 mins because we are on a free server.</small
            >
          </p>
          <img
            src="@/assets/img/project_pharma_demo.gif"
            alt="GIF"
            style="width: 95%; height: auto"
          />
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader
          ><span class="flex items-center gap-2 w-full">
            <Tag severity="success" value="Data Visualization" class="project-tag" />
            <span class="font-bold whitespace-nowrap project-tag"
              >Country Comparison Dashboard (2025)</span
            >
            <Tag severity="warn" value="R Shinny" class="project-tag" /> </span
        ></AccordionHeader>
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
            <i class="pi pi-github icon"></i>
            Github Repository:
            <a href="https://github.ubc.ca/mds-2024-25/DSCI_532_individual-assignment_cmeng"
              >https://github.ubc.ca/mds-2024-25/DSCI_532_individual-assignment_cmeng</a
            >
          </p>
          <img
            src="@/assets/img/project_country_demo.gif"
            alt="GIF"
            style="width: 95%; height: auto"
          />
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
