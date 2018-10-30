function featuredEvents(){
	var featured = document.getElementById("FeaturedPhotos")
	var fEvents = featured.getElementsByClassName("col-lg-3");
	console.log(fEvents[1]);
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
	//toggle showing dropdown
  	document.getElementById("myDropdown").classList.toggle("show");
}

featuredEvents();