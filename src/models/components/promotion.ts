/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Context, Context$ } from "./context";
import { Identifiers, Identifiers$ } from "./identifiers";
import { PromotionOf, PromotionOf$ } from "./promotionof";
import { RelatedLinks, RelatedLinks$ } from "./relatedlinks";
import { Synopses, Synopses$ } from "./synopses";
import * as z from "zod";

export type Promotion = {
    context?: Context | undefined;
    endTime?: Date | undefined;
    identifiers?: Identifiers | undefined;
    partner: string;
    pid: string;
    priority?: number | undefined;
    promotedBy?: string | undefined;
    promotedFor?: string | undefined;
    promotionOf?: PromotionOf | undefined;
    relatedLinks?: RelatedLinks | undefined;
    startTime?: Date | undefined;
    status?: string | undefined;
    synopses?: Synopses | undefined;
    title?: string | undefined;
    updatedTime: Date;
    uri?: string | undefined;
    url?: string | undefined;
};

/** @internal */
export namespace Promotion$ {
    export const inboundSchema: z.ZodType<Promotion, z.ZodTypeDef, unknown> = z
        .object({
            context: Context$.inboundSchema.optional(),
            end_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            identifiers: Identifiers$.inboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            priority: z.number().int().optional(),
            promoted_by: z.string().optional(),
            promoted_for: z.string().optional(),
            promotion_of: PromotionOf$.inboundSchema.optional(),
            related_links: RelatedLinks$.inboundSchema.optional(),
            start_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            status: z.string().optional(),
            synopses: Synopses$.inboundSchema.optional(),
            title: z.string().optional(),
            updated_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            uri: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                ...(v.end_time === undefined ? null : { endTime: v.end_time }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                partner: v.partner,
                pid: v.pid,
                ...(v.priority === undefined ? null : { priority: v.priority }),
                ...(v.promoted_by === undefined ? null : { promotedBy: v.promoted_by }),
                ...(v.promoted_for === undefined ? null : { promotedFor: v.promoted_for }),
                ...(v.promotion_of === undefined ? null : { promotionOf: v.promotion_of }),
                ...(v.related_links === undefined ? null : { relatedLinks: v.related_links }),
                ...(v.start_time === undefined ? null : { startTime: v.start_time }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                updatedTime: v.updated_time,
                ...(v.uri === undefined ? null : { uri: v.uri }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        context?: Context$.Outbound | undefined;
        end_time?: string | undefined;
        identifiers?: Identifiers$.Outbound | undefined;
        partner: string;
        pid: string;
        priority?: number | undefined;
        promoted_by?: string | undefined;
        promoted_for?: string | undefined;
        promotion_of?: PromotionOf$.Outbound | undefined;
        related_links?: RelatedLinks$.Outbound | undefined;
        start_time?: string | undefined;
        status?: string | undefined;
        synopses?: Synopses$.Outbound | undefined;
        title?: string | undefined;
        updated_time: string;
        uri?: string | undefined;
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Promotion> = z
        .object({
            context: Context$.outboundSchema.optional(),
            endTime: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            identifiers: Identifiers$.outboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            priority: z.number().int().optional(),
            promotedBy: z.string().optional(),
            promotedFor: z.string().optional(),
            promotionOf: PromotionOf$.outboundSchema.optional(),
            relatedLinks: RelatedLinks$.outboundSchema.optional(),
            startTime: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            status: z.string().optional(),
            synopses: Synopses$.outboundSchema.optional(),
            title: z.string().optional(),
            updatedTime: z.date().transform((v) => v.toISOString()),
            uri: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                ...(v.endTime === undefined ? null : { end_time: v.endTime }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                partner: v.partner,
                pid: v.pid,
                ...(v.priority === undefined ? null : { priority: v.priority }),
                ...(v.promotedBy === undefined ? null : { promoted_by: v.promotedBy }),
                ...(v.promotedFor === undefined ? null : { promoted_for: v.promotedFor }),
                ...(v.promotionOf === undefined ? null : { promotion_of: v.promotionOf }),
                ...(v.relatedLinks === undefined ? null : { related_links: v.relatedLinks }),
                ...(v.startTime === undefined ? null : { start_time: v.startTime }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                updated_time: v.updatedTime,
                ...(v.uri === undefined ? null : { uri: v.uri }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}