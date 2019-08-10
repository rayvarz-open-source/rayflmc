import { useState, useContext } from "react";
import { InjectorContext } from "../injector/InjectorContext";
import { FLMCFormController } from "../FLMCFormController";
import { isInjectorReciever } from "../injector/InjectorReciever";
import { useSnackbar } from "notistack";
import { SNACK_SERVICE_NAME, SnackService } from "../services/SnackService";

export default function useInjector(controller: FLMCFormController | null) {
  const injectorContainer = useContext(InjectorContext);

  const snackbarProps = useSnackbar();

  // provide dependecies to core services
  if (injectorContainer == null) return;

  let snackService = injectorContainer.injector.inject<SnackService>(SNACK_SERVICE_NAME);
  if (snackService != null) snackService.snackbar = snackbarProps;

  if (controller != null && isInjectorReciever(controller)) {
    controller.inject(injectorContainer.injector);
  }
}
