
var morphs=[];
function LoadAnimals(name){
	if(name=="Horse"){
		loader.load( "./models/animated-animals/horse.js", function( geometry ) {
						
						
						Horse = addMorphAnimal(geometry) ;
					
		} );
	}
}

function addMorphAnimal( geometry ) {
					morphColorsToFaceColors( geometry ); 
					geometry.computeMorphNormals();
					var texture=THREE.ImageUtils.loadTexture( ['./images/horse.jpg'] );
					var material = new THREE.MeshPhongMaterial( {  color: 0xffffff, specular: 0xffffff,map:texture, shininess: 10, morphTargets: true, morphNormals: true, vertexColors: THREE.FaceColors, shading: THREE.SmoothShading} );
					
					var Animal = new THREE.MorphAnimMesh( geometry, material );
				

					
					var scale = 0.2/ (MapWidth*0.5/2.5); // scale at 2.5 m width map(original horse length)/scale to mapwidth
					Animal.scale.set(scale,scale,scale);
					Animal.castShadow = true;
					Animal.receiveShadow = true;
					Animal.rotation.x = Math.PI/2;
					return Animal;
}

function morphColorsToFaceColors( geometry ) {

				if ( geometry.morphColors && geometry.morphColors.length ) {

					var colorMap = geometry.morphColors[ 0 ];

					for ( var i = 0; i < colorMap.colors.length; i ++ ) {

						geometry.faces[ i ].color = colorMap.colors[ i ];
					}

				}
}
function animate() {

				requestAnimationFrame( animate );

				render();
				stats.update();
}