module.exports = function(input_file, property, output_file){
	var fs = require("fs");

	var json = JSON.parse(fs.readFileSync(input_file, "utf-8"));

	json.features.forEach(feature => {
		delete feature.properties[property];
		return feature;
	});

	fs.writeFileSync(output_file, JSON.stringify(json));
}