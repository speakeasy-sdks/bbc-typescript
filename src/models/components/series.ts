/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AlternateImagesMixin, AlternateImagesMixin$ } from "./alternateimagesmixin";
import { Ancestors, Ancestors$ } from "./ancestors";
import { AncestorsTitles, AncestorsTitles$ } from "./ancestorstitles";
import { AncestorTitles, AncestorTitles$ } from "./ancestortitles";
import { AvailabilityMixin, AvailabilityMixin$ } from "./availabilitymixin";
import { ContributionsMixin, ContributionsMixin$ } from "./contributionsmixin";
import { Embargoed, Embargoed$ } from "./embargoed";
import { GenreGroupings, GenreGroupings$ } from "./genregroupings";
import { Identifiers, Identifiers$ } from "./identifiers";
import { ImageLink, ImageLink$ } from "./imagelink";
import { ImagesMixin, ImagesMixin$ } from "./imagesmixin";
import { ItemsFor, ItemsFor$ } from "./itemsfor";
import { MasterBrandLink, MasterBrandLink$ } from "./masterbrandlink";
import { PreviousNextMixin, PreviousNextMixin$ } from "./previousnextmixin";
import { ProgrammeFormats, ProgrammeFormats$ } from "./programmeformats";
import { ProgrammeType, ProgrammeType$ } from "./programmetype";
import { RelatedLinks, RelatedLinks$ } from "./relatedlinks";
import { ReleaseDateGroup, ReleaseDateGroup$ } from "./releasedategroup";
import { SeriesOf, SeriesOf$ } from "./seriesof";
import { Synopses, Synopses$ } from "./synopses";
import * as z from "zod";

export type Series = {
    alternateImagesMixin?: AlternateImagesMixin | undefined;
    ancestorTitles?: AncestorTitles | undefined;
    ancestors?: Ancestors | undefined;
    ancestorsTitles?: AncestorsTitles | undefined;
    availabilityMixin?: AvailabilityMixin | undefined;
    contributionsMixin?: ContributionsMixin | undefined;
    embargoed: Embargoed;
    expectedChildCount?: number | undefined;
    genreGroupings?: GenreGroupings | undefined;
    identifiers?: Identifiers | undefined;
    imageLink?: ImageLink | undefined;
    imagesMixin?: ImagesMixin | undefined;
    isEmbeddable?: boolean | undefined;
    itemsFor?: ItemsFor | undefined;
    masterBrandLink?: MasterBrandLink | undefined;
    partner: string;
    pid: string;
    previousNextMixin?: PreviousNextMixin | undefined;
    programmeFormats?: ProgrammeFormats | undefined;
    programmeType?: ProgrammeType | undefined;
    relatedLinks?: RelatedLinks | undefined;
    releaseDateGroup?: ReleaseDateGroup | undefined;
    seriesOf?: SeriesOf | undefined;
    synopses?: Synopses | undefined;
    title?: string | undefined;
    updatedTime: Date;
    uri?: string | undefined;
};

