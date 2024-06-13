/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Feeds } from "./feeds";
import { Raw } from "./raw";
import { Schema } from "./schema";

export class Bbc extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _schema?: Schema;
    get schema(): Schema {
        return (this._schema ??= new Schema(this.options$));
    }

    private _feeds?: Feeds;
    get feeds(): Feeds {
        return (this._feeds ??= new Feeds(this.options$));
    }

    private _raw?: Raw;
    get raw(): Raw {
        return (this._raw ??= new Raw(this.options$));
    }
}
