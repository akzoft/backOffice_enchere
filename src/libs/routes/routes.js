import Login from "../../pages/auth/Login"
import { Articles, ArticlesPrivee, ArticlesPublics, Clients, ClientsPrives, ClientsPublics, Dashboard, DisplayArticle, EditionArticles, EditionClients, EditionUtilisateur, NouveauClient, NouvelArticles, NouvelUtilisateur, Setting, Utilisateurs } from "../../pages"

const routes = [
    { path: '/', exact: true, name: 'Login', element: Login },
    { path: '/dashboard', name: 'Tableau de bord', element: Dashboard },

    { path: '/articles', name: 'Articles', element: Articles, exact: true },
    { path: '/articles/nouvel-article', name: 'Nouvel article', element: NouvelArticles },
    { path: '/articles/edition-article/:id', name: 'Edition article', element: EditionArticles },
    { path: '/articles/details-article/:id', name: 'Details article', element: DisplayArticle },
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