<template>
  <div class="vue-my-subscriptions-page">
    <div class="row content-area p-4">
      <div class="col-md-12 mb-3">
        <div class="card">
          <h5 class="card-header">Subscriptions</h5>
          <div class="card-body">
            <div class="table-responsive mt-4">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Subscription type</th>
                    <th>Is active</th>
                    <th>State</th>
                    <th>Occupied/Quantity</th>
                    <th>Started from</th>
                    <th>Valid until</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly individual</td>
                    <td>
                      <button class="btn btn-info btn-14px">Active</button>
                    </td>
                    <td>
                      <button class="btn btn-info btn-14px">Active</button>
                    </td>
                    <td>1/1</td>
                    <td>2022-02-03</td>
                    <td>2022-09-03</td>
                    <td>
                      <a href="#">View Details</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MySubscriptionsPage",
  mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Subscriptions";
  },
};
</script>