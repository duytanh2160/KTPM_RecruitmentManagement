var id;
$(".nav-tabs").on("click", "a", function (e) {
    e.preventDefault();
    $(this).tab('show');
  })
  .on("click", "span", function () {
/*    var userPreference;
    if(confirm("Do you want to delete this round ?") == true){
      $(this).parent().parent().remove();
      let thisId = $(this).parent().find("#roundNumber").text();
      $('.tab-content').find('#round' + thisId).remove();
    }else{
      userPreference = "Save cancelled !";
      e.preventDefault();
      $(this).tab('show');
    } */

    $(this).parent().parent().remove();
    let thisId = $(this).parent().find("#roundNumber").text();
    $('.tab-content').find('#round' + thisId).remove();

    /*var anchor = $(this).siblings('a');
    $(anchor.attr('href')).remove();*/
  //  $(this).parent().parent().remove();
    /*alert($(this).parent().find("#roundNumber").text());*/
    //let thisId = $(this).parent().find("#roundNumber").text();
  //  $('.tab-content').find('#round' + thisId).remove();

    /*$('.tab-content').find('#round' + parseInt(thisId) + 1).id = "round" + (parseInt(thisId)+1);*/
    /*$(".nav-tabs li").children('a').first().click();*/
    /*t ko hiểu mấy cái này làm gì nên bỏ vào cmt, thấy chạy ok r*/

    let temp = 1;
    $(".nav-tabs").children(".nav-item").each(function () {
      var a = $(this).children().attr('href');
      if(a != "#addround"){
      $(this).attr('href',"#round" + temp);
      $(this).attr('aria-controls',"round" + temp);
      $(this).attr('id',"round" + temp + "-tab");
      $(this).find("#roundNumber").text(temp);

      $(this).children().attr('id',"round" + temp + "-tab");
      $(this).children().attr('href',"#round" + temp);
      temp++;
      }
});

  let tempId = 1;
  $(".tab-content").children(".tab-pane").each(function(){
    $(this).attr('id',"round" + tempId);
    tempId++;
  });
});

    $('.add-round').click(function(e) {
        e.preventDefault();
        id = $("#headTab").children().length; //think about it ;)
        var timePickerObj = document.createElement("script");
        timePickerObj.type = "text/javascript";
        timePickerObj.src = "TimePicker.js";
        $(this).closest('li').before(
          '<li class="nav-item">' +
          '<a class="nav-link" id="round' + id + '-tab" role="tab" data-toggle="tab" href="#round' + id + '"> Round <span id="roundNumber">' + id + '</span> <span> &#x2718; </span></a></li>');
        $('.tab-content').append(
          '<div class="tab-pane fade" id="round'+id+'" role="tabpanel" aria-labelledby="round-tab">' +
          '<label>Interviewer: </label>' +
          '<select class="interviewer-dropdown" name="dropdownInterviewer">' +
            '<option value="waiting">Thu Dao</option>' +
            '<option value="pass">Thuan Tran</option>'  +  
          '</select>' +
          '</br>' +
          '<label>Account: </label>' +
            '<input type="text" name="text-box" value="" disabled placeholder="Enter text" required>' +
          '</br>' +
          '<label>Email: </label>' +
            '<input type="text" name="text-box" value="" disabled placeholder="Enter text" required>' +
          '</br>' +
          '<label>Room: </label>' +
            '<input type="text" name="text-box" value="" placeholder="Enter text" required>' +
          '</br>' +
          '<label>Date: </label>' +
            '<input id="datepicker" width="276px" name="date" value="" placeholder="mm/dd/yyyy">' +
            "<script>$('#round" + id + "').find('#datepicker').datepicker({uiLibrary: 'bootstrap4'});</script>" +
          '</br>' +
          '<label>Time: </label>' +
            '<input id="timepicker" width="276" placeholder="hh:mm"/>' +
            "<script>$('#round" + id + "').find('#timepicker').timepicker({uiLibrary: 'bootstrap4'});</script>" +
          '</br>' +
          '<label>Note: </label>' +
            '<textarea name="noteHR" rows="5" cols="45" placeholder="Note for each round..."></textarea>' +
          '</br>' +
        '</div>'
  );
});
