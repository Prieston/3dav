
//display

function displayTrees(){
	
	document.getElementById("Trees").style.display = "block";
}

function displayWater(){
	document.getElementById("Water").style.display = "block";
}


function displayAnimals(){
	document.getElementById("Animals").style.display = "block";	
}
function displayOtherModels(){
	document.getElementById("OtherModels").style.display = "block";	
}

function displayCreatePointLayerTable(){
	document.getElementById("CreatePointLayer").style.display = "block";	
}
function displayCreateLineLayerTable(){
	document.getElementById("CreateLineLayer").style.display = "block";	
}
function displayCreatePolygonLayerTable(){
	document.getElementById("CreatePolygonLayer").style.display = "block";	
}
function displaySetWorldWidth(){
	document.getElementById("SetWorldWidth").style.display = "block";	
}
function displayCreate3DGeometry(){
	document.getElementById("Create3DGeometry").style.display = "block";	
}
function display3DGeometryProperties(){
	var e = document.getElementById("3DGeometryType_selectmenu");
	var strUser = e.options[e.selectedIndex].value;
	if(strUser == "Box"){
	document.getElementById("BoxProperties").style.display = "block";
	}
}

//closes

function closeCreatePointLayerTable(){
	document.getElementById('CreatePointLayer').style.display = "none";
}
function closeCreateLineLayerTable(){
	document.getElementById('CreateLineLayer').style.display = "none";
}
function closeCreatePolygonLayerTable(){
	document.getElementById('CreatePolygonLayer').style.display = "none";
}
	
function 	closeTrees(){
	document.getElementById('Trees').style.display = "none";
}
function 	closeWater(){
	document.getElementById('Water').style.display = "none";
}

function 	closeAnimals(){
	document.getElementById('Animals').style.display = "none";
}
function 	closeOtherModels(){
	document.getElementById('OtherModels').style.display = "none";
}
function 	closeSetWorldWidth(){
	document.getElementById('SetWorldWidth').style.display = "none";
}
function 	closeCreate3DGeometry(){
	document.getElementById('Create3DGeometry').style.display = "none";
}

//LAYERS
function displayCloseLayers(id){
	
	
	if(document.getElementById(id + "Content").style.display == "block"){
	document.getElementById(id).style.listStyleImage = "url(./images/bullet.png)";
	document.getElementById(id + "Content").style.display = "none";
	}
	else{document.getElementById(id).style.listStyleImage = "url(./images/bullet-down.png)"
	document.getElementById(id + "Content").style.display = "block";
	}
}
//ATTRIBUTES TABLES
//
function displayLayerAttributes_Model(){
	document.getElementById("AttributeTableLayer_selectmenu_model").style.display = "inline";
	document.getElementById("AttributeTableLayer_selectmenu_map").style.display = "none";
	
}
function displayLayerAttributes_Map(){
	document.getElementById("AttributeTableLayer_selectmenu_model").style.display = "none";
	document.getElementById("AttributeTableLayer_selectmenu_map").style.display = "inline";
	
}

function showAttributeTable(){
	if(document.getElementById("radioAttributeTableModel").checked){
		
			var e = document.getElementById("AttributeTableLayer_selectmenu_model");
			var strUser = e.options[e.selectedIndex].value;
			
			document.getElementById(strUser).style.display = "block";
		
	}
	else {var e = document.getElementById("AttributeTableLayer_selectmenu_map");
			var strUser = e.options[e.selectedIndex].value;
			
			document.getElementById(strUser).style.display = "block";}
}
function closeAttributeTable(){
	//close is loaded at the button at ToolbarFunctions.js createLAYER function
}
//USER PREFERENCES
//PLANTS

