//This Js file is functions that all screens will want to use
var CURRENT_PAGE = 1;
var CANDIDATES;
var API = "http://localhost:8000/";

// var i = sendAjax("GET","candidates/GetAllCandidates");
// i.onload = function(){
//     CANDIDATES = JSON.parse(i.responseText);
// }

function sendAjax(e, t, n) {
    var i = new XMLHttpRequest;
    return i.open(e, t),
        i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        i.setRequestHeader("Content-Type", "application/json"),
    "GET" != e && i.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN),
        i.withCredentials = !0,
        n ? i.send(JSON.stringify(n)) : i.send(),
        i
}


function w3_toggle() {
    if (document.getElementById("mySideBar").style.display == "block") {
        document.getElementById("mySideBar").style.display = "none";
        document.getElementById("mySideBar").style.transition = "opacity 1s ease-out;";
        document.getElementById("mySideBar").style.opacity = "0";
        sessionStorage.setItem("bar","");
    } else {
        document.getElementById("mySideBar").style.display = "block";
        document.getElementById("mySideBar").style.width = "22%";
        document.getElementById("mySideBar").style.opacity = "1";
        sessionStorage.setItem("bar","open");
    }
}



$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        var arrow = document.getElementsByClassName('icon-bar')[0].querySelector('img');
        if (arrow.style.transform === "" || arrow.style.transform === "scaleX(1)") {
            arrow.style.transform = "scaleX(-1)";
        } else {
            arrow.style.transform = "scaleX(1)";
        }
        $('#sidebar').toggleClass('active');
    });


});


function rightSBPreviousState(){
    var a = sessionStorage.getItem("bar");
    if(a == "open"){
        document.getElementById("mySideBar").style.display = "block";
    }
}




function Export() {
    $(".ckb-export").css("display", "block");
    $("#btn-export").css("display", "none");
    $("#btn-export-accept").css("display", "block");
}

function ExportAccept() {
    Swal({
        title: 'Export selected candidates ?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Accept',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        // Nếu bấm Đồng ý sẽ thực hiện hàm dưới
        if (result.value) {
        Swal(
            'Exported !',
            '',
            'success'
        ).then((result) => {
            // Bấm Đồng ý sẽ hiện ra nút xác nhận, khi đã xác nhận sẽ thực hiện các lệnh dưới
            if (result.value) {
            // $(".ckb-export").css("display", "none");
            // $("#btn-export").css("display", "block");
            // $("#btn-export-accept").css("display", "none");
            window.location.reload();
        }
    })
    }
else {
        // Nếu bấm hủy (cancel) sẽ thực hiện các hàm dưới
        $(".ckb-export").css("display", "none");
        $("#btn-export").css("display", "block");
        $("#btn-export-accept").css("display", "none");

        // Khi cancel thì các checkbox sẽ uncheck
        $(".ckb-export").prop("checked", false);
    }
})
}


function logOut(){
    sessionStorage.removeItem("login");
    window.location.href="/login.html";
}

function loadJobList(){
    $.get("job/GetAllJob",function(json) {
        var select = document.getElementById("candidateJob");
        for(var i = 0 ; i < json.length ; i++){
            select.innerHTML+= "<option>" + json[i] + "</option>"
        }
    });
}


function setPagination(currentPage) {
    var number;
    var pageNumber;
    var pagination = document.getElementById("pagination-contents");
    pagination.innerHTML="";

    $.get("candidates/GetNumberOfCandidate",function(json) {
        number = json;
        pageNumber = parseInt(number/6);
        if(number%6 > 0){
            pageNumber+=1;
        }

        for(var i = 1 ; i <= pageNumber ; i++){
            pagination.innerHTML+="<a href='javascript:getCandidates(" + i +")'>"+ i +"</a>";

            if(i==currentPage){
                pagination.getElementsByTagName("a")[i-1].className += " active";
            }
        }


        $(".list-group-item").click(function () {
            console.log($(this).find('h2').text());
        });

    });
}


function getCandidateJobList(id){
    var result = "";
    $.get("job/GetListJob",{
        id : id
    },function(temp) {
        for(var i = 0 ; i < temp.length ; i++){
            if(i == 0){
                result = result + temp[i];
            }else{
                result = result + ", " + temp[i];
            }
        }

    });
    return result;
}


