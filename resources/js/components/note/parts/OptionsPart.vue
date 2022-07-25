<template>
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
      <br />
      <div class="row">
        <div class="col-lg-12">
          <div class="tools-area">
            <div class="search-box">
              <input
                type="text"
                placeholder="Enter Search Here"
                class="tool-input"
              />
              <i class="fa-solid fa-magnifying-glass tool-input-icon"></i>
            </div>
            <div class="single-tools-area">
              <div class="tools-heading mt-2">
                <h5>The Client Mental State Included:</h5>
              </div>
              <div class="tools-options">
                <div class="single-tools-option">
                  <input
                    type="text"
                    class="single-tools-option-input"
                    disabled
                  />
                  <i
                    class="
                      fa-solid fa-square-pen
                      single-tools-option-input-icon
                    "
                  ></i>
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
  name: "HeadingPart",
};
</script>