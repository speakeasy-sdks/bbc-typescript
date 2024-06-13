/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MediaProfileGroup, MediaProfileGroup$ } from "./mediaprofilegroup";
import * as z from "zod";

export type MediaProfileGroups = {
    mediaProfileGroup?: Array<MediaProfileGroup> | undefined;
};

/** @internal */
export namespace MediaProfileGroups$ {
    export const inboundSchema: z.ZodType<MediaProfileGroups, z.ZodTypeDef, unknown> = z
        .object({
            media_profile_group: z.array(MediaProfileGroup$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.media_profile_group === undefined
                    ? null
                    : { mediaProfileGroup: v.media_profile_group }),
            };
        });

    export type Outbound = {
        media_profile_group?: Array<MediaProfileGroup$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MediaProfileGroups> = z
        .object({
            mediaProfileGroup: z.array(MediaProfileGroup$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaProfileGroup === undefined
                    ? null
                    : { media_profile_group: v.mediaProfileGroup }),
            };
        });
}
