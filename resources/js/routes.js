import auth from './middleware/auth'
import MasterLayout from './components/note/MasterLayout.vue'
import NotFound from './components/note/NotFound.vue'
import LoginPage from './components/note/pages/LoginPage.vue'
import SplashPage from './components/note/pages/SplashPage.vue'
import DashLayout from './components/dashboard/DashLayout.vue'
import DashboardPage from './components/dashboard/pages/DashboardPage.vue'
import GettingStartedPage from './components/dashboard/pages/GettingStartedPage.vue'
import MyProfilePage from './components/dashboard/pages/MyProfilePage.vue'

let node = "/" + process.env.MIX_BASE_NODE;

const routes = [
    { path: '*', name: 'notfound_page', component: NotFound },
    { path: node + '/login', name: 'login_page', component: LoginPage },
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
        ]
    },
]
export default routes;