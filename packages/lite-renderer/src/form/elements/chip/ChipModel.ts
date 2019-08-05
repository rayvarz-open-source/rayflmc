type Props = {
  id: number;
  title: string;
  isSelected?: boolean;
};

export class ChipModel {
  constructor({ id, title, isSelected }: Props) {
    this.id = id;
    this.title = title;
    this.isSelected = isSelected;
  }
  id?: number;
  title: string;
  isSelected?: boolean = false;
}
