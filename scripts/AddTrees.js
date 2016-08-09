
function AddTrees(TreeModelTable,TreeModel){

var point = document.getElementById("PlantPositionType_point").checked;
	var line = document.getElementById("PlantPositionType_line").checked;
	var polygon = document.getElementById("PlantPositionType_polygon").checked;
	var testType = document.getElementById("testPlantsPosition").checked;
	var Layers = PointLayers.length;
	var Pos_Type;

	

		//check selected

if(testType){
	var length = TreeModelTable.length;
		TreeModelTable[length]=TreeModel.clone();
		
		TreeModelTable[length].position.set(0,0,0);
		
		
		 // create point models
		
		
		scene.add(TreeModelTable[length]);
		point=false;
		line = false;
		polygon = false;
}

	var TreeMod = new THREE.Object3D();
if(point){
		var e = document.getElementById("PlantPositionType_selectmenu_point");
		var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
for(var i = 0;i<=PointLayers.length;i++){

if(PointLayers[i][0] == strUser){
		for(var j = 1;j<= PointLayers[i].length-1 ;j+=3){
		
		var length = TreeModelTable.length;
		TreeModelTable[length]=TreeModel.clone();
		
		TreeModelTable[length].position.set(PointLayers[i][j],PointLayers[i][j+1],PointLayers[i][j+2]);
		
		
		 // create point models
		
		TreeMod.add(TreeModelTable[length]);

		
		}
		
		
		break;
		}
		}
}
if(line){
				var e = document.getElementById("PlantPositionType_selectmenu_line");
	var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
	 
for(var i = 0;i<=LineLayers.length;i++){

if(LineLayers[i][0] == strUser){
	
		var interval = Number(document.getElementById("PlantPos_line_properties_interval").value);
		var TotalModelPotition=[];
		var Reftable = document.getElementById(strUser+"tbody");
		var modPos;
		if(q=="Line"){
			for(var j = 0;j< Reftable.rows.length ;j++){
				
			var count=1;	
			var length = TreeModelTable.length;
			TreeModelTable[length]=TreeModel.clone();
			
			var TreePosX = Number(Reftable.rows[j].cells[2].innerHTML);
			var TreePosY = Number(Reftable.rows[j].cells[3].innerHTML);
			
			
			
			var Pos = UserCoordinatesXY(TreePosX,TreePosY);
			
			TreeModelTable[length].position.set(Pos.x,Pos.y,Pos.z);
			
			TreeMod.add(TreeModelTable[length]);
			
			var TreeEndPosX = Number(Reftable.rows[j].cells[5].innerHTML);
			var TreeEndPosY = Number(Reftable.rows[j].cells[6].innerHTML);
		
			var PosEnd = UserCoordinatesXY(TreeEndPosX,TreeEndPosY);
			TreeModelTable[length+1]=TreeModel.clone();
			TreeModelTable[length+1].position.set(PosEnd.x,PosEnd.y,PosEnd.z);
			TreeMod.add(TreeModelTable[length+1]);
			var Gab = Number(document.getElementById(strUser+"tbody").rows[j].cells[9].innerHTML);
			var TreeNextPos = ThemeliodesProblima_1(TreePosX,TreePosY,interval,Gab);
			
				
				while(count<=Math.floor(Number(Reftable.rows[j].cells[8].innerHTML)/interval)){
					
				length = TreeModelTable.length;
				TreeModelTable[length]=TreeModel.clone();
				
				Pos = UserCoordinatesXY(TreeNextPos.Xb,TreeNextPos.Yb);
				 modPos = world.toMapCoordinates(Pos.x,Pos.y,Pos.z);
				 
				TotalModelPotition.push(modPos.x);
				TotalModelPotition.push(modPos.y);
				TotalModelPotition.push(modPos.z);
				
				TreeModelTable[length].position.set(Pos.x,Pos.y,Pos.z);
				
				TreeMod.add(TreeModelTable[length]);
				TreePosX = TreeNextPos.Xb;
				TreePosY = TreeNextPos.Yb;
				TreeNextPos = ThemeliodesProblima_1(TreePosX,TreePosY,interval,Gab);
				count++;
				}

			 // create point models
			
			TreeMod.add(TreeModelTable[length]);

			
			}
		}
		if(q=="PolyLine"){
			for(var j = 0;j< Reftable.rows.length-1 ;j++){
				
			var count=1;	
			var length = TreeModelTable.length;
			TreeModelTable[length]=TreeModel.clone();
			
			var TreePosX = Number(Reftable.rows[j].cells[2].innerHTML);
			var TreePosY = Number(Reftable.rows[j].cells[3].innerHTML);
			
			
			
			var Pos = UserCoordinatesXY(TreePosX,TreePosY);
			
			TreeModelTable[length].position.set(Pos.x,Pos.y,Pos.z);
			
			TreeMod.add(TreeModelTable[length]);
			
			
			var Gab = Number(document.getElementById(strUser+"tbody").rows[j+1].cells[6].innerHTML);
			var TreeNextPos = ThemeliodesProblima_1(TreePosX,TreePosY,interval,Gab);
			
				
				while(count<=Math.floor(Number(Reftable.rows[j+1].cells[5].innerHTML)/interval)){
					
				length = TreeModelTable.length;
				TreeModelTable[length]=TreeModel.clone();
				
				Pos = UserCoordinatesXY(TreeNextPos.Xb,TreeNextPos.Yb);
				 modPos = world.toMapCoordinates(Pos.x,Pos.y,Pos.z);
				 
				TotalModelPotition.push(modPos.x);
				TotalModelPotition.push(modPos.y);
				TotalModelPotition.push(modPos.z);
				
				TreeModelTable[length].position.set(Pos.x,Pos.y,Pos.z);
				
				TreeMod.add(TreeModelTable[length]);
				TreePosX = TreeNextPos.Xb;
				TreePosY = TreeNextPos.Yb;
				TreeNextPos = ThemeliodesProblima_1(TreePosX,TreePosY,interval,Gab);
				count++;
				}

			 // create point models
			
			TreeMod.add(TreeModelTable[length]);

			
			}
			var length = TreeModelTable.length;
			var TreeEndPosX = Number(Reftable.rows[Reftable.rows.length-1].cells[2].innerHTML);
			var TreeEndPosY = Number(Reftable.rows[Reftable.rows.length-1].cells[3].innerHTML);
		
			var PosEnd = UserCoordinatesXY(TreeEndPosX,TreeEndPosY);
			TreeModelTable[length]=TreeModel.clone();
			TreeModelTable[length].position.set(PosEnd.x,PosEnd.y,PosEnd.z);
			TreeMod.add(TreeModelTable[length]);
		}
		
		break;
		}
		}
}
if(polygon){

				var e = document.getElementById("PlantPositionType_selectmenu_polygon");
					
		var strUser = e.options[e.selectedIndex].value;
		var q = document.getElementById(strUser+"tbody").rows[0].cells[1].innerHTML;
		
		Pos_Type = q;
	 
for(var i = 0;i<PolygonLayers.length;i++){

if(PolygonLayers[i][0] == strUser){
		var TotalModelPotition=[];
		var intervalX = Number(document.getElementById("PlantPos_polygon_properties_intervalX").value);
		var intervalY =  Number(document.getElementById("PlantPos_polygon_properties_intervalY").value);
	
		var Reftable = document.getElementById(strUser+"tbody");
		
		var Rec = CalculateRectanglePosition(PolygonLayers[i],lyr[0].dem[0].plane.width/2+world.mapExtent[0],lyr[0].dem[0].plane.height/2+world.mapExtent[1]);
		
		var checkline = [];
		checkline[0] = Rec.Xmin;
		checkline[1] = Rec.Ymin + intervalY;
		checkline[2] = Rec.Xmax;
		checkline[3] = Rec.Ymin + intervalY;
		var Xintersect;
		var Yintersect;
		var count1 = 0;
		var b1 = Rec.Ymin;
		var PolygonLines = [];	
		for (var q=0;q<Math.floor((Rec.Ymax-Rec.Ymin)/intervalY);q++){
				b1 += intervalY;
			var PolygonLine=[];
			for (var j=0;j<Reftable.rows.length;j++){
				
					
					if(j<Reftable.rows.length-1){
						
						if ((b1<=Number(Reftable.rows[j].cells[3].innerHTML) && b1>=Number(Reftable.rows[j+1].cells[3].innerHTML))||(b1<=Number(Reftable.rows[j+1].cells[3].innerHTML) && b1>=Number(Reftable.rows[j].cells[3].innerHTML))){
							
							var DY2 = Number(Reftable.rows[j].cells[3].innerHTML) - Number(Reftable.rows[j+1].cells[3].innerHTML);
							var DX2 = Number(Reftable.rows[j].cells[2].innerHTML) - Number(Reftable.rows[j+1].cells[2].innerHTML);
							var m2 = DY2/DX2;
							var b2 = Number(Reftable.rows[j].cells[3].innerHTML) - (m2*Number(Reftable.rows[j].cells[2].innerHTML));
							//if the lines intersect then y1=y2 so m1x1+b1 = m2x2+b2
									
							 Xintersect = (b1-b2)/m2;
							 Yintersect = b1;
					
						
							var PolLength = PolygonLine.length;
							PolygonLine[PolLength]= Xintersect;
						
							
						}
					}
					else{
						if ((b1<=Number(Reftable.rows[j].cells[3].innerHTML) && b1>=Number(Reftable.rows[0].cells[3].innerHTML))||(b1<=Number(Reftable.rows[0].cells[3].innerHTML) && b1>=Number(Reftable.rows[j].cells[3].innerHTML))){
							
							var DY2 = Number(Reftable.rows[j].cells[3].innerHTML) - Number(Reftable.rows[0].cells[3].innerHTML);
							var DX2 = Number(Reftable.rows[j].cells[2].innerHTML) - Number(Reftable.rows[0].cells[2].innerHTML);
							var m2 = DY2/DX2;
							var b2 = Number(Reftable.rows[j].cells[3].innerHTML) - (m2*Number(Reftable.rows[j].cells[2].innerHTML));
							//if the lines intersect then y1=y2 so m1x1+b1 = m2x2+b2
									
							 Xintersect = (b1-b2)/m2;
							 Yintersect = b1;
					
						
							
							var PolLength = PolygonLine.length;
							PolygonLine[PolLength]= Xintersect;
							
						}
					}
							
					
			}
			var PolygonLinesLength = PolygonLines.length;
			PolygonLines[PolygonLinesLength] = PolygonLine;
		}
		var TreeMod = new THREE.Object3D();
		 b1 = Rec.Ymin
		if(document.getElementById("PlantPos_polygon_properties_PlaceAtBoundary").checked){
			for(var f=0;f<PolygonLines.length;f++){
			b1 += intervalY;
				PolygonLines[f].sort();
				for(var g=0;g<PolygonLines[f].length;g++){
				
					
								
							
								var length = TreeModelTable.length;
								var PosEnd = UserCoordinatesXY(PolygonLines[f][g],b1);
								var TotalModelPositionLength = TotalModelPotition.length;
								TotalModelPotition[TotalModelPositionLength] = PolygonLines[f][g];
								TotalModelPotition[TotalModelPositionLength+1] = b1;
								TotalModelPotition[TotalModelPositionLength+2] = Number(PosEnd.z);
								TreeModelTable[length]=TreeModel.clone();
								TreeModelTable[length].position.set(PosEnd.x,PosEnd.y,PosEnd.z);
								console.log(PosEnd.x + "," + PosEnd.y + PosEnd.z) 
								TreeMod.add(TreeModelTable[length]);
								
						}
					}
					
				
			}
		 b1 = Rec.Ymin
		 var count=0;
		 if(document.getElementById("PlantPos_polygon_properties_PlaceInside").checked){
			for(var f=0;f<PolygonLines.length;f++){
			b1 += intervalY;
			PolygonLines[f].sort();
				for(var g=0;g<PolygonLines[f].length;g+=2){
					
					if(PolygonLines[f][g]<PolygonLines[f][g+1]){
						while(PolygonLines[f][g]+intervalX<PolygonLines[f][g+1]-intervalX){
								
							count++;
								var length = TreeModelTable.length;
								var PosEnd = UserCoordinatesXY((PolygonLines[f][g]+intervalX),b1);
								var TotalModelPositionLength = TotalModelPotition.length;
								TotalModelPotition[TotalModelPositionLength] = PolygonLines[f][g]+intervalX;
								TotalModelPotition[TotalModelPositionLength+1] = b1;
								TotalModelPotition[TotalModelPositionLength+2] = Number(PosEnd.z);
								TreeModelTable[length]=TreeModel.clone();
								TreeModelTable[length].position.set(PosEnd.x,PosEnd.y,PosEnd.z);
								var s = THREE.Math.randFloat( 0.7, 1.3 );
						TreeModelTable[length].scale.x *=s;
						TreeModelTable[length].scale.y *=s;
						TreeModelTable[length].scale.z *=s;
								TreeMod.add(TreeModelTable[length]);
								PolygonLines[f][g]+=intervalX;
						}
					}
					else{
						while(PolygonLines[f][g]-intervalX>PolygonLines[f][g+1]+intervalX){
								
							count++;
								var length = TreeModelTable.length;
								var PosEnd = UserCoordinatesXY((PolygonLines[f][g]-intervalX),b1);
								var TotalModelPositionLength = TotalModelPotition.length;
								TotalModelPotition[TotalModelPositionLength] = PolygonLines[f][g]-intervalX;
								TotalModelPotition[TotalModelPositionLength+1] = b1;
								TotalModelPotition[TotalModelPositionLength+2] = Number(PosEnd.z);
								TreeModelTable[length]=TreeModel.clone();
								TreeModelTable[length].position.set(PosEnd.x,PosEnd.y,PosEnd.z);
								var s = THREE.Math.randFloat( 0.91, 1.09 );
						TreeModelTable[length].scale.x *=s;
						TreeModelTable[length].scale.y *=s;
						TreeModelTable[length].scale.z *=s;
								TreeMod.add(TreeModelTable[length]);
								PolygonLines[f][g]-=intervalX;
						}
					}
				}
			}
		 }
		
		 
		
		break;
}
}
}
var t = document.getElementById("PlantLayerName").value;


		ModelLayerModels[t+"layer"] = TreeMod;
			scene.add(TreeMod);
			CreatePlantLayer(i,Pos_Type,TotalModelPotition);
}

