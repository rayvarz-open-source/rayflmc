import FormController from "./flmc-data-layer/FormController/FormController";
import { InjectorReciever } from "./injector/InjectorReciever";
import { SnackService, SNACK_SERVICE_NAME } from "./services/SnackService";

export class FLMCFormController extends FormController implements InjectorReciever {
  snackService: SnackService;

  inject(injector: import("./injector/Injector").Injector) {
    this.snackService = injector.inject<SnackService>(SNACK_SERVICE_NAME)!;
  }

  ready() {}
}
