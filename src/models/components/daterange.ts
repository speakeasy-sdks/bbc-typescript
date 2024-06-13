/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DateRange = {
    end?: Date | undefined;
    start?: Date | undefined;
};

/** @internal */
export namespace DateRange$ {
    export const inboundSchema: z.ZodType<DateRange, z.ZodTypeDef, unknown> = z
        .object({
            end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });

    export type Outbound = {
        end?: string | undefined;
        start?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DateRange> = z
        .object({
            end: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            start: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });
}