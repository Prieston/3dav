function Step1(){
	
	//create world for presentation
		var xmlDoc=loadXMLDoc("./XYZ.xml");

	var CoordTable = document.getElementById("CreateWorld_Table_tbody");
	var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	
	for(var i=0;i<XMLPointsLength;i+=3){
		var row = CoordTable.insertRow(CoordTable.rows.length);
		
		var cellID = row.insertCell(0);
		var cellX = row.insertCell(1);
		var cellY = row.insertCell(2);
		var cellZ = row.insertCell(3);
		
		cellID.innerHTML = CoordTable.rows.length;
		var x = Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4);
		var y = Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4);
		var z = Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4);
		cellX.innerHTML = x
		cellY.innerHTML = y;
		cellZ.innerHTML = z;
	}
	///create world
	var Xmin =451800.1941;
var Ymin = 4438966.2693;
var Xmax = 451905.7732;
var Ymax = 4439071.4111;
var PxlRes = 1;
var worldPxlWidth = (Math.abs(Xmax)-Math.abs(Xmin))/PxlRes;
var worldPxlHeight = (Math.abs(Ymax)-Math.abs(Ymin))/PxlRes;
 DemWidth = 11;
 DemHeight = 11;
var offsetX = 0;
var offsetY = 0;

	world = new World([Xmin,Ymin,Xmax,Ymax],(Xmax-Xmin)/PxlRes,PxlRes,0.0);
	lyr[0] = new MapLayer({q:1,stats:{max:10,min:0},type:"dem",name:"TEO",dem:[{width:DemWidth,s:{},plane:{width:worldPxlWidth,offsetX:offsetX,offsetY:offsetY,height:worldPxlHeight},t:{},height:DemHeight}]});
	lyr[0].dem[0].data = [];
	
	
	var CoordTableLength = CoordTable.rows.length;
	for(var i = 0;i<CoordTableLength;i++){
		var row = lyr[0].dem[0].data.length;
		lyr[0].dem[0].data[row] = Number(CoordTable.rows[i].cells[3].innerHTML);
	}
	
	CalculatePositionVariables();
	main();
	plane.material.visible = false;
	
	var mat =  new THREE.MeshPhongMaterial({ambient:"red",color:"red",shininess:20,wireframe:true});
	var plane1 = plane.clone();
	plane1.material= mat;
	plane1.material.needsUpdate = true;
	planeMaterials["GeometryWireframe"] = plane1;
	scene.add(planeMaterials["GeometryWireframe"]);
	mat =  new THREE.MeshPhongMaterial({ambient:"white",shininess:20,color:"green",wireframe:false,vertexColors:THREE.FaceColors});
	var plane2 = plane.clone();
	plane2.material = mat;
	plane2.material.needsUpdate = true;
	planeMaterials["GeometrySolid"] = plane2;
	scene.add(planeMaterials["GeometrySolid"]);
	
	
	
		
	document.getElementById("GeometryWireframe").checked = true;
	document.getElementById("GeometryWireframe").disabled = false;
	document.getElementById("GeometrySolid").checked = true;
	document.getElementById("GeometrySolid").disabled = false;
	
	///////create texture


	var texture=THREE.ImageUtils.loadTexture( ["./geoprossesing2016/afitos.png"] );

	var newLayer = document.createElement("input");
		
	newLayer.type = "checkbox";
	newLayer.checked = true;


	newLayer.style.display = "inline";
	var label = document.createElement('label')
	var t = "Hill texture";
	newLayer.value = t;
	newLayer.id = t+"layer";
	newLayer.onchange = function(){displayMapTexture(t+"layer")};
	var plane3 = plane.clone();
	var mat =  new THREE.MeshPhongMaterial({ambient:"white",shininess:20,color:"white",wireframe:false,map:texture});
	plane3.material = mat;
	plane3.material.needsUpdate = true;
		planeMaterials[t+"layer"] = plane3;
		scene.add(planeMaterials[t+"layer"]);
	label.appendChild(document.createTextNode(t));
	document.getElementById("TextureLayers").appendChild(newLayer);
	document.getElementById("TextureLayers").appendChild(label);
	
	//////create layers
	//Point Tree Layer Paml Point
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Palm Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "Palm Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point Tree Layer Flamboyant Point
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Flamboyant Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "Flamboyant Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point Tree Layer Elm Point
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Elm Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "Elm Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point Tree Layer Ginger Point
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Ginger Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "Ginger Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point Tree Layer Bougainvillier Point
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bougainvillier Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "Bougainvillier Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House1 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House1 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House2 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House2 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House3 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House3 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House4 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House4 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House5 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House5 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House6 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House6 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House7 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House7 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Point House Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/House8 Point.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "House8 Point";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//Line Tree Layer Dracena Line
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Dracena Line.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("LineLayerName").value = "Dracena Line";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreateLineLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Line[i] =Number(worldPos.x);
		CLT_Line[i+1] =Number(worldPos.y);
		CLT_Line[i+2] =Number(worldPos.z);

	}

	document.getElementById("SeperateLines").checked = true;
	document.getElementById("calculateDistanse").checked = true;
	document.getElementById("calculateAngle").checked = true;
	CreateLineLayer();
	clearCreateLineLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo1 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo1 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo2 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo2 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo3 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo3 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo4 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo4 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo5 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo5 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo6 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo6 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo7 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo7 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//Polygon Tree Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Bamboo8 Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Bamboo8 Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();

	//Polygon Water material Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Water Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Water Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	
	//Polygon Water Clear Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/WaterClr Polygon.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "WaterClr Polygon";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	
	//Animal Line Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Animal Polyline.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("LineLayerName").value = "Animal Polyline";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreateLineLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Line[i] =Number(worldPos.x);
		CLT_Line[i+1] =Number(worldPos.y);
		CLT_Line[i+2] =Number(worldPos.z);

	}

	document.getElementById("PolyLine").checked = true;
	document.getElementById("calculateDistanse").checked = true;
	document.getElementById("calculateAngle").checked = true;
	CreateLineLayer();
	clearCreateLineLayerTable();
	
	//Car Line Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Car 1 Line.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("LineLayerName").value = "Car 1 Line";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreateLineLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Line[i] =Number(worldPos.x);
		CLT_Line[i+1] =Number(worldPos.y);
		CLT_Line[i+2] =Number(worldPos.z);

	}

	document.getElementById("SeperateLines").checked = true;
	document.getElementById("calculateDistanse").checked = true;
	document.getElementById("calculateAngle").checked = true;
	CreateLineLayer();
	clearCreateLineLayerTable();
	//Car Line Layer
	var xmlDoc=loadXMLDoc("./Layer Data/geoprossesing2016/Car 2 Line.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("LineLayerName").value = "Car 2 Line";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreateLineLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Line[i] =Number(worldPos.x);
		CLT_Line[i+1] =Number(worldPos.y);
		CLT_Line[i+2] =Number(worldPos.z);

	}

	document.getElementById("SeperateLines").checked = true;
	document.getElementById("calculateDistanse").checked = true;
	document.getElementById("calculateAngle").checked = true;
	CreateLineLayer();
	clearCreateLineLayerTable();
}
function Step2(){

var callbackboug = function () {
	TreeModelTable=Trees_Bougainvillier;	
		TreeModel=Bougainvillier;	
		document.getElementById("PlantLayerName").value="Bougainvillier _point";
		document.getElementById("PlantPositionType_point").checked=true;
		var e = document.getElementById("PlantPositionType_selectmenu_point");
	 e.options[e.selectedIndex].value = "Bougainvillier Point";
		AddTrees(TreeModelTable,TreeModel);
}
	if(typeof Bougainvillier === "undefined"){
	LoadTrees("Bougainvillier",callbackboug);
}
else{callbackboug()}
		
		// TreeModelTable=Trees_Bougainvillier;	
		// TreeModel=Bougainvillier;	
		// document.getElementById("PlantLayerName").value="Bougainvillier _point";
		// document.getElementById("PlantPositionType_point").checked=true;
		// var e = document.getElementById("PlantPositionType_selectmenu_point");
	 // e.options[e.selectedIndex].value = "Bougainvillier Point";
		// AddTrees(TreeModelTable,TreeModel);
		
		////////////////
	////////////////
var callbackpalm = function () {
	TreeModelTable=Trees_Palm_arecaceae;	
		TreeModel=Palm_arecaceae;	
		document.getElementById("PlantLayerName").value="Palm_arecaceae _point";
		document.getElementById("PlantPositionType_point").checked=true;
		
		var e = document.getElementById("PlantPositionType_selectmenu_point");
	 e.options[e.selectedIndex].value = "Palm Point";
		AddTrees(TreeModelTable,TreeModel);	
}
	if(typeof Palm_arecaceae === "undefined"){
	LoadTrees("Palm_arecaceae",callbackpalm);
}
		else{callbackpalm()}
	var callbackpelm = function () {
		TreeModelTable=Trees_Elm;	
		TreeModel=Elm;	
		document.getElementById("PlantLayerName").value="Elm _point";
		document.getElementById("PlantPositionType_point").checked=true;
		
		var e = document.getElementById("PlantPositionType_selectmenu_point");
	 e.options[e.selectedIndex].value = "Elm Point";
		AddTrees(TreeModelTable,TreeModel);	
	}
	if(typeof Elm === "undefined"){
	LoadTrees("Elm",callbackelm);
}else{callbackelm()}
		
		
			////////////////
			var callbackging = function () {
				TreeModelTable=Trees_Ginger;	
		TreeModel=Ginger;	
		document.getElementById("PlantLayerName").value="Ginger _point";
		document.getElementById("PlantPositionType_point").checked=true;
		
		var e = document.getElementById("PlantPositionType_selectmenu_point");
	 e.options[e.selectedIndex].value = "Ginger Point";
		AddTrees(TreeModelTable,TreeModel);	
			}

	if(typeof Ginger === "undefined"){
	LoadTrees("Ginger",callbackging);
}else{callbackging()}
		
		
				////////////////
	var callbackflam = function () {
		TreeModelTable=Trees_Flamboyant;	
		TreeModel=Flamboyant;	
		document.getElementById("PlantLayerName").value="Flamboyant _point";
		document.getElementById("PlantPositionType_point").checked=true;
		
		var e = document.getElementById("PlantPositionType_selectmenu_point");
	 e.options[e.selectedIndex].value = "Flamboyant Point";
		AddTrees(TreeModelTable,TreeModel);	

		////////////
	}
	if(typeof Flamboyant === "undefined"){
	LoadTrees("Flamboyant",callbackflam);
}else{callbackflam()}
		
		var callbackhous = function () {
			document.getElementById("HouseLayerName").value="House1 _point";
		document.getElementById("HouseLayerOrientation").value = 225;
		document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House1 Point";
		AddHouse();
		////

		document.getElementById("HouseLayerName").value="House2 _point";
		document.getElementById("HouseLayerOrientation").value = 125;
	//	document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House2 Point";
		AddHouse();
		////

		document.getElementById("HouseLayerName").value="House3 _point";
		document.getElementById("HouseLayerOrientation").value = 125;
	//	document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House3 Point";
		AddHouse();
		////

		document.getElementById("HouseLayerName").value="House4 _point";
		document.getElementById("HouseLayerOrientation").value = 325;
	//	document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House4 Point";
	 AddHouse();
	 ////

		document.getElementById("HouseLayerName").value="House5 _point";
		document.getElementById("HouseLayerOrientation").value = 350;
	//	document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House5 Point";
		
		AddHouse();
		 ////

		document.getElementById("HouseLayerName").value="House6 _point";
		document.getElementById("HouseLayerOrientation").value = 325;
	//	document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House6 Point";
		
		AddHouse();
		 ////

		document.getElementById("HouseLayerName").value="House7 _point";
		document.getElementById("HouseLayerOrientation").value = 25;
		//document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House7 Point";
		
		AddHouse();
		 ////

		document.getElementById("HouseLayerName").value="House8 _point";
		document.getElementById("HouseLayerOrientation").value = 125;
		//document.getElementById("OtherPositionType_point").checked=true;
		var e = document.getElementById("OtherPositionType_selectmenu_point");
		
	 e.options[e.selectedIndex].value = "House8 Point";
		
		AddHouse();
		}
		if(typeof House === "undefined"){
	LoadOther("House",callbackhous);
}
else{callbackhous()}
		
		
		////line
	var callbackdrac = function () {
		TreeModelTable=Trees_Dracena;	
		TreeModel=Dracena;	
		document.getElementById("PlantLayerName").value="Dracena _line";
		document.getElementById("PlantPositionType_line").checked=true;
		document.getElementById("PlantPos_line_properties_interval").value=7;
		
		var e = document.getElementById("PlantPositionType_selectmenu_line");
	 e.options[e.selectedIndex].value = "Dracena Line";
		AddTrees(TreeModelTable,TreeModel);	
	}
			if(typeof Dracena === "undefined"){
	LoadTrees("Dracena",callbackdrac);
	
}else{callbackdrac()}
		
		var callbackbamb = function () {
			TreeModelTable=Trees_Bamboo;	
		TreeModel=Bamboo;	
		document.getElementById("PlantLayerName").value="Bamboo1 _polygon";
		document.getElementById("PlantPositionType_polygon").checked=true;
		document.getElementById("PlantPos_polygon_properties_PlaceAtBoundary").checked = true;
		document.getElementById("PlantPos_polygon_properties_PlaceInside").checked = true;
		document.getElementById("PlantPos_polygon_properties_intervalX").value = 3;
		document.getElementById("PlantPos_polygon_properties_intervalY").value = 3;
		
		var e = document.getElementById("PlantPositionType_selectmenu_polygon");
	 e.options[e.selectedIndex].value = "Bamboo1 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
		/////
		document.getElementById("PlantLayerName").value="Bamboo2 _polygon";
	 e.options[e.selectedIndex].value = "Bamboo2 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
	/////
		document.getElementById("PlantLayerName").value="Bamboo3 _polygon";
	 e.options[e.selectedIndex].value = "Bamboo3 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
		/////
		document.getElementById("PlantLayerName").value="Bamboo4 _polygon";
	 e.options[e.selectedIndex].value = "Bamboo4 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
		/////
		document.getElementById("PlantLayerName").value="Bamboo5 _polygon";
	 e.options[e.selectedIndex].value = "Bamboo5 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
		/////
		document.getElementById("PlantLayerName").value="Bamboo6 _polygon";
	 e.options[e.selectedIndex].value = "Bamboo6 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
		/////
		document.getElementById("PlantLayerName").value="Bamboo7 _polygon";
	 e.options[e.selectedIndex].value = "Bamboo7 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
		/////
		document.getElementById("PlantLayerName").value="Bamboo8 _polygon";
	 e.options[e.selectedIndex].value = "Bamboo8 Polygon";
		AddTrees(TreeModelTable,TreeModel);	
		}
		/////////polygon
			if(typeof Bamboo === "undefined"){
	LoadTrees("Bamboo",callbackbamb);
}else{callbackbamb()}
		
		
}

