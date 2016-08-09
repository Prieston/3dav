///////////////////////////////////////
				// model


function LoadOther(name){
				

				var onProgress = function ( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete, 2) + '% downloaded' );
					}
				};

				var onError = function ( xhr ) {
				};
				THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
			
			if (name == "House"){
				var loader = new THREE.OBJMTLLoader();
				loader.load( 'models/House/house_obj/house_obj.obj', 'models/House/house_obj/house_obj.mtl', function ( object ) {
					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.side = THREE.DoubleSide;

						}

					} );
					
				
					object.rotation.x = Math.PI/2;
					 var scale = 0.15/ (MapWidth*0.5/3);//upsos tabani
					object.scale.set(scale,scale,scale);
					House = object;
					
					
				}, onProgress, onError );
				}
				if (name == "Car"){
				var loader = new THREE.OBJMTLLoader();
				loader.load( 'models/L200-OBJ/L200-OBJ.obj', 'models/L200-OBJ/L200-OBJ.mtl', function ( object ) {
					
					
				
					object.rotation.x = Math.PI/2;
				//	 var scale = 0.15/ (MapWidth*0.5/3);//upsos tabani
					//object.scale.set(scale,scale,scale);
					
					
				
					object.position.set(0,0,0);
				
					var scale = 0.5/ (MapWidth*0.5/4);//upsos tabani
					object.scale.set(scale,scale,scale);
				
					Car = object;
					
				}, onProgress, onError );
				}
				
}
				//