
var planeMaterials = {};

function createWorldTable(){
	var xmlDoc=loadXMLDoc(document.getElementById("points-upload").value);

	var CoordTable = document.getElementById("CreateWorld_Table_tbody");
	var DataTagName = document.getElementById("data-TagName").value;
	var Xmin,Ymin,Xmax,Ymax;
	var XMLPointsLength = xmlDoc.getElementsByTagName(DataTagName).length -1;
	
	for(var i=0;i<XMLPointsLength;i+=3){
		var row = CoordTable.insertRow(CoordTable.rows.length);
		
		var cellID = row.insertCell(0);
		var cellX = row.insertCell(1);
		var cellY = row.insertCell(2);
		var cellZ = row.insertCell(3);
		
		cellID.innerHTML = CoordTable.rows.length;
		var x = xmlDoc.getElementsByTagName(DataTagName)[i].childNodes[0].nodeValue;
		var y = xmlDoc.getElementsByTagName(DataTagName)[i+1].childNodes[0].nodeValue;
		var z = xmlDoc.getElementsByTagName(DataTagName)[i+2].childNodes[0].nodeValue;
		cellX.innerHTML = x
		cellY.innerHTML = y;
		cellZ.innerHTML = z;
	}
}
function WorldDialogOpen(){createWorldDialog.dialog( 'open' );}

function CreateNewWorld(){
var Xmin = Number(document.getElementById("createXmin").value);
var Ymin = Number(document.getElementById("createYmin").value);
var Xmax = Number(document.getElementById("createXmax").value);
var Ymax = Number(document.getElementById("createYmax").value);
var PxlRes = 1;
var worldPxlWidth = (Math.abs(Xmax)-Math.abs(Xmin))/PxlRes;
var worldPxlHeight = (Math.abs(Ymax)-Math.abs(Ymin))/PxlRes;
 DemWidth = Number(document.getElementById("GridColumns").value);
 DemHeight = Number(document.getElementById("GridRows").value);
var offsetX = 0;
var offsetY = 0;

	world = new World([Xmin,Ymin,Xmax,Ymax],(Xmax-Xmin)/PxlRes,PxlRes,0.0);
	
	//save the project
	exportProject = "//create world" + String.fromCharCode(13);
	exportProject += "world = new World (["+Xmin + "," + Ymin + "," + Xmax + "," + Ymax + "],"+(Xmax-Xmin)/PxlRes + "," + PxlRes + ",0.0 );" + String.fromCharCode(13);
	exportProject += "lyr[0] = new MapLayer({q:1,stats:{max:10,min:0},type:\"dem\",name:\"TEO\",dem:[{width:"+DemWidth+",s:{},plane:{width:"+worldPxlWidth+",offsetX:"+offsetX+",offsetY:"+offsetY+",height:"+worldPxlHeight+"},t:{},height:"+DemHeight+"}]});" + String.fromCharCode(13) + "lyr[0].dem[0].data = [];"
	//
	
	lyr[0] = new MapLayer({q:1,stats:{max:10,min:0},type:"dem",name:"TEO",dem:[{width:DemWidth,s:{},plane:{width:worldPxlWidth,offsetX:offsetX,offsetY:offsetY,height:worldPxlHeight},t:{},height:DemHeight}]});
	lyr[0].dem[0].data = [];
	
	
	var CoordTable = document.getElementById("CreateWorld_Table_tbody");
	var CoordTableLength = CoordTable.rows.length;
	
	//save to project
	exportProject += "lyr[0].dem[0].data = ["
	//
	for(var i = 0;i<CoordTableLength;i++){
		var row = lyr[0].dem[0].data.length;
		lyr[0].dem[0].data[row] = Number(CoordTable.rows[i].cells[3].innerHTML);
		//save to project
		exportProject += lyr[0].dem[0].data[row] + "," ;
		//		
	}
	//save to project
	exportProject.substring(0,exportProject.length-1);
	exportProject += "];" + String.fromCharCode(13);
	//
	
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
	for (var i=0;i<plane2.geometry.faces.length;i++){
	plane2.geometry.faces[i].color.setRGB( Math.random(),
Math.random(), Math.random());
	}
	plane2.material.needsUpdate = true;
	planeMaterials["GeometrySolid"] = plane2;
	scene.add(planeMaterials["GeometrySolid"]);
	
	
	
		
	document.getElementById("GeometryWireframe").checked = true;
	document.getElementById("GeometryWireframe").disabled = false;
	document.getElementById("GeometrySolid").checked = true;
	document.getElementById("GeometrySolid").disabled = false;
	
	//save project
	exportProject += "CalculatePositionVariables();" + String.fromCharCode(13) + "main();" + String.fromCharCode(13) + "plane.material.visible = false;" + String.fromCharCode(13) + "var mat =  new THREE.MeshPhongMaterial({ambient:\"red\",color:\"red\",shininess:20,wireframe:true});" + String.fromCharCode(13) +	"var plane1 = plane.clone();" + String.fromCharCode(13) + "plane1.material= mat;" + String.fromCharCode(13) + "plane1.material.needsUpdate = true;" + String.fromCharCode(13) + "planeMaterials[\"GeometryWireframe\"] = plane1;" + String.fromCharCode(13) + "scene.add(planeMaterials[\"GeometryWireframe\"]);" + String.fromCharCode(13) + "mat =  new THREE.MeshPhongMaterial({ambient:\"white\",shininess:20,color:\"green\",wireframe:false,vertexColors:THREE.FaceColors});" + String.fromCharCode(13) + "var plane2 = plane.clone();" + String.fromCharCode(13) + "plane2.material = mat;" + String.fromCharCode(13) + "for (var i=0;i<plane2.geometry.faces.length;i++){" + String.fromCharCode(13) + "plane2.geometry.faces[i].color.setRGB( Math.random(),Math.random(),Math.random());" + String.fromCharCode(13) + "}" + String.fromCharCode(13) + "plane2.material.needsUpdate = true;" + String.fromCharCode(13) + "planeMaterials[\"GeometrySolid\"] = plane2;" + String.fromCharCode(13) + "scene.add(planeMaterials[\"GeometrySolid\"]);" + String.fromCharCode(13) + "document.getElementById(\"GeometryWireframe\").checked = true;" + String.fromCharCode(13) + "document.getElementById(\"GeometryWireframe\").disabled = false;" + String.fromCharCode(13) + "document.getElementById(\"GeometrySolid\").checked = true;" + String.fromCharCode(13) + "document.getElementById(\"GeometrySolid\").disabled = false;";
	//
}



