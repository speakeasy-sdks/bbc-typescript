/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AvailableMediaSetsMediaSetsMediaSet = {
    numberText?: string | undefined;
};

export type AvailableMediaSetsMediaSetsMediaSets = {
    mediaSet: Array<AvailableMediaSetsMediaSetsMediaSet>;
};

export type AvailableMediaSetsMediaSet = {
    numberText?: string | undefined;
    mediaSets?: AvailableMediaSetsMediaSetsMediaSets | undefined;
};

export type AvailableMediaSetsMediaSets = {
    mediaSet: Array<AvailableMediaSetsMediaSet>;
};

export type AvailableMediaSets = {
    mediaSets?: AvailableMediaSetsMediaSets | undefined;
};

/** @internal */
export namespace AvailableMediaSetsMediaSetsMediaSet$ {
    export const inboundSchema: z.ZodType<
        AvailableMediaSetsMediaSetsMediaSet,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            "#text": z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v["#text"] === undefined ? null : { numberText: v["#text"] }),
            };
        });

    export type Outbound = {
        "#text"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailableMediaSetsMediaSetsMediaSet
    > = z
        .object({
            numberText: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.numberText === undefined ? null : { "#text": v.numberText }),
            };
        });
}

/** @internal */
export namespace AvailableMediaSetsMediaSetsMediaSets$ {
    export const inboundSchema: z.ZodType<
        AvailableMediaSetsMediaSetsMediaSets,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            media_set: z.array(z.lazy(() => AvailableMediaSetsMediaSetsMediaSet$.inboundSchema)),
        })
        .transform((v) => {
            return {
                mediaSet: v.media_set,
            };
        });

    export type Outbound = {
        media_set: Array<AvailableMediaSetsMediaSetsMediaSet$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailableMediaSetsMediaSetsMediaSets
    > = z
        .object({
            mediaSet: z.array(z.lazy(() => AvailableMediaSetsMediaSetsMediaSet$.outboundSchema)),
        })
        .transform((v) => {
            return {
                media_set: v.mediaSet,
            };
        });
}

/** @internal */
export namespace AvailableMediaSetsMediaSet$ {
    export const inboundSchema: z.ZodType<AvailableMediaSetsMediaSet, z.ZodTypeDef, unknown> = z
        .object({
            "#text": z.string().optional(),
            media_sets: z
                .lazy(() => AvailableMediaSetsMediaSetsMediaSets$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v["#text"] === undefined ? null : { numberText: v["#text"] }),
                ...(v.media_sets === undefined ? null : { mediaSets: v.media_sets }),
            };
        });

    export type Outbound = {
        "#text"?: string | undefined;
        media_sets?: AvailableMediaSetsMediaSetsMediaSets$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailableMediaSetsMediaSet> = z
        .object({
            numberText: z.string().optional(),
            mediaSets: z
                .lazy(() => AvailableMediaSetsMediaSetsMediaSets$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.numberText === undefined ? null : { "#text": v.numberText }),
                ...(v.mediaSets === undefined ? null : { media_sets: v.mediaSets }),
            };
        });
}

/** @internal */
export namespace AvailableMediaSetsMediaSets$ {
    export const inboundSchema: z.ZodType<AvailableMediaSetsMediaSets, z.ZodTypeDef, unknown> = z
        .object({
            media_set: z.array(z.lazy(() => AvailableMediaSetsMediaSet$.inboundSchema)),
        })
        .transform((v) => {
            return {
                mediaSet: v.media_set,
            };
        });

    export type Outbound = {
        media_set: Array<AvailableMediaSetsMediaSet$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailableMediaSetsMediaSets> = z
        .object({
            mediaSet: z.array(z.lazy(() => AvailableMediaSetsMediaSet$.outboundSchema)),
        })
        .transform((v) => {
            return {
                media_set: v.mediaSet,
            };
        });
}

/** @internal */
export namespace AvailableMediaSets$ {
    export const inboundSchema: z.ZodType<AvailableMediaSets, z.ZodTypeDef, unknown> = z
        .object({
            media_sets: z.lazy(() => AvailableMediaSetsMediaSets$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.media_sets === undefined ? null : { mediaSets: v.media_sets }),
            };
        });

    export type Outbound = {
        media_sets?: AvailableMediaSetsMediaSets$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailableMediaSets> = z
        .object({
            mediaSets: z.lazy(() => AvailableMediaSetsMediaSets$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaSets === undefined ? null : { media_sets: v.mediaSets }),
            };
        });
}
