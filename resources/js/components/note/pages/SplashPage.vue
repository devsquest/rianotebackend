<template>
  <div class="vue-splash-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="note-background-img">
            <div class="note-background-color"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplashPage",
};
</script>
<style scoped>
.note-background-img {
  background-image: url("http://127.0.0.1:8000/note_assets/img/office-gfa4b44aa2_1920.jpg");
  background-size: cover;
  width: 100%;
  min-height: 700px;
}
.note-background-color {
  background-color: aqua;
  width: 100%;
  min-height: 700px;
}
</style>