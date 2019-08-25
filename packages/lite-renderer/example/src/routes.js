import { RootRouteCategory } from "lite-renderer";
import ButtonForm from "./forms/ButtonForm";
import CustomSkeletonForm from "./forms/CustomSkeletonForm";
import ImageForm from "./forms/ImageForm";
import ModalForm from "./forms/ModalForm";
import RawElementForm from "./forms/RawElementForm";
import SelectBoxForm from "./forms/SelectBoxForm";
import TextInputForm from "./forms/TextInputForm";

const categoties = {
  elementGallery: {
    name: "Element Gallery",
    hidden: false
  }
};

const routes = [
  {
    path: "/",
    builder: (path, params) => new ButtonForm(params),
    category: RootRouteCategory,
    name: "Home",
    hidden: false
  },
  {
    path: "/404",
    builder: (path, params) => new CustomSkeletonForm(),
    category: RootRouteCategory,
    name: "404 Page",
    hidden: false
  },
  {
    path: "/custom-skeleton",
    builder: (path, params) => new CustomSkeletonForm(),
    category: RootRouteCategory,
    name: "Custom Skeleton",
    hidden: false
  },
  {
    path: "/button",
    builder: (path, params) => new ButtonForm(params),
    name: "Button Element",
    category: categoties.elementGallery,
    hidden: false
  },
  {
    path: "/modal",
    builder: (path, params) => new ModalForm(),
    name: "Modal Element",
    category: categoties.elementGallery,
    hidden: false
  },
  {
    path: "/image",
    builder: (path, params) => new ImageForm(),
    name: "Image Element",
    category: categoties.elementGallery,
    hidden: false
  },
  {
    path: "/textInput",
    builder: (path, params) => new TextInputForm(),
    name: "Text Input Element",
    category: categoties.elementGallery,
    hidden: false
  },
  {
    path: "/raw",
    builder: (path, params) => new RawElementForm(),
    name: "Raw Element",
    category: categoties.elementGallery,
    hidden: false
  },
  {
    path: "/selectBox",
    builder: (path, params) => new SelectBoxForm(),
    name: "Select Box Element",
    category: categoties.elementGallery,
    hidden: false
  }
];

export default routes;
