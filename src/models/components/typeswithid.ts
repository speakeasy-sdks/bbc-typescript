/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TypesWithIdType = {
    id?: string | undefined;
};

export type TypesWithIdTypes = {
    type: Array<TypesWithIdType>;
};

export type Type = {
    id?: string | undefined;
    types: TypesWithIdTypes;
};

export type Types = {
    type: Array<Type>;
};

export type TypesWithId = {
    types: Types;
};

/** @internal */
export namespace TypesWithIdType$ {
    export const inboundSchema: z.ZodType<TypesWithIdType, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TypesWithIdType> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace TypesWithIdTypes$ {
    export const inboundSchema: z.ZodType<TypesWithIdTypes, z.ZodTypeDef, unknown> = z
        .object({
            type: z.array(z.lazy(() => TypesWithIdType$.inboundSchema)),
        })
        .transform((v) => {
            return {
                type: v.type,
            };
        });

    export type Outbound = {
        type: Array<TypesWithIdType$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TypesWithIdTypes> = z
        .object({
            type: z.array(z.lazy(() => TypesWithIdType$.outboundSchema)),
        })
        .transform((v) => {
            return {
                type: v.type,
            };
        });
}

/** @internal */
export namespace Type$ {
    export const inboundSchema: z.ZodType<Type, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            types: z.lazy(() => TypesWithIdTypes$.inboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                types: v.types,
            };
        });

    export type Outbound = {
        id?: string | undefined;
        types: TypesWithIdTypes$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Type> = z
        .object({
            id: z.string().optional(),
            types: z.lazy(() => TypesWithIdTypes$.outboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                types: v.types,
            };
        });
}

/** @internal */
export namespace Types$ {
    export const inboundSchema: z.ZodType<Types, z.ZodTypeDef, unknown> = z
        .object({
            type: z.array(z.lazy(() => Type$.inboundSchema)),
        })
        .transform((v) => {
            return {
                type: v.type,
            };
        });

    export type Outbound = {
        type: Array<Type$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Types> = z
        .object({
            type: z.array(z.lazy(() => Type$.outboundSchema)),
        })
        .transform((v) => {
            return {
                type: v.type,
            };
        });
}

/** @internal */
export namespace TypesWithId$ {
    export const inboundSchema: z.ZodType<TypesWithId, z.ZodTypeDef, unknown> = z
        .object({
            types: z.lazy(() => Types$.inboundSchema),
        })
        .transform((v) => {
            return {
                types: v.types,
            };
        });

    export type Outbound = {
        types: Types$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TypesWithId> = z
        .object({
            types: z.lazy(() => Types$.outboundSchema),
        })
        .transform((v) => {
            return {
                types: v.types,
            };
        });
}
