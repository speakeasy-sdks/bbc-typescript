/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ServiceReference = {
    href: string;
    resultType: string;
    sid: string;
};

/** @internal */
export namespace ServiceReference$ {
    export const inboundSchema: z.ZodType<ServiceReference, z.ZodTypeDef, unknown> = z
        .object({
            href: z.string(),
            result_type: z.string(),
            sid: z.string(),
        })
        .transform((v) => {
            return {
                href: v.href,
                resultType: v.result_type,
                sid: v.sid,
            };
        });

    export type Outbound = {
        href: string;
        result_type: string;
        sid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ServiceReference> = z
        .object({
            href: z.string(),
            resultType: z.string(),
            sid: z.string(),
        })
        .transform((v) => {
            return {
                href: v.href,
                result_type: v.resultType,
                sid: v.sid,
            };
        });
}
