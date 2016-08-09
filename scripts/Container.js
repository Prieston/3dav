var clientWidth,clientHeight,container,width,height,renderer,scene,camera,controls,cubemap,queryMarker,Xa,Ya,skyBox;


							var MrkAreaX=[];

							var MrkAreaY=[];
							var MrkAreaZ=[];
							var ModelName;
							var C=-1;

							window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {

	
width=window.innerWidth;
height=window.innerHeight;
controls.handleResize(); // for TrackballControls

    camera.aspect =  width/ height;
    camera.updateProjectionMatrix();
    renderer.setSize( width, height );

}
function test(){
	var Xmin =0;
var Ymin = 0;
var Xmax = 100;
var Ymax =50;
var PxlRes = 1;
var worldPxlWidth = (Math.abs(Xmax)-Math.abs(Xmin))/PxlRes;
var worldPxlHeight = (Math.abs(Ymax)-Math.abs(Ymin))/PxlRes;
 DemWidth = 3;
 DemHeight = 3;
var offsetX = 0;
var offsetY = 0;

	world = new World([Xmin,Ymin,Xmax,Ymax],(Xmax-Xmin)/PxlRes,PxlRes,0.0);
	lyr[0] = new MapLayer({q:1,stats:{max:10,min:0},type:"dem",name:"TEO",dem:[{width:DemWidth,s:{},plane:{width:worldPxlWidth,offsetX:offsetX,offsetY:offsetY,height:worldPxlHeight},t:{},height:DemHeight}]});
	lyr[0].dem[0].data = [];
	
	var CoordTable = document.getElementById("CreateWorld_Table_tbody");
	var CoordTableLength = 9;
	for(var i = 0;i<CoordTableLength;i++){
		var row = lyr[0].dem[0].data.length;
		lyr[0].dem[0].data[row] = 0;
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
	mat =  new THREE.MeshPhongMaterial({ambient:"white",shininess:20,color:"green",wireframe:false});
	var plane2 = plane.clone();
	plane2.material = mat;
	plane2.material.needsUpdate = true;
	planeMaterials["GeometrySolid"] = plane2;
	scene.add(planeMaterials["GeometrySolid"]);
	
	
	
		
	document.getElementById("GeometryWireframe").checked = true;
	document.getElementById("GeometryWireframe").disabled = false;
	document.getElementById("GeometrySolid").checked = true;
	document.getElementById("GeometrySolid").disabled = false;
}

function main(){
if (!scene){
	createContainer();
createWebGlStandards();
cubemap();
querymarker();
//testme();
models();
}

}

function createContainer(){

container = document.getElementById('webgl');
							  width = window.innerWidth, height =window.innerHeight;
								
							  // parse URL parameters
							  vars = parseParams();


}

function createWebGlStandards(){

			 renderer = new THREE.WebGLRenderer({alpha: (option.bgcolor === undefined),logarithmicDepthBuffer: false,antialias: true});	
			 	
			

				renderer.setSize( window.innerWidth, window.innerHeight );
				 renderer.setClearColor(option.bgcolor || 0, (option.bgcolor === undefined) ? 0 : 1);
				// renderer.sortObjects = false;
		
							  scene = new THREE.Scene();
							  
							 

							 
 
							  // camera and controls
							   camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 0.1, 1000000 );
				camera.position.set( 0,0,70 );
 
							   controls = createControls(camera, renderer.domElement);
							
							 

// light
							  buildLights(scene);


				var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.1 );
directionalLight.position.set( 0, 0, 2000000 );
scene.add( directionalLight );
				
				/******************************************************************************************************************************
							  scene.fog = new THREE.Fog( 0x999999, 10, 150 );
							  
							
							   light = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI/2, 1 );
				light.position.set( 0, 1500, 1000 );
				light.target.position.set( 0, 0, 0 );

				light.castShadow = true;

				light.shadowCameraNear = 10;
				light.shadowCameraFar = camera.far;
				light.shadowCameraFov = 50;

				//light.shadowCameraVisible = true;

				light.shadowBias = 0.0001;
				light.shadowDarkness = 0.5;

				light.shadowMapWidth = SHADOW_MAP_WIDTH;
				light.shadowMapHeight = SHADOW_MAP_HEIGHT;

				scene.add( light );
				
				world.castShadow = false;
				world.receiveShadow = true;
				*/
							  restoreView(controls);

							  addDefaultKeyEventListener();


}

