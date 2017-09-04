var expect = require("chai").expect;
var strip_carto = require("../index");
var fs = require("fs");

describe("#strip_carto", function() {
    it("should remove the cartodb_id property from GeoJSON", function() {
        strip_carto("test/test.json", "cartodb_id", "test/stripped.geojson");
        var stripped = JSON.parse(fs.readFileSync("test/stripped.geojson"));
        var keys = Object.keys(stripped.features[0].properties);
        expect(keys.indexOf("cartodb_id")).to.equal(-1);
        // when it's done, delete the stripped file
        fs.unlink("test/stripped.geojson");
    });
});

