<template>
  <div class="container-child">
  <select for="selector" v-model="locale" @change="changeLang">
    <option id="selectorEnglish" name="selector" value="en">English</option>
    <option id="selectorFrench" name="selector" value="fr">Français</option>
    <option id="selectorItalian" name="selector" value="it">Italiano</option>
    <option id="selectorSpanish" name="selector" value="es">Español</option>
    <option id="selectorGerman" name="selector" value="de">Deutsch</option>
    <option id="selectorRussian" name="selector" value="ru">Pусский</option>
    <option id="selectorJapanese" name="selector" value="ja">日本語</option>
    <option id="selectorChinese" name="selector" value="zh-Hans">日本人</option>
  </select>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLang = () => {
  localStorage.setItem('lang', locale.value);
};
</script>

<style scoped>
select {
  position: fixed;
  left: 15px;
  top: 150px;
  padding: 5px;
  border-radius: 5px;
  background: white;
  z-index: 1001;
}
</style>
