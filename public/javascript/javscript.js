window.onscroll = function () {
  shrinkHeader()
};


function shrinkHeader() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("logo").style.height = "85px";
    document.getElementById("logo").style.width = "160px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("hr").style.display = "block";
    document.getElementById("toll").style.top = "-37px";
    document.getElementById("toll").style.marginTop = "5%";
    document.getElementById("close").style.fontSize = "125px";
    document.getElementById("close").style.top = "-28px";
    document.getElementById("hamburgerC").style.top = "16px";
    let height = document.getElementsByClassName("hamburger");
    let width = document.getElementsByClassName("hamburger");
    for (i = 0; i < height.length; i++) {
      height[i].style.height = "6px";
      width[i].style.width = "65px";
    }
  } else {
    document.getElementById("logo").style.height = "135px";
    document.getElementById("logo").style.width = "253px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("hr").style.display = "none";
    document.getElementById("toll").style.top = "-40px";
    document.getElementById("toll").style.marginTop = "3%";
    document.getElementById("close").style.fontSize = "135px";
    document.getElementById("close").style.top = "-20px";
    document.getElementById("hamburgerC").style.top = "25px"
    let height = document.getElementsByClassName("hamburger");
    let width = document.getElementsByClassName("hamburger");
    for (i = 0; i < height.length; i++) {
      height[i].style.height = "8px";
      width[i].style.width = "70px";
    }
  }
}



function viewNAV() {
  document.getElementById("overlay-nav").style.width = "100%";
}

function closeNAV() {
  document.getElementById("overlay-nav").style.width = "0";
}

function active(navActive) {
  let removeActive = document.getElementsByClassName("active");
  while (removeActive.length)
    removeActive[0].classList.remove("active");
  navActive.classList.add("active");
}

let coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("activeV");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = content.scrollHeight + "px";

    }
  });
}
/*
function validateAndGetFormData(){
  var name_var = $("#name").val();
  if(name_var === ""){
    alert("Name is required");
    $("#name").focus();
    return "";
  }
  var email_var = $("#email").val();
  if(email_var === ""){
    alert("Name is required");
    $("#email").focus();
    return "";
  }
  var subject_var = $("#subject").val();
  if(subject_var === ""){
    alert("subject is required");
    $("#subject").focus();
    return "";
  }
  var query_var = $("#query").val();
  if(query_var === ""){
    alert("query is required");
    $("#query").focus();
    return "";
  }
  var jsonStrObj = {
    name: name_var,
    email: email_var,
    subject: subject_var,
    query: query_var,
  }
  return JSON.stringify(jsonStrObj);
}
// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
  var putRequest = "{\n"
          + "\"token\" : \""
          + connToken
          + "\","
          + "\"dbName\": \""
          + dbName
          + "\",\n" + "\"cmd\" : \"PUT\",\n"
          + "\"rel\" : \""
          + relName + "\","
          + "\"jsonStr\": \n"
          + jsonObj
          + "\n"
          + "}";
  return putRequest;
}
function executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, apiEndPointUrl) {
  var url = dbBaseUrl + apiEndPointUrl;
  var jsonObj;
  $.post(url, reqString, function (result) {
      jsonObj = JSON.parse(result);
  }).fail(function (result) {
      var dataJsonObj = result.responseText;
      jsonObj = JSON.parse(dataJsonObj);
  });
  return jsonObj;
}
function saveEmployee(){
  var jsonStr = validateAndGetFormData();
  if(jsonStr === ""){
    return;
  }
  var putReqStr = createPUTRequest("90937109|-31948801083075639|90931675", jsonStr, "formDB", "queries");
  jQuery.ajaxSetup({async: false});
  //so that it goes back to the form only after executeCommand
  var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
  alert(JSON.stringify(resultObj));
  jQuery.ajaxSetup({async: true});
  resetForm();
}*/

