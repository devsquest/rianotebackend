<template>
    <div class="subscription-page-vue">
        <div class="container-fluid">
            <div class="login-container">
                <div class="row login-row">
                    <div class="col-sm col-md-6 text-white">
                        <a href="#">
                            <img :src="
                                this.$appConfig.asset_url +
                                '/note_assets/img/Faster_note logo.png'
                            " alt="Logo" class="note-login-page-logo" />
                        </a>
                        <form method="post" class="ms-5 mb-6 note-login-form" v-on:submit="submitForm">
                            <h2>Signup</h2>
                            <div class="single-u-input-group">
                                <div class="input-group-label-lu">
                                    <label for="name" class="form-label">Package*</label>
                                </div>
                                <div class="input-group">
                                    <select name="package" id="package" class="login-u-input login-u-input-focus"
                                        v-model="formData.package">
                                        <option value="price_1LdW0FIMnKC1Keli4FyCDrVN">1 Month</option>
                                        <option value="price_1LegtVIMnKC1KeliJnhlIufo">6 Month</option>
                                        <option value="price_1LeguRIMnKC1KeliBYNiqUmc">1 Year</option>
                                    </select>
                                    <i class="fa-brands fa-uncharted login-form-input-icon"></i>
                                </div>
                                <div v-if="errors != null && errors.response.data.errors.package"
                                    class="invalid-feedback note-signup-invalid-feedback d-inline">
                                    <p v-for="err in errors.response.data.errors.package" :key="err">{{ err }}</p>
                                </div>
                            </div>
                            <div class="single-u-input-group">
                                <div class="input-group-label-lu">
                                    <label for="name" class="form-label">Full Name*</label>
                                </div>
                                <div class="input-group">
                                    <input type="test" class="login-u-input login-u-input-focus" id="name" name="name"
                                        ref="name" v-model="formData.name" />
                                    <i class="fa-solid fa-person login-form-input-icon"></i>
                                </div>
                                <div v-if="errors != null && errors.response.data.errors.name"
                                    class="invalid-feedback note-signup-invalid-feedback d-inline">
                                    <p v-for="err in errors.response.data.errors.name" :key="err">{{ err }}</p>
                                </div>
                            </div>
                            <div class="single-u-input-group">
                                <div class="input-group-label-lu">
                                    <label for="email" class="form-label">Email*</label>
                                </div>
                                <div class="input-group">
                                    <input type="email" class="login-u-input login-u-input-focus" id="email"
                                        name="email" ref="email" v-model="formData.email" />
                                    <i class="fa-solid fa-envelope login-form-input-icon"></i>
                                </div>
                                <div v-if="errors != null && errors.response.data.errors.email"
                                    class="invalid-feedback note-signup-invalid-feedback d-inline">
                                    <p v-for="err in errors.response.data.errors.email" :key="err">{{ err }}</p>
                                </div>
                            </div>
                            <div class="single-u-input-group">
                                <div class="input-group-label-lu">
                                    <label for="signature" class="form-label">Signature*</label>
                                </div>
                                <div class="input-group">
                                    <input type="text" class="login-u-input login-u-input-focus" id="signature"
                                        name="signature" ref="signature" v-model="formData.signature" />
                                    <i class="fa-solid fa-signature login-form-input-icon"></i>
                                </div>
                                <div v-if="errors != null && errors.response.data.errors.signature"
                                    class="invalid-feedback note-signup-invalid-feedback d-inline">
                                    <p v-for="err in errors.response.data.errors.signature" :key="err">{{ err }}</p>
                                </div>
                            </div>
                            <div class="single-u-input-group">
                                <div class="input-group-label-lu">
                                    <label for="password" class="form-label">Password*</label>
                                </div>
                                <div class="input-group">
                                    <input type="password" class="login-u-input login-u-input-focus" id="password"
                                        name="password" ref="password" v-model="formData.password" />
                                    <i class="fa-solid fa-eye login-form-input-icon"></i>
                                </div>
                                <div v-if="errors != null && errors.response.data.errors.password"
                                    class="invalid-feedback note-signup-invalid-feedback d-inline">
                                    <p v-for="err in errors.response.data.errors.password" :key="err">{{ err }}</p>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success u-login-btn mt-3" :disabled="signupBtn.status">
                                {{ signupBtn.text }}
                            </button>
                        </form>
                    </div>
                    <div class="col-sm col-md-6 d-xs-none">
                        <img :src="this.$appConfig.asset_url + '/note_assets/img/img_03.jpg'"
                            class="d-block img-fluid float-end login-side-img" alt="Side Img" />
                    </div>
                </div>
            </div>
        </div>
        <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
            :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />
    </div>
</template>
<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
    name: "SubscriptionPage",
    components: {
        StripeCheckout
    },
    data() {
        return {
            formData: {
                package: null,
                name: null,
                email: null,
                signature: null,
                password: null,
            },
            publishableKey: process.env.MIX_STRIPE_PK,
            lineItems: [
                {
                    price: null, // The id of the one-time price you created in your Stripe dashboard
                    quantity: 1,
                },
            ],
            successURL:
                "http://127.0.0.1:8000/note/user/my-subscriptions?status=success&ref=",
            cancelURL:
                "http://127.0.0.1:8000/note/user/my-subscriptions?status=cancel",
            responseData: null,
            errors: null,
            signupBtn: {
                text: "Proceed to pay",
                status: false,
            }
        }
    },
    mounted() {
        document.title = "Signup";
        if (this.$route.query.pk) {
            this.formData.package = this.$route.query.pk;
            this.lineItems[0].price = this.formData.package;
        }
    },
    methods: {
        capitalizeFirstLetter(str) {
            // converting first letter to uppercase
            const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
            return capitalized;
        },
        async submitForm(e) {
            e.preventDefault();
            for (const prop in this.formData) {
                if (this.formData[prop] == null || this.formData[prop] == '') {
                    return this.$toastr.e("Field is required", this.capitalizeFirstLetter(prop));
                }
            }
            this.signupBtn.status = true;
            this.signupBtn.text = "Proceed to pay...";
            this.responseData = null;
            this.errors = null;
            await this.$store.dispatch("login/signup", this.formData).then((response) => {
                // console.log(response);
            });
            // let headers = {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            // };
            // let url = process.env.MIX_API_URL + "/api/register";
            // this.axios.post(url, this.formData, { headers: headers }).then((response) => {
            //     this.responseData = response;
            //     this.signupBtn.status = false;
            //     this.signupBtn.text = "Proceed to pay";
            //     console.log(this.responseData);
            //     // this.successURL = this.successURL;
            //     // this.$refs.checkoutRef.redirectToCheckout();
            // }).catch((errors) => {
            //     this.errors = errors;
            //     this.signupBtn.status = false;
            //     this.signupBtn.text = "Proceed to pay";
            //     console.log(this.errors);
            // });
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
    watch: {
        formData: {
            handler(val) {
                this.lineItems[0].price = val.package;
            },
            deep: true,
        },
    }
}
</script>