import FormController from "./flmc-data-layer/FormController/FormController";
import { InjectorReciever } from "./injector/InjectorReciever";
import { SnackService, SNACK_SERVICE_NAME } from "./services/SnackService";
import {
  ModalService,
  MODAL_SERVICE_NAME
} from "./services/ModalService/ModalService";

export class FLMCFormController extends FormController
  implements InjectorReciever {
  snackService: SnackService;
  modalService: ModalService;

  inject(injector: import("./injector/Injector").Injector) {
    this.snackService = injector.inject<SnackService>(SNACK_SERVICE_NAME)!;
    this.modalService = injector.inject<ModalService>(MODAL_SERVICE_NAME)!;
  }

  ready() {}
}
