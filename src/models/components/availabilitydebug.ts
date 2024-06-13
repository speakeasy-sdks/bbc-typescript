/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MediaProfileGroups, MediaProfileGroups$ } from "./mediaprofilegroups";
import { PidReference, PidReference$ } from "./pidreference";
import { ServiceReference, ServiceReference$ } from "./servicereference";
import * as z from "zod";

export type AvailabilityDebug = {
    availabilityOf: PidReference;
    mediaProfileGroups?: MediaProfileGroups | undefined;
    service?: ServiceReference | undefined;
    territory?: string | undefined;
};

/** @internal */
export namespace AvailabilityDebug$ {
    export const inboundSchema: z.ZodType<AvailabilityDebug, z.ZodTypeDef, unknown> = z
        .object({
            availability_of: PidReference$.inboundSchema,
            media_profile_groups: MediaProfileGroups$.inboundSchema.optional(),
            service: ServiceReference$.inboundSchema.optional(),
            territory: z.string().optional(),
        })
        .transform((v) => {
            return {
                availabilityOf: v.availability_of,
                ...(v.media_profile_groups === undefined
                    ? null
                    : { mediaProfileGroups: v.media_profile_groups }),
                ...(v.service === undefined ? null : { service: v.service }),
                ...(v.territory === undefined ? null : { territory: v.territory }),
            };
        });

    export type Outbound = {
        availability_of: PidReference$.Outbound;
        media_profile_groups?: MediaProfileGroups$.Outbound | undefined;
        service?: ServiceReference$.Outbound | undefined;
        territory?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailabilityDebug> = z
        .object({
            availabilityOf: PidReference$.outboundSchema,
            mediaProfileGroups: MediaProfileGroups$.outboundSchema.optional(),
            service: ServiceReference$.outboundSchema.optional(),
            territory: z.string().optional(),
        })
        .transform((v) => {
            return {
                availability_of: v.availabilityOf,
                ...(v.mediaProfileGroups === undefined
                    ? null
                    : { media_profile_groups: v.mediaProfileGroups }),
                ...(v.service === undefined ? null : { service: v.service }),
                ...(v.territory === undefined ? null : { territory: v.territory }),
            };
        });
}