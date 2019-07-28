import ButtonForm from "./forms/ButtonForm";
import { RootRouteCategory } from 'lite-renderer';

const categoties = {
    elementGallery: {
        name: "Element Gallery",
        hidden: false,
    },
}

const routes = [
    {
        path: "/",
        builder: (path, params) => new ButtonForm(),
        category: RootRouteCategory,
        name: "Home",
        hidden: false,
    },
    {
        path: "/button",
        builder: (path, params) => new ButtonForm(),
        name: "Button Element",
        category: categoties.elementGallery,
        hidden: false,
    },
];

export default routes;