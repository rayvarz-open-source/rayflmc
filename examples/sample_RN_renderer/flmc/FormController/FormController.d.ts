import IDataController from '../Base/IDataController';
import IElement, { ValidationResult } from './IElement';
export default class FormController implements IDataController {
    readonly type: string;
    elements: IElement[];
    validate(): ValidationResult[];
    beforeDispose(): void;
    dispose(): void;
    afterDispose(): void;
    init(): void;
}
