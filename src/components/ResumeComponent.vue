<template>
  <main id="resume" class="container">
    <section
      v-for="(section, index) in sections"
      :key="index"
      class="resume-section"
    >
      <h2
  @click="toggleSection(index)"
  class="section-title"
  :class="[
    `bg-index-${index}`,
    { active: activeSection === index }
  ]"
>
  {{ section.title }}
</h2>

      <Transition name="expand">
        <div
          v-show="activeSection === index"
          class="section-content"
        >
          <component :is="section.component" />
        </div>
      </Transition>
    </section>
  </main>
</template>

<script setup>
import { ref, computed  } from 'vue'
import { useI18n } from 'vue-i18n'
import ExperienceComponent from './ExperienceComponent.vue'
import LanguagesComponent from './LanguagesComponent.vue'
import EducationComponent from './EducationComponent.vue'
import LinksComponent from './LinksComponent.vue'
import ArtistComponent from './ArtistComponent.vue'

const sections = computed(() => [
  { title: t('experience'), component: ExperienceComponent },
  { title: t('programmingLanguages'), component: LanguagesComponent },
  { title: t('educationCertifications'), component: EducationComponent },
  { title: t('additionalLinks'), component: LinksComponent },
  { title: t('artist'), component: ArtistComponent }
])

const activeSection = ref(null)
const { t } = useI18n()
const toggleSection = (index) => {
  activeSection.value = activeSection.value === index ? null : index
}
</script>

<style scoped lang="scss">

body.dark-mode main {
  color: #E7A425;
  background-color: rgba(0, 0, 0, 0);

  .resume-section {

    h2 {
      background-color: transparent;
      color: #0095DA;
    }

    .section-content {
      background-color: black;
      border-radius: 14px;
    }
  }
}



main {
  width: 100vw;
  height: 100dvh;
  @media (max-width: 550px) {
    margin-top: 110px !important;
  }
}

.container {
  max-width: 800px;
  margin: 2rem auto;
  font-family: 'Georgia', serif;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: .2s;
}

.resume-section {
  border-bottom: 1px solid #ccc;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  transition: .2s;
}

.section-title {
  font-size: 1.5rem;
  width: 100%;
  color: #2c3e50;
  cursor: pointer;
  position: relative;
  padding-left: 1.5rem;
  transition: all .2s;
  text-align: center;
}

.section-title::before {
  content: '▸';
  position: absolute;
  left: -40vw;
  transition: .2s;
  width: 100%;
  color: #0095DA;
}

.section-title.active::before {
  transform: rotate(90deg);
}

.section-title:hover {
  color: #E7A425;
  letter-spacing: 3px;
}

.section-content {
  background-color: #fff;
  border-left: 3px solid #E7A425;
  margin-top: 0.5rem;
  width: 100%;
}

/* Expand animation */
.expand-enter-active,
.expand-leave-active {
  transition: all .2s;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}
</style>
