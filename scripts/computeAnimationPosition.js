var MaptoPixelPosition_X,MaptoPixelPosition_Y,MaptoPixelPosition_Z,SelectedPoint_X,SelectedPoint_Y,ModelMapPosition_X,ModelMapPosition_Y,ModelPixelPosition_X,ModelPixelPosition_Y;

function UserCoordinatesXY(pointX,pointY){

MaptoPixelPosition_X = MapWidth/lyr[0].dem[0].plane.width; // Map X in meters / Map width in pixels.(from dem information)(Value per pixel)
MaptoPixelPosition_Y = MapHeight/lyr[0].dem[0].plane.height; // Map Y in meters / Map height in pixels (from dem information)(Map per pixel)
SelectedPoint_X = pointX;
SelectedPoint_Y = pointY;

ModelMapPosition_X = SelectedPoint_X - Xmin;//ModelPosition_X is pixel coords and SelectedPoint_X is the X coordinate of the Map coord ex. 2516760.59273.
ModelMapPosition_Y = SelectedPoint_Y - Ymin;

ModelPixelPosition_X = ModelMapPosition_X / MaptoPixelPosition_X;//Model position in world pixels

ModelPixelPosition_Y = ModelMapPosition_Y / MaptoPixelPosition_Y;//Model position in world pixels


	ModelPixelPosition_X = (ModelPixelPosition_X - (lyr[0].dem[0].plane.width/2));
	ModelPixelPosition_Y = (ModelPixelPosition_Y - (lyr[0].dem[0].plane.height/2));
	
	
	
	
	ModelPixelPosition_Z = posZ(pointX,pointY) ;// / 267.85939159999907 for QGIS;
	

return {x : ModelPixelPosition_X,
            y : ModelPixelPosition_Y,
            z : ModelPixelPosition_Z};
}