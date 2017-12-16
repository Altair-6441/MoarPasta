document.getElementById("split").onclick = function () {

  var input = document.getElementById("input").value;
  var isCharactersChecked = document.getElementById("characters").checked;
  var isWordsChecked = document.getElementById("words").checked;
  var parameters = parseInt(document.getElementById("parameters").value);
  var txtOutput = document.getElementById("output");

  //console.log("input "+input+" isCharactersChecked "+isCharactersChecked+" isWordsChecked "+isWordsChecked+" parameters "+parameters);
  txtOutput.value = "";
  input = input.replace(/\n/g, " ");

  if (isWordsChecked){
    var wArr = input.split(" ");
    
    var wlen = wArr.length/parameters;
    
    var wStart, wEnd;
    for(var wi = 0; wi < wlen;wi++)
    {
      wStart = wi*parameters;
      wEnd = wStart+parameters;
      
      txtOutput.value = txtOutput.value + "\n\n" + wArr.slice(wStart, wEnd).join(" ");
    }
  }

  else if (isCharactersChecked) {
    var clen = input.length/parameters;
    for(var ci = 0; ci < clen;ci++)
    {
      txtOutput.value = txtOutput.value + "\n\n" + input.substr(ci*parameters, parameters);
    }
  }

  else {
    //nothing
  }
}
