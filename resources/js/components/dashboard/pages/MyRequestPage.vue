<template>
  <div class="vue-my-request-page">
    <div class="row content-area p-4">
      <div class="col-md-12 mb-3">
        <div class="card">
          <h5 class="card-header">Refund Requests</h5>
          <div class="card-body">
            <p class="card-text">You have not submitted any Refund Requests.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <div class="card">
          <h5 class="card-header">Change Signature Requests</h5>
          <div class="card-body">
            <p class="card-text">You have not submitted any Requests to change you Signature.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyRequestPage",
  mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Requests";
  },
};
</script>