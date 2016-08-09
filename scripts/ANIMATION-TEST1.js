<!--------------tests------------------>

	
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
 var geometry = new THREE.Geometry();
 geometry.vertices.push( new THREE.Vector3( -10, 0, 20 ),
						 new THREE.Vector3( 0, 10, 10 ),
						 new THREE.Vector3( 10, 20, 30) 
						 );

 var line = new THREE.Line( geometry, material );
 scene.add( line );


 for (var x=1;x<=5;x++){
	for (var y=1;y<=5;y++){
		 var material = new THREE.LineBasicMaterial({ color: 0x0ff00 });
		 var geometry = new THREE.Geometry();
		 geometry.vertices.push( new THREE.Vector3( x-1, y-1, 2 ),
								 new THREE.Vector3( x, y, 0 ));
							

		var line = new THREE.Line( geometry, material );
		scene.add( line );
	}
 }
  for (x=1;x<=5;x++){
	for (y=1;y<=5;y++){
		 var material = new THREE.LineBasicMaterial({ color: 0x0ff00 });
		 var geometry = new THREE.Geometry();
		 geometry.vertices.push( new THREE.Vector3( x, y, 2 ),
								 new THREE.Vector3( x-1, y-1, 0 ));
							

		var line = new THREE.Line( geometry, material );
		scene.add( line );
	}
 }
   for (x=1;x<=5;x++){
	for (y=1;y<=5;y++){
		 var material = new THREE.LineBasicMaterial({ color: 0x0ff00 });
		 var geometry = new THREE.Geometry();
		 geometry.vertices.push( new THREE.Vector3( x, y+1, 2 ),
								 new THREE.Vector3( x-1, y-1, 0 ));
							

		var line = new THREE.Line( geometry, material );
		scene.add( line );
	}
 }
   for (x=1;x<=5;x++){
	for (y=1;y<=5;y++){
		 var material = new THREE.LineBasicMaterial({ color: 0x0ff00 });
		 var geometry = new THREE.Geometry();
		 geometry.vertices.push( new THREE.Vector3( x, y-1, 2 ),
								 new THREE.Vector3( x-1, y-1, 0 ));
							

		var line = new THREE.Line( geometry, material );
		scene.add( line );
	}
 }
  for (x=1;x<=5;x++){
	for (y=1;y<=5;y++){
		 var material = new THREE.LineBasicMaterial({ color: 0x0ff00 });
		 var geometry = new THREE.Geometry();
		 geometry.vertices.push( new THREE.Vector3( x, y+1.5, 2 ),
								 new THREE.Vector3( x-1., y-1.5, 0 ));
							

		var line = new THREE.Line( geometry, material );
		scene.add( line );
	}
 }
   for (x=1;x<=5;x++){
	for (y=1;y<=5;y++){
		 var material = new THREE.LineBasicMaterial({ color: 0x0ff00 });
		 var geometry = new THREE.Geometry();
		 geometry.vertices.push( new THREE.Vector3( x-1.5, y-1, 2 ),
								 new THREE.Vector3( x+1.5, y-1, 0 ));
							

		var line = new THREE.Line( geometry, material );
		scene.add( line );
	}
 }
<!--------------end tests-------------->
/*--------------------------------------------*/
var balloon = new THREE.Mesh(new THREE.SphereGeometry(option.qmarker.r),
                                   new THREE.MeshLambertMaterial({color: option.qmarker.c, ambient: option.qmarker.c, opacity: option.qmarker.o, transparent: (option.qmarker.o = 1)}));

  scene.add(balloon);
  balloon.position.set(10,0,10);
  balloon.size=null;
    balloon.visible = true;
	itemsize=3;
  // think at a point

        geometry = new THREE.BoxGeometry( 100, 100, 100 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
	
        mesh = new THREE.Mesh( geometry, material );
	
        scene.add( mesh );
		/*var i=0;
		
		setInterval(function (){
		if (i<100){
		i++;
		
		
		geometry = new THREE.BoxGeometry( 10+i, 10+i, 10+i );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true ,wireframeLinewidth: 10} );
	
        mesh1 = new THREE.Mesh( geometry, material );
		mesh1.position.set(0,0,50)
		
        scene.add( mesh1 );
		}
		},1000);
		
	*/
	 
	  geometry = new THREE.BoxGeometry( 1, 1, 5 );
        material = new THREE.MeshBasicMaterial( { color: "red"} );
	
	
	
        mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(0,0,0)
        scene.add( mesh );

/*****************************/