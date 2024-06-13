/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AffectedByFilterFilter = {
    description: string;
    name: string;
};

export type AffectedByFilter = {
    description: string;
    filter?: Array<AffectedByFilterFilter> | undefined;
    name: string;
};

export type AffectedBy = {
    filter?: Array<AffectedByFilter> | undefined;
};

/** @internal */
export namespace AffectedByFilterFilter$ {
    export const inboundSchema: z.ZodType<AffectedByFilterFilter, z.ZodTypeDef, unknown> = z
        .object({
            description: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                description: v.description,
                name: v.name,
            };
        });

    export type Outbound = {
        description: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AffectedByFilterFilter> = z
        .object({
            description: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                description: v.description,
                name: v.name,
            };
        });
}

/** @internal */
export namespace AffectedByFilter$ {
    export const inboundSchema: z.ZodType<AffectedByFilter, z.ZodTypeDef, unknown> = z
        .object({
            description: z.string(),
            filter: z.array(z.lazy(() => AffectedByFilterFilter$.inboundSchema)).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                description: v.description,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                name: v.name,
            };
        });

    export type Outbound = {
        description: string;
        filter?: Array<AffectedByFilterFilter$.Outbound> | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AffectedByFilter> = z
        .object({
            description: z.string(),
            filter: z.array(z.lazy(() => AffectedByFilterFilter$.outboundSchema)).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                description: v.description,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                name: v.name,
            };
        });
}

/** @internal */
export namespace AffectedBy$ {
    export const inboundSchema: z.ZodType<AffectedBy, z.ZodTypeDef, unknown> = z
        .object({
            filter: z.array(z.lazy(() => AffectedByFilter$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
            };
        });

    export type Outbound = {
        filter?: Array<AffectedByFilter$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AffectedBy> = z
        .object({
            filter: z.array(z.lazy(() => AffectedByFilter$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
            };
        });
}