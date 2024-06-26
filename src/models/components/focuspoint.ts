/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type FocusPoint = {
    x?: number | undefined;
    y?: number | undefined;
};

/** @internal */
export namespace FocusPoint$ {
    export const inboundSchema: z.ZodType<FocusPoint, z.ZodTypeDef, unknown> = z
        .object({
            x: z.number().int().optional(),
            y: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.x === undefined ? null : { x: v.x }),
                ...(v.y === undefined ? null : { y: v.y }),
            };
        });

    export type Outbound = {
        x?: number | undefined;
        y?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FocusPoint> = z
        .object({
            x: z.number().int().optional(),
            y: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.x === undefined ? null : { x: v.x }),
                ...(v.y === undefined ? null : { y: v.y }),
            };
        });
}
