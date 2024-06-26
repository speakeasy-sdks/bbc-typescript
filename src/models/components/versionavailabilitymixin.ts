/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { GuidanceWarnings, GuidanceWarnings$ } from "./guidancewarnings";
import { VersionAvailability, VersionAvailability$ } from "./versionavailability";
import * as z from "zod";

export type VersionAvailabilityMixinAvailabilities = {
    versionAvailability: Array<VersionAvailability>;
};

export type VersionAvailabilityMixinTypes = {
    type?: Array<string> | undefined;
};

export type VersionAvailabilityMixinVersionAvailabilities = {
    versionAvailability: Array<VersionAvailability>;
};

export type VersionAvailabilityMixinVersionTypes = {
    type?: Array<string> | undefined;
};

export type VersionAvailabilityMixinVersionVersion = {
    availabilities?: Array<VersionAvailabilityMixinVersionAvailabilities> | undefined;
    competitionWarning?: string | undefined;
    duration?: string | undefined;
    guidanceWarnings?: GuidanceWarnings | undefined;
    pid?: string | undefined;
    types: Array<VersionAvailabilityMixinVersionTypes>;
};

export type VersionAvailabilityMixinVersion = {
    availabilities?: Array<VersionAvailabilityMixinAvailabilities> | undefined;
    competitionWarning?: string | undefined;
    duration?: string | undefined;
    guidanceWarnings?: GuidanceWarnings | undefined;
    pid?: string | undefined;
    types: Array<VersionAvailabilityMixinTypes>;
    version?: Array<VersionAvailabilityMixinVersionVersion> | undefined;
};

export type VersionAvailabilityMixin = {
    version?: Array<VersionAvailabilityMixinVersion> | undefined;
};

/** @internal */
export namespace VersionAvailabilityMixinAvailabilities$ {
    export const inboundSchema: z.ZodType<
        VersionAvailabilityMixinAvailabilities,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            version_availability: z.array(VersionAvailability$.inboundSchema),
        })
        .transform((v) => {
            return {
                versionAvailability: v.version_availability,
            };
        });

    export type Outbound = {
        version_availability: Array<VersionAvailability$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        VersionAvailabilityMixinAvailabilities
    > = z
        .object({
            versionAvailability: z.array(VersionAvailability$.outboundSchema),
        })
        .transform((v) => {
            return {
                version_availability: v.versionAvailability,
            };
        });
}

/** @internal */
export namespace VersionAvailabilityMixinTypes$ {
    export const inboundSchema: z.ZodType<VersionAvailabilityMixinTypes, z.ZodTypeDef, unknown> = z
        .object({
            type: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        type?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VersionAvailabilityMixinTypes> =
        z
            .object({
                type: z.array(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.type === undefined ? null : { type: v.type }),
                };
            });
}

/** @internal */
export namespace VersionAvailabilityMixinVersionAvailabilities$ {
    export const inboundSchema: z.ZodType<
        VersionAvailabilityMixinVersionAvailabilities,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            version_availability: z.array(VersionAvailability$.inboundSchema),
        })
        .transform((v) => {
            return {
                versionAvailability: v.version_availability,
            };
        });

    export type Outbound = {
        version_availability: Array<VersionAvailability$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        VersionAvailabilityMixinVersionAvailabilities
    > = z
        .object({
            versionAvailability: z.array(VersionAvailability$.outboundSchema),
        })
        .transform((v) => {
            return {
                version_availability: v.versionAvailability,
            };
        });
}

/** @internal */
export namespace VersionAvailabilityMixinVersionTypes$ {
    export const inboundSchema: z.ZodType<
        VersionAvailabilityMixinVersionTypes,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            type: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        type?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        VersionAvailabilityMixinVersionTypes
    > = z
        .object({
            type: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}

/** @internal */
export namespace VersionAvailabilityMixinVersionVersion$ {
    export const inboundSchema: z.ZodType<
        VersionAvailabilityMixinVersionVersion,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            availabilities: z
                .array(z.lazy(() => VersionAvailabilityMixinVersionAvailabilities$.inboundSchema))
                .optional(),
            competition_warning: z.string().optional(),
            duration: z.string().optional(),
            guidance_warnings: GuidanceWarnings$.inboundSchema.optional(),
            pid: z.string().optional(),
            types: z.array(z.lazy(() => VersionAvailabilityMixinVersionTypes$.inboundSchema)),
        })
        .transform((v) => {
            return {
                ...(v.availabilities === undefined ? null : { availabilities: v.availabilities }),
                ...(v.competition_warning === undefined
                    ? null
                    : { competitionWarning: v.competition_warning }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.guidance_warnings === undefined
                    ? null
                    : { guidanceWarnings: v.guidance_warnings }),
                ...(v.pid === undefined ? null : { pid: v.pid }),
                types: v.types,
            };
        });

