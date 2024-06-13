# bbc
<div align="center">
    <img src="https://github.com/speakeasy-sdks/bbc-typescript/assets/6267663/32ff15d2-8153-4b69-8bc8-207479cb6563" width="300">
    <h1>Typescript SDK</h1>
   <p>The British Broadcating Corporation</p>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Bbc } from "github.com/speakeasy-sdks/bbc-typescript";

const bbc = new Bbc({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await bbc.feeds.listAvailability({});

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [schema](docs/sdks/schema/README.md)

* [getAPIs](docs/sdks/schema/README.md#getapis) - Get API definition
* [getXSD](docs/sdks/schema/README.md#getxsd) - Get Schema definition

### [feeds](docs/sdks/feeds/README.md)

* [listAvailability](docs/sdks/feeds/README.md#listavailability) - Discover details of on-demand availability for programmes and their versions
* [listBroadcasts](docs/sdks/feeds/README.md#listbroadcasts) - Build schedules and find metadata for TV and radio broadcasts
* [listGroups](docs/sdks/feeds/README.md#listgroups) - Find metadata for curated groups: seasons, collections, galleries or franchises
* [listImages](docs/sdks/feeds/README.md#listimages) - Find metadata for images
* [listItems](docs/sdks/feeds/README.md#listitems) - Look inside programmes to find segments: chapters, tracks and more
* [listMasterbrands](docs/sdks/feeds/README.md#listmasterbrands) - List all Master Brands
* [listPeople](docs/sdks/feeds/README.md#listpeople) - Find the people behind and in programmes: cast, crew, guests and more
* [listPips](docs/sdks/feeds/README.md#listpips) - Look inside pips entities
* [getProgramme](docs/sdks/feeds/README.md#getprogramme) - Exposes programme information for a single pid
* [listProgrammes](docs/sdks/feeds/README.md#listprogrammes) - Start here for programmes metadata: Brands, Series, Episodes and Clips
* [listPromotions](docs/sdks/feeds/README.md#listpromotions) - Discover metadata for content promotions
* [listSchedules](docs/sdks/feeds/README.md#listschedules) - Build schedules and find metadata for TV and radio broadcasts and webcasts
* [listServices](docs/sdks/feeds/README.md#listservices) - Information about the linear services used for broadcast transmissions
* [listVersions](docs/sdks/feeds/README.md#listversions) - Metadata on editorial programme versions: original, signed, audio-described, etc

### [raw](docs/sdks/raw/README.md)

* [getBrand](docs/sdks/raw/README.md#getbrand) - Get raw brand
* [getBrandFranchises](docs/sdks/raw/README.md#getbrandfranchises) - Get raw brand franchise
* [getEpisode](docs/sdks/raw/README.md#getepisode) - Get raw episode
* [getAncestors](docs/sdks/raw/README.md#getancestors) - Get raw ancestors
* [getFormats](docs/sdks/raw/README.md#getformats) - Get raw formats
* [getGenreGroups](docs/sdks/raw/README.md#getgenregroups) - Get raw genre groups
* [getImage](docs/sdks/raw/README.md#getimage) - Get raw image
* [getMasterBrand](docs/sdks/raw/README.md#getmasterbrand) - Get raw masterbrand
* [getPromotion](docs/sdks/raw/README.md#getpromotion) - Get raw promotion
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Bbc } from "github.com/speakeasy-sdks/bbc-typescript";
import * as errors from "github.com/speakeasy-sdks/bbc-typescript/models/errors";

const bbc = new Bbc({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    let result;
    try {
        result = await bbc.schema.getAPIs();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://programmes.api.bbc.com` | None |

```typescript
import { Bbc } from "github.com/speakeasy-sdks/bbc-typescript";

const bbc = new Bbc({
    serverIdx: 0,
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await bbc.schema.getAPIs();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Bbc } from "github.com/speakeasy-sdks/bbc-typescript";

const bbc = new Bbc({
    serverURL: "https://programmes.api.bbc.com",
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await bbc.schema.getAPIs();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Bbc } from "github.com/speakeasy-sdks/bbc-typescript";
import { HTTPClient } from "github.com/speakeasy-sdks/bbc-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Bbc({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Bbc } from "github.com/speakeasy-sdks/bbc-typescript";

const bbc = new Bbc({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await bbc.schema.getAPIs();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
