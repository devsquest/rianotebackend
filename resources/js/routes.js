import auth from './middleware/auth'
import MasterLayout from './components/note/MasterLayout.vue'
import NotFound from './components/note/NotFound.vue'
import LoginPage from './components/note/pages/LoginPage.vue'
import SubscriptionPage from './components/note/pages/SubscriptionPage.vue'
import SplashPage from './components/note/pages/SplashPage.vue'
import DashLayout from './components/dashboard/DashLayout.vue'
import DashboardPage from './components/dashboard/pages/DashboardPage.vue'
import GettingStartedPage from './components/dashboard/pages/GettingStartedPage.vue'
import MyProfilePage from './components/dashboard/pages/MyProfilePage.vue'
import MyRequestPage from './components/dashboard/pages/MyRequestPage.vue'
import MyOrdersPage from './components/dashboard/pages/MyOrdersPage.vue'
import MySubscriptionsPage from './components/dashboard/pages/MySubscriptionsPage.vue'
import MyNotificationsPage from './components/dashboard/pages/MyNotificationsPage.vue'

let node = "/" + process.env.MIX_BASE_NODE;

const routes = [
    { path: '*', name: 'notfound_page', component: NotFound },
    { path: node + '/login', name: 'login_page', component: LoginPage },
    { path: node + '/subscription', name: 'subscription_page', component: SubscriptionPage },
    { path: node + '/splash', name: 'splash_page', component: SplashPage, meta: { middleware: [auth] } },
    {
        path: node + '/makenote/:type/:section?', name: 'make_note', component: MasterLayout, meta: { middleware: [auth] }
    },
    {
        path: node + '/user', name: 'dash_layout', component: DashLayout, meta: { middleware: [auth] },
        children: [
            { path: node + '/user/dashboard', name: 'dashboard_page', component: DashboardPage, meta: { middleware: [auth] } },
            { path: node + '/user/getting-started', name: 'getting_started_page', component: GettingStartedPage, meta: { middleware: [auth] } },
            { path: node + '/user/my-profile', name: 'my_profile_page', component: MyProfilePage, meta: { middleware: [auth] } },
            { path: node + '/user/my-requests', name: 'my_requests_page', component: MyRequestPage, meta: { middleware: [auth] } },
            { path: node + '/user/my-orders', name: 'my_orders_page', component: MyOrdersPage, meta: { middleware: [auth] } },
            { path: node + '/user/my-subscriptions', name: 'my_subscriptions_page', component: MySubscriptionsPage, meta: { middleware: [auth] } },
            { path: node + '/user/my-notifications', name: 'my_notifications_page', component: MyNotificationsPage, meta: { middleware: [auth] } },
        ]
    },
]
export default routes;