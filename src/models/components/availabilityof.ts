/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AvailabilityOf = {
    href: string;
    pid: string;
    resultType: string;
    type?: string | undefined;
};

/** @internal */
export namespace AvailabilityOf$ {
    export const inboundSchema: z.ZodType<AvailabilityOf, z.ZodTypeDef, unknown> = z
        .object({
            href: z.string(),
            pid: z.string(),
            result_type: z.string(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                href: v.href,
                pid: v.pid,
                resultType: v.result_type,
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        href: string;
        pid: string;
        result_type: string;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailabilityOf> = z
        .object({
            href: z.string(),
            pid: z.string(),
            resultType: z.string(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                href: v.href,
                pid: v.pid,
                result_type: v.resultType,
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
