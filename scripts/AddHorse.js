var clock = new THREE.Clock();
var morph;

var AnimationData=[];
var AnimationRotationData=[];//2 cells xz,yz
var DivAnimationData=[];
function AddAnimals(AnimalModel_Table,AnimalModel){
	
	var point = document.getElementById("AnimalPositionType_point").checked;
	var line = document.getElementById("AnimalPositionType_line").checked;
	//var polygon = document.getElementById("AnimalPositionType_polygon").checked;
	var testType = document.getElementById("testAnimalsPosition").checked;
	 
	
	var Pos_Type;
		var count = 0;	
		
		//check selected
		if(testType){
			var AnimationDataLength = AnimationData.length;
				
					DivAnimationData[0] = "Point";
					DivAnimationData[1] = "tbody";
					DivAnimationData[2] = count;
					AnimationData[AnimationDataLength] = DivAnimationData;
					
					var length = AnimalModel_Table.length;
					AnimalModel_Table[length]=AnimalModel.clone();
					AnimalModel_Table[length].time = 600 * Math.random();
					
					AnimalModel_Table[length].rotation.y -= Math.PI/2;
					
					AnimalModel_Table[length].position.set(0,0,0);
					scene.add(AnimalModel_Table[length]);
					point = false;
					
				
	}


	var AnimalMod = new THREE.Object3D();
	if(point){

		var e = document.getElementById("AnimalPositionType_selectmenu_point");
		var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
		
		for(var i = 0;i<PointLayers.length;i++){
			if(PointLayers[i][0] == strUser){
			
				for(var j = 1;j< PointLayers[i].length ;j+=3){
					var AnimationDataLength = AnimationData.length;
				
					DivAnimationData[0] = q;
					DivAnimationData[1] = strUser+"tbody";
					DivAnimationData[2] = count;
					
					AnimationData[AnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					var length = AnimalModel_Table.length;
					AnimalModel_Table[length]=AnimalModel.clone();
					AnimalModel_Table[length].time = 600 * Math.random();
					
					AnimalModel_Table[length].position.set(PointLayers[i][j],PointLayers[i][j+1],PointLayers[i][j+2]);
					AnimalMod.add(AnimalModel_Table[length]);
					
					
					count++;
				}
				
				var t = document.getElementById("AnimalLayerName").value;
		ModelLayerModels[t+"layer"] = AnimalMod;
		scene.add(ModelLayerModels[t+"layer"]);
			
				CreateAnimalLayer(i,Pos_Type);
				
				break;
			}
		}
			
	}

	if(line){
		
		var e = document.getElementById("AnimalPositionType_selectmenu_line");
		var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
		var angleLength =document.getElementById(strUser+"tbody").rows[0].cells.length-1;
		
	
	
		for(var i = 0;i<LineLayers.length;i++){
			if(LineLayers[i][0] == strUser){
				var AttTableName = document.getElementById("AnimalLayerName").value;
				
				
				if(q =="Line"){
				for(var j = 1;j< LineLayers[i].length;j+=6){
					var AnimationDataLength = AnimationData.length;
				
					DivAnimationData[0] = q;
					DivAnimationData[1] = AttTableName +"tbody";
				
					DivAnimationData[2] = count;
					AnimationData[AnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					var length = AnimalModel_Table.length;
					AnimalModel_Table[length]=AnimalModel.clone();
					AnimalModel_Table[length].time = 600 * Math.random();
					
					var angle = Number(document.getElementById(strUser+"tbody").rows[count].cells[angleLength].innerHTML);
					AnimalModel_Table[length].rotation.y = (-angle+200)/63.6619772367581;
					
					AnimalModel_Table[length].position.set(LineLayers[i][j],LineLayers[i][j+1],LineLayers[i][j+2]);
					//compute animal rotation
					var MaptoUsrCoords = world.toMapCoordinates(LineLayers[i][j],LineLayers[i][j+1],LineLayers[i][j+2]);
					DivAnimationData[0] = MaptoUsrCoords.x;
					DivAnimationData[1] = MaptoUsrCoords.y;
					DivAnimationData[2] = MaptoUsrCoords.z;
					DivAnimationData[3] = 0;
					DivAnimationData[4] = 0;

					AnimationRotationData[AnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					AnimalMod.add(AnimalModel_Table[length]);
					
					count++;
						
						
				}
				}
				if(q=="PolyLine"){
					var angleLength =document.getElementById(strUser+"tbody").rows[0].cells.length-1;
					var AnimationDataLength = AnimationData.length;
				
					DivAnimationData[0] = "PolyLine";
					DivAnimationData[1] = AttTableName +"tbody";
					for(var j = 1;j< LineLayers[i].length;j+=3){
						count++
					}
					DivAnimationData[2] = count;
					
					AnimationData[AnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					var length = AnimalModel_Table.length;
					AnimalModel_Table[length]=AnimalModel.clone();
					AnimalModel_Table[length].time = 600 * Math.random();
					
					var angle = Number(document.getElementById(strUser+"tbody").rows[1].cells[angleLength].innerHTML);
					AnimalModel_Table[length].rotation.y -= (angle+200)/63.6619772367581;
					
					
					AnimalModel_Table[length].position.set(LineLayers[i][1],LineLayers[i][2],LineLayers[i][3]);
					//compute animal rotation
					var MaptoUsrCoords = world.toMapCoordinates(LineLayers[i][1],LineLayers[i][2],LineLayers[i][3]);
					DivAnimationData[0] = MaptoUsrCoords.x;
					DivAnimationData[1] = MaptoUsrCoords.y;
					DivAnimationData[2] = MaptoUsrCoords.z;
					DivAnimationData[3] = 0;
					DivAnimationData[4] = 0;

					AnimationRotationData[AnimationDataLength] = DivAnimationData;
					DivAnimationData = [];
					AnimalMod.add(AnimalModel_Table[length]);
					
				}
					var t = document.getElementById("AnimalLayerName").value;
		ModelLayerModels[t+"layer"] = AnimalMod;
		scene.add(ModelLayerModels[t+"layer"]);
				CreateAnimalLayer(i,Pos_Type);
				
					
				break;
			}
		}	
	}
	
}
