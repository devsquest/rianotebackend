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
                    <i class="fa-solid fa-calendar-days u-input-icon"></i>
                    <input type="text" placeholder="Date" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-clock u-input-icon"></i>
                    <input
                      type="text"
                      placeholder="Start Time"
                      class="u-input"
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-clock u-input-icon"></i>
                    <input type="text" placeholder="End Time" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-6">
                  <div class="input-group-u">
                    <i class="fa-solid fa-sack-dollar u-input-icon"></i>
                    <input type="text" placeholder="Fee" class="u-input" />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="input-group-u">
                    <i class="fa-regular fa-message u-input-icon"></i>
                    <input
                      type="text"
                      placeholder="Intrductory Comments"
                      class="u-input"
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-12">
                  <div class="input-group-u">
                    <i class="fa-regular fa-message u-input-icon"></i>
                    <input
                      type="text"
                      placeholder="Closing Comments"
                      class="u-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="note-body">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="row">
              <div class="col-lg-12 col-md-12 bg-green">
                <div class="scrollable-nav">
                  <nav
                    class="navbar navbar-expand-lg navbar-light"
                    style="overflow-x: auto; padding: 0"
                  >
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                            >Stand Info</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                            >State</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                            >Themes</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                            >Treatment</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                            >Progress</a
                          >
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <br />
                <div class="row">
                  <div class="col-lg-12">
                    <div class="note-section-left">
                      <div class="note-section-left-li">
                        <span class="note-section-left-text">Level of functioning</span>
                      </div>
                      <div class="note-section-left-li">
                        <span class="note-section-left-text">Level of functioning</span>
                      </div>
                      <div class="note-section-left-li">
                        <span class="note-section-left-text">Effective State</span>
                      </div>
                      <div class="note-section-left-li">
                        <span class="note-section-left-text">Mental State</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
                <br>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="tools-area">
                      <div class="search-box">
                        <input type="text" placeholder="Enter Search Here" class="tool-input">
                        <i class="fa-solid fa-magnifying-glass tool-input-icon"></i>
                      </div>
                      <div class="single-tools-area">
                        <div class="tools-heading mt-2">
                          <h5>The Client Mental State Included:</h5>
                        </div>
                        <div class="tools-options">
                          <div class="single-tools-option">
                            <input type="text" class="single-tools-option-input" disabled>
                            <i class="fa-solid fa-square-pen single-tools-option-input-icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="row">
              <div class="col-lg-12 col-md-12 bg-green">
                <div class="scrollable-nav">
                  <nav
                    class="navbar navbar-expand-lg navbar-light"
                    style="overflow-x: auto; padding: 0"
                  >
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                          >
                            <i class="fa-solid fa-file-export"></i> Export</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                          >
                            <i class="fa-solid fa-copy"></i> Copy</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                          >
                            <i class="fa-solid fa-pen-to-square"></i> Final
                            Edit</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link white-text"
                            style="
                              color: white;
                              font-weight: 700;
                              padding: 15px;
                            "
                            href="#"
                          >
                            <i class="fa-solid fa-eraser"></i> Clear</a
                          >
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="note-result">
                  <h5>Session Note</h5>
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
