<template>
  <nav>
    <router-link class="auto-underline uppercase" to="/">{{ $t('home') }}</router-link>
    <router-link class="auto-underline uppercase" to="/about">{{ $t('about') }}</router-link>
    <router-link class="auto-underline uppercase" to="/cv">{{ $t('apply') }}</router-link>
    <router-link class="auto-underline uppercase" to="/contact">{{ $t('contact') }}</router-link>
  </nav>
  <router-view />
  <DarkModeToggle />
  <LanguageSwitcherComponent />
</template>

<script>
import DarkModeToggle from "./components/DarkModeToggle.vue";
import LanguageSwitcherComponent from "./components/LanguageSwitcherComponent.vue";

export default {
  components: {
    DarkModeToggle,
    LanguageSwitcherComponent,
  },
};
</script>

<style lang="scss">

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: white;
   margin: 0;
  padding: 0;
  height: 100dvh;
  overflow-x: hidden;
}

.uppercase {
  text-transform: capitalize;
}

body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}

body.dark-mode main .container ul li span {
  color: red;
}

body.dark-mode nav {
  background-color: black;
}

body.dark-mode h2 {
  background-color: black;
  border-radius: 7px;
}

body.dark-mode a {
  color: #9ae3ff;
}

ul {
  list-style: none;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes stretch {
  0% {
    letter-spacing: 6px;
  }

  50% {
    letter-spacing: 3vw;
  }
  100% {
    letter-spacing: 6px;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes fromLeftToRight {
  100% {
    left: 0;
  }
}

.stretch {
  animation: stretch 4s 0.2s ease-in-out forwards;
}

.appear {
  animation: appear 3s 0.1s ease-in-out forwards;
}

.appear-one {
  animation: appear 3s 0.3s ease-in-out forwards;
}

.appear-two {
  animation: appear 3s 0.6s ease-in-out forwards;
}

.fromLeftToRight {
  position: relative;
  left: -100vw;
  animation: fromLeftToRight 2s 0.2s ease-in-out forwards;
}


.auto-underline {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    transition: .2s ease-in-out;
    height: 4px;
    width: 0;
    background: #031452;
  }

  &:hover::after {
    transition: .2s ease-in-out;
    width: 100%;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin:  0 auto;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.699);
  @media (min-width: 320px) and (max-width: 550px) {
    height: 80px;
  }
  @media (min-width: 551px) {
    height: 120px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;
    margin: auto;
    @media (min-width: 320px) and (max-width: 550px) {
      letter-spacing: 6px;
      font-size: 3vw;
    }
    @media (min-width: 991px) {
      letter-spacing: 8px;
      font-size: 3vw;
    }

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
