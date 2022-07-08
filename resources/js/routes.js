import MasterLayout from './components/note/MasterLayout.vue'
import NotFound from './components/note/NotFound.vue'
import NoteHeader from './components/note/NoteHeader.vue'
import NoteFooter from './components/note/NoteFooter.vue'
let node = "/" + process.env.MIX_BASE_NODE;

const routes = [
    { path: '*', name: 'notfound_page', component: NotFound },
    // { path: '/', name: 'home_page', component: HomePage },
    // { path: '/contact', name: 'contact_page', component: ContactPage },
    // { path: '/category/:slug', name: 'category_page', component: CategoryPage },
    // { path: '/:cat_name/:slug', name: 'content_page', component: ContentPage },
    //
    { path: node + '/makenote/:type', name: 'make_note', components: {
        header: NoteHeader,
        default: MasterLayout,
        footer: NoteFooter
    } },
]
export default routes;