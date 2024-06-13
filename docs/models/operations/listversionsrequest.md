# ListVersionsRequest


## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `availability`                                                                                                   | [operations.ListVersionsQueryParamAvailability](../../models/operations/listversionsqueryparamavailability.md)[] | :heavy_minus_sign:                                                                                               | filter for subset of versions that have availability                                                             |
| `descendantsOf`                                                                                                  | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | filter for subset of versions having given programme PID                                                         |
| `mediaSet`                                                                                                       | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | filter for subset of versions with availability in the given media set                                           |
| `page`                                                                                                           | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | which page of results to return                                                                                  |
| `pageSize`                                                                                                       | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | number of results in each page                                                                                   |
| `partnerId`                                                                                                      | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | filter for versions by partner ID                                                                                |
| `partnerPid`                                                                                                     | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | filter for versions by partner PID                                                                               |
| `paymentType`                                                                                                    | [operations.QueryParamPaymentType](../../models/operations/queryparampaymenttype.md)[]                           | :heavy_minus_sign:                                                                                               | filter for a subset of versions that are of the given payment_type                                               |
| `pid`                                                                                                            | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | filter for subset of versions having given PID                                                                   |
| `embargoed`                                                                                                      | [operations.ListVersionsQueryParamEmbargoed](../../models/operations/listversionsqueryparamembargoed.md)         | :heavy_minus_sign:                                                                                               | Control return of embargoed items (undocumented)                                                                 |