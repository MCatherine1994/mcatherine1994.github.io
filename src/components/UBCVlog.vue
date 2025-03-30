<script setup lang="ts">
import { ref, onMounted } from "vue";

// Video list
const videos = ref([
  { src: "/video/VID_1.mp4" },
  { src: "/video/VID_2.mp4" },
  { src: "/video/VID_3.mp4" },
  { src: "/video/VID_4.mp4" },
]);

// Video references
const videoRefs = ref<HTMLVideoElement[]>([]);

// Track paused state
const isPaused = ref(new Array(videos.value.length).fill(true));

// Track video progress (seek bar)
const videoProgress = ref(new Array(videos.value.length).fill(0));

// Store video duration for each video
const videoDurations = ref(new Array(videos.value.length).fill(0));

// Function to toggle play/pause
const togglePlay = (index: number) => {
  const video = videoRefs.value[index];
  if (video.paused) {
    video.play();
    isPaused.value[index] = false;
  } else {
    video.pause();
    isPaused.value[index] = true;
  }
};

// Update progress bar as video plays
const updateProgress = (index: number) => {
  const video = videoRefs.value[index];
  videoProgress.value[index] = video.currentTime;
  videoDurations.value[index] = video.duration;
};

// Seek video when dragging the slider
const seekVideo = (index: number) => {
  const video = videoRefs.value[index];
  if (!video) return;
  video.currentTime = videoProgress.value[index];
};

// Ensure video refs are properly assigned on mount
onMounted(() => {
  videoRefs.value = videoRefs.value.slice(0, videos.value.length);
});
</script>

<template>
  <div class="video-grid">
    <div v-for="(video, index) in videos" :key="index" class="video-container">
      <div class="video-wrapper">
        <!-- Video Element -->
        <video
          ref="videoRefs"
          @click="togglePlay(index)"
          @timeupdate="updateProgress(index)"
          class="video-player"
        >
          <source :src="video.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <!-- Play Button Overlay (if video is paused) -->
        <div v-if="isPaused[index]" class="play-button" @click="togglePlay(index)">
          <i class="pi pi-play"></i>
        </div>
        <!-- Seek Bar -->
        <div style="margin-top: 0.4rem">
          <Slider
            v-model="videoProgress[index]"
            :min="0"
            :max="videoDurations[index] || 1"
            :step="0.1"
            @change="seekVideo(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 videos per row */
  gap: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.4rem;
}

.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.video-player {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--p-purple-50);
  border-radius: 50%;
  padding: 0.938rem 1rem;
  cursor: pointer;
  transition: opacity 0.3s;
}

.video-wrapper:hover .play-button {
  opacity: 0.8;
}

/* Responsive Grid */
@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 videos per row */
  }
}

@media (max-width: 480px) {
  .video-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 video per row */
  }
}
</style>
