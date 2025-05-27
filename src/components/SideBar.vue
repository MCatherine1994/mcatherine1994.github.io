<script setup lang="ts">
import Avatar from "primevue/avatar";
import ScorpioIcon from "@/components/icons/ScorpioIcon.vue";
import Tooltip from "primevue/tooltip";

defineOptions({
  directives: {
    Tooltip, // register Primevue Tooltip locally
  },
});
</script>

<template>
  <Avatar
    image="/self.png"
    class="mr-2 profile-img"
    size="xlarge"
    shape="circle"
    style="width: 100%; height: auto"
  />
  <h3 id="profile-name">Hi, I'm Catherine Meng <ScorpioIcon /></h3>
  <p id="profile-location" style="margin-bottom: 0.2rem">
    <i class="pi pi-map-marker sidebar-icon"></i>From Tianjin, China to
  </p>
  <p style="padding-left: 1.62rem">Vancouver, Canada</p>
  <p id="profile-title" style="margin-bottom: 0.2rem">
    <i class="pi pi-briefcase sidebar-icon"></i>Full Stack Developer
  </p>
  <p style="padding-left: 1.62rem; margin-bottom: 0.2rem">Software Developer</p>
  <p style="padding-left: 1.62rem; margin-bottom: 0.2rem">Data Scientist</p>
  <p style="padding-left: 1.62rem">Machine Learning Engineer</p>
  <!-- <h4 style="margin-top: 1rem; margin-bottom: 0rem">
    Go wherever your heart leads you—boldly and confidently, with no hesitation.
  </h4>
  <h4 style="margin-top: 0.5rem">本心指引你去哪里， 你就大大方方地去，理直气壮地去。</h4> -->
  <h4 style="margin-top: 1rem; margin-bottom: 0rem">
    Desire without fear. Action without hesitation.
  </h4>
  <h4 style="margin-top: 0.5rem">你既怕又何必想，你既想又何必怕。</h4>
  <a href="https://github.com/MCatherine1994">
    <i class="pi pi-github sidebar-icon"></i>
  </a>
  <a href="https://www.linkedin.com/in/da-catherine-meng-568800146/">
    <i class="pi pi-linkedin sidebar-icon"></i>
  </a>
</template>

<style scoped>
.profile-img {
  height: 14rem;
  width: 14rem;
}

p {
  margin-top: 0rem;
  margin-bottom: 0.8rem;
}

.sidebar-icon {
  margin-right: 0.7rem;
}
</style>