function plantPosType_point(){
	document.getElementById("PlantPositionType_selectmenu_point").disabled = false;
	document.getElementById("PlantPositionType_selectmenu_line").disabled = true;
	document.getElementById("PlantPositionType_selectmenu_polygon").disabled = true;
	document.getElementById("PlantPosType_polygon_properties").style.display = "none";
	document.getElementById("PlantPosType_line_properties").style.display = "none";
}	
function plantPosType_line(){
	document.getElementById("PlantPositionType_selectmenu_point").disabled = true;
	document.getElementById("PlantPositionType_selectmenu_line").disabled = false;
	document.getElementById("PlantPositionType_selectmenu_polygon").disabled = true;
	document.getElementById("PlantPosType_polygon_properties").style.display = "none";
	document.getElementById("PlantPosType_line_properties").style.display = "block";
}	
function plantPosType_polygon(){
	document.getElementById("PlantPositionType_selectmenu_point").disabled = true;
	document.getElementById("PlantPositionType_selectmenu_line").disabled = true;
	document.getElementById("PlantPositionType_selectmenu_polygon").disabled = false;
	document.getElementById("PlantPosType_polygon_properties").style.display = "block";
	document.getElementById("PlantPosType_line_properties").style.display = "none";
	
}	
function animalPosType_point(){
	document.getElementById("AnimalPositionType_selectmenu_point").disabled = false;
	document.getElementById("AnimalPositionType_selectmenu_line").disabled = true;
	document.getElementById("AnimalPositionType_selectmenu_polygon").disabled = true;
	document.getElementById("AnimalPosType_polygon_properties").style.display = "none";
	
}	
function animalPosType_line(){
	document.getElementById("AnimalPositionType_selectmenu_point").disabled = true;
	document.getElementById("AnimalPositionType_selectmenu_line").disabled = false;
	document.getElementById("AnimalPositionType_selectmenu_polygon").disabled = true;
	document.getElementById("AnimalPosType_polygon_properties").style.display = "none";
	
}	
function animalPosType_polygon(){
	document.getElementById("AnimalPositionType_selectmenu_point").disabled = true;
	document.getElementById("AnimalPositionType_selectmenu_line").disabled = true;
	document.getElementById("AnimalPositionType_selectmenu_polygon").disabled = false;
	document.getElementById("AnimalPosType_polygon_properties").style.display = "block";
	
}	
function groundPosType_point(){
	document.getElementById("GroundPositionType_selectmenu_point").disabled = false;
	document.getElementById("GroundPositionType_selectmenu_line").disabled = true;
	document.getElementById("GroundPositionType_selectmenu_polygon").disabled = true;
	document.getElementById("GroundPosType_polygon_properties").style.display = "none";
	document.getElementById("GroundPosType_line_properties").style.display = "none";
	
	
}	
function groundPosType_line(){
	document.getElementById("GroundPositionType_selectmenu_point").disabled = true;
	document.getElementById("GroundPositionType_selectmenu_line").disabled = false;
	document.getElementById("GroundPositionType_selectmenu_polygon").disabled = true;
	document.getElementById("GroundPosType_polygon_properties").style.display = "none";
	document.getElementById("GroundPosType_line_properties").style.display = "block";
	
}	
function groundPosType_polygon(){
	document.getElementById("GroundPositionType_selectmenu_point").disabled = true;
	document.getElementById("GroundPositionType_selectmenu_line").disabled = true;
	document.getElementById("GroundPositionType_selectmenu_polygon").disabled = false;
	document.getElementById("GroundPosType_polygon_properties").style.display = "block";
	document.getElementById("GroundPosType_line_properties").style.display = "none";
	
}
function otherPosType_point(){
	document.getElementById("OtherPositionType_selectmenu_point").disabled = false;
	document.getElementById("OtherPositionType_selectmenu_line").disabled = true;


}
function otherPosType_line(){
	document.getElementById("OtherPositionType_selectmenu_point").disabled = true;
	document.getElementById("OtherPositionType_selectmenu_line").disabled = false;


}	

////Layers visibility
function displayMapTexture(id){
	if(!document.getElementById(id).checked){
		planeMaterials[id].material.visible = false;
		}
	else{ 
	planeMaterials[id].material.visible = true;
	}

}
function displayPointModels(id){
	if(document.getElementById(id).checked){
PointModels[id].traverse( function ( object ) { object.visible = true; } );
	}
	else{PointModels[id].traverse( function ( object ) { object.visible = false; } );}

}
function displayModelLayerModels(id){
	if(document.getElementById(id).checked){
ModelLayerModels[id].traverse( function ( object ) { object.visible = true; } );
	}
	else{ModelLayerModels[id].traverse( function ( object ) { object.visible = false; } );}

}