/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ForProgramme = {
    href?: string | undefined;
};

/** @internal */
export namespace ForProgramme$ {
    export const inboundSchema: z.ZodType<ForProgramme, z.ZodTypeDef, unknown> = z
        .object({
            href: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.href === undefined ? null : { href: v.href }),
            };
        });

    export type Outbound = {
        href?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ForProgramme> = z
        .object({
            href: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.href === undefined ? null : { href: v.href }),
            };
        });
}
