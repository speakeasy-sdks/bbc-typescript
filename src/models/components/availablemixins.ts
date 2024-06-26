/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AvailableVersionsMediaSets,
    AvailableVersionsMediaSets$,
} from "./availableversionsmediasets";
import * as z from "zod";

export type AvailableMixinsAvailabilitiesAvailability = {
    accurateEnd?: Date | undefined;
    accurateStart?: Date | undefined;
    availableVersionsMediaSets: AvailableVersionsMediaSets;
    mediaAvailabilityEnd?: Date | undefined;
    mediaAvailabilityStart?: Date | undefined;
    paymentType?: string | undefined;
    scheduledEnd?: Date | undefined;
    scheduledStart?: Date | undefined;
    status?: string | undefined;
    type?: string | undefined;
};

export type AvailableMixinsAvailabilities = {
    availability: Array<AvailableMixinsAvailabilitiesAvailability>;
    type?: string | undefined;
};

export type AvailableMixinsAvailability = {
    accurateEnd?: Date | undefined;
    accurateStart?: Date | undefined;
    availableVersionsMediaSets: AvailableVersionsMediaSets;
    mediaAvailabilityEnd?: Date | undefined;
    mediaAvailabilityStart?: Date | undefined;
    paymentType?: string | undefined;
    scheduledEnd?: Date | undefined;
    scheduledStart?: Date | undefined;
    status?: string | undefined;
    type?: string | undefined;
};

export type Availabilities = {
    availabilities: AvailableMixinsAvailabilities;
    availability: Array<AvailableMixinsAvailability>;
    type?: string | undefined;
};

export type AvailableMixins = {
    availabilities: Availabilities;
};

