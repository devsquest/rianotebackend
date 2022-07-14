<template>
  <div class="container-fluid p-0">
    <div class="note-background">
      <div class="note-header">
        <div class="row">
          <div class="col-lg-2 note-logo top-note-height">
            <img
              style="margin-left: 2.2rem !important"
              class="logo-img mt-2"
              :src="
                this.$appConfig.asset_url +
                '/note_assets/img/Basic-Note_03_03.png'
              "
              alt=""
            />
          </div>
          <div class="col-lg-6 top-note-height">
            <div class="new-note-btn">
              <button class="btn btn-success mt-4 ml-3">New Note</button>
            </div>
          </div>
          <div class="col-lg-4 top-note-height">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterLayout",
};
</script>
