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
 * * pid: sort by pid, descending
 *
 */
export enum ListItemsQueryParamSort {
    Pid = "pid",
}

/**
 * Sort direction
 */
export enum ListItemsQueryParamSortDirection {
    Descending = "descending",
}

export enum ListItemsQueryParamMixin {
    Contributions = "contributions",
    Images = "images",
    Offset = "offset",
    PlayEvent = "play_event",
}

export enum ItemType {
    Chapter = "chapter",
    Highlight = "highlight",
    Music = "music",
    Speech = "speech",
    Other = "other",
}

export type ListItemsRequest = {
    /**
     * Sorts:
     *
     * @remarks
     * * pid: sort by pid, descending
     *
     */
    sort?: ListItemsQueryParamSort | undefined;
    /**
     * Sort direction
     */
    sortDirection?: ListItemsQueryParamSortDirection | undefined;
    /**
     * Mixins:
     *
     * @remarks
     * * contributions: mixin to return information about contributors to items
     * * images: mixin to add image information for an item
     * * offset: mixin to return programme segment offsets, works in conjunction with programme filter
     * * play_event: mixin to return programme segment events, works in conjunction with programme or segment_event filters
     *
     */
    mixin?: Array<ListItemsQueryParamMixin> | undefined;
    /**
     * filter for subset of items that have an ID issued by the given authority
     */
    authority?: string | undefined;
    /**
     * filter for subset of items having given ID
     */
    id?: Array<string> | undefined;
    /**
     * filter for subset of items that have given an ID of the given type
     */
    idType?: string | undefined;
    /**
     * filter for specific type(s) of items
     */
    itemType?: Array<ItemType> | undefined;
    /**
     * which page of results to return
     */
    page?: number | undefined;
    /**
     * number of results in each page
     */
    pageSize?: number | undefined;
    /**
     * filter for items by partner ID
     */
    partnerId?: Array<string> | undefined;
    /**
     * filter for items by partner PID
     */
    partnerPid?: Array<string> | undefined;
    /**
     * filter for subset of items that have specified person involved
     */
    people?: string | undefined;
    /**
     * filter for subset of items matching one of the given PIDs
     */
    pid?: Array<string> | undefined;
    /**
     * filter for subset of items that are part of the given programme
     */
    programme?: string | undefined;
    /**
     * filter for subset of items matching supplied keyword/phrase (boolean operators permitted)
     */
    q?: string | undefined;
    /**
     * filter for item with the given segment_event
     */
    segmentEvent?: string | undefined;
};

export type ListItemsResponse = {
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
export namespace ListItemsQueryParamSort$ {
    export const inboundSchema = z.nativeEnum(ListItemsQueryParamSort);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListItemsQueryParamSortDirection$ {
    export const inboundSchema = z.nativeEnum(ListItemsQueryParamSortDirection);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListItemsQueryParamMixin$ {
    export const inboundSchema = z.nativeEnum(ListItemsQueryParamMixin);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ItemType$ {
    export const inboundSchema = z.nativeEnum(ItemType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListItemsRequest$ {
    export const inboundSchema: z.ZodType<ListItemsRequest, z.ZodTypeDef, unknown> = z
        .object({
            sort: ListItemsQueryParamSort$.inboundSchema.optional(),
            sort_direction: ListItemsQueryParamSortDirection$.inboundSchema.optional(),
            mixin: z.array(ListItemsQueryParamMixin$.inboundSchema).optional(),
            authority: z.string().optional(),
            id: z.array(z.string()).optional(),
            id_type: z.string().optional(),
            item_type: z.array(ItemType$.inboundSchema).optional(),
            page: z.number().int().default(1),
            page_size: z.number().int().default(10),
            partner_id: z.array(z.string()).optional(),
            partner_pid: z.array(z.string()).optional(),
            people: z.string().optional(),
            pid: z.array(z.string()).optional(),
            programme: z.string().optional(),
            q: z.string().optional(),
            segment_event: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.sort_direction === undefined ? null : { sortDirection: v.sort_direction }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
                ...(v.authority === undefined ? null : { authority: v.authority }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.id_type === undefined ? null : { idType: v.id_type }),
                ...(v.item_type === undefined ? null : { itemType: v.item_type }),
                page: v.page,
                pageSize: v.page_size,
                ...(v.partner_id === undefined ? null : { partnerId: v.partner_id }),
                ...(v.partner_pid === undefined ? null : { partnerPid: v.partner_pid }),
                ...(v.people === undefined ? null : { people: v.people }),
                ...(v.pid === undefined ? null : { pid: v.pid }),
                ...(v.programme === undefined ? null : { programme: v.programme }),
                ...(v.q === undefined ? null : { q: v.q }),
                ...(v.segment_event === undefined ? null : { segmentEvent: v.segment_event }),
            };
        });

    export type Outbound = {
        sort?: string | undefined;
        sort_direction?: string | undefined;
        mixin?: Array<string> | undefined;
        authority?: string | undefined;
        id?: Array<string> | undefined;
        id_type?: string | undefined;
        item_type?: Array<string> | undefined;
        page: number;
        page_size: number;
        partner_id?: Array<string> | undefined;
        partner_pid?: Array<string> | undefined;
        people?: string | undefined;
        pid?: Array<string> | undefined;
        programme?: string | undefined;
        q?: string | undefined;
        segment_event?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListItemsRequest> = z
        .object({
            sort: ListItemsQueryParamSort$.outboundSchema.optional(),
            sortDirection: ListItemsQueryParamSortDirection$.outboundSchema.optional(),
            mixin: z.array(ListItemsQueryParamMixin$.outboundSchema).optional(),
            authority: z.string().optional(),
            id: z.array(z.string()).optional(),
            idType: z.string().optional(),
            itemType: z.array(ItemType$.outboundSchema).optional(),
            page: z.number().int().default(1),
            pageSize: z.number().int().default(10),
            partnerId: z.array(z.string()).optional(),
            partnerPid: z.array(z.string()).optional(),
            people: z.string().optional(),
            pid: z.array(z.string()).optional(),
            programme: z.string().optional(),
            q: z.string().optional(),
            segmentEvent: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.sortDirection === undefined ? null : { sort_direction: v.sortDirection }),
                ...(v.mixin === undefined ? null : { mixin: v.mixin }),
                ...(v.authority === undefined ? null : { authority: v.authority }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.idType === undefined ? null : { id_type: v.idType }),
                ...(v.itemType === undefined ? null : { item_type: v.itemType }),
                page: v.page,
                page_size: v.pageSize,
                ...(v.partnerId === undefined ? null : { partner_id: v.partnerId }),
                ...(v.partnerPid === undefined ? null : { partner_pid: v.partnerPid }),
                ...(v.people === undefined ? null : { people: v.people }),
                ...(v.pid === undefined ? null : { pid: v.pid }),
                ...(v.programme === undefined ? null : { programme: v.programme }),
                ...(v.q === undefined ? null : { q: v.q }),
                ...(v.segmentEvent === undefined ? null : { segment_event: v.segmentEvent }),
            };
        });
}

/** @internal */
export namespace ListItemsResponse$ {
    export const inboundSchema: z.ZodType<ListItemsResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListItemsResponse> = z
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
