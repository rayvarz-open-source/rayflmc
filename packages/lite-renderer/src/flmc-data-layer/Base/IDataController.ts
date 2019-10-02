export default interface IDataController {
  /**
   *
   * type of data controller.
   * used in renderer to warn user if it doesn't support
   * this kind of renderer.
   *
   * eg: FormController, ListController, ...
   */
  readonly type: string;

  /**
   * (should) gets called before disposing the the data controller
   *
   * put your clean up code like unsubscribing Observables here.
   */
  beforeDispose(): void;

  /**
   * gets called after disposing the data controller
   *
   * TODO: add usage
   */
  afterDispose(): void;

  onPause(): void;
  onResume(): void;

  /**
   * (should) gets called after constructing the data controller
   * object
   * s
   * put your initial setups like initial server calls here.
   */
  init(): void;
}

export function isDataController(item: any): item is IDataController {
  return item.type != null && item.beforeDispose != null && item.afterDispose != null && item.init != null;
}
