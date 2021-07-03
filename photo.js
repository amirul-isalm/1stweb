var photo = [ "photos/1.jpg", "photos/2.jpg", "photos/3.jpg ", "photos/4.jpg", "photos/5.jpg"];
var imgTag = document.querySelector("img");


var count= 0;

function previous(){
    count--
    if(count < 0){
        count= photo.length - 1;
        imgTag.src= photo[count];
    }

    else{ imgTag.src= photo[count]} 

}


function next() {
    count++
     
    if( count >= photo.length){
        count= 0;
        imgTag.src= photo[count];
    }
    
    else{ imgTag.src= photo[count]} 

}
