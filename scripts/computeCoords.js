function CalculatePositionVariables(){

//declare map variables
 Xmin=world.mapExtent[0];
 Ymin=world.mapExtent[1];
 Xmax=world.mapExtent[2];
 Ymax=world.mapExtent[3];
 MapWidth=(Xmax-Xmin);
 MapHeight=(Ymax-Ymin);



//height Z step in relation with x and y value
 XZStep=MapWidth/(Number(lyr[0].dem[0].width)-1);//height values per column lyr[0].dem[0].width-1
 YZStep=MapHeight/(Number(lyr[0].dem[0].height)-1);//height values per row dem[0].height-1

}



/*
var posiX1=(curPositionX1-Xmin)/XZStep; //position at x axe 
var posiY1=(Ymax-curPositionY1)/YZStep;//position at y axe
var height1=((posiY1-1)*280)+posiX1;//calculate height

//test 1 
var curPositionX1=2539042.10;
var curPositionY1=5044210.67;

//test 2
var curPositionX2=2537024.48;
var curPositionY2=5049036.71;

var posiX2=(curPositionX2-Xmin)/XZStep;
var posiY2=(Ymax-curPositionY2)/YZStep;
var height2=((posiY2-1)*280)+posiX2;
*/
//var qw = posZ(2539690.15,5047913.94);
function posZ (positionX,positionY){
	
	var axeX=(positionX-Xmin)/XZStep;
	var axeY=(Ymax-positionY)/YZStep;
	var intX=Math.floor(axeX);
	var intY=Math.floor(axeY);
	var restX=axeX-intX;
	var restY=axeY-intY;
	var positionAtpoligon = (restX+restY)/2;
	
	if (restX<=1-restY){
	//check X axis
		var axeZ=((intY)*DemWidth)+intX;//calculate height
		var dXZ=(lyr[0].dem[0].data[axeZ] - lyr[0].dem[0].data[axeZ+1]);
		var ipotinousaX= Math.sqrt(Math.pow((dXZ/world.zScale - world.zShift),2)+Math.pow(XZStep,2));
		
		//////
				
		var restX_new=restX+restY;
		var IpotinousaDiagwniou2=Math.sqrt(Math.pow(restY*YZStep,2)+Math.pow(restY*XZStep,2));
		
		
		
		
		//////
		
		var minIpotinousaX = ipotinousaX*restX_new;
		
		var slopeX = Math.atan( Math.abs((dXZ/world.zScale - world.zShift)/XZStep) );
		//var slopeX = Math.atan( (Math.abs(dXZ)/world.zScale - world.zShift)/XZStep) ;
		var multX = Math.sin(slopeX);
		
		
		
		var finalDXZ= minIpotinousaX*multX;
		if (dXZ<0){
		var heightX = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)+finalDXZ;
		}
		else{
		var heightX = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)-finalDXZ;
		}
		
		
		//check Y axis
		
		var dYZ=(lyr[0].dem[0].data[axeZ] - lyr[0].dem[0].data[axeZ+DemWidth]);
		var ipotinousaY= Math.sqrt(Math.pow((dYZ/world.zScale - world.zShift),2)+Math.pow(YZStep,2));
		//////
		var restY_new=restY+restX;
		var IpotinousaDiagwniou1=Math.sqrt(Math.pow(restX*XZStep,2)+Math.pow(restX*YZStep,2));
		//////
		var minIpotinousaY = ipotinousaY*restY_new;
		
		var slopeY = Math.atan( Math.abs((dYZ/world.zScale - world.zShift)/YZStep) );
		//var slopeY = Math.atan( Math.abs((dYZ/world.zScale - world.zShift)/YZStep) );
		var multY = Math.sin(slopeY);
		
		var finalDYZ = minIpotinousaY*multY;
		if (dYZ<0){
		var heightY = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)+finalDYZ;
		}
		else{
		var heightY = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)-finalDYZ;
		}
		
		var percent=IpotinousaDiagwniou2/(IpotinousaDiagwniou1+IpotinousaDiagwniou2);
		var FHeight1=Math.abs(heightX-heightY)*percent;
		if ((heightX-heightY)<0){
		var FHeight2=heightX+FHeight1;
		}
		else{
		var FHeight2=heightX-FHeight1;
		}
	}
	else{
	//check X axis
		var axeZ=((intY+1)*DemWidth)+intX+1;//calculate height
		var dXZ=(lyr[0].dem[0].data[axeZ] - lyr[0].dem[0].data[axeZ-1]);
		var ipotinousaX= Math.sqrt(Math.pow((dXZ/world.zScale - world.zShift),2)+Math.pow(XZStep,2));
		
		//////
			
		var restX_new=(1-restX)+(1-restY);
		var IpotinousaDiagwniou2=Math.sqrt(Math.pow((1-restY)*YZStep,2)+Math.pow((1-restY)*XZStep,2));
		
		
		
		
		//////
		
		var minIpotinousaX = ipotinousaX*(restX_new);
		
		var slopeX = Math.atan( Math.abs((dXZ/world.zScale - world.zShift)/XZStep) );
		//var slopeX = Math.atan( (Math.abs(dXZ)/world.zScale - world.zShift)/XZStep) ;
		var multX = Math.sin(slopeX);
		
		
		
		var finalDXZ= minIpotinousaX*multX;
		if (dXZ<0){
		var heightX = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)+finalDXZ;
		}
		else{
		var heightX = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)-finalDXZ;
		}
		
		
		//check Y axis
		
		var dYZ=(lyr[0].dem[0].data[axeZ] - lyr[0].dem[0].data[axeZ-DemWidth]);
		var ipotinousaY= Math.sqrt(Math.pow((dYZ/world.zScale - world.zShift),2)+Math.pow(YZStep,2));
		//////
		var restY_new=(1-restY)+(1-restX);
		var IpotinousaDiagwniou1=Math.sqrt(Math.pow((1-restX)*XZStep,2)+Math.pow((1-restX)*YZStep,2));
		//////
		var minIpotinousaY = ipotinousaY*(restY_new);
		
		var slopeY = Math.atan( Math.abs((dYZ/world.zScale - world.zShift)/YZStep) );
		//var slopeY = Math.atan( Math.abs((dYZ/world.zScale - world.zShift)/YZStep) );
		var multY = Math.sin(slopeY);
		
		var finalDYZ= minIpotinousaY*multY;
		if (dYZ<0){
		var heightY = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)+finalDYZ;
		}
		else{
		var heightY = (lyr[0].dem[0].data[axeZ]/world.zScale - world.zShift)-finalDYZ;
		}
		
		var percent=IpotinousaDiagwniou2/(IpotinousaDiagwniou1+IpotinousaDiagwniou2);
		var FHeight1=Math.abs(heightX-heightY)*percent;
		if ((heightX-heightY)<0){
		var FHeight2=heightX+FHeight1;
		}
		else{
		var FHeight2=heightX-FHeight1;
		}

}
return FHeight2.toFixed(4);
}
