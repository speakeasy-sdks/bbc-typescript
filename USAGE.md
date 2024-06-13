<!-- Start SDK Example Usage [usage] -->
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