function cubemap(){

	 
// load skybox

				var cubeMap = new THREE.CubeTexture( [] );
				cubeMap.format = THREE.RGBFormat;
				cubeMap.flipY = false;

				var loader = new THREE.ImageLoader();
				loader.load( 'skyboxsun25degtest.png', function ( image ) {

					var getSide = function ( x, y ) {

						var size = 1024;

						var canvas = document.createElement( 'canvas' );
						canvas.width = size;
						canvas.height = size;

						var context = canvas.getContext( '2d' );
						context.drawImage( image, - x * size, - y * size );

						return canvas;

					};

					cubeMap.images[ 0 ] = getSide( 2, 1 ); // px
					cubeMap.images[ 1 ] = getSide( 0, 1 ); // nx
					cubeMap.images[ 2 ] = getSide( 1, 0 ); // py
					cubeMap.images[ 3 ] = getSide( 1, 2 ); // ny
					cubeMap.images[ 4 ] = getSide( 1, 1 ); // pz
					cubeMap.images[ 5 ] = getSide( 3, 1 ); // nz
					cubeMap.needsUpdate = true;

				} );

				var cubeShader = THREE.ShaderLib['cube'];
				cubeShader.uniforms['tCube'].value = cubeMap;

				var skyBoxMaterial = new THREE.ShaderMaterial( {
					fragmentShader: cubeShader.fragmentShader,
					vertexShader: cubeShader.vertexShader,
					uniforms: cubeShader.uniforms,
					depthWrite: false,
					side: THREE.BackSide
				});
 var texture = THREE.ImageUtils.loadTexture("./images/sky/sky.jpg");

var imageMat = new THREE.MeshBasicMaterial( {color:"white", map: texture,side: THREE.BackSide} );
				 skyBox = new THREE.Mesh(
					new THREE.BoxGeometry( 10000000000000000000000000000000000000, 10000000000000000000000000000000000000, 10000000000000000000000000000000000000),
					imageMat
				);
				
				scene.add( skyBox );
				


								/*	
									Grass_Grass_01[0] = Grass_01;	
									Grass_Grass_01[0].position.set(0,0,0); 	
									scene.add(Grass_Grass_01[0]);	
									*/

}
function querymarker(){

// marker at queried point
							  queryMarker = new THREE.Mesh(new THREE.SphereGeometry(option.qmarker.r),
															   new THREE.MeshLambertMaterial({color: option.qmarker.c, ambient: option.qmarker.c, opacity: option.qmarker.o, transparent: (option.qmarker.o < 1)}));
							  queryMarker.visible = false;
							  scene.add(queryMarker);
}

function models(){
 // build models
							  buildModels(scene);

							  
							 
							  
						container.appendChild(renderer.domElement);
						render();
}

function cameraPosition(){
	
	var pt = world.toMapCoordinates(camera.position.x,camera.position.y,camera.position.z);
	
	return pt.z;
}

