# strip-geojson-property
[![Build Status](https://travis-ci.org/HarryStevens/strip-geojson-property.svg?branch=master)](https://travis-ci.org/HarryStevens/strip-geojson-property) [![Coverage Status](https://coveralls.io/repos/github/HarryStevens/strip-geojson-property/badge.svg?branch=master)](https://coveralls.io/github/HarryStevens/strip-geojson-property?branch=master)

Remove any property from a set of GeoJSON features.

## Installation
```bash
 npm i strip-geojson-property -S
 ```

## Usage
```js
var strip = require("strip-geojson-property");
strip(input_geojson_file, property, output_geojson_file);
```

## Tests
```bash
npm test
```
