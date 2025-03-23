<script setup lang="ts">
import Avatar from 'primevue/avatar'
</script>

<template>
  <div class="sidebar">
    <Avatar image="/da.png" class="mr-2 profile-img" size="xlarge" shape="circle" />
    <h2 id="profile-name">Catherine Meng</h2>
    <h4 id="profile-title">
      Full Stack Developer<br />
      Software Developer <br />
      Machine Learning Engineer
    </h4>
    <p>Hello world</p>
  </div>
</template>

<style scoped>
.profile-img {
  height: 12.5rem;
  width: 12.6rem;
}
</style>
