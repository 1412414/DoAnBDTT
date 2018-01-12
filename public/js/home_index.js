function kiemTraCoTheThemVaoMang(array, data, attr) {
  $.each(data, function(index, value) {
    var canAdd = 1;

    $.each(array, function(index2, value2) {
      if (value[attr] == value2) {
        canAdd = 0;
      }
    });

    if (canAdd == 1) {
      array.push(value[attr]);
    }
  });
}

function kiemTraTonTaiVaTangSize(valFirst, valSecond, valThird, json) {
  $.each(json.children, function(indexFirst, valueFirst) {

    if (valueFirst.name == valFirst) {
      $.each(valueFirst.children, function(indexSecond, valueSecond) {
        if (valueSecond.name == valSecond) {
          $.each(valueSecond.children, function(indexThird, valueThird) {
            if (valueThird.name == valThird) {
              valueThird.size += 1;
            }
          });
        }
      });
    }
  });
}

function tangSize(json, data, firstAttr, secondAttr, thirdAttr) {
  $.each(data, function(index, value) {
    console.log(value[firstAttr] + " " + value[secondAttr] + " " + value[thirdAttr]);
    kiemTraTonTaiVaTangSize(value[firstAttr], value[secondAttr], value[thirdAttr], json);
  });
}

function chuyenCSVThanhJSON(data, firstAttr, secondAttr, thirdAttr) {
  firstAttrArray = [];
  secondAttrArray = [];
  thirdAttrArray = [];

  kiemTraCoTheThemVaoMang(firstAttrArray, data, firstAttr);
  kiemTraCoTheThemVaoMang(secondAttrArray, data, secondAttr);
  kiemTraCoTheThemVaoMang(thirdAttrArray, data, thirdAttr);

  console.log(firstAttrArray);
  console.log(secondAttrArray);
  console.log(thirdAttrArray);

  var JSON_Data = {
    name: "no",
    children: []
  }

  $.each(firstAttrArray, function(index1, value1) {
    var node1 = {
      name: value1,
      children: []
    }

    $.each(secondAttrArray, function(index2, value2) {
      var node2 = {
        name: value2,
        children: []
      }

      $.each(thirdAttrArray, function(index3, value3) {
        var node3 = {
          name: value3,
          size: 0
        }

        node2.children.push(node3);
      });

      node1.children.push(node2);
    });

    JSON_Data.children.push(node1);
  });

  tangSize(JSON_Data, data, firstAttr, secondAttr, thirdAttr);

  return JSON_Data;
}

// Đặt kích thước cho svg
var width = 1200;
var height = 800;

// Thêm svg
var svg = d3.select("#svg").append("svg")
            .attr("width", width)
            .attr("height", height);

// Tạo treemap
var fader = function(color) { return d3.interpolateRgb(color, "#fff")(0.2); },
    color = d3.scaleOrdinal(d3.schemeCategory20.map(fader)),
    format = d3.format(",d");

var treemap = d3.treemap()
    .tile(d3.treemapResquarify)
    .size([width, height])
    .round(true)
    .paddingInner(1);

d3.csv("csv/bank-additional-100.csv", function(data) {
  var JSON_Data = chuyenCSVThanhJSON(data, "education", "job", "marital");
  console.log(JSON_Data);

  var root = d3.hierarchy(JSON_Data)
      .eachBefore(function(d) { d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name; })
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.height - a.height || b.value - a.value; });

  treemap(root);

  var cell = svg.selectAll("g")
    .data(root.leaves())
    .enter().append("g")
    .attr("transform", function(d) { return "translate(" + d.x0 + "," + d.y0 + ")"; });

    cell.append("rect")
      .attr("id", function(d) { return d.data.id; })
      .attr("width", function(d) { return d.x1 - d.x0; })
      .attr("height", function(d) { return d.y1 - d.y0; })
      .attr("fill", function(d) { return color(d.parent.data.id) });

  cell.append("clipPath")
      .attr("id", function(d) { return "clip-" + d.data.id; })
    .append("use")
      .attr("xlink:href", function(d) { return "#" + d.data.id; });

  cell.append("text")
      .attr("clip-path", function(d) { return "url(#clip-" + d.data.id + ")"; })
    .selectAll("tspan")
      .data(function(d) { return d.data.name.split(/(?=[A-Z][^A-Z])/g); })
    .enter().append("tspan")
      .attr("x", 4)
      .attr("y", function(d, i) { return 13 + i * 10; })
      .text(function(d) { return d; });

  cell.append("title")
      .text(function(d) { return d.data.id + "\n" + format(d.value); });
});
