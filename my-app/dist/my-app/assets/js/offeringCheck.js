
//-------JQUERY
/*$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
          var inputValue = $(this).attr("value");
          if(inputValue == "isChecked"){
            $("." + inputValue).toggle();
            $("#round1").toggle();
          }else{
            $("#round1").toggle();
            $("." + inputValue).toggle();
          }
      });
});*/


//-------JAVASCRIPT
 function offerChecked() {
  var checkBox = document.getElementById("checkedBox");
  var offerTab = document.getElementById("offeringCheck");
  //var roundTab = document.getElementById("round1");
//  var headTab = document.getElementById("headTab");
  var myCard = document.getElementById("myCard");
  if (checkBox.checked == true){
    myCard.style.display = "none";
    offerTab.style.display = "block";
  //  var list = document.getElementById("myTabContent");
  //  list.removeChild(list.childNodes[1]);
  } else {
      offerTab.style.display = "none";
      myCard.style.display = "block";


  }
}
