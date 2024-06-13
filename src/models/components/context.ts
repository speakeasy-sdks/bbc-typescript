/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Context = {
    cascadesToDescendants?: boolean | undefined;
    href?: string | undefined;
    pid: string;
    resultType: string;
};

/** @internal */
export namespace Context$ {
    export const inboundSchema: z.ZodType<Context, z.ZodTypeDef, unknown> = z
        .object({
            cascades_to_descendants: z.boolean().optional(),
            href: z.string().optional(),
            pid: z.string(),
            result_type: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.cascades_to_descendants === undefined
                    ? null
                    : { cascadesToDescendants: v.cascades_to_descendants }),
                ...(v.href === undefined ? null : { href: v.href }),
                pid: v.pid,
                resultType: v.result_type,
            };
        });

    export type Outbound = {
        cascades_to_descendants?: boolean | undefined;
        href?: string | undefined;
        pid: string;
        result_type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Context> = z
        .object({
            cascadesToDescendants: z.boolean().optional(),
            href: z.string().optional(),
            pid: z.string(),
            resultType: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.cascadesToDescendants === undefined
                    ? null
                    : { cascades_to_descendants: v.cascadesToDescendants }),
                ...(v.href === undefined ? null : { href: v.href }),
                pid: v.pid,
                result_type: v.resultType,
            };
        });
}
