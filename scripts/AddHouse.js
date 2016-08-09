function AddHouse(){
	var HouseModelTable = [];
	var point = document.getElementById("OtherPositionType_point").checked;
	
	var testType = document.getElementById("testOtherPosition").checked;
	var Layers = PointLayers.length;
	var Pos_Type;

	

		//check selected

if(testType){
	var length = HouseModelTable.length;
		HouseModelTable[length]=House.clone();
		
		HouseModelTable[length].position.set(0,0,0);
		
		
		 // create point models
		
		
		scene.add(HouseModelTable[length]);
		point=false;
		line = false;
		polygon = false;
}

	var HouseMod = new THREE.Object3D();
if(point){
		var e = document.getElementById("OtherPositionType_selectmenu_point");
	var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
for(var i = 0;i<=PointLayers.length;i++){

if(PointLayers[i][0] == strUser){
		for(var j = 1;j<= PointLayers[i].length-1 ;j+=3){
		
		var length = HouseModelTable.length;
		HouseModelTable[length]=House.clone();
		HouseModelTable[length].rotation.y = Number(document.getElementById("HouseLayerOrientation").value)/63.6619772367581;
		HouseModelTable[length].position.set(PointLayers[i][j],PointLayers[i][j+1],PointLayers[i][j+2]);
		
		
		 // create point models
		
		HouseMod.add(HouseModelTable[length]);

		
		}
		
		
		var t = document.getElementById("HouseLayerName").value;
		
		ModelLayerModels[t+"layer"] = HouseMod;
		
		scene.add(ModelLayerModels[t+"layer"]);
		CreateOtherLayer(i,Pos_Type,"HouseLayerName");
		break;
		}
		}
}

}
	