/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PidReference = {
    href?: string | undefined;
    pid: string;
    position?: number | undefined;
    resultType: string;
};

/** @internal */
export namespace PidReference$ {
    export const inboundSchema: z.ZodType<PidReference, z.ZodTypeDef, unknown> = z
        .object({
            href: z.string().optional(),
            pid: z.string(),
            position: z.number().int().optional(),
            result_type: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.href === undefined ? null : { href: v.href }),
                pid: v.pid,
                ...(v.position === undefined ? null : { position: v.position }),
                resultType: v.result_type,
            };
        });

    export type Outbound = {
        href?: string | undefined;
        pid: string;
        position?: number | undefined;
        result_type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PidReference> = z
        .object({
            href: z.string().optional(),
            pid: z.string(),
            position: z.number().int().optional(),
            resultType: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.href === undefined ? null : { href: v.href }),
                pid: v.pid,
                ...(v.position === undefined ? null : { position: v.position }),
                result_type: v.resultType,
            };
        });
}
