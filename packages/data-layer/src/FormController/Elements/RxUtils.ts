import { BehaviorSubject } from 'rxjs';

export function isSubject(item: any): item is BehaviorSubject {
  return item.next != null;
}
