export default function auth({ next, store }) {
    let isLoggedIn = localStorage.getItem('loginInfo')
    // let isLoggedIn = store.getters['sessionData/isLoggedIn']
    if (isLoggedIn == null) {
        return next({
            name: 'login_page'
        })
    }

    return next()
}