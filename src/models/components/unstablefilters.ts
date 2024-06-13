/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Filter, Filter$ } from "./filter";
import * as z from "zod";

export type UnstableFilters = {
    filter?: Array<Filter> | undefined;
};

/** @internal */
export namespace UnstableFilters$ {
    export const inboundSchema: z.ZodType<UnstableFilters, z.ZodTypeDef, unknown> = z
        .object({
            filter: z.array(Filter$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
            };
        });

    export type Outbound = {
        filter?: Array<Filter$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnstableFilters> = z
        .object({
            filter: z.array(Filter$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
            };
        });
}