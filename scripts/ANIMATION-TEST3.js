 geometry = new THREE.BoxGeometry( 30, 30, 30 );
var texture = texture = THREE.ImageUtils.loadTexture( './images/crate.jpg' );

var imageMat = new THREE.MeshBasicMaterial( {color:"white", map: texture } );

var fillMesh = new THREE.Mesh(geometry, imageMat);
fillMesh.position.set(0,0,100);
scene.add( fillMesh );

////////////////////////////////////
var i=0;
/*
setInterval(frame(),1000);


//////////////////////////////////////
var myVar=setInterval(function () {frame()}, 1);

function frame(){
if (i<100){
fillMesh.position.set(0+i,0,20);

i+=0.1;}
else{
fillMesh.position.set(0,0,20);
i=0;}
}
*/
///////////////////////


 (function animloop(){
        //Get metrics
        if (i<100){
fillMesh.position.set(0+i,0,20);

i+=0.5;}
else{
fillMesh.position.set(0,0,20);
i=0;}
        requestAnimFrame(animloop);
    })();
	
	////////////////////////////////////////
	var j=0;
	var q=0;
	var up;
	var imagTxr = imagTxr = THREE.ImageUtils.loadTexture( './images/birdsEyeView.jpg' );

var geometry = new THREE.Geometry();

var v1 = new THREE.Vector3(0,0,50);   // Vector3 used to specify position
var v2 = new THREE.Vector3(10,0,40);
var v3 = new THREE.Vector3(10,10,50);
var v4 = new THREE.Vector3(0,10,40);

   // 2d = all vertices in the same plane.. z = 0

// add new geometry based on the specified positions
geometry.vertices.push(v1);
geometry.vertices.push(v2);
geometry.vertices.push(v3);
geometry.vertices.push(v4);

var uvs = [];
    uvs.push( new THREE.Vector2( 0.0, 0.0 ) );
    uvs.push( new THREE.Vector2( 1.0, 0.0 ) );
    uvs.push( new THREE.Vector2( 1.0, 1.0 ) );
    uvs.push( new THREE.Vector2( 0.0, 1.0 ) );


geometry.faces.push(new THREE.Face3(0, 2, 1));
 geometry.faceVertexUvs[ 0 ].push( [ uvs[0], uvs[2], uvs[1] ] );
 
geometry.faces.push(new THREE.Face3(0, 3, 2));
 geometry.faceVertexUvs[ 0 ].push( [ uvs[0], uvs[3], uvs[2] ] );

var redMat = new THREE.MeshBasicMaterial({color: "white" , transparent: true, opacity: 1, side: THREE.DoubleSide ,wireframe:false,map:imagTxr});

var poligon = new THREE.Mesh(geometry, redMat);

scene.add(poligon);

(function animloop(){
        //Get metrics
        if (j<20){
		j+=0.5;
		v2.set(10,0,40+j);
		v4.set(0,10,40+j);
		geometry.verticesNeedUpdate = true;
		geometry.dynamic = true;
}

else{
		
		q+=0.5;
		v2.set(10,0,40+j-q);
		v4.set(0,10,40+j-q);
		geometry.verticesNeedUpdate = true;
		geometry.dynamic = true;
		
}
		if(q==20){
		j=0
		q=0;
		}

        requestAnimFrame(animloop);
    })();
////
var alpha=0;
var radius=20;
(function animloop(){
  if(alpha<=6.28){
		poligon.position.set(Math.cos(alpha) * radius,Math.sin(alpha) * radius,55);
		alpha+=0.05;
}



if (alpha>=6.28){alpha=0;}
        requestAnimFrame(animloop);
    })();

