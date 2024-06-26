/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType = {
    end?: Date | undefined;
    id?: string | undefined;
    start?: Date | undefined;
};

export type AvailabilityMixinAvailabilityVersionTypesVersionType = {
    end?: Date | undefined;
    id?: string | undefined;
    start?: Date | undefined;
    versionType: Array<AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType>;
};

export type AvailabilityMixinAvailabilityVersionTypes = {
    versionType: Array<AvailabilityMixinAvailabilityVersionTypesVersionType>;
};

export type AvailabilityMixinAvailabilityAvailability = {
    status: string;
    versionTypes: AvailabilityMixinAvailabilityVersionTypes;
};

export type AvailabilityMixinAvailabilityVersionType = {
    availability?: Array<AvailabilityMixinAvailabilityAvailability> | undefined;
    end?: Date | undefined;
    id?: string | undefined;
    start?: Date | undefined;
};

export type AvailabilityMixinVersionType = {
    end?: Date | undefined;
    id?: string | undefined;
    start?: Date | undefined;
    versionType: Array<AvailabilityMixinAvailabilityVersionType>;
};

export type AvailabilityMixinVersionTypes = {
    versionType: Array<AvailabilityMixinVersionType>;
};

export type AvailabilityMixinAvailability = {
    status: string;
    versionTypes: AvailabilityMixinVersionTypes;
};

export type AvailabilityMixin = {
    availability?: Array<AvailabilityMixinAvailability> | undefined;
};

/** @internal */
export namespace AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType$ {
    export const inboundSchema: z.ZodType<
        AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            id: z.string().optional(),
            start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });

    export type Outbound = {
        end?: string | undefined;
        id?: string | undefined;
        start?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType
    > = z
        .object({
            end: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            id: z.string().optional(),
            start: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });
}

/** @internal */
export namespace AvailabilityMixinAvailabilityVersionTypesVersionType$ {
    export const inboundSchema: z.ZodType<
        AvailabilityMixinAvailabilityVersionTypesVersionType,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            id: z.string().optional(),
            start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            version_type: z.array(
                z.lazy(
                    () =>
                        AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType$.inboundSchema
                )
            ),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
                versionType: v.version_type,
            };
        });

    export type Outbound = {
        end?: string | undefined;
        id?: string | undefined;
        start?: string | undefined;
        version_type: Array<AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailabilityMixinAvailabilityVersionTypesVersionType
    > = z
        .object({
            end: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            id: z.string().optional(),
            start: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            versionType: z.array(
                z.lazy(
                    () =>
                        AvailabilityMixinAvailabilityVersionTypesVersionTypeVersionType$.outboundSchema
                )
            ),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
                version_type: v.versionType,
            };
        });
}

/** @internal */
export namespace AvailabilityMixinAvailabilityVersionTypes$ {
    export const inboundSchema: z.ZodType<
        AvailabilityMixinAvailabilityVersionTypes,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            version_type: z.array(
                z.lazy(() => AvailabilityMixinAvailabilityVersionTypesVersionType$.inboundSchema)
            ),
        })
        .transform((v) => {
            return {
                versionType: v.version_type,
            };
        });

    export type Outbound = {
        version_type: Array<AvailabilityMixinAvailabilityVersionTypesVersionType$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailabilityMixinAvailabilityVersionTypes
    > = z
        .object({
            versionType: z.array(
                z.lazy(() => AvailabilityMixinAvailabilityVersionTypesVersionType$.outboundSchema)
            ),
        })
        .transform((v) => {
            return {
                version_type: v.versionType,
            };
        });
}

/** @internal */
export namespace AvailabilityMixinAvailabilityAvailability$ {
    export const inboundSchema: z.ZodType<
        AvailabilityMixinAvailabilityAvailability,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            status: z.string(),
            version_types: z.lazy(() => AvailabilityMixinAvailabilityVersionTypes$.inboundSchema),
        })
        .transform((v) => {
            return {
                status: v.status,
                versionTypes: v.version_types,
            };
        });

    export type Outbound = {
        status: string;
        version_types: AvailabilityMixinAvailabilityVersionTypes$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailabilityMixinAvailabilityAvailability
    > = z
        .object({
            status: z.string(),
            versionTypes: z.lazy(() => AvailabilityMixinAvailabilityVersionTypes$.outboundSchema),
        })
        .transform((v) => {
            return {
                status: v.status,
                version_types: v.versionTypes,
            };
        });
}

