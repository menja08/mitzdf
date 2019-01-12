// image slider

//select body background image
function runImageSlider() {
    let body = document.querySelector('body');
    /*function changeImage(body) {
	body.style.backgroundImage = '../images/images11012019_2.jpg';
    }
    changeImage(body);*/
    //get images into array
    let myImages = [
	"url('images/images11012019_1.jpg')",
	"url('images/images11012019_2.jpg')",
	"url('images/images11012019_3.jpg')",
	"url('images/images11012019_4.jpg')",
	"url('images/images11012019_5.jpg')"
    ];
    // select the dots or bullets
    let dots = document.getElementById('fivedots');
    let dotsChildren = dots.children;
    

    let i = 0;
    //let j = 0; // for counting the dots
    const numberOfImages = myImages.length;

    // left and right arrow click events
    let leftArrow = document.getElementById('left');
    leftArrow.addEventListener('click', function() {
	//move to previous image
	if(i = 0) {
	    i = 4
	}
	body.style.backgroundImage = myImages[i-1];
	dotsChildren[i-1].style.color = 'orange';

	//hide the rest of the dots
	//if(j !== i) {
	for(j = 0; j < numberOfImages; j++) {
	    if(j=0) {
		j = 4
	    }
	    if(j-1 !== i-1) {
		dotsChildren[j-1].style.color = 'grey';
	    }
	}
    });
    let rightArrow = document.querySelector('right');
    
    setInterval(function () {
	body.style.backgroundImage = myImages[i];
	dotsChildren[i].style.color = 'orange';

	//hide the rest of the dots
	//if(j !== i) {
	for(j = 0; j < numberOfImages; j++) {
	    if(j !== i) {
		dotsChildren[j].style.color = 'grey';
	    }
	}

	
	//reset i to zero
	if(i === 4){
	    i = 0;
	} else {
	    i++;
	}
	
    }, 4000);
    console.log('here');
}
runImageSlider();