function render() {
///////////test//////
for (var i = 0;i<waterMaterial.length;i++){
if(waterMaterial.length>0){
var time = performance.now() * 0.001;
waterMaterial[i].material.uniforms.time.value += 1.0 / 120.0;
waterMaterial[i].render();
};
}
var delta = clock.getDelta();

				for ( var i = 0; i < morphs.length; i++ ) {
				
					morph = morphs[ i ];
					if (AnimationData[i][0] == "Point"){
						
						morph.updateAnimation(1500* delta );
				
					}
					if (AnimationData[i][0] == "Line"){
						
							var CurX = Number(document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[2].innerHTML);
							
							var CurY = Number(document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[3].innerHTML);
							
							var CurZ = Number(document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[4].innerHTML);
							
							
							var pos = CalculateDeltaPosition(CurX,CurY,CurZ,delta,i,"check",AnimationData[i]);
							
							var XEnd = Number(document.getElementById(document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[5].innerHTML + "tbody").rows[AnimationData[i][2]].cells[5].innerHTML);
							var YEnd = Number(document.getElementById(document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[5].innerHTML + "tbody").rows[AnimationData[i][2]].cells[6].innerHTML);
							var EndXY = UserCoordinatesXY(XEnd,YEnd);
							
						
							if((Math.abs(morph.position.x - EndXY.x) > Math.abs(pos.x - EndXY.x)|| Math.abs(morph.position.y - EndXY.y) > Math.abs(pos.y - EndXY.y) )){
						
								
								morph.updateAnimation(1500* delta );
					
								var pos = CalculateDeltaPosition(CurX,CurY,CurZ,delta,i,"run",AnimationData[i]);
								morph.position.set(pos.x,pos.y,pos.z);
									;
								var rot = CalculateDeltaRotation(i,AnimationData[i],AnimationRotationData[i]);
							morph.rotateX(rot.x);
								//morph.rotation.x = rot.x+Math.PI/2;
							//	morph.rotation.z = rot.y;
									
							}
						
									else{
									var RefPositionTable = document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[5].innerHTML;
									
									document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[2].innerHTML = document.getElementById(RefPositionTable+"tbody").rows[AnimationData[i][2]].cells[2].innerHTML;
									document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[3].innerHTML = document.getElementById(RefPositionTable+"tbody").rows[AnimationData[i][2]].cells[3].innerHTML;

									document.getElementById(AnimationData[i][1]).rows[AnimationData[i][2]].cells[4].innerHTML = document.getElementById(RefPositionTable+"tbody").rows[AnimationData[i][2]].cells[4].innerHTML;
									
									var modelPos = UserCoordinatesXY(Number(document.getElementById(RefPositionTable+"tbody").rows[AnimationData[i][2]].cells[2].innerHTML),Number(document.getElementById(RefPositionTable+"tbody").rows[AnimationData[i][2]].cells[3].innerHTML))
									
									morph.position.set(modelPos.x,modelPos.y,modelPos.z);
								
								}
						
					}
					if (AnimationData[i][0] == "PolyLine"){
	
							var RefRow=Number(document.getElementById(AnimationData[i][1]).rows[0].cells[6].innerHTML)-1;
							var RefPosTable =  document.getElementById(AnimationData[i][1]).rows[0].cells[5].innerHTML+ "tbody";
							
							var CurX = Number(document.getElementById(AnimationData[i][1]).rows[0].cells[2].innerHTML);
								
							var CurY = Number(document.getElementById(AnimationData[i][1]).rows[0].cells[3].innerHTML);
							
							var CurZ = Number(document.getElementById(AnimationData[i][1]).rows[0].cells[4].innerHTML);
								
							var pos = CalculateDeltaPosition(CurX,CurY,CurZ,delta,i,"check",AnimationData[i]);
								
							var XEnd = Number(document.getElementById(RefPosTable).rows[RefRow+1].cells[2].innerHTML);
							
							var YEnd = Number(document.getElementById(RefPosTable).rows[RefRow+1].cells[3].innerHTML);
							var EndXY = UserCoordinatesXY(XEnd,YEnd);
							
						
							if((Math.abs(morph.position.x - EndXY.x) > Math.abs(pos.x - EndXY.x)|| Math.abs(morph.position.y - EndXY.y) > Math.abs(pos.y - EndXY.y) )){
						
								
								morph.updateAnimation(1500* delta );
					
								var pos = CalculateDeltaPosition(CurX,CurY,CurZ,delta,i,"run",AnimationData[i]);
								morph.position.set(pos.x,pos.y,pos.z);
								var rot = CalculateDeltaRotation(i,AnimationData[i],AnimationRotationData[i]);
							
							morph.rotateX(rot.x);
							
							}
							
							else{
								if(RefRow+1<AnimationData[i][2]-1){
									
									document.getElementById(AnimationData[i][1]).rows[0].cells[2].innerHTML = XEnd;
									document.getElementById(AnimationData[i][1]).rows[0].cells[3].innerHTML = YEnd;
									document.getElementById(AnimationData[i][1]).rows[0].cells[6].innerHTML = RefRow+2;
									var angleLength =document.getElementById(RefPosTable).rows[0].cells.length-1;
									var angleA = Number(document.getElementById(RefPosTable).rows[RefRow+2].cells[angleLength].innerHTML);
									var angleB = Number(document.getElementById(RefPosTable).rows[RefRow+1].cells[angleLength].innerHTML);
									//morph.rotateY((angleB-angleA)/63.6619772367581);
									morph.rotation.set( Math.PI/2, (200-angleA)/63.6619772367581, 0, 'XYZ' );
								
																		AnimationRotationData[i][3]=0;
									AnimationRotationData[i][4]=0;
									
								}
								else{
									
									document.getElementById(AnimationData[i][1]).rows[0].cells[2].innerHTML = document.getElementById(RefPosTable).rows[0].cells[2].innerHTML ;
									document.getElementById(AnimationData[i][1]).rows[0].cells[3].innerHTML = document.getElementById(RefPosTable).rows[0].cells[3].innerHTML ;
									document.getElementById(AnimationData[i][1]).rows[0].cells[4].innerHTML = document.getElementById(RefPosTable).rows[0].cells[4].innerHTML ;
									document.getElementById(AnimationData[i][1]).rows[0].cells[6].innerHTML = 0;
									var angleLength =document.getElementById(RefPosTable).rows[0].cells.length-1;
									var angleA = Number(document.getElementById(RefPosTable).rows[1].cells[angleLength].innerHTML);
									var RowsLength = Number(document.getElementById(RefPosTable).rows.length)-1;
									var angleB = Number(document.getElementById(RefPosTable).rows[RowsLength].cells[angleLength].innerHTML);
									
									
									//morph.rotateY((angleB)/63.6619772367581);
									morph.rotation.set( Math.PI/2, (200)/63.6619772367581, 0, 'XYZ' );
									
									AnimationRotationData[i][3]=0;
									AnimationRotationData[i][4]=0;
									
								
								}
							}
						
						
					}
				}
				
				for ( var i = 0; i < CarMorphs.length; i++ ) {
					morph = CarMorphs[i];
				
					if (CarAnimationData[i][0] == "Line"){
						
							var CurX = Number(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[2].innerHTML);
							
							var CurY = Number(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[3].innerHTML);
							
							var CurZ = Number(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[4].innerHTML);
							
							var pos = CalculateDeltaPosition(CurX,CurY,CurZ,delta,i,"check",CarAnimationData[i]);
							
							var XEnd = Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows[CarAnimationData[i][2]].cells[5].innerHTML);
							var YEnd = Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows[CarAnimationData[i][2]].cells[6].innerHTML);
							var EndXY = UserCoordinatesXY(XEnd,YEnd);
							
						
							if((Math.abs(morph.position.x - EndXY.x) > Math.abs(pos.x - EndXY.x)|| Math.abs(morph.position.y - EndXY.y) > Math.abs(pos.y - EndXY.y) )){
						
								
								
					
								var pos = CalculateDeltaPosition(CurX,CurY,CurZ,delta,i,"run",CarAnimationData[i]);
								morph.up.set(0,0,1);
var PointToLookat = new THREE.Vector3(pos.x,pos.y,pos.z);
morph.lookAt( PointToLookat );
								morph.position.set(pos.x,pos.y,pos.z);
									;
								var rot = CalculateDeltaRotation(i,CarAnimationData[i],CarAnimationRotationData[i]);
							
					
					var angleLength = Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows.length)-1;
							
					var G = Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows[CarAnimationData[i][2]].cells[angleLength].innerHTML);
	/*////
var quaternion = new THREE.Quaternion();
var angle = (-G)/(200/Math.PI);
quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), angle);

var vector = new THREE.Vector3( 1, 0, 0 );
vector.applyQuaternion( quaternion );		
morph.rotateOnAxis(vector,rot.x);		
//////*/


