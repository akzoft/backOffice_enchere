import { lazy } from "react"
import Login from "../../pages/auth/Login"
import { Articles, ArticlesPrivee, ArticlesPublics, Clients, ClientsPrives, ClientsPublics, Dashboard, EditionArticles, EditionClients, EditionUtilisateur, NouveauClient, NouvelArticles, NouvelUtilisateur, Setting, Utilisateurs } from "../../pages"


// const Dashboard = lazy(() => import("../../pages/dashboard/Dashboard"))

// const Articles = lazy(() => import("../../pages/articles/Articles"))
// const NouvelArticles = lazy(() => import("../../pages/articles/sub/NouvelArticles"))
// const EditionArticles = lazy(() => import("../../pages/articles/sub/EditionArticles"))
// const ArticlesPublics = lazy(() => import("../../pages/articles/sub/ArticlesPublics"))
// const ArticlesPrivee = lazy(() => import("../../pages/articles/sub/ArticlesPrivee"))

// const Clients = lazy(() => import("../../pages/clients/Clients"))
// const NouveauClient = lazy(() => import("../../pages/clients/sub/NouveauClient"))
// const EditionClients = lazy(() => import("../../pages/clients/sub/EditionClients"))
// const ClientsPublics = lazy(() => import("../../pages/clients/sub/ClientsPublics"))
// const ClientsPrives = lazy(() => import("../../pages/clients/sub/ClientsPrives"))

// const Utilisateurs = lazy(() => import("../../pages/utilisateurs/Utilisateurs"))
// const NouvelUtilisateur = lazy(() => import("../../pages/utilisateurs/sub/NouvelUtilisateur"))
// const EditionUtilisateur = lazy(() => import("../../pages/utilisateurs/sub/EditionUtilisateur"))

// const Parametres = lazy(() => import("../../pages/setting/Setting"))




const routes = [
    { path: '/', exact: true, name: 'Login', element: Login },
    { path: '/dashboard', name: 'Tableau de bord', element: Dashboard },

    { path: '/articles', name: 'Articles', element: Articles, exact: true },
    { path: '/articles/nouvel-article', name: 'Nouvel article', element: NouvelArticles },
    { path: '/articles/edition-article/:id', name: 'Edition article', element: EditionArticles },
    { path: '/articles/articles-publics', name: 'Articles publics', element: ArticlesPublics },
    { path: '/articles/articles-prives', name: 'Articles privés', element: ArticlesPrivee },


    { path: '/clients', name: 'Clients', element: Clients, exact: true },
    { path: '/clients/nouveau-client', name: 'Nouveau client', element: NouveauClient },
    { path: '/clients/edition-client/:id', name: 'Edition client', element: EditionClients },
    { path: '/clients/clients-publics', name: 'Clients publics', element: ClientsPublics },
    { path: '/clients/clients-vip', name: 'Clients VIP', element: ClientsPrives },

    { path: '/utilisateurs', name: 'Utilisateurs', element: Utilisateurs, exact: true },
    { path: '/utilisateurs/nouvel-utilisateur', name: 'Nouveau utilisateur', element: NouvelUtilisateur },
    { path: '/utilisateurs/edition-utilisateur/:id', name: 'Edition utilisateur', element: EditionUtilisateur },

    { path: '/parametres', name: 'Paramètres', element: Setting, exact: true },

]

export default routes