function getCandidates(page){
    setPagination(page);
    CURRENT_PAGE = page;
    var groups = document.getElementsByClassName("list-group");
    groups[0].innerHTML = "";

    $.get("http://localhost:8000/candidates",{page : page},function(json) {
        for(var data of json){

            var id = data.id,
                job = getCandidateJobList(data.id),
                avatar = data.avatarImage,
                name = data.fullname,
                sex = data.sex,
                skills = data.skills,
                educate = data.educate,
                cand_source = data.source,
                exp = data.exp;


            groups[0].innerHTML+= "<div class=\"list-group-item\">\n" +
                "              <div class=\"row\">\n" +
                "                <div class=\"col-sm-2\">\n" +
                "                  <a href=\"javascript:alert('Tạm thời chỉ có thể xem info của L.Quân');\">\n" +
                "                    <div class=\"profile-img\">\n" +
                "                      <img src=\"" + avatar + "\" alt=\"\">\n" +
                "                    </div>\n" +
                "                  </a>\n" +
                "                </div>\n" +
                "                <div class=\"col-sm-10\">\n" +
                "                  <div class=\"row\">\n" +
                "                    <div class=\"col-sm-7\">\n" +
                "                      <h2 class=\"profile-name\"><span>" + id + ".</span> " + name + "</h2>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-sm-5 d-flex justify-content-between align-items-center\">\n" +
                "                      <div class=\"info\" style=\"margin-top: 15px\"><span>Gender: </span>" + sex + "</div>\n" +
                "                      <input type=\"checkbox\" class=\"ckb-export\">\n" +
                "                    </div>\n" +
                "                  </div>\n" +
                "                  <div class=\"row\">\n" +
                "                    <div class=\"col-sm-3\">\n" +
                "                      <div class=\"info\">\n" +
                "                        <div><span>Job:</span> " + job + "</div>\n" +
                "                        <div><span>Level: </span> Junior</div>\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-sm-4\">\n" +
                "                      <div class=\"info\">\n" +
                "                        <div><span>Skills:</span> " + skills + "</div>\n" +
                "                        <div style=\"display: inline-block\"><span>Exp. :</span> " + exp + "</div>\n" +
                "                        <div style=\"display: inline-block; margin-left: 5px\"><span>University:</span>\n" +
                "                          " + educate + "</div>\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-sm-3\">\n" +
                "                      <div class=\"info\">\n" +
                "                        <div><span>Source:</span> " + cand_source + "</div>\n" +
                "                        <div style=\"display: inline-block\"><span>CV:</span> <a href=\"#\">\n" +
                "                          <i class=\"fa fa-file\"></i>\n" +
                "                        </a></div>\n" +
                "\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-sm-2\">\n" +
                "                      <div class=\"info\">\n" +
                "                        <div><span>Action:</span> Interview</div>\n" +
                "                        <div><span>Result:</span> Fail</div>\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"col-sm-3\">\n" +
                "                      <div class=\"action\">\n" +
                "                        <button class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#editCandidateForm\"><a\n" +
                "                                class=\"fa fa-pencil\"></a></button>\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                  </div>\n" +
                "                </div>\n" +
                "              </div>\n" +
                "            </div>";
        }

        //
        // $.each(json, function (index, item) {
        //
        //
        // });
    });
}


function nextPage(){
    getCandidates(CURRENT_PAGE + 1);
}
function previousPage(){
    if(CURRENT_PAGE > 1){
    getCandidates(CURRENT_PAGE - 1);
    }
}

function openCandidateForm(){
    // var form = document.getElementById("addCandidateForm")
    // var input = form.getElementsByTagName("input");
    // var select = form.getElementsByTagName("select");

    // for(var i = 0 ; i < input.length ; i++){
    //     input[i].value = "";
    // }
    // for(var i = 0; i < select.length ; i++){
    //     select[i].selectedIndex = 0;
    // }
}

function addCandidate(){
    var form = document.getElementById("addCandidateForm")
    var input = form.getElementsByTagName("input");
    var select = form.getElementsByTagName("select");
    var time = new Date();
    var current = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate();

    var name = input[1].value,
        phone = input[3].value,
        cv = input[1].value,
        educate = input[8].value,
        exp = input[7].value,
        skills = input[5].value,
        email = input[4].value,
        source = input[9].value,
        birthDay = input[2].value,
        sex = select[0].value,
        jobId = select[1].selectedIndex,
        levelId = select[2].selectedIndex +=1,
        createDate = current,
        updateDate = current,
        avatarImage = "https://bodiezpro.com/wp-content/uploads/2015/09/medium-default-avatar.png";


        $.ajax({
            url: API + "candidates/add",
            type: "post",
            data: {
                Fullname : name,
                Sex : sex,
                PhoneNumber : phone,
                Email : email,
                BirthDay : birthDay
            },
            dataType: 'application/json',
            success: function (data) {
                alert("Candidate Addded !")
                window.location.replace("/");
            },
            error : function (data) {
                console.log("",data);
            }
        });

    }


function addPositionApply(candidateId,jobId,levelId){
    $.get("job/AddPositionApply",{
        candidateId : candidateId,
        jobId : jobId,
        levelId : levelId
    },function(){

    });
}
