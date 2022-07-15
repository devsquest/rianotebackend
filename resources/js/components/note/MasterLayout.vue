<template>
  <div class="container-fluid make-note">
    <div class="note-background">
      <div class="note-header">
        <div class="row">
          <div
            class="col-lg-2 col-md-2 col-sm-2 col-6 note-logo top-note-height"
          >
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
          <div
            class="col-lg-6 col-md-6 col-sm-6 col-6 top-note-height white-bg"
          >
            <div class="new-note-btn">
              <button class="btn btn-success mt-4 ml-3">New Note</button>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-12 top-note-height white-bg"
          >
            <div
              class="user-profile"
              style="margin-top: 1.2rem; margin-left: 6rem !important"
            >
              <img
                style="
                  border: 3px solid #dee2e6 !important;
                  border-radius: 50%;
                  width: 45px;
                "
                :src="
                  this.$appConfig.asset_url +
                  '/note_assets/img/icons/Basic-Note_42.jpg'
                "
                alt=""
              />
              <span style="font-size: 14px">Danny Alves</span>
              <i class="fa-solid fa-angle-down" style="color: #cbcbcb"></i>
              <hr class="vertical" />
              <i class="fa-solid fa-sliders" style="color: #cbcbcb"></i>
              <hr class="vertical" />
              <i class="fa-solid fa-life-ring" style="color: #cbcbcb"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12" style="background-color: #0e386a">
            <div
              class="input-placeholder mt-3 mb-3"
              style="padding-left: 2%; padding-right: 2%"
            >
              <div class="row">
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input type="text" placeholder="Name" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input type="text" placeholder="Date" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input
                      type="text"
                      placeholder="Start Time"
                      class="u-input"
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input type="text" placeholder="End Time" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input type="text" placeholder="Fee" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input type="text" placeholder="Intrductory Comments" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="input-group-u">
                    <i class="fa fa-user u-input-icon"></i>
                    <input type="text" placeholder="Closing Comments" class="u-input" />
                  </div>
                </div>
              </div>
            </div>
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
