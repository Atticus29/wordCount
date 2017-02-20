$(function(){
  $("#usrInput").submit(function(){
    event.preventDefault();
      $(".results").show();
      var usrPhrase = $("#phrase").val();
      var phraseArray = usrPhrase.split(" ");
      console.log(phraseArray);
      var wordCounts = phraseArray.reduce(function(allNames, name){
        if (name in allNames){
          allNames[name]++;
        } else{
          allNames[name] = 1;
        }
        return allNames;
      },[]);
      for (word in wordCounts){
        $("#result-list").append("<li>" + word + " : " + wordCounts[word] + "</li>");
      }
  });
});