/** @internal */
export namespace AvailableMixinsAvailabilitiesAvailability$ {
    export const inboundSchema: z.ZodType<
        AvailableMixinsAvailabilitiesAvailability,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            accurate_end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            accurate_start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            available_versions_media_sets: AvailableVersionsMediaSets$.inboundSchema,
            media_availability_end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            media_availability_start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            payment_type: z.string().optional(),
            scheduled_end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            scheduled_start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            status: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accurate_end === undefined ? null : { accurateEnd: v.accurate_end }),
                ...(v.accurate_start === undefined ? null : { accurateStart: v.accurate_start }),
                availableVersionsMediaSets: v.available_versions_media_sets,
                ...(v.media_availability_end === undefined
                    ? null
                    : { mediaAvailabilityEnd: v.media_availability_end }),
                ...(v.media_availability_start === undefined
                    ? null
                    : { mediaAvailabilityStart: v.media_availability_start }),
                ...(v.payment_type === undefined ? null : { paymentType: v.payment_type }),
                ...(v.scheduled_end === undefined ? null : { scheduledEnd: v.scheduled_end }),
                ...(v.scheduled_start === undefined ? null : { scheduledStart: v.scheduled_start }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        accurate_end?: string | undefined;
        accurate_start?: string | undefined;
        available_versions_media_sets: AvailableVersionsMediaSets$.Outbound;
        media_availability_end?: string | undefined;
        media_availability_start?: string | undefined;
        payment_type?: string | undefined;
        scheduled_end?: string | undefined;
        scheduled_start?: string | undefined;
        status?: string | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AvailableMixinsAvailabilitiesAvailability
    > = z
        .object({
            accurateEnd: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            accurateStart: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            availableVersionsMediaSets: AvailableVersionsMediaSets$.outboundSchema,
            mediaAvailabilityEnd: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            mediaAvailabilityStart: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            paymentType: z.string().optional(),
            scheduledEnd: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            scheduledStart: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            status: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accurateEnd === undefined ? null : { accurate_end: v.accurateEnd }),
                ...(v.accurateStart === undefined ? null : { accurate_start: v.accurateStart }),
                available_versions_media_sets: v.availableVersionsMediaSets,
                ...(v.mediaAvailabilityEnd === undefined
                    ? null
                    : { media_availability_end: v.mediaAvailabilityEnd }),
                ...(v.mediaAvailabilityStart === undefined
                    ? null
                    : { media_availability_start: v.mediaAvailabilityStart }),
                ...(v.paymentType === undefined ? null : { payment_type: v.paymentType }),
                ...(v.scheduledEnd === undefined ? null : { scheduled_end: v.scheduledEnd }),
                ...(v.scheduledStart === undefined ? null : { scheduled_start: v.scheduledStart }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace AvailableMixinsAvailabilities$ {
    export const inboundSchema: z.ZodType<AvailableMixinsAvailabilities, z.ZodTypeDef, unknown> = z
        .object({
            availability: z.array(
                z.lazy(() => AvailableMixinsAvailabilitiesAvailability$.inboundSchema)
            ),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                availability: v.availability,
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        availability: Array<AvailableMixinsAvailabilitiesAvailability$.Outbound>;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailableMixinsAvailabilities> =
        z
            .object({
                availability: z.array(
                    z.lazy(() => AvailableMixinsAvailabilitiesAvailability$.outboundSchema)
                ),
                type: z.string().optional(),
            })
            .transform((v) => {
                return {
                    availability: v.availability,
                    ...(v.type === undefined ? null : { type: v.type }),
                };
            });
}

/** @internal */
export namespace AvailableMixinsAvailability$ {
    export const inboundSchema: z.ZodType<AvailableMixinsAvailability, z.ZodTypeDef, unknown> = z
        .object({
            accurate_end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            accurate_start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            available_versions_media_sets: AvailableVersionsMediaSets$.inboundSchema,
            media_availability_end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            media_availability_start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            payment_type: z.string().optional(),
            scheduled_end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            scheduled_start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            status: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accurate_end === undefined ? null : { accurateEnd: v.accurate_end }),
                ...(v.accurate_start === undefined ? null : { accurateStart: v.accurate_start }),
                availableVersionsMediaSets: v.available_versions_media_sets,
                ...(v.media_availability_end === undefined
                    ? null
                    : { mediaAvailabilityEnd: v.media_availability_end }),
                ...(v.media_availability_start === undefined
                    ? null
                    : { mediaAvailabilityStart: v.media_availability_start }),
                ...(v.payment_type === undefined ? null : { paymentType: v.payment_type }),
                ...(v.scheduled_end === undefined ? null : { scheduledEnd: v.scheduled_end }),
                ...(v.scheduled_start === undefined ? null : { scheduledStart: v.scheduled_start }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        accurate_end?: string | undefined;
        accurate_start?: string | undefined;
        available_versions_media_sets: AvailableVersionsMediaSets$.Outbound;
        media_availability_end?: string | undefined;
        media_availability_start?: string | undefined;
        payment_type?: string | undefined;
        scheduled_end?: string | undefined;
        scheduled_start?: string | undefined;
        status?: string | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailableMixinsAvailability> = z
        .object({
            accurateEnd: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            accurateStart: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            availableVersionsMediaSets: AvailableVersionsMediaSets$.outboundSchema,
            mediaAvailabilityEnd: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            mediaAvailabilityStart: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            paymentType: z.string().optional(),
            scheduledEnd: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            scheduledStart: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            status: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accurateEnd === undefined ? null : { accurate_end: v.accurateEnd }),
                ...(v.accurateStart === undefined ? null : { accurate_start: v.accurateStart }),
                available_versions_media_sets: v.availableVersionsMediaSets,
                ...(v.mediaAvailabilityEnd === undefined
                    ? null
                    : { media_availability_end: v.mediaAvailabilityEnd }),
                ...(v.mediaAvailabilityStart === undefined
                    ? null
                    : { media_availability_start: v.mediaAvailabilityStart }),
                ...(v.paymentType === undefined ? null : { payment_type: v.paymentType }),
                ...(v.scheduledEnd === undefined ? null : { scheduled_end: v.scheduledEnd }),
                ...(v.scheduledStart === undefined ? null : { scheduled_start: v.scheduledStart }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace Availabilities$ {
    export const inboundSchema: z.ZodType<Availabilities, z.ZodTypeDef, unknown> = z
        .object({
            availabilities: z.lazy(() => AvailableMixinsAvailabilities$.inboundSchema),
            availability: z.array(z.lazy(() => AvailableMixinsAvailability$.inboundSchema)),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                availabilities: v.availabilities,
                availability: v.availability,
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        availabilities: AvailableMixinsAvailabilities$.Outbound;
        availability: Array<AvailableMixinsAvailability$.Outbound>;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Availabilities> = z
        .object({
            availabilities: z.lazy(() => AvailableMixinsAvailabilities$.outboundSchema),
            availability: z.array(z.lazy(() => AvailableMixinsAvailability$.outboundSchema)),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                availabilities: v.availabilities,
                availability: v.availability,
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace AvailableMixins$ {
    export const inboundSchema: z.ZodType<AvailableMixins, z.ZodTypeDef, unknown> = z
        .object({
            availabilities: z.lazy(() => Availabilities$.inboundSchema),
        })
        .transform((v) => {
            return {
                availabilities: v.availabilities,
            };
        });

    export type Outbound = {
        availabilities: Availabilities$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailableMixins> = z
        .object({
            availabilities: z.lazy(() => Availabilities$.outboundSchema),
        })
        .transform((v) => {
            return {
                availabilities: v.availabilities,
            };
        });
}
