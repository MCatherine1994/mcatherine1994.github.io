<script setup lang="ts">
import { ref, defineOptions, onMounted } from 'vue'
import Timeline from 'primevue/timeline'
import Tag from 'primevue/tag'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Tooltip from 'primevue/tooltip'
import Carousel from 'primevue/carousel'
import { MemoryService } from '@/service/MemoryService'

defineOptions({
  directives: {
    Tooltip, // register Primevue Tooltip locally
  },
})

onMounted(() => {
  MemoryService.getVicMemory().then((data) => (vicMemorys.value = data))
})

const vicMemorys = ref() // image informations for study in Victoria

const expandedKeys = ref({})
const events = ref([
  {
    position: "Master's Degree Completion (Data Science)",
    company: 'The University of British Columbia',
    date: 'Jun, 2025',
    icon: 'pi pi-graduation-cap',
    summary:
      "I started this journey with an open mind, unsure whether I wanted to switch careers. While I wasn't ready to leave my past experience behind, diving into AI algorithms sparked a real interest. Now, I'm excited about the possibility—working as a developer in an AI team feels like a natural next step. I'm looking forward to the future and the many opportunities ahead, and I'm eager to collaborate with like-minded professionals along the way. &#x1F680;",
  },
  {
    position: "Pursuing a Master's in Data Science at the University of British Columbia",
    company: 'The University of British Columbia',
    date: 'Sep, 2024',
    icon: 'pi pi-book',
    language: ['Python (sklearn, pytorch)', 'R', 'Quarto'],
    database: ['Postgres'],
    deployment: ['Github Action', 'Github Pages'],
    summary: 'Main courses:',
    courses: [
      {
        name: 'Supervised Learning I, II (CNN)',
        tooltip:
          'Introduction to supervised machine learning. Basic machine learning concepts such as generalization error and overfitting. Various approaches such as K-NN, decision trees, linear classifiers. \n' +
          'Introduction to numerical optimization (e.g., gradient descent). Neural networks and deep learning. \n',
      },
      {
        name: 'Unsupervised Learning (PCA)',
        tooltip:
          'How to find groups and other structure in unlabeled, possibly high dimensional data. Dimension reduction for visualization and data analysis. Clustering, association rules, model fitting via the EM algorithm.',
      },
      {
        name: 'Advanced Machine Learning (NLP)',
        tooltip:
          'Advanced machine learning methods, with an undercurrent of natural language processing (NLP) applications. Bag of words, recommender systems, topic models, natural language as sequence data, Markov chains, and RNNs for text synthesis. An introduction to popular NLP libraries in Python.',
      },
      {
        name: 'Feature and Model Selection',
        tooltip:
          'How to evaluate and select features and models. Cross-validation, ROC curves, feature engineering, and regularization.',
      },
      {
        name: 'Spatial and Temporal Model (RNN)',
        tooltip:
          'Model fitting and prediction in the presence of correlation due to temporal and/or spatial association. ARIMA models.',
      },
      {
        name: 'Web and Cloud Computing (AWS)',
        tooltip:
          'How to use the web as a platform for data collection, computation, and publishing. Accessing data via scraping and APIs. Using the cloud for tasks that are beyond the capability of your local computing resources.',
      },
      {
        name: 'Data Visualization',
        tooltip:
          'How to make principled and effective choices with respect to marks, spatial arrangement, and colour. Analysis, design, and implementation of interactive figures. How to provide multiple views, deal with complexity, and make difficult decisions about data reduction.',
      },
      {
        name: 'Privacy, Ethics, and Security',
        tooltip:
          'The legal, ethical, and security issues concerning data, including aggregated data. Proactive compliance with rules and, in their absence, principles for the responsible management of sensitive data. Case studies.',
      },
    ],
  },
  {
    position: 'Full Stack Developer ',
    company: 'Ministry of Environment',
    date: 'Feb, 2022',
    icon: 'pi pi-desktop',
    language: ['Vue3', 'Python FastAPI', 'Nestjs', 'Spring Boot Java'],
    database: ['Postgres', 'Oracle'],
    deployment: ['Github Action', 'Openshift cluster', 'AWS Cloud', 'AWS Pipeline'],
    summary:
      'Collaborate in an Agile team with product owners, service designers, developers, and stakeholders to meet business requirements:',
    detail: [
      {
        // special data structure to support Primevue PanelMenu
        key: 0,
        label: 'Develop a web application for online form submissions',
        items: [
          {
            label: '- Contribute to UI design and develop the frontend using Vue 3',
          },
          {
            label: '- Build backend APIs using Spring Boot and Java',
          },
          {
            label:
              '- Design the data model and create a PostgreSQL database, including backup and restore processes',
          },
          {
            label:
              '- Manage the deployment process using GitHub Actions and deploy to an OpenShift cluster',
          },
        ],
      },
      {
        key: 1,
        label:
          'Develop an access management application to integrate with other applications and enable administrators to manage user access',
        items: [
          {
            label: '- Develop the frontend UI using Vue 3',
          },
          {
            label: '- Build backend APIs using Python FastAPI',
          },
          {
            label:
              '- Design user access control and integrate authentication using Keycloak and AWS Cognito',
          },
          {
            label:
              '- Automate deployment with GitHub Actions and deploy to AWS Cloud (Terraform, EC2, S3, Lambda, RDS, Cognito, API Gateway, CloudFront)',
          },
          {
            label:
              '- Work closely with service designers to understand business requirements, contribute to technical decisions, and define work plans',
          },
          {
            label: '- Mentor junior and intermediate developers, providing training and guidance',
          },
        ],
      },
    ],
  },
  {
    position: 'Software Developer',
    company: 'University of Victoria',
    date: 'Oct, 2020',
    icon: 'pi pi-desktop',
    language: ['Python Django', 'HTCondor'],
    database: ['MySql'],
    deployment: ['Openstack'],
    summary:
      'Maintain a web application for tracking and allocating virtual machine resources in OpenStack. \n' +
      'Build and manage Python pip packages.',
  },
  {
    position: 'Frontend Developer',
    company: 'Tetrad Computer Applications',
    date: 'Jul, 2020',
    icon: 'pi pi-desktop',
    language: ['React', 'Redux', 'Node.js', 'Restful API'],
    summary:
      'Develop a web application with Google Maps integration to assist in business store location selection.',
  },
  {
    position: 'Bachelor’s Degree Completion (Computer Science Major with Statistic Minor)',
    company: 'University of Victoria',
    date: 'Apr, 2020',
    icon: 'pi pi-graduation-cap',
    summary:
      "Began my journey at Chongqing University in China in 2013, transferred to University of Victoria in 2015, finished 6 co-ops, became a permanent resident, and finally graduated! Back then, I thought I was done with school for a while... Turns out, 'a while' wasn't very long. &#x1F600;",
  },
  {
    position: 'Web Application Developer / Front End Developer (co-op/part-time)',
    company: 'Ministry of Social Development and Poverty Reduction',
    date: 'Jun 2018 - Dec 2018, May 2019 - Mar 2020',
    icon: 'pi pi-desktop',
    language: ['React', 'Node.js', 'D3.js'],
    database: ['MongoDB'],
    deployment: ['Gitlab', 'Azure DevOps'],
    detail: [
      {
        key: 2,
        label:
          'Develop a Node.js application using the Meteor web framework and React UI pattern, leveraging the D3.js library for data visualization of government-related assistant data',
        items: [
          {
            label:
              '- Develop reusable React components and dynamic, data-rich D3.js charts with smooth transitions',
          },
          {
            label: '- Process and manage data using MongoDB, Python, and SQL',
          },
          {
            label:
              '- Implement unit, integration, and functional tests using Jest, Enzyme, and Puppeteer',
          },
          {
            label: '- Create and maintain private Node.js packages',
          },
          {
            label:
              '- Utilize continuous integration and development (CI/CD) tools such as GitLab and Azure DevOps',
          },
          {
            label:
              '- Set up and maintain a GitLab server, including creating virtual machines using Oracle VirtualBox',
          },
        ],
      },
    ],
  },
  {
    position: 'IT - Applicant (co-op)',
    company: 'BC Transit',
    date: 'Jan 2018 - Apr 2018',
    icon: 'pi pi-desktop',
    language: ['SQL'],
    summary:
      'Design and build data models using SQL queries, and create reports with BI Publisher and Crystal Reports. \n' +
      'Attend Agile and DevOps training with QAcademy.',
  },
  {
    position: 'Business System Analysis (co-op)',
    company: 'Maximus',
    date: 'Jan 2017 - Dec 2017',
    icon: 'pi pi-desktop',
    language: ['SQL'],
    detail: [
      {
        key: 3,
        label:
          'Conduct functional, smoke, regression, joint system integration, and business acceptance testing',
        items: [
          {
            label:
              '- Create and manage test data using SQL Developer; write and execute test cases in SilkCentral; regularly analyze test results; track and manage change requests in StarTeam',
          },
          {
            label: '- Document and track information using SharePoint',
          },
          {
            label:
              '- Collaborate with a cross-functional team, contributing to project planning and implementation',
          },
        ],
      },
    ],
  },
  {
    position: "Pursued a Bachelor's in Computer Science at the University of Victoria",
    company: 'University of Victoria',
    date: 'Sep, 2015',
    icon: 'pi pi-book',
    language: ['C', 'C++', 'Java', 'Python'],
    database: ['Postgres', 'SQL'],
    summary: 'Captured Moments:',
  },
])
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
