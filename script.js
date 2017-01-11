
window.onload = function(){  // WRAP EVERYTHING.

// global only to test - TODO
// TODO
    var jdata = "";

    // load json without caching
function readData() {
    var nonCacheableURL = 'http://localhost:3000/pages?nocache=' + (new
        Date()).getTime();
        
        $.getJSON(nonCacheableURL, function(json) {
        jdata = json[0].text;
        return jdata;
      })

        .done(function(){
    console.log(`####  ${new Date().getTime()}  ${jdata}`);
    var myP1 = document.getElementById('p1');
    myP1.innerHTML=jdata;
    $('#p0').innerHTML="" ;
    
    });
    return jdata;
};

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
     
    console.log(Array(3).join('\n'));
    console.log(`####  ${new Date().getTime()} Clicked1`);
   $('#p1').text("This is the text I've wit to.");
    readData(); 
}, false);


} //onload