/*				//X rotate
var vectorX = new THREE.Vector3( 1, 0, 0 );
var axis = new THREE.Vector3( 0, 1, 0 );
var angle = (-G)/(200/Math.PI);
vectorX.applyAxisAngle( axis, angle );
morph.rotateOnAxis(vectorX,rot.x);
//Y rotate
var vectorY = vectorX.clone();
var axis = new THREE.Vector3( 0, 1, 0 );
var angle = Math.PI/2;
vectorY.applyAxisAngle( axis, angle );
morph.rotateOnAxis(vectorY,rot.y);			
*/


/*
var raycaster = new THREE.Raycaster();

raycaster.set(morph.position,new THREE.Vector3(0,-1,0).normalize());
var intersects = raycaster.intersectObject( planeMaterials["GeometrySolid"] );
if ( intersects.length > 0 ) {

			//document.getElementById("help").innerHTML = "asdfsadfsdafasdfsadf";	
					
					morph.Up( intersects[ 0 ].face.normal);
					morph.lookAt (vectorY.normalize());
				//	morph.rotation.x = Math.PI/2;
					intersects[ 0 ].face.color.setRGB( Math.random(),
Math.random(), Math.random());

}
*/


					//morph.rotateX(rot.x);
					//morph.rotateZ(rot.y);
					//morph.rotateY(0);
				
					
							
								
									
							}
						
									else{
									var RefPositionTable = document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML;
									
									document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[2].innerHTML = document.getElementById(RefPositionTable+"tbody").rows[CarAnimationData[i][2]].cells[2].innerHTML;
									document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[3].innerHTML = document.getElementById(RefPositionTable+"tbody").rows[CarAnimationData[i][2]].cells[3].innerHTML;

									document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[4].innerHTML = document.getElementById(RefPositionTable+"tbody").rows[CarAnimationData[i][2]].cells[4].innerHTML;
									
									var modelPos = UserCoordinatesXY(Number(document.getElementById(RefPositionTable+"tbody").rows[CarAnimationData[i][2]].cells[2].innerHTML),Number(document.getElementById(RefPositionTable+"tbody").rows[CarAnimationData[i][2]].cells[3].innerHTML))
									
									morph.position.set(modelPos.x,modelPos.y,modelPos.z);
									var G = Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows[CarAnimationData[i][2]].cells[9].innerHTML);
								
								morph.rotation.set(Math.PI/2, -(G+200)/(200/Math.PI) , 0)
								
								CarAnimationRotationData[i][0]=Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows[CarAnimationData[i][2]].cells[2].innerHTML);
								
								CarAnimationRotationData[i][1]=Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows[CarAnimationData[i][2]].cells[3].innerHTML);
								
								CarAnimationRotationData[i][2]=Number(document.getElementById(document.getElementById(CarAnimationData[i][1]).rows[CarAnimationData[i][2]].cells[5].innerHTML + "tbody").rows[CarAnimationData[i][2]].cells[4].innerHTML);
								
								CarAnimationRotationData[i][3]=0;
								CarAnimationRotationData[i][4]=0;
								
									
								}
						
					}
					
				}

				
