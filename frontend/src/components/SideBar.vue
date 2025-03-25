<script setup lang="ts">
import Avatar from 'primevue/avatar'
</script>

<template>
  <Avatar image="/da.png" class="mr-2 profile-img" size="xlarge" shape="circle" />
  <h3 id="profile-name">Hi, I'm Catherine Meng</h3>
  <h4 id="profile-location"><i class="pi pi-map-marker"></i>Vancouver, Canada</h4>
  <h4 id="profile-title">
    <i class="pi pi-briefcase"></i>Full Stack Developer, Software Developer, Machine Learning
    Engineer
  </h4>
  <p>Hello world</p>
</template>

<style scoped>
.profile-img {
  height: 12.5rem;
  width: 12.6rem;
}
</style>
