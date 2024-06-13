/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AncestorTitlesBrand = {
    pid: string;
    title?: string | undefined;
};

export type AncestorTitlesEpisodeBrand = {
    pid: string;
    title?: string | undefined;
};

export type AncestorTitlesEpisodeEpisode = {
    containersTitle?: string | undefined;
    pid: string;
    presentationTitle?: string | undefined;
    title?: string | undefined;
};

export type AncestorTitlesEpisodeSeries = {
    pid: string;
    title?: string | undefined;
};

export type AncestorTitlesEpisode = {
    brand?: AncestorTitlesEpisodeBrand | undefined;
    containersTitle?: string | undefined;
    episode?: AncestorTitlesEpisodeEpisode | undefined;
    pid: string;
    presentationTitle?: string | undefined;
    series?: Array<AncestorTitlesEpisodeSeries> | undefined;
    title?: string | undefined;
};

export type AncestorTitlesSeries = {
    pid: string;
    title?: string | undefined;
};

export type AncestorTitles = {
    brand?: AncestorTitlesBrand | undefined;
    episode?: AncestorTitlesEpisode | undefined;
    series?: Array<AncestorTitlesSeries> | undefined;
};

/** @internal */
export namespace AncestorTitlesBrand$ {
    export const inboundSchema: z.ZodType<AncestorTitlesBrand, z.ZodTypeDef, unknown> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        pid: string;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AncestorTitlesBrand> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace AncestorTitlesEpisodeBrand$ {
    export const inboundSchema: z.ZodType<AncestorTitlesEpisodeBrand, z.ZodTypeDef, unknown> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        pid: string;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AncestorTitlesEpisodeBrand> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace AncestorTitlesEpisodeEpisode$ {
    export const inboundSchema: z.ZodType<AncestorTitlesEpisodeEpisode, z.ZodTypeDef, unknown> = z
        .object({
            containers_title: z.string().optional(),
            pid: z.string(),
            presentation_title: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.containers_title === undefined
                    ? null
                    : { containersTitle: v.containers_title }),
                pid: v.pid,
                ...(v.presentation_title === undefined
                    ? null
                    : { presentationTitle: v.presentation_title }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        containers_title?: string | undefined;
        pid: string;
        presentation_title?: string | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AncestorTitlesEpisodeEpisode> = z
        .object({
            containersTitle: z.string().optional(),
            pid: z.string(),
            presentationTitle: z.string().optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.containersTitle === undefined
                    ? null
                    : { containers_title: v.containersTitle }),
                pid: v.pid,
                ...(v.presentationTitle === undefined
                    ? null
                    : { presentation_title: v.presentationTitle }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace AncestorTitlesEpisodeSeries$ {
    export const inboundSchema: z.ZodType<AncestorTitlesEpisodeSeries, z.ZodTypeDef, unknown> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        pid: string;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AncestorTitlesEpisodeSeries> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace AncestorTitlesEpisode$ {
    export const inboundSchema: z.ZodType<AncestorTitlesEpisode, z.ZodTypeDef, unknown> = z
        .object({
            brand: z.lazy(() => AncestorTitlesEpisodeBrand$.inboundSchema).optional(),
            containers_title: z.string().optional(),
            episode: z.lazy(() => AncestorTitlesEpisodeEpisode$.inboundSchema).optional(),
            pid: z.string(),
            presentation_title: z.string().optional(),
            series: z.array(z.lazy(() => AncestorTitlesEpisodeSeries$.inboundSchema)).optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.brand === undefined ? null : { brand: v.brand }),
                ...(v.containers_title === undefined
                    ? null
                    : { containersTitle: v.containers_title }),
                ...(v.episode === undefined ? null : { episode: v.episode }),
                pid: v.pid,
                ...(v.presentation_title === undefined
                    ? null
                    : { presentationTitle: v.presentation_title }),
                ...(v.series === undefined ? null : { series: v.series }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        brand?: AncestorTitlesEpisodeBrand$.Outbound | undefined;
        containers_title?: string | undefined;
        episode?: AncestorTitlesEpisodeEpisode$.Outbound | undefined;
        pid: string;
        presentation_title?: string | undefined;
        series?: Array<AncestorTitlesEpisodeSeries$.Outbound> | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AncestorTitlesEpisode> = z
        .object({
            brand: z.lazy(() => AncestorTitlesEpisodeBrand$.outboundSchema).optional(),
            containersTitle: z.string().optional(),
            episode: z.lazy(() => AncestorTitlesEpisodeEpisode$.outboundSchema).optional(),
            pid: z.string(),
            presentationTitle: z.string().optional(),
            series: z.array(z.lazy(() => AncestorTitlesEpisodeSeries$.outboundSchema)).optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.brand === undefined ? null : { brand: v.brand }),
                ...(v.containersTitle === undefined
                    ? null
                    : { containers_title: v.containersTitle }),
                ...(v.episode === undefined ? null : { episode: v.episode }),
                pid: v.pid,
                ...(v.presentationTitle === undefined
                    ? null
                    : { presentation_title: v.presentationTitle }),
                ...(v.series === undefined ? null : { series: v.series }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace AncestorTitlesSeries$ {
    export const inboundSchema: z.ZodType<AncestorTitlesSeries, z.ZodTypeDef, unknown> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        pid: string;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AncestorTitlesSeries> = z
        .object({
            pid: z.string(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                pid: v.pid,
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace AncestorTitles$ {
    export const inboundSchema: z.ZodType<AncestorTitles, z.ZodTypeDef, unknown> = z
        .object({
            brand: z.lazy(() => AncestorTitlesBrand$.inboundSchema).optional(),
            episode: z.lazy(() => AncestorTitlesEpisode$.inboundSchema).optional(),
            series: z.array(z.lazy(() => AncestorTitlesSeries$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.brand === undefined ? null : { brand: v.brand }),
                ...(v.episode === undefined ? null : { episode: v.episode }),
                ...(v.series === undefined ? null : { series: v.series }),
            };
        });

    export type Outbound = {
        brand?: AncestorTitlesBrand$.Outbound | undefined;
        episode?: AncestorTitlesEpisode$.Outbound | undefined;
        series?: Array<AncestorTitlesSeries$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AncestorTitles> = z
        .object({
            brand: z.lazy(() => AncestorTitlesBrand$.outboundSchema).optional(),
            episode: z.lazy(() => AncestorTitlesEpisode$.outboundSchema).optional(),
            series: z.array(z.lazy(() => AncestorTitlesSeries$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.brand === undefined ? null : { brand: v.brand }),
                ...(v.episode === undefined ? null : { episode: v.episode }),
                ...(v.series === undefined ? null : { series: v.series }),
            };
        });
}
