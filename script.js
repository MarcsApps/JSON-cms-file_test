
window.onload = function(){  // WRAP EVERYTHING.

// global only to test - TODO
// TODO
    var jdata = "";
 
    // load json without caching


// button for saving to server
var saveBut = document.getElementById('mySave')

saveBut.addEventListener('click',function(event){

});



// save data
function saveData(jsondata) {
    $.post('js/postjson.php', {json : JSON.stringify(jsondata)},
        function (data, textStatus, jqXHR){}
    );
}



  //your code here
 
var myEl = document.getElementById('myEl');
myEl.addEventListener('click', function(event) {
    // event.preventDefault();
    console.log(`####  ${new Date().getTime()} 1 Calling Load F()`);
    readData("p0",0);
        console.log("2 read data");
    
}, false);
        console.log("5 after event");



function readData(elM,index) {
    var nonCacheableURL = 'http://localhost:3000/pages?nocache=' + (new
        Date()).getTime();
        console.log("1 getJson");
        $.getJSON(nonCacheableURL, function(json) {
        jdata = json[index].text;
        console.log("3 json returned");
        
        return jdata;
      })

        .done(function(){
        console.log("4 done");
            
    console.log(`####  ${new Date().getTime()}  ${jdata}`);
    var myP1 = document.getElementById(elM);
    myP1.innerHTML=jdata;
    $('#p0').innerHTML="" ;
    
    });
    //return jdata; // dont need return as only returns empty (async)
};

} // onload - wrap whole script



