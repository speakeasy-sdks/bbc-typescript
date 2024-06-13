# ListPromotionsRequest


## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mixin`                                                                                                | [operations.ListPromotionsQueryParamMixin](../../models/operations/listpromotionsqueryparammixin.md)[] | :heavy_minus_sign:                                                                                     | Mixins:<br/>* related_links: mixin to return information about related links to a promotion<br/>       |
| `context`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | filter for subset of promotions belonging to a given context                                           |
| `page`                                                                                                 | *number*                                                                                               | :heavy_minus_sign:                                                                                     | which page of results to return                                                                        |
| `pageSize`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | number of results in each page                                                                         |
| `partnerId`                                                                                            | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | filter for promotions by partner ID                                                                    |
| `partnerPid`                                                                                           | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | filter for promotions by partner PID                                                                   |
| `pid`                                                                                                  | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | filter for subset of promotions having given PID                                                       |
| `promotedBy`                                                                                           | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | filter for subset of promotions having given promoted by                                               |
| `promotedFor`                                                                                          | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | filter for subset of promotions having given promoted for                                              |
| `q`                                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)         |
| `status`                                                                                               | [operations.Status](../../models/operations/status.md)[]                                               | :heavy_minus_sign:                                                                                     | filter for subset of promotions with status                                                            |