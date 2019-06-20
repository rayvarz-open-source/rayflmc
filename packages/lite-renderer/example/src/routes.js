import SampleForm from "./forms/sampleForm";
import { RootRouteCategory } from 'lite-renderer';

const routes = [
    {
        path: "/",
        builder: (path, params) => new SampleForm(),
        category: RootRouteCategory,
        name: "Home - Sample Form",
        hidden: false,
    }
];

export default routes;