/////////////////////
 
								controls.update();
							//	 setTimeout( function() {
								requestAnimationFrame(render);
							//	}, 1000 / 100 );
								
								updateLabels();
							
								

								
						

				renderer.clear();
				renderer.render(scene, camera);						
							  }


 // Called from *Controls.js when canvas is clicked
function canvas_clicked(e) {
							  
							  
							 
						
								var objs = intersectObjects(e.clientX, e.clientY);
								
								for (var i = 0, l = objs.length; i < l; i++) {

								  if (objs[i].object.visible) {
									showQueryResult(objs[i]);
									return;
								  }
								}
								
							  }

  function showQueryResult(obj) {
								queryMarker.position.set(obj.point.x, obj.point.y, obj.point.z);
								queryMarker.visible = true;
								var object = obj.object;
								var pt = world.toMapCoordinates(obj.point.x, obj.point.y,obj.point.z);
								

								var r = [];
								
								
								r.push(" X: " + pt.x.toFixed(4));
								r.push(" Y: " + pt.y.toFixed(4));
								r.push(" Z: " + pt.z.toFixed(4));
							  
					//			r.push(" ZC: " + posZ(pt.x,pt.y));
								
						
								
								/*MY ADDITIONAL CODE*/
																/////////////////////


							  
							
							
							//////////////
							/////////////////////
							//	addGrass(obj.point.x, obj.point.y, obj.point.z);
							//////////////
							if(document.getElementById('CreatePointLayer').style.display=="block"){
								var CLT_Point_Length = CLT_Point.length;
								CLT_Point[CLT_Point_Length]=obj.point.x;
								CLT_Point[CLT_Point_Length+1]=obj.point.y;
								CLT_Point[CLT_Point_Length+2]=obj.point.z;
								CreatePointLayerTable(pt.x.toFixed(4),pt.y.toFixed(4),pt.z.toFixed(4));
							}
							if(document.getElementById('CreateLineLayer').style.display=="block"){
								var CLT_Line_Length = CLT_Line.length;
								CLT_Line[CLT_Line_Length]=obj.point.x;
								CLT_Line[CLT_Line_Length+1]=obj.point.y;
								CLT_Line[CLT_Line_Length+2]=obj.point.z;
								CreateLineLayerTable(pt.x.toFixed(4),pt.y.toFixed(4),pt.z.toFixed(4));
							}
							if(document.getElementById('CreatePolygonLayer').style.display=="block"){
								var CLT_Polygon_Length = CLT_Polygon.length;
								CLT_Polygon[CLT_Polygon_Length]=obj.point.x;
								CLT_Polygon[CLT_Polygon_Length+1]=obj.point.y;
								CLT_Polygon[CLT_Polygon_Length+2]=obj.point.z;
								CreatePolygonLayerTable(pt.x.toFixed(4),pt.y.toFixed(4),pt.z.toFixed(4));
							}
							
						
							
								document.getElementById("coords").innerHTML = r.join();
								
							  }
							 
 
 