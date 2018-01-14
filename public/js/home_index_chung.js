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

function appendAgeGroup() {
  $("appendAgeGroup").append("");
}

function selectattribute1(a) {
    var customer = [{ attr: "age", name: "Age" }, { attr: "job", name: "Job" }, { attr: "marital", name: "Marital" }, { attr: "education", name: "Education" }, { attr: "default", name: "Default" }, { attr: "housing", name: "Housing" }, { attr: "loan", name: "Loan" }];
    var campaign = [{ attr: "contact", name: "Contact" }, { attr: "month", name: "Month" }, { attr: "day_of_week", name: "Day_of_week" }, { attr: "duration", name: "Duration" }, { attr: "campaign", name: "Campaign" }, { attr: "pdays", name: "Pdays" }, { attr: "previous", name: "Previous" }, { attr: "poutcome", name: "Poutcome" }];
    var social = [{ attr: "emp.var.rate", name: "Emp.var.rate" }, { attr: "cons.price.idx", name: "Cons.price.idx" }, { attr: "cons.conf.idx", name: "Cons.conf.idx" }, { attr: "euribor3m", name: "Euribor3m" }, { attr: "nr.employed", name: "Nr.employed" }];
    $("#child1").empty();
    if (a.value == "customer") {
        $.each(customer, function(index, val) {
            $("#child1").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "campaign") {
        $.each(campaign, function(index, val) {
            $("#child1").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "social") {
        $.each(social, function(index, val) {
            $("#child1").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    }
}

function selectattribute2(a) {
    var customer = [{ attr: "age", name: "Age" }, { attr: "job", name: "Job" }, { attr: "marital", name: "Marital" }, { attr: "education", name: "Education" }, { attr: "default", name: "Default" }, { attr: "housing", name: "Housing" }, { attr: "loan", name: "Loan" }];
    var campaign = [{ attr: "contact", name: "Contact" }, { attr: "month", name: "Month" }, { attr: "day_of_week", name: "Day_of_week" }, { attr: "duration", name: "Duration" }, { attr: "campaign", name: "Campaign" }, { attr: "pdays", name: "Pdays" }, { attr: "previous", name: "Previous" }, { attr: "poutcome", name: "Poutcome" }];
    var social = [{ attr: "emp.var.rate", name: "Emp.var.rate" }, { attr: "cons.price.idx", name: "Cons.price.idx" }, { attr: "cons.conf.idx", name: "Cons.conf.idx" }, { attr: "euribor3m", name: "Euribor3m" }, { attr: "nr.employed", name: "Nr.employed" }];
    $("#child2").empty();
    if (a.value == "customer") {
        $.each(customer, function(index, val) {
            $("#child2").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "campaign") {
        $.each(campaign, function(index, val) {
            $("#child2").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "social") {
        $.each(social, function(index, val) {
            $("#child2").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    }
}

function selectattribute3(a) {
    var customer = [{ attr: "age", name: "Age" }, { attr: "job", name: "Job" }, { attr: "marital", name: "Marital" }, { attr: "education", name: "Education" }, { attr: "default", name: "Default" }, { attr: "housing", name: "Housing" }, { attr: "loan", name: "Loan" }];
    var campaign = [{ attr: "contact", name: "Contact" }, { attr: "month", name: "Month" }, { attr: "day_of_week", name: "Day_of_week" }, { attr: "duration", name: "Duration" }, { attr: "campaign", name: "Campaign" }, { attr: "pdays", name: "Pdays" }, { attr: "previous", name: "Previous" }, { attr: "poutcome", name: "Poutcome" }];
    var social = [{ attr: "emp.var.rate", name: "Emp.var.rate" }, { attr: "cons.price.idx", name: "Cons.price.idx" }, { attr: "cons.conf.idx", name: "Cons.conf.idx" }, { attr: "euribor3m", name: "Euribor3m" }, { attr: "nr.employed", name: "Nr.employed" }];
    $("#child3").empty();
    if (a.value == "customer") {
        $.each(customer, function(index, val) {
            $("#child3").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "campaign") {
        $.each(campaign, function(index, val) {
            $("#child3").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "social") {
        $.each(social, function(index, val) {
            $("#child3").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    }
}

function selectattribute4(a) {
    var customer = [{ attr: "age", name: "Age" }, { attr: "job", name: "Job" }, { attr: "marital", name: "Marital" }, { attr: "education", name: "Education" }, { attr: "default", name: "Default" }, { attr: "housing", name: "Housing" }, { attr: "loan", name: "Loan" }];
    var campaign = [{ attr: "contact", name: "Contact" }, { attr: "month", name: "Month" }, { attr: "day_of_week", name: "Day_of_week" }, { attr: "duration", name: "Duration" }, { attr: "campaign", name: "Campaign" }, { attr: "pdays", name: "Pdays" }, { attr: "previous", name: "Previous" }, { attr: "poutcome", name: "Poutcome" }];
    var social = [{ attr: "emp.var.rate", name: "Emp.var.rate" }, { attr: "cons.price.idx", name: "Cons.price.idx" }, { attr: "cons.conf.idx", name: "Cons.conf.idx" }, { attr: "euribor3m", name: "Euribor3m" }, { attr: "nr.employed", name: "Nr.employed" }];
    $("#child4").empty();
    if (a.value == "customer") {
        $.each(customer, function(index, val) {
            $("#child4").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "campaign") {
        $.each(campaign, function(index, val) {
            $("#child4").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    } else if (a.value == "social") {
        $.each(social, function(index, val) {
            $("#child4").append("<option value='" + val.attr + "'>" + val.name + "</option>")
        });
    }
}

function thayDoiNhomTuoi(data) {
  ageGroup1From = $("#ageGroup1From").val();
  ageGroup2From = $("#ageGroup2From").val();
  ageGroup3From = $("#ageGroup3From").val();
  ageGroup4From = $("#ageGroup4From").val();
  ageGroup1To = $("#ageGroup1To").val();
  ageGroup2To = $("#ageGroup2To").val();
  ageGroup3To = $("#ageGroup3To").val();
  ageGroup4To = $("#ageGroup4To").val();

  $.each(data, function(index, value) {
    if (parseInt(value.age) >= ageGroup1From && parseInt(value.age) <= ageGroup1To) {
      value.age = "age from " + ageGroup1From + " to " + ageGroup1To;
    } else {
      if (parseInt(value.age) >= ageGroup2From && parseInt(value.age) <= ageGroup2To) {
        value.age = "age from " + ageGroup2From + " to " + ageGroup2To;
      } else {
        if (parseInt(value.age) >= ageGroup3From && parseInt(value.age) <= ageGroup3To) {
            value.age = "age from " + ageGroup3From + " to " + ageGroup3To;
        } else {
          if (parseInt(value.age) >= ageGroup4From && parseInt(value.age) <= ageGroup4To) {
            value.age = "age from " + ageGroup4From + " to " + ageGroup4To;
          } else {
            value.age = "Unknown";
          }
        }
      }
    }
  })
}

function thayDoiDoDaiCuocGoi(data) {
  duration1From = $("#duration1From").val();
  duration2From = $("#duration2From").val();
  duration3From = $("#duration3From").val();
  duration4From = $("#duration4From").val();
  duration1To = $("#duration1To").val();
  duration2To = $("#duration2To").val();
  duration3To = $("#duration3To").val();
  duration4To = $("#duration4To").val();

  $.each(data, function(index, value) {
    if (parseInt(value.duration) >= duration1From && parseInt(value.duration) <= duration1To) {
      value.duration = "duration from " + duration1From + " to " + duration1To;
    } else {
      if (parseInt(value.duration) >= duration2From && parseInt(value.duration) <= duration2To) {
        value.duration = "duration from " + duration2From + " to " + duration2To;
      } else {
        if (parseInt(value.duration) >= duration3From && parseInt(value.duration) <= duration3To) {
            value.duration = "duration from " + duration3From + " to " + duration3To;
        } else {
          if (parseInt(value.duration) >= duration4From && parseInt(value.duration) <= duration4To) {
            value.duration = "duration from " + duration4From + " to " + duration4To;
          } else {
            value.duration = "Unknown";
          }
        }
      }
    }
  })
}

$(function() {
  $('#treemap3').click(function() {
      $('button').removeClass("btn-primary").addClass("btn-default");
      $('#treemap3').removeClass("btn-default").addClass("btn-primary");
      treemap3($("#child1").val(), $("#child2").val(), $("#child3").val(), $("input[name='y']:checked").val());
  });

  $('#circlePacking3').click(function() {
      $('button').removeClass("btn-primary").addClass("btn-default");
      $('#circlePacking3').removeClass("btn-default").addClass("btn-primary");
      circlePacking3($("#child1").val(), $("#child2").val(), $("#child3").val(), $("input[name='y']:checked").val());
  });

  $('#treemap4').click(function() {
      $('button').removeClass("btn-primary").addClass("btn-default");
      $('#treemap4').removeClass("btn-default").addClass("btn-primary");
      treemap4($("#child1").val(), $("#child2").val(), $("#child3").val(), $("#child4").val(), $("input[name='y']:checked").val());
  });


  $('#circlePacking4').click(function() {      
    $('button').removeClass("btn-primary").addClass("btn-default");
    $('#circlePacking4').removeClass("btn-default").addClass("btn-primary");
    circlePacking4($("#child1").val(), $("#child2").val(), $("#child3").val(), $("#child4").val(), $("input[name='y']:checked").val());
  });
});
