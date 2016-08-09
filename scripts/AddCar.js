var CarAnimationData = [];
var CarAnimationRotationData = [];
var CarMorphs=[];
function AddCar(){
	var CarModel_Table=[];
	var point = document.getElementById("OtherPositionType_point").checked;
	var line = document.getElementById("OtherPositionType_line").checked;
	//var polygon = document.getElementById("AnimalPositionType_polygon").checked;
	var testType = document.getElementById("testOtherPosition").checked;
	 
	
	var Pos_Type;
		var count = 0;	
		
		//check selected
		if(testType){
			var CarAnimationDataLength = CarAnimationData.length;
				
					DivAnimationData[0] = "Point";
					DivAnimationData[1] = "tbody";
					DivAnimationData[2] = count;
					CarAnimationData[CarAnimationDataLength] = DivAnimationData;
					
					var length = CarModel_Table.length;
					CarModel_Table[length]=Car.clone();
					CarModel_Table[length].time = 600 * Math.random();
					
					CarModel_Table[length].rotation.y -= Math.PI/2;
					
					CarModel_Table[length].position.set(0,0,0);
					scene.add(CarModel_Table[length]);
					
					point = false;
					
				
	}


	var CarMod = new THREE.Object3D();
	if(point){

		var e = document.getElementById("OtherPositionType_selectmenu_point");
		var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
		
		for(var i = 0;i<PointLayers.length;i++){
			if(PointLayers[i][0] == strUser){
			
				for(var j = 1;j< PointLayers[i].length ;j+=3){
					var CarAnimationDataLength = CarAnimationData.length;
				
					DivAnimationData[0] = q;
					DivAnimationData[1] = strUser+"tbody";
					DivAnimationData[2] = count;
					
					CarAnimationData[CarAnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					var length = CarModel_Table.length;
					CarModel_Table[length]=Car.clone();
					CarModel_Table[length].time = 600 * Math.random();
					
					CarModel_Table[length].position.set(PointLayers[i][j],PointLayers[i][j+1],PointLayers[i][j+2]);
				


				


					CarMod.add(CarModel_Table[length]);
					
					
					count++;
				}
				
				var t = document.getElementById("CarLayerName").value;
		ModelLayerModels[t+"layer"] = CarMod;
		scene.add(ModelLayerModels[t+"layer"]);
			
				CreateOtherLayer(i,Pos_Type,"CarLayerName");
				
				break;
			}
		}
			
	}

	if(line){
		
		var e = document.getElementById("OtherPositionType_selectmenu_line");
		var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
		var angleLength =document.getElementById(strUser+"tbody").rows[0].cells.length-1;
		
	
	
		for(var i = 0;i<LineLayers.length;i++){
			if(LineLayers[i][0] == strUser){
				var AttTableName = document.getElementById("CarLayerName").value;
				
				
				if(q =="Line"){
				for(var j = 1;j< LineLayers[i].length;j+=6){
					var CarAnimationDataLength = CarAnimationData.length;
				
					DivAnimationData[0] = q;
					DivAnimationData[1] = AttTableName +"tbody";
				
					DivAnimationData[2] = count;
					CarAnimationData[CarAnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					var length = CarModel_Table.length;
					CarModel_Table[length]=Car.clone();
				
					var angle = Number(document.getElementById(strUser+"tbody").rows[count].cells[angleLength].innerHTML);
					CarModel_Table[length].rotation.y = (-angle+200)/(200/Math.PI);
					
					CarModel_Table[length].position.set(LineLayers[i][j],LineLayers[i][j+1],LineLayers[i][j+2]);
					//compute animal rotation
					var MaptoUsrCoords = world.toMapCoordinates(LineLayers[i][j],LineLayers[i][j+1],LineLayers[i][j+2]);
					DivAnimationData[0] = MaptoUsrCoords.x;
					DivAnimationData[1] = MaptoUsrCoords.y;
					DivAnimationData[2] = MaptoUsrCoords.z;
					DivAnimationData[3] = 0;
					DivAnimationData[4] = 0;
			
					
					CarAnimationRotationData[CarAnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					CarMod.add(CarModel_Table[length]);
					var CarMorphsLength = CarMorphs.length;
					CarMorphs[CarMorphsLength]=CarModel_Table[length];
					count++;
						
						
				}
				}
				
					var t = document.getElementById("CarLayerName").value;
		ModelLayerModels[t+"layer"] = CarMod;
		scene.add(ModelLayerModels[t+"layer"]);
				CreateOtherLayer(i,Pos_Type,"CarLayerName");
				
					
				break;
			}
		}	
	}


}