function Step3(){
	var e = document.getElementById("GroundPositionType_selectmenu_polygon");
	document.getElementById("WaterLayerName").value = "Water _polygon";
	document.getElementById("WaterLayerZposition").value =0;
					
e.options[e.selectedIndex].value = "Water Polygon";
AddWater();			

e.options[e.selectedIndex].value = "WaterClr Polygon";
document.getElementById("WaterLayerName").value = "WaterClr _polygon";
document.getElementById("WaterLayerZposition").value =0;
AddWater();
		
}

function Step4(){
	var callbackhors = function(){

		document.getElementById("AnimalPositionType_line").checked = true;
					document.getElementById("AnimalLayerName").value = "Animal _polyline";
					var e= document.getElementById("AnimalPositionType_selectmenu_line");
					
e.options[e.selectedIndex].value = "Animal Polyline";

animal = Horse;
animalTable = morphs;

AddAnimals(animalTable,animal);		

	}
		

if(typeof Horse === "undefined"){
	LoadAnimals("Horse",callbackhors);
}else{callbackhors()}

//////////

var callbackcar = function () {
	document.getElementById("OtherPositionType_line").checked = true;
					document.getElementById("CarLayerName").value = "Car 1 _line";
					var e= document.getElementById("OtherPositionType_selectmenu_line");
					
e.options[e.selectedIndex].value = "Car 1 Line";
AddCar();			
///
		document.getElementById("CarLayerName").value = "Car 2 _line";					
		e.options[e.selectedIndex].value = "Car 2 Line";

AddCar();	
}
if(typeof Car === "undefined"){
	LoadOther("Car",callbackcar);
}else{callbackcar()}



	
}

