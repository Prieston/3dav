var waterMaterial = [];
var ModelLayerModels = {};
 function AddWater(){

 var Layers = PolygonLayers.length;


	

		//check selected
		var e = document.getElementById("GroundPositionType_selectmenu_polygon");
var strUser = e.options[e.selectedIndex].value;

for(var i = 0;i<=PolygonLayers.length;i++){
if(PolygonLayers[i][0] == strUser){
		
		
	
		var WaterPosition = CalculateRectanglePosition(PolygonLayers[i],0,0);
		CreateWater(WaterPosition.Xmin,WaterPosition.Ymin,WaterPosition.Xmax,WaterPosition.Ymax,WaterPosition.CentPointX,WaterPosition.CentPointY);

		
		
			CreateWaterLayer(i);
		break;
		}
		}

}
function CalculateRectanglePosition(tableXY,additionX,additionY){
var Xmin = Infinity;
var Ymin = Infinity;
var Xmax = -Infinity;
var Ymax = -Infinity;
console.log(tableXY)
	for (var i = 1; i <= tableXY.length; i+=3){

		if(tableXY[i]+additionX>Xmax){
			Xmax = tableXY[i]+additionX
			console.log(Xmax)
		}
		if(tableXY[i]+additionX<Xmin){
			Xmin = tableXY[i]+additionX;
			console.log(Xmin)
		}
		if(tableXY[i+1]+additionY>Ymax){
			Ymax = tableXY[i+1]+additionY;
			console.log(Ymax)
		}
		if(tableXY[i+1]+additionY<Ymin){
			Ymin = tableXY[i+1]+additionY;
			console.log(Ymin)
		}
	}
	console.log(world.mapExtent[0])
	
	var CentPointX = Xmin + ((Xmax - Xmin)/2);
	var CentPointY = Ymin + ((Ymax - Ymin)/2);
	console.log(CentPointX,CentPointY)
	return{ Xmin:Xmin, Ymin:Ymin, Xmax:Xmax, Ymax:Ymax
			,CentPointX: CentPointX, CentPointY:CentPointY};
}
function CreateWater(Xmin,Ymin,Xmax,Ymax,CentPointX,CentPointY){


				var waterNormals = new THREE.ImageUtils.loadTexture( 'waternormals.jpeg' );
				waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping; 

				var water = new THREE.Water( renderer, camera, scene, {
					textureWidth: 128, 
					textureHeight: 128,
					waterNormals: waterNormals,
					alpha: 	1.0,
					//sunDirection: light.position.clone().normalize(),
					sunColor: 0xffffff,
					waterColor: 0x001e0f,
					distortionScale: 50.0,
				} );
				var length = waterMaterial.length;
				var width = Xmax-Xmin;
				var height = Ymax - Ymin;
				waterMaterial[length]= water;
				 var mirrorMesh = new THREE.Mesh(
					new THREE.PlaneBufferGeometry( width,height ),
					waterMaterial[length].material
				);
			
			 mirrorMesh.add( waterMaterial[length] );
			//var pos=UserCoordinatesXY(CentPointX,CentPointY);
			
			var z = Number(document.getElementById("WaterLayerZposition").value)+0.01;
			
			mirrorMesh.position.set(CentPointX,CentPointY,z);
		
				var t = document.getElementById("WaterLayerName").value;
				var WaterMod = new THREE.Object3D(); // create point models
				WaterMod.add(mirrorMesh); // create point models
				ModelLayerModels[t+"layer"] = WaterMod;
	
				scene.add( ModelLayerModels[t+"layer"]);
			
				}

	
