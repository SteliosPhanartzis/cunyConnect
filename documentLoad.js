function featuredEvents(){
	var featured = document.getElementById("FeaturedPhotos")
	var fEvents = featured.getElementsByClassName("col-lg-3");
	for(i = 0; i < fEvents.length;i++){
		var fHeader = document.createElement("H3");
		fHeader.innerHTML = "Event " + (i+1);
		fEvents[i].appendChild(fHeader);

		var fIMG = document.createElement("IMG");
		fIMG.className = "img-fluid"
		fIMG.src="assets/macComp.png"
		fIMG.width=200;
		fIMG.height=200;
		fEvents[i].appendChild(fIMG);

		var fPar = document.createElement("P");
		fPar.className = "eP1";
		fPar.innerHTML = "<strong>Event Name: </strong>" + /*EventID.name +*/ "<br>" + 
						 "<strong>Date: </strong>" + /*EventID.date +*/ "<br>" +
						 "<strong>Category: </strong>" + /*EventID.category +*/ "<br>" + 
						 "<strong>Description: </strong>" + /*EventID.description +*/ "<br>";
		fEvents[i].appendChild(fPar);
	}
}

function hamburgler(x){
    x.classList.toggle("change");
    var dropdown = document.getElementById("myDropdown");
	//toggle showing dropdown
  	dropdown.classList.toggle("show");
}

function pageContentsOffset(){
		window_height = $(window).height();
		navOffset = document.defaultView.getComputedStyle(document.getElementById('navbar-top'), "").getPropertyValue("height");
		dropdown = document.getElementById('myDropdown');
		//sizing
		dropdown.style.height = (window_height - parseInt(navOffset)) + "px";
	    dropdown.style.top = navOffset;
	    document.getElementsByClassName('bodyBack')[0].style.paddingTop = navOffset;
}

function resizeElements(){
	pageContentsOffset();
}
pageContentsOffset();
featuredEvents();