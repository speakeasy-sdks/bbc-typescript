# ListProgrammesQueryParamSort

Sorts:
* group_position: sort numerically by position in group, ascending
* pid: sort alphabetically by PID, descending
* position: sort numerically by position, ascending
* promotion: sort by promotion rank, ascending
* release_date: sort chronologically by release date, descending
* relevance: sort by weighting of search term (use with q parameter)
* scheduled_start: sort chronologically by scheduled start time/date, ascending
* strict_title: sort alphabetically by title, ascending
* title: sort by title librarian style (ignoring leading 'The', 'A', etc), ascending
* tree: sort by root pid and then preorder tree sort. Requires entities to have release date.



## Values

| Name             | Value            |
| ---------------- | ---------------- |
| `GroupPosition`  | group_position   |
| `Pid`            | pid              |
| `Position`       | position         |
| `Promotion`      | promotion        |
| `ReleaseDate`    | release_date     |
| `Relevance`      | relevance        |
| `ScheduledStart` | scheduled_start  |
| `StrictTitle`    | strict_title     |
| `Title`          | title            |
| `Tree`           | tree             |