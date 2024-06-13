/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Deprecated, Deprecated$ } from "./deprecated";
import * as z from "zod";

export type Deprecations = {
    deprecated?: Array<Deprecated> | undefined;
};

/** @internal */
export namespace Deprecations$ {
    export const inboundSchema: z.ZodType<Deprecations, z.ZodTypeDef, unknown> = z
        .object({
            deprecated: z.array(Deprecated$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.deprecated === undefined ? null : { deprecated: v.deprecated }),
            };
        });

    export type Outbound = {
        deprecated?: Array<Deprecated$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Deprecations> = z
        .object({
            deprecated: z.array(Deprecated$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.deprecated === undefined ? null : { deprecated: v.deprecated }),
            };
        });
}
