/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Detail = {
    errorcode?: string | undefined;
};

export type Fault = {
    detail?: Detail | undefined;
    faultString?: string | undefined;
};

export type ErrorModel = {
    fault?: Fault | undefined;
};

/** @internal */
export namespace Detail$ {
    export const inboundSchema: z.ZodType<Detail, z.ZodTypeDef, unknown> = z
        .object({
            errorcode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.errorcode === undefined ? null : { errorcode: v.errorcode }),
            };
        });

    export type Outbound = {
        errorcode?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Detail> = z
        .object({
            errorcode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.errorcode === undefined ? null : { errorcode: v.errorcode }),
            };
        });
}

/** @internal */
export namespace Fault$ {
    export const inboundSchema: z.ZodType<Fault, z.ZodTypeDef, unknown> = z
        .object({
            detail: z.lazy(() => Detail$.inboundSchema).optional(),
            faultString: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.detail === undefined ? null : { detail: v.detail }),
                ...(v.faultString === undefined ? null : { faultString: v.faultString }),
            };
        });

    export type Outbound = {
        detail?: Detail$.Outbound | undefined;
        faultString?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Fault> = z
        .object({
            detail: z.lazy(() => Detail$.outboundSchema).optional(),
            faultString: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.detail === undefined ? null : { detail: v.detail }),
                ...(v.faultString === undefined ? null : { faultString: v.faultString }),
            };
        });
}

/** @internal */
export namespace ErrorModel$ {
    export const inboundSchema: z.ZodType<ErrorModel, z.ZodTypeDef, unknown> = z
        .object({
            fault: z.lazy(() => Fault$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.fault === undefined ? null : { fault: v.fault }),
            };
        });

    export type Outbound = {
        fault?: Fault$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorModel> = z
        .object({
            fault: z.lazy(() => Fault$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.fault === undefined ? null : { fault: v.fault }),
            };
        });
}