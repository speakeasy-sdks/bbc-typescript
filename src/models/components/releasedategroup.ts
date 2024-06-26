/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ReleaseDateGroup = {
    releaseDate?: string | undefined;
    releaseYear?: string | undefined;
    releaseYearMonth?: string | undefined;
};

/** @internal */
export namespace ReleaseDateGroup$ {
    export const inboundSchema: z.ZodType<ReleaseDateGroup, z.ZodTypeDef, unknown> = z
        .object({
            release_date: z.string().optional(),
            release_year: z.string().optional(),
            release_year_month: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.release_date === undefined ? null : { releaseDate: v.release_date }),
                ...(v.release_year === undefined ? null : { releaseYear: v.release_year }),
                ...(v.release_year_month === undefined
                    ? null
                    : { releaseYearMonth: v.release_year_month }),
            };
        });

    export type Outbound = {
        release_date?: string | undefined;
        release_year?: string | undefined;
        release_year_month?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReleaseDateGroup> = z
        .object({
            releaseDate: z.string().optional(),
            releaseYear: z.string().optional(),
            releaseYearMonth: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.releaseDate === undefined ? null : { release_date: v.releaseDate }),
                ...(v.releaseYear === undefined ? null : { release_year: v.releaseYear }),
                ...(v.releaseYearMonth === undefined
                    ? null
                    : { release_year_month: v.releaseYearMonth }),
            };
        });
}
