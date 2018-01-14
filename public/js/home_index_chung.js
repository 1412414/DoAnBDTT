// Kiểm tra xem các giá trị cột attr trong data có thể đưa vào array hay không
// Thêm vào được khi trong array không chứa giá trị này
// VD: cột tuổi trong data
// giá trị là 30 và đã tồn tại trong bảng array thì không thêm vào
// Giá trị là 15 chưa tồn tại trong bảng array thì được thêm vào
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