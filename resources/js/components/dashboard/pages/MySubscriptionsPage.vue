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
                      <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey"
                        :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL"
                        @loading="v => loading = v" />
                      <button class="btn btn-info btn-14px" v-on:click="submit">
                        Pay Now
                      </button>
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
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  name: "MySubscriptionsPage",
  components: {
    StripeCheckout,
  },
  data() {
    return {
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
  },
};
</script>