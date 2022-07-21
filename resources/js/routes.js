import auth from './middleware/auth'
import MasterLayout from './components/note/MasterLayout.vue'
import NotFound from './components/note/NotFound.vue'
import NoteHeader from './components/note/NoteHeader.vue'
import NoteFooter from './components/note/NoteFooter.vue'
import LoginPage from './components/note/pages/LoginPage.vue'
import SplashPage from './components/note/pages/SplashPage.vue'

let node = "/" + process.env.MIX_BASE_NODE;

const routes = [
    { path: '*', name: 'notfound_page', component: NotFound },
    // { path: '/', name: 'home_page', component: HomePage },
    // { path: '/contact', name: 'contact_page', component: ContactPage },
    // { path: '/category/:slug', name: 'category_page', component: CategoryPage },
    // { path: '/:cat_name/:slug', name: 'content_page', component: ContentPage },
    //
    { path: node + '/login', name: 'login_page', component: LoginPage },
    { path: node + '/splash', name: 'splash_page', component: SplashPage, meta: { middleware: [auth] } },
    {
        path: node + '/makenote/:type', name: 'make_note', components: {
            header: NoteHeader,
            default: MasterLayout,
            footer: NoteFooter
        },
        meta: { middleware: [auth] }
    },
]
export default routes;