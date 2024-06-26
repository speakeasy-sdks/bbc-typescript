/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Franchises = {
    href: string;
    resultType: string;
    hrefDeprecated?: boolean | undefined;
    resultTypeDeprecated?: boolean | undefined;
    additionalProperties: { [k: string]: any };
};

/** @internal */
export namespace Franchises$ {
    export const inboundSchema: z.ZodType<Franchises, z.ZodTypeDef, unknown> = z
        .object({
            href: z.string(),
            result_type: z.string(),
            href_deprecated: z.boolean().optional(),
            result_type_deprecated: z.boolean().optional(),
        })
        .catchall(z.any())
        .transform((v) => {
            const {
                href,
                result_type,
                href_deprecated,
                result_type_deprecated,
                ...additionalProperties
            } = v;

            return {
                href: v.href,
                resultType: v.result_type,
                ...(v.href_deprecated === undefined ? null : { hrefDeprecated: v.href_deprecated }),
                ...(v.result_type_deprecated === undefined
                    ? null
                    : { resultTypeDeprecated: v.result_type_deprecated }),
                additionalProperties,
            };
        });

    export type Outbound = {
        href: string;
        result_type: string;
        href_deprecated?: boolean | undefined;
        result_type_deprecated?: boolean | undefined;
        [additionalProperties: string]: unknown;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Franchises> = z
        .object({
            href: z.string(),
            resultType: z.string(),
            hrefDeprecated: z.boolean().optional(),
            resultTypeDeprecated: z.boolean().optional(),
            additionalProperties: z.record(z.any()),
        })
        .transform((v) => {
            return {
                ...v.additionalProperties,
                href: v.href,
                result_type: v.resultType,
                ...(v.hrefDeprecated === undefined ? null : { href_deprecated: v.hrefDeprecated }),
                ...(v.resultTypeDeprecated === undefined
                    ? null
                    : { result_type_deprecated: v.resultTypeDeprecated }),
            };
        });
}
