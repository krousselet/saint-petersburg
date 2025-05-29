<template>
  <div class="wrapper">
    <ul>
      <li v-for="lang in computerLanguages" :key="lang">{{ lang }}</li>
    </ul>
    <ul>
      <li>{{ $t("frenchLanguage") }}</li>
      <li>{{ $t("englishLanguage") }}</li>
      <li>{{ $t("italianLanguage") }}</li>
      <li>{{ $t("spanishLanguage") }}</li>
      <li>{{ $t("russianLanguage") }}</li>
      <li>{{ $t("japaneseLanguage") }}</li>
      <li>{{ $t("indonesianLanguage") }}</li>
    </ul>
    <ul>
      <li>{{ $t("frenchLanguageLevel") }}</li>
      <li>{{ $t("englishLanguageLevel") }}</li>
      <li>{{ $t("italianLanguageLevel") }}</li>
      <li>{{ $t("spanishLanguageLevel") }}</li>
      <li>{{ $t("russianLanguageLevel") }}</li>
      <li>{{ $t("japaneseLanguageLevel") }}</li>
      <li>{{ $t("indonesianLanguageLevel") }}</li>
    </ul>
  </div>
</template>

<script setup>
const computerLanguages = ["JavaScript", "HTML", "CSS", "Vue3", "MySql", "PHP"];
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
ul {
  padding: 0 0.6rem;
  width: 100%;
  height: 100%;

  li {
    padding: 0.2rem 0;
  }
}
</style>
