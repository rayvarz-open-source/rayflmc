import FormController from "./flmc-data-layer/FormController/FormController";
import { InjectorReciever } from "./injector/InjectorReciever";

export class FLMCFormController extends FormController implements InjectorReciever {
  injector: import("./injector/Injector").Injector | null = null;

  inject() {}

  ready() {}
}
