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
                    <th>State</th>
                    <th>Started from</th>
                    <th>valid until</th>
                    <th>Purchased by</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="sub_scriptions_list && sub_scriptions_list != null">
                  <tr v-for="sub in sub_scriptions_list" :key="sub.id">
                    <td>{{ sub.subscription.name }}</td>
                    <td>
                      <button class="btn btn-success btn-14px">{{ sub.status }}</button>
                    </td>
                    <td>{{ sub.start }}</td>
                    <td>{{ sub.end }}</td>
                    <td>
                      <button class="btn btn-info btn-14px disabled">You</button>
                    </td>
                    <td>
                      <button class="btn btn-danger btn-14px disabled">
                        Unassigned me
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
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "MySubscriptionsPage",
  components: {
    StripeCheckout,
  },
  data() {
    return {
      sub_scriptions_list: null,
      publishableKey: process.env.MIX_STRIPE_PK,
      lineItems: [
        {
          price: "price_1LdW0FIMnKC1Keli4FyCDrVN", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL:
        "http://127.0.0.1:8000/note/user/my-subscriptions?status=success&ref=",
      cancelURL:
        "http://127.0.0.1:8000/note/user/my-subscriptions?status=cancel",
    };
  },
  mounted() {
    console.log(process.env.MIX_ENC_KEY);
    this.$emit("updateNav", this.$route.name);
    document.title = "My Subscriptions";
    this.subscriptions();
  },
  methods: {
    stripeSession() {
      this.axios.get();
    },
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.successURL = this.successURL + this.makeAuthString(45);
      this.$refs.checkoutRef.redirectToCheckout();
    },
    makeAuthString(length) {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    },
    subscriptions() {
      const { token } = JSON.parse(localStorage.getItem("loginInfo"));
      let url = process.env.MIX_API_URL + "/api/user/active-subscriptions";
      let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      this.axios.get(url, { headers: headers }).then((response) => {
        this.sub_scriptions_list = response.data.data.subscriptions;
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>