    export type Outbound = {
        availabilities?: Array<VersionAvailabilityMixinVersionAvailabilities$.Outbound> | undefined;
        competition_warning?: string | undefined;
        duration?: string | undefined;
        guidance_warnings?: GuidanceWarnings$.Outbound | undefined;
        pid?: string | undefined;
        types: Array<VersionAvailabilityMixinVersionTypes$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        VersionAvailabilityMixinVersionVersion
    > = z
        .object({
            availabilities: z
                .array(z.lazy(() => VersionAvailabilityMixinVersionAvailabilities$.outboundSchema))
                .optional(),
            competitionWarning: z.string().optional(),
            duration: z.string().optional(),
            guidanceWarnings: GuidanceWarnings$.outboundSchema.optional(),
            pid: z.string().optional(),
            types: z.array(z.lazy(() => VersionAvailabilityMixinVersionTypes$.outboundSchema)),
        })
        .transform((v) => {
            return {
                ...(v.availabilities === undefined ? null : { availabilities: v.availabilities }),
                ...(v.competitionWarning === undefined
                    ? null
                    : { competition_warning: v.competitionWarning }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.guidanceWarnings === undefined
                    ? null
                    : { guidance_warnings: v.guidanceWarnings }),
                ...(v.pid === undefined ? null : { pid: v.pid }),
                types: v.types,
            };
        });
}

/** @internal */
export namespace VersionAvailabilityMixinVersion$ {
    export const inboundSchema: z.ZodType<VersionAvailabilityMixinVersion, z.ZodTypeDef, unknown> =
        z
            .object({
                availabilities: z
                    .array(z.lazy(() => VersionAvailabilityMixinAvailabilities$.inboundSchema))
                    .optional(),
                competition_warning: z.string().optional(),
                duration: z.string().optional(),
                guidance_warnings: GuidanceWarnings$.inboundSchema.optional(),
                pid: z.string().optional(),
                types: z.array(z.lazy(() => VersionAvailabilityMixinTypes$.inboundSchema)),
                version: z
                    .array(z.lazy(() => VersionAvailabilityMixinVersionVersion$.inboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return {
                    ...(v.availabilities === undefined
                        ? null
                        : { availabilities: v.availabilities }),
                    ...(v.competition_warning === undefined
                        ? null
                        : { competitionWarning: v.competition_warning }),
                    ...(v.duration === undefined ? null : { duration: v.duration }),
                    ...(v.guidance_warnings === undefined
                        ? null
                        : { guidanceWarnings: v.guidance_warnings }),
                    ...(v.pid === undefined ? null : { pid: v.pid }),
                    types: v.types,
                    ...(v.version === undefined ? null : { version: v.version }),
                };
            });

    export type Outbound = {
        availabilities?: Array<VersionAvailabilityMixinAvailabilities$.Outbound> | undefined;
        competition_warning?: string | undefined;
        duration?: string | undefined;
        guidance_warnings?: GuidanceWarnings$.Outbound | undefined;
        pid?: string | undefined;
        types: Array<VersionAvailabilityMixinTypes$.Outbound>;
        version?: Array<VersionAvailabilityMixinVersionVersion$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        VersionAvailabilityMixinVersion
    > = z
        .object({
            availabilities: z
                .array(z.lazy(() => VersionAvailabilityMixinAvailabilities$.outboundSchema))
                .optional(),
            competitionWarning: z.string().optional(),
            duration: z.string().optional(),
            guidanceWarnings: GuidanceWarnings$.outboundSchema.optional(),
            pid: z.string().optional(),
            types: z.array(z.lazy(() => VersionAvailabilityMixinTypes$.outboundSchema)),
            version: z
                .array(z.lazy(() => VersionAvailabilityMixinVersionVersion$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.availabilities === undefined ? null : { availabilities: v.availabilities }),
                ...(v.competitionWarning === undefined
                    ? null
                    : { competition_warning: v.competitionWarning }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.guidanceWarnings === undefined
                    ? null
                    : { guidance_warnings: v.guidanceWarnings }),
                ...(v.pid === undefined ? null : { pid: v.pid }),
                types: v.types,
                ...(v.version === undefined ? null : { version: v.version }),
            };
        });
}

/** @internal */
export namespace VersionAvailabilityMixin$ {
    export const inboundSchema: z.ZodType<VersionAvailabilityMixin, z.ZodTypeDef, unknown> = z
        .object({
            version: z
                .array(z.lazy(() => VersionAvailabilityMixinVersion$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.version === undefined ? null : { version: v.version }),
            };
        });

    export type Outbound = {
        version?: Array<VersionAvailabilityMixinVersion$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VersionAvailabilityMixin> = z
        .object({
            version: z
                .array(z.lazy(() => VersionAvailabilityMixinVersion$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.version === undefined ? null : { version: v.version }),
            };
        });
}
