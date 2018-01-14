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

function selectattribute1(a) {
  var customer = [{ attr:"age", name: "Age"}, {attr:"job", name: "Job"}, {attr: "marital", name:"Marital"}, {attr: "education", name:"Education"} , {attr: "default", name:"Default"}, {attr: "housing", name:"Housing"}, {attr: "loan", name:"Loan"}];
  var campaign = [{attr: "contact", name:"Contact"}, {attr: "month", name:"Month"}, {attr: "day_of_week", name:"Day_of_week"}, {attr: "duration", name:"Duration"}, {attr: "campaign", name:"Campaign"}, {attr: "pdays", name:"Pdays"}, {attr: "previous", name:"Previous"}, {attr: "poutcome", name:"Poutcome"}];
  var social = [{attr: "emp.var.rate", name:"Emp.var.rate"}, {attr: "cons.price.idx", name:"Cons.price.idx"}, {attr: "cons.conf.idx", name:"Cons.conf.idx"}, {attr: "euribor3m", name:"Euribor3m"}, {attr: "nr.employed", name:"Nr.employed"}];
  $("#child1").empty();
  if (a.value == "customer") {
    $.each(customer, function(index, val) { 
      $("#child1").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });
  }
  else if (a.value == "campaign"){
   $.each(campaign, function(index, val) {
      $("#child1").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    }); 
  }
  else if (a.value == "social"){
   $.each(social, function(index, val) {
      $("#child1").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });  
  }
}
function selectattribute2(a) {
  var customer = [{ attr:"age", name: "Age"}, {attr:"job", name: "Job"}, {attr: "marital", name:"Marital"}, {attr: "education", name:"Education"} , {attr: "default", name:"Default"}, {attr: "housing", name:"Housing"}, {attr: "loan", name:"Loan"}];
  var campaign = [{attr: "contact", name:"Contact"}, {attr: "month", name:"Month"}, {attr: "day_of_week", name:"Day_of_week"}, {attr: "duration", name:"Duration"}, {attr: "campaign", name:"Campaign"}, {attr: "pdays", name:"Pdays"}, {attr: "previous", name:"Previous"}, {attr: "poutcome", name:"Poutcome"}];
  var social = [{attr: "emp.var.rate", name:"Emp.var.rate"}, {attr: "cons.price.idx", name:"Cons.price.idx"}, {attr: "cons.conf.idx", name:"Cons.conf.idx"}, {attr: "euribor3m", name:"Euribor3m"}, {attr: "nr.employed", name:"Nr.employed"}];
  $("#child2").empty();
  if (a.value == "customer") {
    $.each(customer, function(index, val) { 
      $("#child2").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });
  }
  else if (a.value == "campaign"){
   $.each(campaign, function(index, val) {
      $("#child2").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    }); 
  }
  else if (a.value == "social"){
   $.each(social, function(index, val) {
      $("#child2").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });  
  }
}
function selectattribute3(a) {
  var customer = [{ attr:"age", name: "Age"}, {attr:"job", name: "Job"}, {attr: "marital", name:"Marital"}, {attr: "education", name:"Education"} , {attr: "default", name:"Default"}, {attr: "housing", name:"Housing"}, {attr: "loan", name:"Loan"}];
  var campaign = [{attr: "contact", name:"Contact"}, {attr: "month", name:"Month"}, {attr: "day_of_week", name:"Day_of_week"}, {attr: "duration", name:"Duration"}, {attr: "campaign", name:"Campaign"}, {attr: "pdays", name:"Pdays"}, {attr: "previous", name:"Previous"}, {attr: "poutcome", name:"Poutcome"}];
  var social = [{attr: "emp.var.rate", name:"Emp.var.rate"}, {attr: "cons.price.idx", name:"Cons.price.idx"}, {attr: "cons.conf.idx", name:"Cons.conf.idx"}, {attr: "euribor3m", name:"Euribor3m"}, {attr: "nr.employed", name:"Nr.employed"}];
  $("#child3").empty();
  if (a.value == "customer") {
    $.each(customer, function(index, val) { 
      $("#child3").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });
  }
  else if (a.value == "campaign"){
   $.each(campaign, function(index, val) {
      $("#child3").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    }); 
  }
  else if (a.value == "social"){
   $.each(social, function(index, val) {
      $("#child3").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });  
  }
}
function selectattribute4(a) {
  var customer = [{ attr:"age", name: "Age"}, {attr:"job", name: "Job"}, {attr: "marital", name:"Marital"}, {attr: "education", name:"Education"} , {attr: "default", name:"Default"}, {attr: "housing", name:"Housing"}, {attr: "loan", name:"Loan"}];
  var campaign = [{attr: "contact", name:"Contact"}, {attr: "month", name:"Month"}, {attr: "day_of_week", name:"Day_of_week"}, {attr: "duration", name:"Duration"}, {attr: "campaign", name:"Campaign"}, {attr: "pdays", name:"Pdays"}, {attr: "previous", name:"Previous"}, {attr: "poutcome", name:"Poutcome"}];
  var social = [{attr: "emp.var.rate", name:"Emp.var.rate"}, {attr: "cons.price.idx", name:"Cons.price.idx"}, {attr: "cons.conf.idx", name:"Cons.conf.idx"}, {attr: "euribor3m", name:"Euribor3m"}, {attr: "nr.employed", name:"Nr.employed"}];
  $("#child4").empty();
  if (a.value == "customer") {
    $.each(customer, function(index, val) { 
      $("#child4").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });
  }
  else if (a.value == "campaign"){
   $.each(campaign, function(index, val) {
      $("#child4").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    }); 
  }
  else if (a.value == "social"){
   $.each(social, function(index, val) {
      $("#child4").append("<option value='" + val.attr + "'>" + val.name + "</option>")
    });  
  }
}