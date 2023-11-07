$(function () {
  
    let userJSON = {
      email: "email address",
    };
  
    $("#loadData").click(() => {
      console.log("in button click event");
  
      $("#email").val(userJSON.email);
    });
    
    $("formSample").click(function () {
    console.log("button clicked: ");
    let url = "https://github.com/cnorwood10/shiny-octo-broccoli-india-CIS376/blob/main/assets/data.json";
    $.ajax({
      url: url,
      dataType: "json",
      success: function(data) {
        console.log(data);
        $("#email").val(data.email);
        console.log(data.formcheck);
        $("#pwd").val(data.pwd);

        $("#formcheck").prop("checked", data.formcheck);

      },
      error: function() {
        $("#email").val("myemail@email.com");
      }
    });
  });

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("input[type=radio]").on("change", function () {
    let radioChoice = $("input[type=radio]:checked").val();
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value="${newWordList[i]}">${newWordList[i]}</option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  //Submit
$("#submission").on("click", (e) => {
  e.preventDefault();
  console.log("clicked the button");
  $("#result").html("<p>The button is pressed and form is submitted.</p>");
  
  // Submit the form
  $("form").submit();
});
  
    $("input[type=radio]").on("change", function () {
  
      let radioChoice = $("input[type=radio]:checked").val(); 
      let newWordList = getWords(radioChoice);
      console.log(newWordList);
  
      let optionList = "";
  
      for (i = 0; i < newWordList.length; i++) {
        optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
      }
      console.log(optionList);
  
      $("#letterWordsSelect").empty().append(optionList);
    });
  
    $("#formSubmit").on("click", (e) => {
      e.preventDefault();
      console.log("clicked the button");
  
    });
  
    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;
  
    console.log(dataStuff);
  });
  
  
  //Selection Responses
  function getWords(letter) {
  console.log("in f/n getWords, here the paramter: ", letter);
  
  let wordArray = ["Select your Drink!", "Water", "Coke", "Diet Coke", "Sundrop"];
  
  
  if (letter === "A") {
    return wordArray;
  } else {
    return ["Please select a letter!"];
  }
  
  }

  // Refreshes Page to Restart the Selections
  function refreshPage(){
    $("#row").html("");
    var getValue = document.getElementById("loadData");
      if (getValue.value !="") {
        getValue.value = "";
      }}