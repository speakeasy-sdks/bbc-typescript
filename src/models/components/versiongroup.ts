/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Identifiers, Identifiers$ } from "./identifiers";
import { Ids, Ids$ } from "./ids";
import { TypesWithId, TypesWithId$ } from "./typeswithid";
import { VersionOf, VersionOf$ } from "./versionof";
import { VersionTypesWithId, VersionTypesWithId$ } from "./versiontypeswithid";
import { Warnings, Warnings$ } from "./warnings";
import * as z from "zod";

export type VersionGroupVersionVersion = {
    aspectRatio?: string | undefined;
    competitionWarning?: boolean | undefined;
    duration?: string | undefined;
    identifiers?: Identifiers | undefined;
    ids?: Ids | undefined;
    pid: string;
    typesWithId?: TypesWithId | undefined;
    updatedTime: Date;
    versionOf?: VersionOf | undefined;
    versionTypesWithId?: VersionTypesWithId | undefined;
    warnings?: Warnings | undefined;
};

export type VersionGroupVersion = {
    aspectRatio?: string | undefined;
    competitionWarning?: boolean | undefined;
    duration?: string | undefined;
    identifiers?: Identifiers | undefined;
    ids?: Ids | undefined;
    pid: string;
    typesWithId?: TypesWithId | undefined;
    updatedTime: Date;
    version: VersionGroupVersionVersion;
    versionOf?: VersionOf | undefined;
    versionTypesWithId?: VersionTypesWithId | undefined;
    warnings?: Warnings | undefined;
};

export type VersionGroup = {
    version: VersionGroupVersion;
};

/** @internal */
export namespace VersionGroupVersionVersion$ {
    export const inboundSchema: z.ZodType<VersionGroupVersionVersion, z.ZodTypeDef, unknown> = z
        .object({
            aspect_ratio: z.string().optional(),
            competition_warning: z.boolean().optional(),
            duration: z.string().optional(),
            identifiers: Identifiers$.inboundSchema.optional(),
            ids: Ids$.inboundSchema.optional(),
            pid: z.string(),
            types_with_id: TypesWithId$.inboundSchema.optional(),
            updated_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            version_of: VersionOf$.inboundSchema.optional(),
            version_types_with_id: VersionTypesWithId$.inboundSchema.optional(),
            warnings: Warnings$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.aspect_ratio === undefined ? null : { aspectRatio: v.aspect_ratio }),
                ...(v.competition_warning === undefined
                    ? null
                    : { competitionWarning: v.competition_warning }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                pid: v.pid,
                ...(v.types_with_id === undefined ? null : { typesWithId: v.types_with_id }),
                updatedTime: v.updated_time,
                ...(v.version_of === undefined ? null : { versionOf: v.version_of }),
                ...(v.version_types_with_id === undefined
                    ? null
                    : { versionTypesWithId: v.version_types_with_id }),
                ...(v.warnings === undefined ? null : { warnings: v.warnings }),
            };
        });

    export type Outbound = {
        aspect_ratio?: string | undefined;
        competition_warning?: boolean | undefined;
        duration?: string | undefined;
        identifiers?: Identifiers$.Outbound | undefined;
        ids?: Ids$.Outbound | undefined;
        pid: string;
        types_with_id?: TypesWithId$.Outbound | undefined;
        updated_time: string;
        version_of?: VersionOf$.Outbound | undefined;
        version_types_with_id?: VersionTypesWithId$.Outbound | undefined;
        warnings?: Warnings$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VersionGroupVersionVersion> = z
        .object({
            aspectRatio: z.string().optional(),
            competitionWarning: z.boolean().optional(),
            duration: z.string().optional(),
            identifiers: Identifiers$.outboundSchema.optional(),
            ids: Ids$.outboundSchema.optional(),
            pid: z.string(),
            typesWithId: TypesWithId$.outboundSchema.optional(),
            updatedTime: z.date().transform((v) => v.toISOString()),
            versionOf: VersionOf$.outboundSchema.optional(),
            versionTypesWithId: VersionTypesWithId$.outboundSchema.optional(),
            warnings: Warnings$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.aspectRatio === undefined ? null : { aspect_ratio: v.aspectRatio }),
                ...(v.competitionWarning === undefined
                    ? null
                    : { competition_warning: v.competitionWarning }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                pid: v.pid,
                ...(v.typesWithId === undefined ? null : { types_with_id: v.typesWithId }),
                updated_time: v.updatedTime,
                ...(v.versionOf === undefined ? null : { version_of: v.versionOf }),
                ...(v.versionTypesWithId === undefined
                    ? null
                    : { version_types_with_id: v.versionTypesWithId }),
                ...(v.warnings === undefined ? null : { warnings: v.warnings }),
            };
        });
}

