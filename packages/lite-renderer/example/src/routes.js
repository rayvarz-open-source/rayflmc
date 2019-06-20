import SampleForm from "./forms/sampleForm";
import { RootRouteCategory } from 'lite-renderer';

const categoties = {
    users: {
        name: "Users",
        hidden: false,
    },
    items: {
        name: "Items",
        hidden: false,
    },
}

const routes = [
    {
        path: "/",
        builder: (path, params) => new SampleForm(),
        category: RootRouteCategory,
        name: "Home",
        hidden: false,
    },
    {
        path: "/users",
        builder: (path, params) => new SampleForm(),
        category: categoties.users,
        name: "Users",
        hidden: false,
    },
    {
        path: "/users/add",
        builder: (path, params) => new SampleForm(),
        category: categoties.users,
        name: "+ Add new user",
        hidden: false,
    },
    {
        path: "/items",
        builder: (path, params) => new SampleForm(),
        category: categoties.items,
        name: "Items",
        hidden: false,
    },
];

export default routes;