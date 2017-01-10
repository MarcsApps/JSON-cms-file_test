
window.onload = function(){

// global only to test
    var jdata = "";


  function readData() {

    // load json without caching
    var nonCacheableURL = 'js/data.json?nocache=' + (new   
        Date()).getTime();

        
    $.getJSON(nonCacheableURL, function(json) {
        // for (var i=0; i<json.length; i++) {
        // jdata[i] = json[i];
        jdata = json.text;
        console.log("inside get json");
        
    console.log(jdata);
    console.log("/n");
    console.log(json.text);
return jdata;
       // }
      }
    );
    return jdata;
}

// save data
function saveData(jsondata) {
    $.post('js/postjson.php', {json : JSON.stringify(jsondata)},
        function (data, textStatus, jqXHR){}
    );
}



  //your code here
console.log("hi js");
var myEl = document.getElementById('myEl');
myEl.addEventListener('click', function(event) {
    event.preventDefault();
    // alert('Hello world');

    //TEST CHANGING TEXT OF P1
    var myP1 = document.getElementById('p1');
    // myP1.innerHTML = "This is the text I've changed it to.";
    readData(); 
    console.log(jdata);
    myP1.innerHTML=jdata;
}, false);


} //onload