/** @internal */
export namespace AvailabilityMixinAvailabilityVersionType$ {
    export const inboundSchema: z.ZodType<
        AvailabilityMixinAvailabilityVersionType,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            availability: z
                .array(z.lazy(() => AvailabilityMixinAvailabilityAvailability$.inboundSchema))
                .optional(),
            end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            id: z.string().optional(),
            start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.availability === undefined ? null : { availability: v.availability }),
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });

    export type Outbound = {
        availability?: Array<AvailabilityMixinAvailabilityAvailability$.Outbound> | undefined;
        end?: string | undefined;
        id?: string | undefined;
        start?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailabilityMixinAvailabilityVersionType
    > = z
        .object({
            availability: z
                .array(z.lazy(() => AvailabilityMixinAvailabilityAvailability$.outboundSchema))
                .optional(),
            end: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            id: z.string().optional(),
            start: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.availability === undefined ? null : { availability: v.availability }),
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });
}

/** @internal */
export namespace AvailabilityMixinVersionType$ {
    export const inboundSchema: z.ZodType<AvailabilityMixinVersionType, z.ZodTypeDef, unknown> = z
        .object({
            end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            id: z.string().optional(),
            start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            version_type: z.array(
                z.lazy(() => AvailabilityMixinAvailabilityVersionType$.inboundSchema)
            ),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
                versionType: v.version_type,
            };
        });

    export type Outbound = {
        end?: string | undefined;
        id?: string | undefined;
        start?: string | undefined;
        version_type: Array<AvailabilityMixinAvailabilityVersionType$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailabilityMixinVersionType> = z
        .object({
            end: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            id: z.string().optional(),
            start: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            versionType: z.array(
                z.lazy(() => AvailabilityMixinAvailabilityVersionType$.outboundSchema)
            ),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start === undefined ? null : { start: v.start }),
                version_type: v.versionType,
            };
        });
}

/** @internal */
export namespace AvailabilityMixinVersionTypes$ {
    export const inboundSchema: z.ZodType<AvailabilityMixinVersionTypes, z.ZodTypeDef, unknown> = z
        .object({
            version_type: z.array(z.lazy(() => AvailabilityMixinVersionType$.inboundSchema)),
        })
        .transform((v) => {
            return {
                versionType: v.version_type,
            };
        });

    export type Outbound = {
        version_type: Array<AvailabilityMixinVersionType$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailabilityMixinVersionTypes> =
        z
            .object({
                versionType: z.array(z.lazy(() => AvailabilityMixinVersionType$.outboundSchema)),
            })
            .transform((v) => {
                return {
                    version_type: v.versionType,
                };
            });
}

/** @internal */
export namespace AvailabilityMixinAvailability$ {
    export const inboundSchema: z.ZodType<AvailabilityMixinAvailability, z.ZodTypeDef, unknown> = z
        .object({
            status: z.string(),
            version_types: z.lazy(() => AvailabilityMixinVersionTypes$.inboundSchema),
        })
        .transform((v) => {
            return {
                status: v.status,
                versionTypes: v.version_types,
            };
        });

    export type Outbound = {
        status: string;
        version_types: AvailabilityMixinVersionTypes$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailabilityMixinAvailability> =
        z
            .object({
                status: z.string(),
                versionTypes: z.lazy(() => AvailabilityMixinVersionTypes$.outboundSchema),
            })
            .transform((v) => {
                return {
                    status: v.status,
                    version_types: v.versionTypes,
                };
            });
}

/** @internal */
export namespace AvailabilityMixin$ {
    export const inboundSchema: z.ZodType<AvailabilityMixin, z.ZodTypeDef, unknown> = z
        .object({
            availability: z
                .array(z.lazy(() => AvailabilityMixinAvailability$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.availability === undefined ? null : { availability: v.availability }),
            };
        });

    export type Outbound = {
        availability?: Array<AvailabilityMixinAvailability$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailabilityMixin> = z
        .object({
            availability: z
                .array(z.lazy(() => AvailabilityMixinAvailability$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.availability === undefined ? null : { availability: v.availability }),
            };
        });
}
