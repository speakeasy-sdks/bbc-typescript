/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Genre, Genre$ } from "./genre";
import * as z from "zod";

export type Genres = {
    genre?: Array<Genre> | undefined;
};

export type GenreGroup = {
    genres: Genres;
    id?: string | undefined;
    type?: string | undefined;
};

/** @internal */
export namespace Genres$ {
    export const inboundSchema: z.ZodType<Genres, z.ZodTypeDef, unknown> = z
        .object({
            genre: z.array(Genre$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.genre === undefined ? null : { genre: v.genre }),
            };
        });

    export type Outbound = {
        genre?: Array<Genre$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Genres> = z
        .object({
            genre: z.array(Genre$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.genre === undefined ? null : { genre: v.genre }),
            };
        });
}

/** @internal */
export namespace GenreGroup$ {
    export const inboundSchema: z.ZodType<GenreGroup, z.ZodTypeDef, unknown> = z
        .object({
            genres: z.lazy(() => Genres$.inboundSchema),
            id: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                genres: v.genres,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        genres: Genres$.Outbound;
        id?: string | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenreGroup> = z
        .object({
            genres: z.lazy(() => Genres$.outboundSchema),
            id: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                genres: v.genres,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}