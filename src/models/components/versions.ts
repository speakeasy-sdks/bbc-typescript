/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { VersionAvailabilityMixin, VersionAvailabilityMixin$ } from "./versionavailabilitymixin";
import * as z from "zod";

export type Versions = {
    available: number;
    versionAvailabilityMixin: VersionAvailabilityMixin;
};

/** @internal */
export namespace Versions$ {
    export const inboundSchema: z.ZodType<Versions, z.ZodTypeDef, unknown> = z
        .object({
            available: z.number().int(),
            version_availability_mixin: VersionAvailabilityMixin$.inboundSchema,
        })
        .transform((v) => {
            return {
                available: v.available,
                versionAvailabilityMixin: v.version_availability_mixin,
            };
        });

    export type Outbound = {
        available: number;
        version_availability_mixin: VersionAvailabilityMixin$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Versions> = z
        .object({
            available: z.number().int(),
            versionAvailabilityMixin: VersionAvailabilityMixin$.outboundSchema,
        })
        .transform((v) => {
            return {
                available: v.available,
                version_availability_mixin: v.versionAvailabilityMixin,
            };
        });
}