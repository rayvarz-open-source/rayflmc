import { BehaviorSubject } from 'rxjs';

export function isSubject(item: any): item is BehaviorSubject<any> {
  return item.next != null;
}
