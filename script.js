let picWin = document.getElementById('picWindow');

let bWest = document.getElementById('buttonWest');
let bNorth = document.getElementById('buttonNorth');
let bSouth = document.getElementById('buttonSouth');
let bEast = document.getElementById('buttonEast');


const eastPic = () => {
    picWin.src = 'images/cheedale2.jpg';
    picWin.alt = "Stepping stones along the edge of a river and beside a large cliff.";
 }

bWest.addEventListener('click', westPic);
bNorth.addEventListener('click', northPic);
bSouth.addEventListener('click', southPic);
bEast.addEventListener('click', eastPic);


function westPic() {
    picWin.src = 'images/wales.jpg';
    picWin.alt = "A bird soars above a hillside and coastal North Wales town";
    }
    
    function northPic() {
        picWin.src = 'images/lancs.jpg';
        picWin.alt = "Cows laze in a buttercup meadow near the sea.";
    }
    
    function southPic() {
        picWin.alt = "Rolling hills to the horizon";
        picWin.src = 'images/marches.jpg';
    }

    
            
    
    

       