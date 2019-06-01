import IDataController from '../Base/IDataController';
import { DataControllerTypes } from '../DataControllerTypes';
import IElement, { ValidationResult } from './IElement';

/**
 * used for handling forms data
 * 
 * TODO: finalize interface
 */
export default class FormController implements IDataController {
  get type(): string {
    return DataControllerTypes.FormController;
  }

  elements!: IElement[];

  validate(): ValidationResult[] {
    return this.elements.map(element => element.validate());
  }

  beforeDispose(): void {
    this.elements.forEach(element => element.dispose());
  }

  dispose(): void {}

  afterDispose(): void {
    this.dispose();
  }

  init(): void {
    if (this.elements.length == 0) throw new Error('Must have atleast one element');
  }
}
