/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Warning, Warning$ } from "./warning";
import { WarningText, WarningText$ } from "./warningtext";
import * as z from "zod";

export type Warnings = {
    warning?: Array<Warning> | undefined;
    warningText?: Array<WarningText> | undefined;
};

/** @internal */
export namespace Warnings$ {
    export const inboundSchema: z.ZodType<Warnings, z.ZodTypeDef, unknown> = z
        .object({
            warning: z.array(Warning$.inboundSchema).optional(),
            warning_text: z.array(WarningText$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.warning === undefined ? null : { warning: v.warning }),
                ...(v.warning_text === undefined ? null : { warningText: v.warning_text }),
            };
        });

    export type Outbound = {
        warning?: Array<Warning$.Outbound> | undefined;
        warning_text?: Array<WarningText$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Warnings> = z
        .object({
            warning: z.array(Warning$.outboundSchema).optional(),
            warningText: z.array(WarningText$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.warning === undefined ? null : { warning: v.warning }),
                ...(v.warningText === undefined ? null : { warning_text: v.warningText }),
            };
        });
}