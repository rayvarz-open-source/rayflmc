import FormController from "./flmc-data-layer/FormController/FormController";
import { InjectorReciever } from "./injector/InjectorReciever";
import { ModalService, MODAL_SERVICE_NAME } from "./services/ModalService/ModalService";
import { RouterService, ROUTER_SERVICE } from "./services/RouterService/RouterService";
import { SnackService, SNACK_SERVICE_NAME } from "./services/SnackService";

export class FLMCFormController extends FormController
  implements InjectorReciever {
  snackService: SnackService;
  modalService: ModalService;
  routerService: RouterService;

  inject(injector: import("./injector/Injector").Injector) {
    this.snackService = injector.inject<SnackService>(SNACK_SERVICE_NAME)!;
    this.modalService = injector.inject<ModalService>(MODAL_SERVICE_NAME)!;
    this.routerService = injector.inject<RouterService>(ROUTER_SERVICE)!;
  }

  ready() {}
}
