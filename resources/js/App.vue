<template>
  <div class="app-vue">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>