/** @internal */
export namespace VersionGroupVersion$ {
    export const inboundSchema: z.ZodType<VersionGroupVersion, z.ZodTypeDef, unknown> = z
        .object({
            aspect_ratio: z.string().optional(),
            competition_warning: z.boolean().optional(),
            duration: z.string().optional(),
            identifiers: Identifiers$.inboundSchema.optional(),
            ids: Ids$.inboundSchema.optional(),
            pid: z.string(),
            types_with_id: TypesWithId$.inboundSchema.optional(),
            updated_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            version: z.lazy(() => VersionGroupVersionVersion$.inboundSchema),
            version_of: VersionOf$.inboundSchema.optional(),
            version_types_with_id: VersionTypesWithId$.inboundSchema.optional(),
            warnings: Warnings$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.aspect_ratio === undefined ? null : { aspectRatio: v.aspect_ratio }),
                ...(v.competition_warning === undefined
                    ? null
                    : { competitionWarning: v.competition_warning }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                pid: v.pid,
                ...(v.types_with_id === undefined ? null : { typesWithId: v.types_with_id }),
                updatedTime: v.updated_time,
                version: v.version,
                ...(v.version_of === undefined ? null : { versionOf: v.version_of }),
                ...(v.version_types_with_id === undefined
                    ? null
                    : { versionTypesWithId: v.version_types_with_id }),
                ...(v.warnings === undefined ? null : { warnings: v.warnings }),
            };
        });

    export type Outbound = {
        aspect_ratio?: string | undefined;
        competition_warning?: boolean | undefined;
        duration?: string | undefined;
        identifiers?: Identifiers$.Outbound | undefined;
        ids?: Ids$.Outbound | undefined;
        pid: string;
        types_with_id?: TypesWithId$.Outbound | undefined;
        updated_time: string;
        version: VersionGroupVersionVersion$.Outbound;
        version_of?: VersionOf$.Outbound | undefined;
        version_types_with_id?: VersionTypesWithId$.Outbound | undefined;
        warnings?: Warnings$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VersionGroupVersion> = z
        .object({
            aspectRatio: z.string().optional(),
            competitionWarning: z.boolean().optional(),
            duration: z.string().optional(),
            identifiers: Identifiers$.outboundSchema.optional(),
            ids: Ids$.outboundSchema.optional(),
            pid: z.string(),
            typesWithId: TypesWithId$.outboundSchema.optional(),
            updatedTime: z.date().transform((v) => v.toISOString()),
            version: z.lazy(() => VersionGroupVersionVersion$.outboundSchema),
            versionOf: VersionOf$.outboundSchema.optional(),
            versionTypesWithId: VersionTypesWithId$.outboundSchema.optional(),
            warnings: Warnings$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.aspectRatio === undefined ? null : { aspect_ratio: v.aspectRatio }),
                ...(v.competitionWarning === undefined
                    ? null
                    : { competition_warning: v.competitionWarning }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                pid: v.pid,
                ...(v.typesWithId === undefined ? null : { types_with_id: v.typesWithId }),
                updated_time: v.updatedTime,
                version: v.version,
                ...(v.versionOf === undefined ? null : { version_of: v.versionOf }),
                ...(v.versionTypesWithId === undefined
                    ? null
                    : { version_types_with_id: v.versionTypesWithId }),
                ...(v.warnings === undefined ? null : { warnings: v.warnings }),
            };
        });
}

/** @internal */
export namespace VersionGroup$ {
    export const inboundSchema: z.ZodType<VersionGroup, z.ZodTypeDef, unknown> = z
        .object({
            version: z.lazy(() => VersionGroupVersion$.inboundSchema),
        })
        .transform((v) => {
            return {
                version: v.version,
            };
        });

    export type Outbound = {
        version: VersionGroupVersion$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VersionGroup> = z
        .object({
            version: z.lazy(() => VersionGroupVersion$.outboundSchema),
        })
        .transform((v) => {
            return {
                version: v.version,
            };
        });
}