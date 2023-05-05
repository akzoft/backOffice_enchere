import Dashboard from "./dashboard/Dashboard";
import Setting from "./setting/Setting";

import Articles from "./articles/Articles";
import Clients from "./clients/Clients";
import Utilisateurs from "./utilisateurs/Utilisateurs";
import NouveauClient from "./clients/sub/NouveauClient";
import EditionClients from "./clients/sub/EditionClients";
import ClientsPrives from "./clients/sub/ClientsPrives";
import ClientsPublics from "./clients/sub/ClientsPublics";
import EditionUtilisateur from "./utilisateurs/sub/EditionUtilisateur";
import NouvelUtilisateur from "./utilisateurs/sub/NouvelUtilisateur";
import NouvelArticles from "./articles/sub/NouvelArticles";
import EditionArticles from "./articles/sub/EditionArticles";
import ArticlesPrivee from "./articles/sub/ArticlesPrivee";
import ArticlesPublics from "./articles/sub/ArticlesPublics";
import Login from "./auth/Login";


export {
    Dashboard,
    Articles, NouvelArticles, EditionArticles, ArticlesPrivee, ArticlesPublics,
    Clients, NouveauClient, EditionClients, ClientsPrives, ClientsPublics,
    Utilisateurs, EditionUtilisateur, NouvelUtilisateur,
    Setting, Login
}

