<template>
  <div class="container-child">
    <label class="toggle-switch" for="darkThemeSwitch">
      <input
        id="darkThemeSwitch"
        name="darkThemeSwitch"
        type="checkbox"
        v-model="isDark"
        @change="applyTheme"
      />
      <span class="slider"></span>
      <span class="visually-hidden">Toggle dark theme</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'DarkModeToggle',
  data() {
    return {
      isDark: false
    };
  },
  mounted() {
    // Check localStorage or fall back to system preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDark = true;
    } else if (saved === 'light') {
      this.isDark = false;
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  },
  methods: {
    applyTheme() {
      if (this.isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    }
  }
};
</script>

<style scoped>

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.toggle-switch {
  z-index: 1000;
  position: fixed;
  display: inline-block;
  width: 55px;
  height: 28px;
  top: 125px;
  right: 25px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  background-color: #000000;
  border-radius: 34px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
}

.slider::before {
  position: absolute;
  content: '';
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 3px;
  background-color: #E7A425;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #007EBA;
}

input:checked + .slider::before {
  transform: translateX(24px);
}
</style>
