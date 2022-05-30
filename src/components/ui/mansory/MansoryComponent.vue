<template>
  <div>
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="mansory">
        <ItemComponent
          v-for="(item, index) in postItems"
          :key="index"
          :title="item.title"
          :author="item.author"
          :image_link="item.image_link"
          :user_avt="item.user.avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemComponent from "@/components/ui/mansory/ItemComponent.vue";

export default {
  props: ["postItems"],
  components: {
    ItemComponent,
  },
};
</script>

<style>
.mansory {
  margin-top: 10px;
  column-count: 2;
  column-gap: 20px;
}

@media (min-width: 576px) {
  .mansory {
    column-count: 2;
  }
}

@media (min-width: 768px) {
  .mansory {
    column-count: 3;
  }
}

@media (min-width: 992px) {
  .mansory {
    column-count: 3;
  }
}

@media (min-width: 1200px) {
  .mansory {
    column-count: 4;
  }
}

@media (min-width: 1536) {
  .mansory {
    column-count: 5;
  }
}
</style>