function Step5(){
		earthView()
}
function Step6(){
				

}
function Step7(){
				

}
function Step8(){
					


}
function Step9(){
	//create new point layers
	//tree 2
	var xmlDoc=loadXMLDoc("./Layer Data/Point Layer Tree model 2.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "Point Layer Tree model 2";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
	//tree 3 (Boug)
	var xmlDoc=loadXMLDoc("./Layer Data/Point Layer Tree model 3 (Boug).xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PointLayerName").value = "Point Layer Tree model 3";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePointLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Point[i] =Number(worldPos.x);
		CLT_Point[i+1] =Number(worldPos.y);
		CLT_Point[i+2] =Number(worldPos.z);

	}
	CreatePointLayer();
	clearCreatePointLayerTable();
//create new line layers
//palm arecaceae road line layer
	var xmlDoc=loadXMLDoc("./Layer Data/Line Layer Tree model 2.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("LineLayerName").value = "Line Layer Tree model 2";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreateLineLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Line[i] =Number(worldPos.x);
		CLT_Line[i+1] =Number(worldPos.y);
		CLT_Line[i+2] =Number(worldPos.z);

	}

	document.getElementById("SeperateLines").checked = true;
	document.getElementById("calculateDistanse").checked = true;
	document.getElementById("calculateAngle").checked = true;
	CreateLineLayer();
	clearCreateLineLayerTable();
	//Winter tree
		var xmlDoc=loadXMLDoc("./Layer Data/Line Layer Tree model 3 (WinterTree).xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("LineLayerName").value = "Line Layer Tree model 3";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreateLineLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Line[i] =Number(worldPos.x);
		CLT_Line[i+1] =Number(worldPos.y);
		CLT_Line[i+2] =Number(worldPos.z);

	}

	document.getElementById("SeperateLines").checked = true;
	document.getElementById("calculateDistanse").checked = true;
	document.getElementById("calculateAngle").checked = true;
	CreateLineLayer();
	clearCreateLineLayerTable();
	//animal line 2 layer
	var xmlDoc=loadXMLDoc("./Layer Data/Animal Line Layer 2.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("LineLayerName").value = "Animal Line Layer 2";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreateLineLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Line[i] =Number(worldPos.x);
		CLT_Line[i+1] =Number(worldPos.y);
		CLT_Line[i+2] =Number(worldPos.z);

	}

	document.getElementById("PolyLine").checked = true;
	document.getElementById("calculateDistanse").checked = true;
	document.getElementById("calculateAngle").checked = true;
	CreateLineLayer();
	clearCreateLineLayerTable();

	//Polygon layers extra
	
		//Polygon Tree Layer 2
	var xmlDoc=loadXMLDoc("./Layer Data/Polygon Layer Tree model 2.xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Polygon Layer Tree model 2";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
		//Polygon Tree Layer 3 (Bamboo)
	var xmlDoc=loadXMLDoc("./Layer Data/Polygon Layer Tree model 3 (Bamboo).xml");
		var DataTagName = "Data";
	
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	document.getElementById("PolygonLayerName").value = "Polygon Layer Tree model 3 (Bamboo)";
	
	
	
	
	for(var i=0;i<XMLPointsLength;i+=3){
		CreatePolygonLayerTable(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue).toFixed(4));
		var worldPos= UserCoordinatesXY(Number(xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue).toFixed(4),Number(xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue).toFixed(4));
		CLT_Polygon[i] =Number(worldPos.x);
		CLT_Polygon[i+1] =Number(worldPos.y);
		CLT_Polygon[i+2] =Number(worldPos.z);

	}


	CreatePolygonLayer();
	clearCreatePolygonLayerTable();
	//////////////////////
	

}
function Step10(){
	//ADD MODELS EXTRA
	//point ELM
	if(typeof Elm === "undefined"){
	LoadTrees("Elm");
	alert("Model is Loaded");
}
		
		TreeModelTable=Trees_Elm;	
		TreeModel=Elm;	
		document.getElementById("PlantLayerName").value="Elm point";
		document.getElementById("PlantPositionType_point").checked=true;
		var e = document.getElementById("PlantPositionType_selectmenu_point");
	 e.options[e.selectedIndex].value = "Point Layer Tree model 2";
		AddTrees(TreeModelTable,TreeModel);
		//
		setTimeout(function(){	//point Bouglavainer
	
		if(typeof Bougainvillier === "undefined"){
	LoadTrees("Bougainvillier");
	alert("Model is Loaded");
}
		TreeModelTable=Trees_Bougainvillier;	
		TreeModel=Bougainvillier;	
		document.getElementById("PlantLayerName").value="Bougainvillier point 3";
		document.getElementById("PlantPositionType_point").checked=true;
		var e = document.getElementById("PlantPositionType_selectmenu_point");
	 e.options[e.selectedIndex].value = "Point Layer Tree model 3";
		AddTrees(TreeModelTable,TreeModel); }, 2000);
	
		//
		setTimeout(function(){ //line palm road
		if(typeof Palm_arecaceae === "undefined"){
	LoadTrees("Palm_arecaceae");
	alert("Model is Loaded");
}
		
		TreeModelTable=Trees_Palm_arecaceae;	
		TreeModel=Palm_arecaceae;	
		document.getElementById("PlantLayerName").value="Palm_arecaceae line 2";
		document.getElementById("PlantPositionType_line").checked=true;
		document.getElementById("PlantPos_line_properties_interval").value=5;
		
		var e = document.getElementById("PlantPositionType_selectmenu_line");
	 e.options[e.selectedIndex].value = "Line Layer Tree model 2";
		AddTrees(TreeModelTable,TreeModel);	
		}, 2000);
		setTimeout(function(){
			//line WinterTree
		if(typeof Wintertree === "undefined"){
	LoadTrees("Wintertree");
	alert("Model is Loaded");
}
		
		TreeModelTable=Trees_Wintertree;	
		TreeModel=Wintertree;	
		document.getElementById("PlantLayerName").value="Wintertree line";
		document.getElementById("PlantPositionType_line").checked=true;
		document.getElementById("PlantPos_line_properties_interval").value=5;
		
		var e = document.getElementById("PlantPositionType_selectmenu_line");
	 e.options[e.selectedIndex].value = "Line Layer Tree model 3";
		AddTrees(TreeModelTable,TreeModel);	 }, 4000);
		//
		setTimeout(function(){ 	//line animals
				if(typeof Horse === "undefined"){
	LoadAnimals("Horse");
	alert("Model is Loaded");
}
			document.getElementById("AnimalPositionType_line").checked = true;
					document.getElementById("AnimalLayerName").value = "Animal animation line 2";
					var e= document.getElementById("AnimalPositionType_selectmenu_line");
					
e.options[e.selectedIndex].value = "Animal Line Layer 2";


animal = Horse;
animalTable = morphs;

AddAnimals(animalTable,animal);	 }, 6000);
		//
setTimeout(function(){ 	
//polygon trees
if(typeof Bamboo === "undefined"){
	LoadTrees("Bamboo");
	alert("Model is Loaded");
}
		
		TreeModelTable=Trees_Bamboo;	
		TreeModel=Bamboo;	
		document.getElementById("PlantLayerName").value="Bamboo polygon";
		document.getElementById("PlantPositionType_polygon").checked=true;
		document.getElementById("PlantPos_polygon_properties_PlaceAtBoundary").checked = true;
		document.getElementById("PlantPos_polygon_properties_PlaceInside").checked = true;
		document.getElementById("PlantPos_polygon_properties_intervalX").value = 3;
		document.getElementById("PlantPos_polygon_properties_intervalY").value = 3;
		
		var e = document.getElementById("PlantPositionType_selectmenu_polygon");
	 e.options[e.selectedIndex].value = "Polygon Layer Tree model 3 (Bamboo)";
		AddTrees(TreeModelTable,TreeModel);	 }, 8000);	

	setTimeout(function(){ //polygon trees
if(typeof Bougainvillier === "undefined"){
	LoadTrees("Bougainvillier");
	alert("Model is Loaded");
}
		
		TreeModelTable=Trees_Bougainvillier;	
		TreeModel=Bougainvillier;	
		document.getElementById("PlantLayerName").value="Bougainvillier polygon";
		document.getElementById("PlantPositionType_polygon").checked=true;
		document.getElementById("PlantPos_polygon_properties_PlaceAtBoundary").checked = true;
		document.getElementById("PlantPos_polygon_properties_PlaceInside").checked = true;
		document.getElementById("PlantPos_polygon_properties_intervalX").value = 7;
		document.getElementById("PlantPos_polygon_properties_intervalY").value = 7;
		
		var e = document.getElementById("PlantPositionType_selectmenu_polygon");
	 e.options[e.selectedIndex].value = "Polygon Layer Tree model 2";
		AddTrees(TreeModelTable,TreeModel);	 }, 10000);
		
}