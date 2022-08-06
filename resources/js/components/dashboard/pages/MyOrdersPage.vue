<template>
  <div class="vue-my-orders-page">
    <div class="row content-area p-4">
      <div class="col-md-12 mb-3">
        <div class="card">
          <h5 class="card-header">Orders</h5>
          <div class="card-body">
            <div class="table-responsive mt-4">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Invoice URL</th>
                    <th>Total price</th>
                    <th>is Completed?</th>
                    <th>Purchased at</th>
                    <th>Linked Subscription</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NOT220203-5867-12130</td>
                    <td>
                      <a href="#">Invoice</a>
                    </td>
                    <td>USD 15</td>
                    <td>
                      <button class="btn btn-info btn-14px">Completed</button>
                    </td>
                    <td>2022-02-03 15:40:54</td>
                    <td>
                      <a href="#">Monthly Individual</a>
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
  name: "MyOrdersPage",
  mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Orders";
  },
};
</script>