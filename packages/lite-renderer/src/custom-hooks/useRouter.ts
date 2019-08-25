import { RouterService, ROUTER_SERVICE } from "../services/RouterService/RouterService";
import useInject from "./useInject";

export default function useRouter(): RouterService | null {
 const service = useInject<RouterService>(ROUTER_SERVICE);
 return service;
}
