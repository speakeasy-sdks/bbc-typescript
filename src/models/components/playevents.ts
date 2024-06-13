/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PlayEvent, PlayEvent$ } from "./playevent";
import * as z from "zod";

export type PlayEvents = {
    playEvent?: Array<PlayEvent> | undefined;
};

/** @internal */
export namespace PlayEvents$ {
    export const inboundSchema: z.ZodType<PlayEvents, z.ZodTypeDef, unknown> = z
        .object({
            play_event: z.array(PlayEvent$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.play_event === undefined ? null : { playEvent: v.play_event }),
            };
        });

    export type Outbound = {
        play_event?: Array<PlayEvent$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlayEvents> = z
        .object({
            playEvent: z.array(PlayEvent$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.playEvent === undefined ? null : { play_event: v.playEvent }),
            };
        });
}