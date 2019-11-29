import Vue from "vue";
import "./vue";
import { EventEmitter } from "events";

export class SocketConnection extends EventEmitter {
    constructor(connection: string);

    start(options: object): Promise<void>;
    authenticate(accessToken: string, options: object): Promise<void>;
    listen(method: string): void;
    send(methodName: string, ...payload: any[]): void;
    invoke(methodName: string, ...payload: any[]): Promise<any>;
}

export default function(Vue: Vue, options?: string): void;
