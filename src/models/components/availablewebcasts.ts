/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AvailableVersionsElement, AvailableVersionsElement$ } from "./availableversionselement";
import * as z from "zod";

export type AvailableWebcasts = {
    available: number;
    availableVersionsElement: AvailableVersionsElement;
};

/** @internal */
export namespace AvailableWebcasts$ {
    export const inboundSchema: z.ZodType<AvailableWebcasts, z.ZodTypeDef, unknown> = z
        .object({
            available: z.number().int(),
            available_versions_element: AvailableVersionsElement$.inboundSchema,
        })
        .transform((v) => {
            return {
                available: v.available,
                availableVersionsElement: v.available_versions_element,
            };
        });

    export type Outbound = {
        available: number;
        available_versions_element: AvailableVersionsElement$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AvailableWebcasts> = z
        .object({
            available: z.number().int(),
            availableVersionsElement: AvailableVersionsElement$.outboundSchema,
        })
        .transform((v) => {
            return {
                available: v.available,
                available_versions_element: v.availableVersionsElement,
            };
        });
}