<!-- Start SDK Example Usage [usage] -->
```typescript
import { Bbc } from "bbc";

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
<!-- End SDK Example Usage [usage] -->