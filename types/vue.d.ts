import Vue from "vue";
import { SocketConnection } from "./index";

declare module "vue/types/vue" {
    interface Vue {
        $socket: SocketConnection;
    }
}

declare module "vue/types/options" {
    interface ComponentOptions<V extends Vue> {
        $socket: SocketConnection;
    }
}
