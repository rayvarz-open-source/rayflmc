import { InjectorContext } from "../injector/InjectorContext";
import { useContext } from "react";

export default function useInject<Service>(key: string): Service | null {
  const injectorContainer = useContext(InjectorContext);
  if (injectorContainer == null) return null;
  return injectorContainer.injector.inject(key) as Service;
}
