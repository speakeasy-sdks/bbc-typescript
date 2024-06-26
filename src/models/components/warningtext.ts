/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type WarningText = {
    numberText?: string | undefined;
    length?: string | undefined;
};

/** @internal */
export namespace WarningText$ {
    export const inboundSchema: z.ZodType<WarningText, z.ZodTypeDef, unknown> = z
        .object({
            "#text": z.string().optional(),
            length: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v["#text"] === undefined ? null : { numberText: v["#text"] }),
                ...(v.length === undefined ? null : { length: v.length }),
            };
        });

    export type Outbound = {
        "#text"?: string | undefined;
        length?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WarningText> = z
        .object({
            numberText: z.string().optional(),
            length: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.numberText === undefined ? null : { "#text": v.numberText }),
                ...(v.length === undefined ? null : { length: v.length }),
            };
        });
}
