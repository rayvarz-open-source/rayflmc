import ButtonForm from "./forms/ButtonForm";
import ImageForm from "./forms/ImageForm";
import TextInputForm from "./forms/TextInputForm";
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
    {
        path: "/image",
        builder: (path, params) => new ImageForm(),
        name: "Image Element",
        category: categoties.elementGallery,
        hidden: false,
    },
    {
        path: "/textInput",
        builder: (path, params) => new TextInputForm(),
        name: "Text Input Element",
        category: categoties.elementGallery,
        hidden: false,
    },
];

export default routes;