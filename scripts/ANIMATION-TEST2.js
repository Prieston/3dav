
var geometry = new THREE.BoxGeometry( 30, 30, 30 );
 var texture = THREE.ImageUtils.loadTexture("./images/crate.jpg");

var imageMat = new THREE.MeshBasicMaterial( {color:"white", map: texture } );

var mesh = new THREE.Mesh(geometry, imageMat);
mesh.position.set(30,30,20);
scene.add( mesh );
////////////////
    var geometry = new THREE.CubeGeometry( 10, 10, 10);
    var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
 
    mesh = new THREE.Mesh(geometry, material );
    mesh.position.z = -50;
    scene.add( mesh );
//////////////////////
var imagTxr = imagTxr = THREE.ImageUtils.loadTexture( './images/crate.jpg' );

var geometry = new THREE.Geometry();
var v1 = new THREE.Vector3(0,0,15);   // Vector3 used to specify position
var v2 = new THREE.Vector3(10,0,20);
var v3 = new THREE.Vector3(10,10,15);
var v4 = new THREE.Vector3(0,10,20);
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

var redMat = new THREE.MeshBasicMaterial({color: 0xff0000 , side: THREE.DoubleSide ,wireframe:false,map:imagTxr});

var poligon = new THREE.Mesh(geometry, redMat);
scene.add(poligon)
//////=====================================================
var imagTxr = imagTxr = THREE.ImageUtils.loadTexture( './images/crate.jpg' );

var geometry = new THREE.Geometry();
var v1 = new THREE.Vector3(10,0,10);   // Vector3 used to specify position
var v2 = new THREE.Vector3(0,10,10);
var v3 = new THREE.Vector3(30,0,10);


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



geometry.faces.push(new THREE.Face3(0, 2, 1));
 geometry.faceVertexUvs[ 0 ].push( [ uvs[0], uvs[1], uvs[2] ] );


var redMat = new THREE.MeshBasicMaterial({color: 0xff0000 , side: THREE.DoubleSide ,wireframe:false,map:imagTxr});

var poligon = new THREE.Mesh(geometry, redMat);
poligon.position.set(-10,-10,50)
scene.add(poligon)
//////=====================================================*/
