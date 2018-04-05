// Script 3


//var svg = d3.select("svg"),
//    width = +svg.attr("width"),
//    height = +svg.attr("height"),
//    radius = Math.min(width, height) / 2,
//    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
//
//var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
//
//var pie = d3.pie()
//    .sort(null)
//    .value(function(d) { return d.number; });
//
//var path = d3.arc()
//    .outerRadius(radius - 10)
//    .innerRadius(0);
//
//var label = d3.arc()
//    .outerRadius(radius - 60)
//    .innerRadius(radius - 60);
//
//d3.csv("../data/pienationdata.csv", function(d) {
//    d.number = +d.number;
//    return d;
//}, function(error, data) {
//    if (error) throw error;
//
//    var arc = g.selectAll(".arc")
//    .data(pie(data))
//    .enter().append("g")
//    .attr("class", "arc");
//
//    arc.append("path")
//      .attr("d", path)
//      .attr("fill", function(d) { return color(d.data.year); });
//
//    arc.append("text")
//      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
//      .attr("dy", "0.35em")
//      .text(function(d) { return d.data.year; });
//});


var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "National Education Distribution",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieInnerRadius": "38%",
		"pieOuterRadius": "89%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Nursery",
				"value": 5013351,
				"color": "#9ad8e9"
			},
			{
				"label": "Kindergarten",
				"value": 4221320,
				"color": "#c880a9"
			},
			{
				"label": "Grade 1-4",
				"value": 16511632,
				"color": "#5adaa8"
			},
			{
				"label": "Grade 5-8",
				"value": 16675078,
				"color": "#f3e742"
			},
			{
				"label": "High School",
				"value": 17176546,
				"color": "#b6da61"
			},
			{
				"label": "Undergraduate",
				"value": 19291233,
				"color": "#a587dc"
			},
			{
				"label": "Graduate",
				"value": 4165602,
				"color": "#e98125"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"style": "straight"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
        "load": {
            "effect": "none"
        },
		"pullOutSegmentOnClick": {
			"effect": "none",
			"speed": 400,
			"size": 8
		}
	}
});