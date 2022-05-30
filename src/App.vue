<template>
  <div>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>
<style></style>
