/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccurateProgrammeTime, AccurateProgrammeTime$ } from "./accurateprogrammetime";
import { AncestorsTitles, AncestorsTitles$ } from "./ancestorstitles";
import { AncestorTitles, AncestorTitles$ } from "./ancestortitles";
import { Identifiers, Identifiers$ } from "./identifiers";
import { Ids, Ids$ } from "./ids";
import { ImageLink, ImageLink$ } from "./imagelink";
import { ImagesMixin, ImagesMixin$ } from "./imagesmixin";
import { MediaAvailabilityTime, MediaAvailabilityTime$ } from "./mediaavailabilitytime";
import {
    ScheduledPublicationRights,
    ScheduledPublicationRights$,
} from "./scheduledpublicationrights";
import { ScheduledTime, ScheduledTime$ } from "./scheduledtime";
import { ServiceReference, ServiceReference$ } from "./servicereference";
import { WindowOf, WindowOf$ } from "./windowof";
import * as z from "zod";

export type Window = {
    accurateProgrammeTime?: AccurateProgrammeTime | undefined;
    ancestorTitles?: AncestorTitles | undefined;
    ancestorsTitles?: AncestorsTitles | undefined;
    identifiers?: Identifiers | undefined;
    ids?: Ids | undefined;
    imageLink?: ImageLink | undefined;
    imagesMixin?: ImagesMixin | undefined;
    mediaAvailabilityTime?: MediaAvailabilityTime | undefined;
    partner: string;
    pid: string;
    scheduledPublicationRights?: ScheduledPublicationRights | undefined;
    scheduledTime?: ScheduledTime | undefined;
    service?: ServiceReference | undefined;
    updatedTime?: Date | undefined;
    windowOf?: Array<WindowOf> | undefined;
};

/** @internal */
export namespace Window$ {
    export const inboundSchema: z.ZodType<Window, z.ZodTypeDef, unknown> = z
        .object({
            accurate_programme_time: AccurateProgrammeTime$.inboundSchema.optional(),
            ancestor_titles: AncestorTitles$.inboundSchema.optional(),
            ancestors_titles: AncestorsTitles$.inboundSchema.optional(),
            identifiers: Identifiers$.inboundSchema.optional(),
            ids: Ids$.inboundSchema.optional(),
            image_link: ImageLink$.inboundSchema.optional(),
            images_mixin: ImagesMixin$.inboundSchema.optional(),
            media_availability_time: MediaAvailabilityTime$.inboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            scheduled_publication_rights: ScheduledPublicationRights$.inboundSchema.optional(),
            scheduled_time: ScheduledTime$.inboundSchema.optional(),
            service: ServiceReference$.inboundSchema.optional(),
            updated_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            window_of: z.array(WindowOf$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accurate_programme_time === undefined
                    ? null
                    : { accurateProgrammeTime: v.accurate_programme_time }),
                ...(v.ancestor_titles === undefined ? null : { ancestorTitles: v.ancestor_titles }),
                ...(v.ancestors_titles === undefined
                    ? null
                    : { ancestorsTitles: v.ancestors_titles }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.image_link === undefined ? null : { imageLink: v.image_link }),
                ...(v.images_mixin === undefined ? null : { imagesMixin: v.images_mixin }),
                ...(v.media_availability_time === undefined
                    ? null
                    : { mediaAvailabilityTime: v.media_availability_time }),
                partner: v.partner,
                pid: v.pid,
                ...(v.scheduled_publication_rights === undefined
                    ? null
                    : { scheduledPublicationRights: v.scheduled_publication_rights }),
                ...(v.scheduled_time === undefined ? null : { scheduledTime: v.scheduled_time }),
                ...(v.service === undefined ? null : { service: v.service }),
                ...(v.updated_time === undefined ? null : { updatedTime: v.updated_time }),
                ...(v.window_of === undefined ? null : { windowOf: v.window_of }),
            };
        });

    export type Outbound = {
        accurate_programme_time?: AccurateProgrammeTime$.Outbound | undefined;
        ancestor_titles?: AncestorTitles$.Outbound | undefined;
        ancestors_titles?: AncestorsTitles$.Outbound | undefined;
        identifiers?: Identifiers$.Outbound | undefined;
        ids?: Ids$.Outbound | undefined;
        image_link?: ImageLink$.Outbound | undefined;
        images_mixin?: ImagesMixin$.Outbound | undefined;
        media_availability_time?: MediaAvailabilityTime$.Outbound | undefined;
        partner: string;
        pid: string;
        scheduled_publication_rights?: ScheduledPublicationRights$.Outbound | undefined;
        scheduled_time?: ScheduledTime$.Outbound | undefined;
        service?: ServiceReference$.Outbound | undefined;
        updated_time?: string | undefined;
        window_of?: Array<WindowOf$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Window> = z
        .object({
            accurateProgrammeTime: AccurateProgrammeTime$.outboundSchema.optional(),
            ancestorTitles: AncestorTitles$.outboundSchema.optional(),
            ancestorsTitles: AncestorsTitles$.outboundSchema.optional(),
            identifiers: Identifiers$.outboundSchema.optional(),
            ids: Ids$.outboundSchema.optional(),
            imageLink: ImageLink$.outboundSchema.optional(),
            imagesMixin: ImagesMixin$.outboundSchema.optional(),
            mediaAvailabilityTime: MediaAvailabilityTime$.outboundSchema.optional(),
            partner: z.string(),
            pid: z.string(),
            scheduledPublicationRights: ScheduledPublicationRights$.outboundSchema.optional(),
            scheduledTime: ScheduledTime$.outboundSchema.optional(),
            service: ServiceReference$.outboundSchema.optional(),
            updatedTime: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            windowOf: z.array(WindowOf$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accurateProgrammeTime === undefined
                    ? null
                    : { accurate_programme_time: v.accurateProgrammeTime }),
                ...(v.ancestorTitles === undefined ? null : { ancestor_titles: v.ancestorTitles }),
                ...(v.ancestorsTitles === undefined
                    ? null
                    : { ancestors_titles: v.ancestorsTitles }),
                ...(v.identifiers === undefined ? null : { identifiers: v.identifiers }),
                ...(v.ids === undefined ? null : { ids: v.ids }),
                ...(v.imageLink === undefined ? null : { image_link: v.imageLink }),
                ...(v.imagesMixin === undefined ? null : { images_mixin: v.imagesMixin }),
                ...(v.mediaAvailabilityTime === undefined
                    ? null
                    : { media_availability_time: v.mediaAvailabilityTime }),
                partner: v.partner,
                pid: v.pid,
                ...(v.scheduledPublicationRights === undefined
                    ? null
                    : { scheduled_publication_rights: v.scheduledPublicationRights }),
                ...(v.scheduledTime === undefined ? null : { scheduled_time: v.scheduledTime }),
                ...(v.service === undefined ? null : { service: v.service }),
                ...(v.updatedTime === undefined ? null : { updated_time: v.updatedTime }),
                ...(v.windowOf === undefined ? null : { window_of: v.windowOf }),
            };
        });
}
