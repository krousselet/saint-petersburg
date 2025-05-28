<template>
  <div class="container-child">
    <label for="languageSelector"></label>
    <select id="languageSelector" v-model="locale" @change="changeLang">
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="it">Italiano</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
      <option value="ru">Pусский</option>
      <option value="ja">日本語</option>
      <option value="zh-Hans">中文</option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLang = () => {
  localStorage.setItem("lang", locale.value);
};
</script>

<style scoped>
select {
  position: fixed;
  left: 15px;
  top: 175px;
  padding: 5px;
  border-radius: 5px;
  background: white;
  z-index: 1001;
}
</style>
