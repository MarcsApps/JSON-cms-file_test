
window.onload = function(){  // WRAP EVERYTHING.

// global only to test - TODO
 
 var jdata = "";
 
 
myOnClicks("b0","p0",0);
myOnClicks("b1","p1",1);
myOnClicks("b2","p2",1);

function myOnClicks(eventID,elementTarget,indexHTML){
    $('#'+ eventID ).on('click', function(){
        readData(elementTarget,indexHTML);
    })
}; 

function readData(elM,index) {
    var nonCacheableURL = 'http://localhost:3000/pages?nocache=' + (new 
            Date()).getTime();   // load json without caching
        $.getJSON(nonCacheableURL, function(json) {
        jdata = json[index].text;      
        return jdata;
      })

        .done(function(){
        var myP1 = document.getElementById(elM);
        myP1.innerHTML=jdata;
        $('#p0').innerHTML="" ;
    }); 
};

}; // onload - wrap whole script



