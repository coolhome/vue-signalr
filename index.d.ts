declare module "@latelier/vue-signalr" {
    import { VueConstructor } from "vue";
    import { EventEmitter } from "events";

    function foo(Vue: VueConstructor, options?: string): void;

    export class SocketConnection extends EventEmitter {
        constructor(connection: string);

        start(options: object): Promise<void>;
        authenticate(accessToken: string, options: object): Promise<void>;
        listen(method: string): void;
        send(methodName: string, ...payload: any[]): void;
        invoke(methodName: string, ...payload: any[]): Promise<any>;
    }

    export default foo;
}

declare module "vue/types/vue" {
    import { SocketConnection } from "@latelier/vue-signalr";

    interface Vue {
        $socket: SocketConnection;
    }
}
