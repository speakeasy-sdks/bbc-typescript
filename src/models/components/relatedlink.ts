/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Synopses, Synopses$ } from "./synopses";
import * as z from "zod";

export type RelatedLinkAvailability = {
    end?: Date | undefined;
    start?: Date | undefined;
};

export type RelatedLink = {
    availability?: RelatedLinkAvailability | undefined;
    isExternal?: boolean | undefined;
    pid: string;
    position?: number | undefined;
    synopses?: Synopses | undefined;
    title?: string | undefined;
    type?: string | undefined;
    uri?: string | undefined;
};

/** @internal */
export namespace RelatedLinkAvailability$ {
    export const inboundSchema: z.ZodType<RelatedLinkAvailability, z.ZodTypeDef, unknown> = z
        .object({
            end: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });

    export type Outbound = {
        end?: string | undefined;
        start?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RelatedLinkAvailability> = z
        .object({
            end: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            start: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.end === undefined ? null : { end: v.end }),
                ...(v.start === undefined ? null : { start: v.start }),
            };
        });
}

/** @internal */
export namespace RelatedLink$ {
    export const inboundSchema: z.ZodType<RelatedLink, z.ZodTypeDef, unknown> = z
        .object({
            availability: z.lazy(() => RelatedLinkAvailability$.inboundSchema).optional(),
            is_external: z.boolean().optional(),
            pid: z.string(),
            position: z.number().int().optional(),
            synopses: Synopses$.inboundSchema.optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            uri: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.availability === undefined ? null : { availability: v.availability }),
                ...(v.is_external === undefined ? null : { isExternal: v.is_external }),
                pid: v.pid,
                ...(v.position === undefined ? null : { position: v.position }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.uri === undefined ? null : { uri: v.uri }),
            };
        });

    export type Outbound = {
        availability?: RelatedLinkAvailability$.Outbound | undefined;
        is_external?: boolean | undefined;
        pid: string;
        position?: number | undefined;
        synopses?: Synopses$.Outbound | undefined;
        title?: string | undefined;
        type?: string | undefined;
        uri?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RelatedLink> = z
        .object({
            availability: z.lazy(() => RelatedLinkAvailability$.outboundSchema).optional(),
            isExternal: z.boolean().optional(),
            pid: z.string(),
            position: z.number().int().optional(),
            synopses: Synopses$.outboundSchema.optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            uri: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.availability === undefined ? null : { availability: v.availability }),
                ...(v.isExternal === undefined ? null : { is_external: v.isExternal }),
                pid: v.pid,
                ...(v.position === undefined ? null : { position: v.position }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.uri === undefined ? null : { uri: v.uri }),
            };
        });
}
