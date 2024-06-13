/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import * as components from "../components";
import * as z from "zod";

/**
 * Sorts:
 *
 * @remarks
 * * pid: sort alphabetically by PID
 *
 */
export enum ListGroupsQueryParamSort {
    Pid = "pid",
}

/**
 * Sort direction
 */
export enum ListGroupsQueryParamSortDirection {
    Descending = "descending",
}

export enum QueryParamMixin {
    AlternateImages = "alternate_images",
    GroupFor = "group_for",
    Images = "images",
    RelatedLinks = "related_links",
}

export enum GroupType {
    Collection = "collection",
    Franchise = "franchise",
    Gallery = "gallery",
    Season = "season",
}

/**
 * Control return of embargoed items (undocumented)
 */
export enum Embargoed {
    Include = "include",
    Exclude = "exclude",
    Only = "only",
}

export type ListGroupsRequest = {
    /**
     * Sorts:
     *
     * @remarks
     * * pid: sort alphabetically by PID
     *
     */
    sort?: ListGroupsQueryParamSort | undefined;
    /**
     * Sort direction
     */
    sortDirection?: ListGroupsQueryParamSortDirection | undefined;
    /**
     * Mixins:
     *
     * @remarks
     * * alternate_images: mixin to return the alternate images for a group
     * * group_for: mixin to return links to programme entities that group belongs to
     * * images: mixin to add image information for a group
     * * related_links: mixin to return related links for the group
     *
     */
    mixin?: Array<QueryParamMixin> | undefined;
    /**
     * filter for groups related to given programme or its descendants
     */
    forDescendantsOf?: string | undefined;
    /**
     * filter for subset of groups directly related to a given programme
     */
    forProgramme?: string | undefined;
    /**
     * filter for subset of groups which belong to the given group pid
     */
    group?: string | undefined;
    /**
     * filter for subset of groups that have the given group type
     */
    groupType?: Array<GroupType> | undefined;
    /**
     * filter for subset of groups which contain an entity with the given pid as a member
     */
    member?: string | undefined;
    /**
     * which page of results to return
     */
    page?: number | undefined;
    /**
     * number of results in each page
     */
    pageSize?: number | undefined;
    /**
     * filter for groups by partner ID
     */
    partnerId?: Array<string> | undefined;
    /**
     * filter for groups by partner PID
     */
    partnerPid?: Array<string> | undefined;
    /**
     * filter for subset of seasons, collections, galleries or franchises having given PID
     */
    pid?: Array<string> | undefined;
    /**
     * filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)
     */
    q?: string | undefined;
    /**
     * Control return of embargoed items (undocumented)
     */
    embargoed?: Embargoed | undefined;
};

export type ListGroupsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Nitro response
     */
    nitro?: components.Nitro | undefined;
    body?: Uint8Array | string | undefined;
    /**
     * Unexpected error
     */
    errorModel?: components.ErrorModel | undefined;
};

