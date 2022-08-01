<template>
  <div class="vue-not-found">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="notfound-img">
            <img
              :src="this.$appConfig.asset_url + '/note_assets/img/404.jpg'"
              alt=""
              class="notfound-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>