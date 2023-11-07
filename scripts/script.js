$(function () {
    console.log("ready!");
  
    let userJSON = {
      email: "email address",
      pwd: "password"
    };
  
  //Load Profile
    $("#formLoad").click(function () {
      console.log("button clicked: ");
      let url = "https://raw.githubusercontent.com/cnorwood10/shiny-octo-broccoli-india-CIS376/main/assets/data.json";
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

    let button = document.getElementById('formSubmit');

    function handleButtonClick(event) {
        event.preventDefault();
     console.log("clicked the button");
     $("#result").html("<p>Thank you for your submission!</p>");
    }

    button.addEventListener('click', handleButtonClick);
  

  
    let dataStuff = `{ "letterSelected": "${$(
      "input[type=radio]:checked"
    ).val()}" }`;
  
    console.log(dataStuff);
  });
  
  //Selection Responses
  function getWords(letter) {
    console.log("in f/n getWords, here the paramter: ", letter);
  
    let aWordArray = ["Select a Drink!", "Water", "Coke", "Diet Coke", "Sundrop", "None"];

    let bWordArray = ["Select a Drink!", "Sundrop", "Water", "Sweet Tea", "None"];

    let cWordArray = ["Select a Drink!", "Dr. Pepper", "Root Beer", "Unsweet Tea", "Mello Yellow", "None"];

    let dWordArray = ["Select a Drink!", "Water", "Juice", "Milk", "None"]
  
    if (letter === "A") {
      return aWordArray;
    } else if (letter === "B") {
      return bWordArray;
    } else if (letter === "C") {
      return cWordArray;
    } else if (letter === "D") {
      return dWordArray;
    } else {
      return ["Please select a letter!"];
    }
  }
  
  //Refresh
  function refreshPage() {
    $("#row").html("");
    var getValue = document.getElementById("loadData");
    if (getValue.value != "") {
      getValue.value = "";
    }
}