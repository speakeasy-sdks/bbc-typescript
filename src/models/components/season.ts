/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AlternateImagesMixin, AlternateImagesMixin$ } from "./alternateimagesmixin";
import { Embargoed, Embargoed$ } from "./embargoed";
import { ForProgrammes, ForProgrammes$ } from "./forprogrammes";
import { Identifiers, Identifiers$ } from "./identifiers";
import { Ids, Ids$ } from "./ids";
import { ImagesMixin, ImagesMixin$ } from "./imagesmixin";
import { MasterBrandLink, MasterBrandLink$ } from "./masterbrandlink";
import { RelatedLinks, RelatedLinks$ } from "./relatedlinks";
import { Scheduled, Scheduled$ } from "./scheduled";
import { Synopses, Synopses$ } from "./synopses";
import * as z from "zod";

export type Season = {
    alternateImagesMixin?: AlternateImagesMixin | undefined;
    embargoed: Embargoed;
    forProgrammes?: ForProgrammes | undefined;
    identifiers?: Identifiers | undefined;
    ids?: Ids | undefined;
    imagesMixin?: ImagesMixin | undefined;
    masterBrandLink?: MasterBrandLink | undefined;
    partner: string;
    pid: string;
    relatedLinks?: RelatedLinks | undefined;
    scheduled?: Scheduled | undefined;
    synopses?: Synopses | undefined;
    title?: string | undefined;
    updatedTime: Date;
    urlKey?: string | undefined;
};

/** @internal */
export namespace Season$ {
    export const inboundSchema: z.ZodType<Season, z.ZodTypeDef, unknown> = z
        .object({
            alternate_images_mixin: AlternateImagesMixin$.inboundSchema.optional(),
            embargoed: Embargoed$.inboundSchema,
            for_programmes: ForProgrammes$.inboundSchema.optional(),
            identifiers: Identifiers$.inboundSchema.optional(),
            ids: Ids$.inboundSchema.optional(),
            images_mixin: ImagesMixin$.inboundSchema.optional(),
            master_brand_link: MasterBrandLink$.inboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            related_links: RelatedLinks$.inboundSchema.optional(),
            scheduled: Scheduled$.inboundSchema.optional(),
            synopses: Synopses$.inboundSchema.optional(),
            title: z.string().optional(),
            updated_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            url_key: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alternate_images_mixin === undefined
                    ? null
                    : { alternateImagesMixin: v.alternate_images_mixin }),
                embargoed: v.embargoed,
                ...(v.for_programmes === undefined ? null : { forProgrammes: v.for_programmes }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.images_mixin === undefined ? null : { imagesMixin: v.images_mixin }),
                ...(v.master_brand_link === undefined
                    ? null
                    : { masterBrandLink: v.master_brand_link }),
                partner: v.partner,
                pid: v.pid,
                ...(v.related_links === undefined ? null : { relatedLinks: v.related_links }),
                ...(v.scheduled === undefined ? null : { scheduled: v.scheduled }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                updatedTime: v.updated_time,
                ...(v.url_key === undefined ? null : { urlKey: v.url_key }),
            };
        });

    export type Outbound = {
        alternate_images_mixin?: AlternateImagesMixin$.Outbound | undefined;
        embargoed: string;
        for_programmes?: ForProgrammes$.Outbound | undefined;
        identifiers?: Identifiers$.Outbound | undefined;
        ids?: Ids$.Outbound | undefined;
        images_mixin?: ImagesMixin$.Outbound | undefined;
        master_brand_link?: MasterBrandLink$.Outbound | undefined;
        partner: string;
        pid: string;
        related_links?: RelatedLinks$.Outbound | undefined;
        scheduled?: Scheduled$.Outbound | undefined;
        synopses?: Synopses$.Outbound | undefined;
        title?: string | undefined;
        updated_time: string;
        url_key?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Season> = z
        .object({
            alternateImagesMixin: AlternateImagesMixin$.outboundSchema.optional(),
            embargoed: Embargoed$.outboundSchema,
            forProgrammes: ForProgrammes$.outboundSchema.optional(),
            identifiers: Identifiers$.outboundSchema.optional(),
            ids: Ids$.outboundSchema.optional(),
            imagesMixin: ImagesMixin$.outboundSchema.optional(),
            masterBrandLink: MasterBrandLink$.outboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            relatedLinks: RelatedLinks$.outboundSchema.optional(),
            scheduled: Scheduled$.outboundSchema.optional(),
            synopses: Synopses$.outboundSchema.optional(),
            title: z.string().optional(),
            updatedTime: z.date().transform((v) => v.toISOString()),
            urlKey: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alternateImagesMixin === undefined
                    ? null
                    : { alternate_images_mixin: v.alternateImagesMixin }),
                embargoed: v.embargoed,
                ...(v.forProgrammes === undefined ? null : { for_programmes: v.forProgrammes }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.imagesMixin === undefined ? null : { images_mixin: v.imagesMixin }),
                ...(v.masterBrandLink === undefined
                    ? null
                    : { master_brand_link: v.masterBrandLink }),
                partner: v.partner,
                pid: v.pid,
                ...(v.relatedLinks === undefined ? null : { related_links: v.relatedLinks }),
                ...(v.scheduled === undefined ? null : { scheduled: v.scheduled }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                updated_time: v.updatedTime,
                ...(v.urlKey === undefined ? null : { url_key: v.urlKey }),
            };
        });
}
