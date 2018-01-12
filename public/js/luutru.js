function hamLamSachDuLieu(data, firstAttr, secondAttr, thirdAttr) {
  $.each(data, function(index1, value1) {
    value1.size = 1;

    $.each(data, function(index2, value2) {
      if (index1 != index2) {
        if (value2[firstAttr] == value1[firstAttr]
          && value2[secondAttr] == value1[secondAttr]
          && value2[thirdAttr] == value1[thirdAttr]) {
            data.splice(index2, 1);
            value1.size += 1;
          }
      }

      console.log(data.length);
      return index2 < data.length - 1;
    });

      return index1 < data.length - 1;
  });
}

// Hàm chuyển dữ liệu csv thành dữ liệu JSON
function chuyenCSVThanhJSON(data, firstAttr, secondAttr, thirdAttr) {
  console.log(data);

  var JSON_Data = {
    name: "No",
    children: []
  };

  // Tạo bậc 1
  $.each(data, function(firstNodeIndex, firstNodeValue) {
    if (firstNodeValue.y == 'no') {
      var firstNode = {};
      firstNode.name = firstNodeValue[firstAttr];
      firstNode.children  = [];

      // Tạo bậc 2
      $.each(data, function(secondNodeIndex, secondNodeValue) {
        if (firstNodeValue.y == 'no') {
          var secondNode = {};
          secondNode.name = secondNodeValue[secondAttr];
          secondNode.children = [];

          $.each(data, function(thirdNodeIndex, thirdNodeValue) {
            if (firstNodeValue.y == 'no') {
              var thirdNode = {};
              thirdNode.name = thirdNodeValue[thirdAttr];
              thirdNode.size = thirdNodeValue.size;

              secondNode.children.push(thirdNode);
            }

            return thirdNodeIndex < 10;
          });

          firstNode.children.push(secondNode);
        }

        return secondNodeIndex < 10;
      });

      JSON_Data.children.push(firstNode);
    }

    return firstNodeIndex < 10;
  });

  console.log("Dữ liệu JSON: ");
  console.log(JSON_Data);

  return JSON_Data;
}