/** @internal */
export namespace ListGroupsQueryParamSort$ {
    export const inboundSchema = z.nativeEnum(ListGroupsQueryParamSort);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListGroupsQueryParamSortDirection$ {
    export const inboundSchema = z.nativeEnum(ListGroupsQueryParamSortDirection);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace QueryParamMixin$ {
    export const inboundSchema = z.nativeEnum(QueryParamMixin);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GroupType$ {
    export const inboundSchema = z.nativeEnum(GroupType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Embargoed$ {
    export const inboundSchema = z.nativeEnum(Embargoed);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListGroupsRequest$ {
    export const inboundSchema: z.ZodType<ListGroupsRequest, z.ZodTypeDef, unknown> = z
        .object({
            sort: ListGroupsQueryParamSort$.inboundSchema.optional(),
            sort_direction: ListGroupsQueryParamSortDirection$.inboundSchema.optional(),
            mixin: z.array(QueryParamMixin$.inboundSchema).optional(),
            for_descendants_of: z.string().optional(),
            for_programme: z.string().optional(),
            group: z.string().optional(),
            group_type: z.array(GroupType$.inboundSchema).optional(),
            member: z.string().optional(),
            page: z.number().int().default(1),
            page_size: z.number().int().default(10),
            partner_id: z.array(z.string()).optional(),
            partner_pid: z.array(z.string()).optional(),
            pid: z.array(z.string()).optional(),
            q: z.string().optional(),
            embargoed: Embargoed$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.sort_direction === undefined ? null : { sortDirection: v.sort_direction }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
                ...(v.for_descendants_of === undefined
                    ? null
                    : { forDescendantsOf: v.for_descendants_of }),
                ...(v.for_programme === undefined ? null : { forProgramme: v.for_programme }),
                ...(v.group === undefined ? null : { group: v.group }),
                ...(v.group_type === undefined ? null : { groupType: v.group_type }),
                ...(v.member === undefined ? null : { member: v.member }),
                page: v.page,
                pageSize: v.page_size,
                ...(v.partner_id === undefined ? null : { partnerId: v.partner_id }),
                ...(v.partner_pid === undefined ? null : { partnerPid: v.partner_pid }),
                ...(v.pid === undefined ? null : { pid: v.pid }),
                ...(v.q === undefined ? null : { q: v.q }),
                ...(v.embargoed === undefined ? null : { embargoed: v.embargoed }),
            };
        });

    export type Outbound = {
        sort?: string | undefined;
        sort_direction?: string | undefined;
        mixin?: Array<string> | undefined;
        for_descendants_of?: string | undefined;
        for_programme?: string | undefined;
        group?: string | undefined;
        group_type?: Array<string> | undefined;
        member?: string | undefined;
        page: number;
        page_size: number;
        partner_id?: Array<string> | undefined;
        partner_pid?: Array<string> | undefined;
        pid?: Array<string> | undefined;
        q?: string | undefined;
        embargoed?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListGroupsRequest> = z
        .object({
            sort: ListGroupsQueryParamSort$.outboundSchema.optional(),
            sortDirection: ListGroupsQueryParamSortDirection$.outboundSchema.optional(),
            mixin: z.array(QueryParamMixin$.outboundSchema).optional(),
            forDescendantsOf: z.string().optional(),
            forProgramme: z.string().optional(),
            group: z.string().optional(),
            groupType: z.array(GroupType$.outboundSchema).optional(),
            member: z.string().optional(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(10),
            partnerId: z.array(z.string()).optional(),
            partnerPid: z.array(z.string()).optional(),
            pid: z.array(z.string()).optional(),
            q: z.string().optional(),
            embargoed: Embargoed$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.sortDirection === undefined ? null : { sort_direction: v.sortDirection }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
                ...(v.forDescendantsOf === undefined
                    ? null
                    : { for_descendants_of: v.forDescendantsOf }),
                ...(v.forProgramme === undefined ? null : { for_programme: v.forProgramme }),
                ...(v.group === undefined ? null : { group: v.group }),
                ...(v.groupType === undefined ? null : { group_type: v.groupType }),
                ...(v.member === undefined ? null : { member: v.member }),
                page: v.page,
                page_size: v.pageSize,
                ...(v.partnerId === undefined ? null : { partner_id: v.partnerId }),
                ...(v.partnerPid === undefined ? null : { partner_pid: v.partnerPid }),
                ...(v.pid === undefined ? null : { pid: v.pid }),
                ...(v.q === undefined ? null : { q: v.q }),
                ...(v.embargoed === undefined ? null : { embargoed: v.embargoed }),
            };
        });
}

/** @internal */
export namespace ListGroupsResponse$ {
    export const inboundSchema: z.ZodType<ListGroupsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            nitro: components.Nitro$.inboundSchema.optional(),
            Body: b64$.zodInbound.optional(),
            ErrorModel: components.ErrorModel$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.nitro === undefined ? null : { nitro: v.nitro }),
                ...(v.Body === undefined ? null : { body: v.Body }),
                ...(v.ErrorModel === undefined ? null : { errorModel: v.ErrorModel }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        nitro?: components.Nitro$.Outbound | undefined;
        Body?: Uint8Array | undefined;
        ErrorModel?: components.ErrorModel$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListGroupsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            nitro: components.Nitro$.outboundSchema.optional(),
            body: b64$.zodOutbound.optional(),
            errorModel: components.ErrorModel$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.nitro === undefined ? null : { nitro: v.nitro }),
                ...(v.body === undefined ? null : { Body: v.body }),
                ...(v.errorModel === undefined ? null : { ErrorModel: v.errorModel }),
            };
        });
}
