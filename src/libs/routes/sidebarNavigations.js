

const navigations = [

    {
        name: "Tableau de bord",
        to: "/dashboard",
        icon: "ti ti-layout",
    },
    {

        name: "Articles",
        to: "/articles",
        icon: "ti ti-pin-alt",
        subMenu: [
            { name: "Toutes les articles", to: "/articles", },
            { name: "Nouvel article", to: "/articles/nouvel-article" },
            { name: "Articles publics", to: "/articles/articles-publics", },
            { name: "Articles privées", to: "/articles/articles-prives", },
        ]
    },
    {
        name: "Clients",
        to: "/clients",
        icon: "ti ti-palette",
        subMenu: [
            { name: "Tous les clients", to: "/clients", },
            { name: "Nouveau client", to: "/clients/nouveau-client" },
            { name: "Clients publics", to: "/clients/clients-publics" },
            { name: "Clients VIP", to: "/clients/clients-vip" }
        ]
    },
    {
        name: "Utilisateurs",
        to: "/utilisateurs",
        icon: "ti ti-user",
        subMenu: [
            { name: "Tous les utilisateurs", to: "/utilisateurs", },
            { name: "Nouvel utilisateur", to: "/utilisateurs/nouvel-utilisateur" }
        ]
    },
    {

        name: "Paramètres",
        to: "/parametres",
        icon: "ti ti-settings",
        subMenu: [
            { name: "Général", to: "/parametres", },
        ]
    },


]

export default navigations