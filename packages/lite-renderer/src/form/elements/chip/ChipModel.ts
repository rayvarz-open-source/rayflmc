export class ChipModel {
  constructor(id: number,title: string, isSelected?: boolean) {
    this.id = id;
    this.title = title;
    this.isSelected = isSelected;
  }
  id?: number;
  title: string;
  isSelected?: boolean=false;
}
