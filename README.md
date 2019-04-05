# Sonnets API

A simple api for fetching Shakespeare's sonnets.

Online at https://sonnets-api.now.sh

## Endpoints:

#### `/api/sonnets/toc`

Returns a "table of contents" of all sonnets:

```
[
   {
   "number": 1,
   "firstLine": "From fairest creatures we desire increase,",
   "title": "1: From fairest creatures we desire increase,"
   },
   {
   "number": 2,
   "firstLine": "When forty winters shall besiege thy brow,",
   "title": "2: When forty winters shall besiege thy brow,"
   },
   ...
]
```
