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
    beforeDispose(): void;
    afterDispose(): void;
    init(): void;
}
