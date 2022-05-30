<template>
  <div>
    <MansoryComponent :postItems="postItems" />
  </div>
</template>

<script>
import axios from "axios";
import MansoryComponent from "@/components/ui/mansory/MansoryComponent.vue";
export default {
  components: {
    MansoryComponent,
  },

  data() {
    return {
      postItems: [],
    };
  },

  mounted() {
    axios.get("http://mymemo.local/api/newestPost").then((res) => {
      this.postItems.push(...res.data.data);
    });
  },
};
</script>

<style scoped></style>
