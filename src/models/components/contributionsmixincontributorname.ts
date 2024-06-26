/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ContributionsMixinContributorNameName = {
    family?: string | undefined;
    given?: string | undefined;
    presentation?: string | undefined;
    title?: string | undefined;
};

export type Name = {
    family?: string | undefined;
    given?: string | undefined;
    name: ContributionsMixinContributorNameName;
    presentation?: string | undefined;
    title?: string | undefined;
};

export type ContributionsMixinContributorName = {
    name: Name;
};

/** @internal */
export namespace ContributionsMixinContributorNameName$ {
    export const inboundSchema: z.ZodType<
        ContributionsMixinContributorNameName,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            family: z.string().optional(),
            given: z.string().optional(),
            presentation: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.family === undefined ? null : { family: v.family }),
                ...(v.given === undefined ? null : { given: v.given }),
                ...(v.presentation === undefined ? null : { presentation: v.presentation }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        family?: string | undefined;
        given?: string | undefined;
        presentation?: string | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ContributionsMixinContributorNameName
    > = z
        .object({
            family: z.string().optional(),
            given: z.string().optional(),
            presentation: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.family === undefined ? null : { family: v.family }),
                ...(v.given === undefined ? null : { given: v.given }),
                ...(v.presentation === undefined ? null : { presentation: v.presentation }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace Name$ {
    export const inboundSchema: z.ZodType<Name, z.ZodTypeDef, unknown> = z
        .object({
            family: z.string().optional(),
            given: z.string().optional(),
            name: z.lazy(() => ContributionsMixinContributorNameName$.inboundSchema),
            presentation: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.family === undefined ? null : { family: v.family }),
                ...(v.given === undefined ? null : { given: v.given }),
                name: v.name,
                ...(v.presentation === undefined ? null : { presentation: v.presentation }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        family?: string | undefined;
        given?: string | undefined;
        name: ContributionsMixinContributorNameName$.Outbound;
        presentation?: string | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Name> = z
        .object({
            family: z.string().optional(),
            given: z.string().optional(),
            name: z.lazy(() => ContributionsMixinContributorNameName$.outboundSchema),
            presentation: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.family === undefined ? null : { family: v.family }),
                ...(v.given === undefined ? null : { given: v.given }),
                name: v.name,
                ...(v.presentation === undefined ? null : { presentation: v.presentation }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace ContributionsMixinContributorName$ {
    export const inboundSchema: z.ZodType<
        ContributionsMixinContributorName,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            name: z.lazy(() => Name$.inboundSchema),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });

    export type Outbound = {
        name: Name$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ContributionsMixinContributorName
    > = z
        .object({
            name: z.lazy(() => Name$.outboundSchema),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });
}
