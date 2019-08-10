import { WithSnackbarProps } from "notistack";

export const SNACK_SERVICE_NAME = "LiteRenderer:Services:SnackService";

export class SnackService {
  snackbar?: WithSnackbarProps;

  close(key: string | null) {
    if (this.snackbar == null || typeof key != "string") return;
    this.snackbar.closeSnackbar(key);
  }

  show(message: String): string | null {
    if (this.snackbar == null) return null;
    let result = this.snackbar.enqueueSnackbar(message);
    if (typeof result == "string") return result;
    return null;
  }

  info(message: String): string | null {
    if (this.snackbar == null) return null;
    let result = this.snackbar.enqueueSnackbar(message, { variant: "info" });
    if (typeof result == "string") return result;
    return null;
  }

  error(message: String): string | null {
    if (this.snackbar == null) return null;
    let result = this.snackbar.enqueueSnackbar(message, { variant: "error" });
    if (typeof result == "string") return result;
    return null;
  }

  warning(message: String): string | null {
    if (this.snackbar == null) return null;
    let result = this.snackbar.enqueueSnackbar(message, { variant: "warning" });
    if (typeof result == "string") return result;
    return null;
  }

  success(message: String): string | null {
    if (this.snackbar == null) return null;
    let result = this.snackbar.enqueueSnackbar(message, { variant: "success" });
    if (typeof result == "string") return result;
    return null;
  }
}
