/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PlayedInLinks, PlayedInLinks$ } from "./playedinlinks";
import { Synopses, Synopses$ } from "./synopses";
import * as z from "zod";

export type PlayEvent = {
    offset?: number | undefined;
    pid: string;
    playedInLinks?: Array<PlayedInLinks> | undefined;
    position?: number | undefined;
    synopses?: Synopses | undefined;
    title?: string | undefined;
};

/** @internal */
export namespace PlayEvent$ {
    export const inboundSchema: z.ZodType<PlayEvent, z.ZodTypeDef, unknown> = z
        .object({
            offset: z.number().int().optional(),
            pid: z.string(),
            played_in_links: z.array(PlayedInLinks$.inboundSchema).optional(),
            position: z.number().optional(),
            synopses: Synopses$.inboundSchema.optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.offset === undefined ? null : { offset: v.offset }),
                pid: v.pid,
                ...(v.played_in_links === undefined ? null : { playedInLinks: v.played_in_links }),
                ...(v.position === undefined ? null : { position: v.position }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        offset?: number | undefined;
        pid: string;
        played_in_links?: Array<PlayedInLinks$.Outbound> | undefined;
        position?: number | undefined;
        synopses?: Synopses$.Outbound | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlayEvent> = z
        .object({
            offset: z.number().int().optional(),
            pid: z.string(),
            playedInLinks: z.array(PlayedInLinks$.outboundSchema).optional(),
            position: z.number().optional(),
            synopses: Synopses$.outboundSchema.optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.offset === undefined ? null : { offset: v.offset }),
                pid: v.pid,
                ...(v.playedInLinks === undefined ? null : { played_in_links: v.playedInLinks }),
                ...(v.position === undefined ? null : { position: v.position }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}