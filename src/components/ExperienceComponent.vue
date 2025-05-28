<template>
  <div>
    <h3>{{ $t("cashier") }}</h3>
    <ul>
      <li><time>2011 </time>{{ $t("leclercStart") }}</li>
      <li><time>2021 </time>{{ $t("superU") }}</li>
    </ul>

    <h3>{{ $t("writer") }}</h3>
    <ul>
      <li>{{ $t("scienceFiction") }}</li>
      <li>{{ $t("philosophy") }}</li>
      <li>{{ $t("action") }}</li>
      <li>{{ $t("genre") }}</li>
    </ul>

    <h3>{{ $t("webDeveloper") }}</h3>
    <ul>
      <li><time>2024 </time>{{ $t("morocco") }}</li>
    </ul>

    <h3>{{ $t("artist") }}</h3>
    <ul>
      <li><time>2025 </time>{{ $t("own") }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
h3 {
  margin-left: .2rem;
}
li {
  padding: .5rem;
}
time {
  padding: .5rem;
  color: #ED1C24 !important;
  font-weight: bold;
}
</style>
