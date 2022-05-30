<template>
  <div>
    <figure class="mb-5 mansory_item">
      <img :src="image_link" />

      <div class="mt-2">
        <h6 class="p-0 hover:underline text-gray-900 text-sm font-medium text-overfl-3line">
          <a href="">{{ title }}</a>
        </h6>
      </div>

      <div class="flex justify-between">
        <div class="flex items-center">
          <img class="mr-1" style="width: 30px; border-radius: 50%" :src="user_avt" alt="" />
          <a class="text-gray-700 text-sm font-medium" href="#">{{ author }}</a>
        </div>
        <div class="flex">
          <div class="img__impress-icon img__impress-like flex items-center">
            <i class="far fa-heart"></i>
          </div>
          <div class="ml-3 img__impress-icon img__impress-download flex items-center">
            <i class="far fa-save"></i>
          </div>
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  props: ["title", "author", "user_avt", "image_link"],
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

img {
  max-width: 100%;
  border-radius: 5px;
  display: block;
  cursor: pointer;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}
figure a {
  color: black;
  text-decoration: none;
}

figure .img__impress-icon > i {
  cursor: pointer;
  color: red;
  font-size: 20px;
}

.text-overfl-3line {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  padding-bottom: 3px;
}

.mansory_item:hover > img {
  filter: brightness(80%);
}
</style>
