import FormController from "./flmc-data-layer/FormController/FormController";
import { InjectorReciever } from "./injector/InjectorReciever";

export class FLMCFormController extends FormController implements InjectorReciever {
  inject(injector: import("./injector/Injector").Injector) {}

  ready() {}
}
