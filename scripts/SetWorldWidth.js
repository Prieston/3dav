function SetWorldWidth(){
	
	
	Xmin = Number(document.getElementById("Coord_XMin").value);
	Xmax = Number(document.getElementById("Coord_XMax").value);
	MapWidth = Xmax - Xmin;
	Ymin = 0;
	Ymax = (Xmax - Xmin)/100 * 48.5680888369 //temporary
	
	world = new World([Xmin,Ymin,Xmax,Ymax],100,1.5,0.0);
}