// Hàm kiểm tra xem bộ 3 giá trị này có trong json data không nếu có thì tăng size
// VD nam 15 tuổi nghề nghiệp công nhân có trong json thì tăng size
function kiemTraTonTaiVaTangSize3(valFirst, valSecond, valThird, json) {
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


// Hàm để tăng size bộ giá trị json, bằng cách xét bộ 3 dữ liệu trong data có trong json hay không
function tangSize3(json, data, firstAttr, secondAttr, thirdAttr, y) {
    $.each(data, function(index, value) {
        // Chỉ xét những dòng trả lời là no
        if (value.y == y) {
            kiemTraTonTaiVaTangSize3(value[firstAttr], value[secondAttr], value[thirdAttr], json);
        }
    });
}

// Hàm chuyển dữ liệu CSV thành JSON
function chuyenCSVThanhJSON3(data, firstAttr, secondAttr, thirdAttr, y) {
    // Tạo 3 mảng đại diện cho 3 cột dữ liệu
    // Các mảng sẽ chứa các giá trị duy nhất của cột dữ liệu
    // Ví dụ cột giới tính thì chỉ có giá trị là Nam và Nữ
    firstAttrArray = [];
    secondAttrArray = [];
    thirdAttrArray = [];

    // Kiểm tra xem các giá trị có thể được đưa vào mảng không
    // Ví dụ trong mảng đã có Nam rồi thì không được thêm Nam vào nữa , chỉ được thêm Nữ hoặc khác vào
    // Làm tương tự như vậy cho cả 3 mảng đại diện cho 3 cột của bộ dữ liệu
    kiemTraCoTheThemVaoMang(firstAttrArray, data, firstAttr);
    kiemTraCoTheThemVaoMang(secondAttrArray, data, secondAttr);
    kiemTraCoTheThemVaoMang(thirdAttrArray, data, thirdAttr);

    // Cấu trúc JSON để thực hiện Treemap gồm tên của node và các con của nó
    var JSON_Data = {
        name: y,
        children: []
    }

    // Chạy 3 vòng lập để tạo thành cấu trúc JSON, giống tree
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

    // Hàm này để tăng size ví dụ: Tuôi 35, giới tính nam, nghề nghiệp công nhân 
    // Có 5 dòng như vậy trong bộ dữ liệu thì size bẳng 5
    tangSize3(JSON_Data, data, firstAttr, secondAttr, thirdAttr, y);

    // Trả về dữ liệu JSON
    return JSON_Data;
}

function treemap3(attr1, attr2, attr3, y) {
    $("#svg").empty();
    $("#circlePacking").removeClass("btn-primary").addClass("btn-default");
    $("#treemap").removeClass("btn-default").addClass("btn-primary");

    // Đặt kích thước cho svg
    var width = 1320;
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

    // Bắt đầu lấy dữ liệu từ file csv
    d3.csv("csv/bank-additional.csv", function(data) {
        if (attr1 == "age" || attr2 == "age" || attr3 == "age") {
          thayDoiNhomTuoi(data);
        }

        if (attr1 == "duration" || attr2 == "duration" || attr3 == "duration") {
          thayDoiDoDaiCuocGoi(data);
        }

        // Đưa dữ liệu csv vào hàm chuyenCSVThanhJSON để lấy ra dữ liệu kiểu JSON
        // 3 thuộc tính đó lên tên của cột trong bộ dữ liệu
        var JSON_Data = chuyenCSVThanhJSON3(data, attr1, attr2, attr3, y);
        console.log("Json Data: ");
        console.log(JSON_Data);

        var root = d3.hierarchy(JSON_Data)
            .eachBefore(function(d) { d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name; })
            .sum(function(d) { return d.size; })
            .sort(function(a, b) { return b.height - a.height || b.value - a.value; });

        treemap(root);

        console.log("Root: ");
        console.log(root);

        console.log("Root leaves: ");
        console.log(root.leaves());
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
            .data(function(d) { return (d.data.name + " - " + d.data.size).split(/(?=[A-Z][^A-Z])/g); })
            .enter().append("tspan")
            .attr("x", 4)
            .attr("y", function(d, i) { return 13 + i * 10; })
            .text(function(d) { return d; });

        cell.append("title")
            .text(function(d) { return d.data.id + "\n" + format(d.value); });
    });
}

function circlePacking3(attr1, attr2, attr3, y) {
    $("#svg").empty();
    $("#treemap").removeClass("btn-primary").addClass("btn-default");
    $("#circlePacking").removeClass("btn-default").addClass("btn-primary");

    var width = 960;
    var height = 960;

    var color = d3.scaleSequential(d3.interpolateMagma)
        .domain([-4, 4]);

    // Thêm svg
    var svg = d3.select("#svg").append("svg")
        .attr("width", width)
        .attr("height", height),
        diameter = +svg.attr("width"),
        g = svg.append("g").attr("transform", "translate(2,2)"),
        format = d3.format(",d");

    var pack = d3.pack()
        .size([diameter - 4, diameter - 4]);

    d3.csv("csv/bank-additional.csv", function(data) {
        console.log("Dữ liệu csv: ");
        console.log(data);
        if (attr1 == "age" || attr2 == "age" || attr3 == "age") {
          thayDoiNhomTuoi(data);
        }

        if (attr1 == "duration" || attr2 == "duration" || attr3 == "duration") {
          thayDoiDoDaiCuocGoi(data);
        }
        

        // Đưa dữ liệu csv vào hàm chuyenCSVThanhJSON để lấy ra dữ liệu kiểu JSON
        // 3 thuộc tính đó lên tên của cột trong bộ dữ liệu
        var JSON_Data = chuyenCSVThanhJSON3(data, attr1, attr2, attr3, y);
        console.log("Json Data: ");
        console.log(JSON_Data);

        root = d3.hierarchy(JSON_Data)
            .sum(function(d) { return d.size; })
            .sort(function(a, b) { return b.value - a.value; });

        var node = g.selectAll(".node")
            .data(pack(root).descendants())
            .enter().append("g")
            .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
            .text(function(d) { return d.data.name + "\n" + format(d.value); });

        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) { return color(d.depth); });

        node.filter(function(d) { return !d.children; }).append("text")
            .attr("dy", "0.3em")
            .text(function(d) { return d.data.name.substring(0, d.r / 3); });
    });
}



//background-image: url('/images/treemapBackGround.jpg'); background-size:cover;