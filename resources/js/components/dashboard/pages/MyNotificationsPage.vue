<template>
  <div class="vue-my-notifications-page">
    <div class="row content-area p-4">
      <div class="col-md-12 mb-3">
        <div class="card">
          <h5 class="card-header">Notifications</h5>
          <div class="card-body">
            <div class="table-responsive mt-4">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Content</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b><i class="fas fa-calendar-check icon-success" style="color: green"></i> Your subscription has been renewed successfully.</b>
                    </td>
                    <td>
                      <b>2022-08-03 09:47:34</b>
                    </td>
                    <td>
                      <button class="btn btn-info btn-14px">Detail</button>
                      <button class="btn btn-success btn-14px">
                        Mark as read
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-calendar-check icon-success" style="color: green"></i> Your subscription has been renewed successfully.</td>
                    <td>2022-07-03 09:22:41</td>
                    <td>
                      <button class="btn btn-info btn-14px">Detail</button>
                      <button class="btn btn-primary btn-14px">
                        Mark as unread
                      </button>
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
  name: "MyNotificationsPage",
  mounted() {
    this.$emit("updateNav", this.$route.name);
    document.title = "My Notifications";
  },
};
</script>