/** @internal */
export namespace Series$ {
    export const inboundSchema: z.ZodType<Series, z.ZodTypeDef, unknown> = z
        .object({
            alternate_images_mixin: AlternateImagesMixin$.inboundSchema.optional(),
            ancestor_titles: AncestorTitles$.inboundSchema.optional(),
            ancestors: Ancestors$.inboundSchema.optional(),
            ancestors_titles: AncestorsTitles$.inboundSchema.optional(),
            availability_mixin: AvailabilityMixin$.inboundSchema.optional(),
            contributions_mixin: ContributionsMixin$.inboundSchema.optional(),
            embargoed: Embargoed$.inboundSchema,
            expected_child_count: z.number().int().optional(),
            genre_groupings: GenreGroupings$.inboundSchema.optional(),
            identifiers: Identifiers$.inboundSchema.optional(),
            image_link: ImageLink$.inboundSchema.optional(),
            images_mixin: ImagesMixin$.inboundSchema.optional(),
            is_embeddable: z.boolean().optional(),
            items_for: ItemsFor$.inboundSchema.optional(),
            master_brand_link: MasterBrandLink$.inboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            previous_next_mixin: PreviousNextMixin$.inboundSchema.optional(),
            programme_formats: ProgrammeFormats$.inboundSchema.optional(),
            programme_type: ProgrammeType$.inboundSchema.optional(),
            related_links: RelatedLinks$.inboundSchema.optional(),
            release_date_group: ReleaseDateGroup$.inboundSchema.optional(),
            series_of: SeriesOf$.inboundSchema.optional(),
            synopses: Synopses$.inboundSchema.optional(),
            title: z.string().optional(),
            updated_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            uri: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alternate_images_mixin === undefined
                    ? null
                    : { alternateImagesMixin: v.alternate_images_mixin }),
                ...(v.ancestor_titles === undefined ? null : { ancestorTitles: v.ancestor_titles }),
                ...(v.ancestors === undefined ? null : { ancestors: v.ancestors }),
                ...(v.ancestors_titles === undefined
                    ? null
                    : { ancestorsTitles: v.ancestors_titles }),
                ...(v.availability_mixin === undefined
                    ? null
                    : { availabilityMixin: v.availability_mixin }),
                ...(v.contributions_mixin === undefined
                    ? null
                    : { contributionsMixin: v.contributions_mixin }),
                embargoed: v.embargoed,
                ...(v.expected_child_count === undefined
                    ? null
                    : { expectedChildCount: v.expected_child_count }),
                ...(v.genre_groupings === undefined ? null : { genreGroupings: v.genre_groupings }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.image_link === undefined ? null : { imageLink: v.image_link }),
                ...(v.images_mixin === undefined ? null : { imagesMixin: v.images_mixin }),
                ...(v.is_embeddable === undefined ? null : { isEmbeddable: v.is_embeddable }),
                ...(v.items_for === undefined ? null : { itemsFor: v.items_for }),
                ...(v.master_brand_link === undefined
                    ? null
                    : { masterBrandLink: v.master_brand_link }),
                partner: v.partner,
                pid: v.pid,
                ...(v.previous_next_mixin === undefined
                    ? null
                    : { previousNextMixin: v.previous_next_mixin }),
                ...(v.programme_formats === undefined
                    ? null
                    : { programmeFormats: v.programme_formats }),
                ...(v.programme_type === undefined ? null : { programmeType: v.programme_type }),
                ...(v.related_links === undefined ? null : { relatedLinks: v.related_links }),
                ...(v.release_date_group === undefined
                    ? null
                    : { releaseDateGroup: v.release_date_group }),
                ...(v.series_of === undefined ? null : { seriesOf: v.series_of }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                updatedTime: v.updated_time,
                ...(v.uri === undefined ? null : { uri: v.uri }),
            };
        });

    export type Outbound = {
        alternate_images_mixin?: AlternateImagesMixin$.Outbound | undefined;
        ancestor_titles?: AncestorTitles$.Outbound | undefined;
        ancestors?: Ancestors$.Outbound | undefined;
        ancestors_titles?: AncestorsTitles$.Outbound | undefined;
        availability_mixin?: AvailabilityMixin$.Outbound | undefined;
        contributions_mixin?: ContributionsMixin$.Outbound | undefined;
        embargoed: string;
        expected_child_count?: number | undefined;
        genre_groupings?: GenreGroupings$.Outbound | undefined;
        identifiers?: Identifiers$.Outbound | undefined;
        image_link?: ImageLink$.Outbound | undefined;
        images_mixin?: ImagesMixin$.Outbound | undefined;
        is_embeddable?: boolean | undefined;
        items_for?: ItemsFor$.Outbound | undefined;
        master_brand_link?: MasterBrandLink$.Outbound | undefined;
        partner: string;
        pid: string;
        previous_next_mixin?: PreviousNextMixin$.Outbound | undefined;
        programme_formats?: ProgrammeFormats$.Outbound | undefined;
        programme_type?: ProgrammeType$.Outbound | undefined;
        related_links?: RelatedLinks$.Outbound | undefined;
        release_date_group?: ReleaseDateGroup$.Outbound | undefined;
        series_of?: SeriesOf$.Outbound | undefined;
        synopses?: Synopses$.Outbound | undefined;
        title?: string | undefined;
        updated_time: string;
        uri?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Series> = z
        .object({
            alternateImagesMixin: AlternateImagesMixin$.outboundSchema.optional(),
            ancestorTitles: AncestorTitles$.outboundSchema.optional(),
            ancestors: Ancestors$.outboundSchema.optional(),
            ancestorsTitles: AncestorsTitles$.outboundSchema.optional(),
            availabilityMixin: AvailabilityMixin$.outboundSchema.optional(),
            contributionsMixin: ContributionsMixin$.outboundSchema.optional(),
            embargoed: Embargoed$.outboundSchema,
            expectedChildCount: z.number().int().optional(),
            genreGroupings: GenreGroupings$.outboundSchema.optional(),
            identifiers: Identifiers$.outboundSchema.optional(),
            imageLink: ImageLink$.outboundSchema.optional(),
            imagesMixin: ImagesMixin$.outboundSchema.optional(),
            isEmbeddable: z.boolean().optional(),
            itemsFor: ItemsFor$.outboundSchema.optional(),
            masterBrandLink: MasterBrandLink$.outboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            previousNextMixin: PreviousNextMixin$.outboundSchema.optional(),
            programmeFormats: ProgrammeFormats$.outboundSchema.optional(),
            programmeType: ProgrammeType$.outboundSchema.optional(),
            relatedLinks: RelatedLinks$.outboundSchema.optional(),
            releaseDateGroup: ReleaseDateGroup$.outboundSchema.optional(),
            seriesOf: SeriesOf$.outboundSchema.optional(),
            synopses: Synopses$.outboundSchema.optional(),
            title: z.string().optional(),
            updatedTime: z.date().transform((v) => v.toISOString()),
            uri: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.alternateImagesMixin === undefined
                    ? null
                    : { alternate_images_mixin: v.alternateImagesMixin }),
                ...(v.ancestorTitles === undefined ? null : { ancestor_titles: v.ancestorTitles }),
                ...(v.ancestors === undefined ? null : { ancestors: v.ancestors }),
                ...(v.ancestorsTitles === undefined
                    ? null
                    : { ancestors_titles: v.ancestorsTitles }),
                ...(v.availabilityMixin === undefined
                    ? null
                    : { availability_mixin: v.availabilityMixin }),
                ...(v.contributionsMixin === undefined
                    ? null
                    : { contributions_mixin: v.contributionsMixin }),
                embargoed: v.embargoed,
                ...(v.expectedChildCount === undefined
                    ? null
                    : { expected_child_count: v.expectedChildCount }),
                ...(v.genreGroupings === undefined ? null : { genre_groupings: v.genreGroupings }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.imageLink === undefined ? null : { image_link: v.imageLink }),
                ...(v.imagesMixin === undefined ? null : { images_mixin: v.imagesMixin }),
                ...(v.isEmbeddable === undefined ? null : { is_embeddable: v.isEmbeddable }),
                ...(v.itemsFor === undefined ? null : { items_for: v.itemsFor }),
                ...(v.masterBrandLink === undefined
                    ? null
                    : { master_brand_link: v.masterBrandLink }),
                partner: v.partner,
                pid: v.pid,
                ...(v.previousNextMixin === undefined
                    ? null
                    : { previous_next_mixin: v.previousNextMixin }),
                ...(v.programmeFormats === undefined
                    ? null
                    : { programme_formats: v.programmeFormats }),
                ...(v.programmeType === undefined ? null : { programme_type: v.programmeType }),
                ...(v.relatedLinks === undefined ? null : { related_links: v.relatedLinks }),
                ...(v.releaseDateGroup === undefined
                    ? null
                    : { release_date_group: v.releaseDateGroup }),
                ...(v.seriesOf === undefined ? null : { series_of: v.seriesOf }),
                ...(v.synopses === undefined ? null : { synopses: v.synopses }),
                ...(v.title === undefined ? null : { title: v.title }),
                updated_time: v.updatedTime,
                ...(v.uri === undefined ? null : { uri: v.uri }),
            };
        });
}