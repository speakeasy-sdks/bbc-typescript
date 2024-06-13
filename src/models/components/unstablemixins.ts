/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Mixin, Mixin$ } from "./mixin";
import * as z from "zod";

export type UnstableMixins = {
    mixin?: Array<Mixin> | undefined;
};

/** @internal */
export namespace UnstableMixins$ {
    export const inboundSchema: z.ZodType<UnstableMixins, z.ZodTypeDef, unknown> = z
        .object({
            mixin: z.array(Mixin$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
            };
        });

    export type Outbound = {
        mixin?: Array<Mixin$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnstableMixins> = z
        .object({
            mixin: z.array(Mixin$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
            };
        });
}