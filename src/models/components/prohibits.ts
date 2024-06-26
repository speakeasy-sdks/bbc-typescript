/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ProhibitsFilter = {
    name: string;
};

export type ProhibitsMixinFilter = {
    name: string;
};

export type ProhibitsMixinMixin = {
    name: string;
};

export type ProhibitsMixin = {
    filter?: Array<ProhibitsMixinFilter> | undefined;
    mixin?: Array<ProhibitsMixinMixin> | undefined;
    name: string;
};

export type Prohibits = {
    filter?: Array<ProhibitsFilter> | undefined;
    mixin?: Array<ProhibitsMixin> | undefined;
};

/** @internal */
export namespace ProhibitsFilter$ {
    export const inboundSchema: z.ZodType<ProhibitsFilter, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProhibitsFilter> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });
}

/** @internal */
export namespace ProhibitsMixinFilter$ {
    export const inboundSchema: z.ZodType<ProhibitsMixinFilter, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProhibitsMixinFilter> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });
}

/** @internal */
export namespace ProhibitsMixinMixin$ {
    export const inboundSchema: z.ZodType<ProhibitsMixinMixin, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProhibitsMixinMixin> = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });
}

/** @internal */
export namespace ProhibitsMixin$ {
    export const inboundSchema: z.ZodType<ProhibitsMixin, z.ZodTypeDef, unknown> = z
        .object({
            filter: z.array(z.lazy(() => ProhibitsMixinFilter$.inboundSchema)).optional(),
            mixin: z.array(z.lazy(() => ProhibitsMixinMixin$.inboundSchema)).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
                name: v.name,
            };
        });

    export type Outbound = {
        filter?: Array<ProhibitsMixinFilter$.Outbound> | undefined;
        mixin?: Array<ProhibitsMixinMixin$.Outbound> | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProhibitsMixin> = z
        .object({
            filter: z.array(z.lazy(() => ProhibitsMixinFilter$.outboundSchema)).optional(),
            mixin: z.array(z.lazy(() => ProhibitsMixinMixin$.outboundSchema)).optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
                name: v.name,
            };
        });
}

/** @internal */
export namespace Prohibits$ {
    export const inboundSchema: z.ZodType<Prohibits, z.ZodTypeDef, unknown> = z
        .object({
            filter: z.array(z.lazy(() => ProhibitsFilter$.inboundSchema)).optional(),
            mixin: z.array(z.lazy(() => ProhibitsMixin$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
            };
        });

    export type Outbound = {
        filter?: Array<ProhibitsFilter$.Outbound> | undefined;
        mixin?: Array<ProhibitsMixin$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Prohibits> = z
        .object({
            filter: z.array(z.lazy(() => ProhibitsFilter$.outboundSchema)).optional(),
            mixin: z.array(z.lazy(() => ProhibitsMixin$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
            };
        });
}
