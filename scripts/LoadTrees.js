

var loader = new THREE.JSONLoader();
var Trees_Banana=[];
var Trees_Beech=[];
var Trees_Bamboo=[];
var Trees_Bougainvillier=[];
var Trees_Dracena=[];
var Trees_Elm=[];

var Trees_Flamboyant=[];
var Trees_Ginger=[];

var Trees_Greenhouse_palm_acai=[];
var Trees_Greenhouse_palm_cycas=[];
var Trees_Greenhouse_palm_jubaea=[];

var Trees_Palm_arecaceae=[];
var Trees_Pine=[];

var Trees_Wintertree=[];
var Grass_Grass_01 = [];

function LoadTrees(name,callback){
		var callback = callback || function(){}
		// model



				

				
			if(name == "Beech"){
			   loader.load( "./models/trees/Beech/Beech.json", function( geometry, materials ) {
				   var scale = 20/ (MapWidth*0.5/25);
				Beech =	addMorphTree(geometry,materials,scale);
			
				} );
			}
			if(name == "Bamboo"){
			 loader.load( "./models/trees/Bamboo/Bamboo.json", function( geometry, materials ) {
			  var scale = 20/ (MapWidth*0.5/4.5);
			Bamboo =	addMorphTree(geometry,materials,scale);
				
            } );
			}
			if(name == "Banana"){
			loader.load( "./models/trees/Banana/Banana.json", function( geometry, materials ) {
				 var scale = 20/ (MapWidth*0.5/2.5);
			Banana = addMorphTree(geometry,materials,scale);

            } );
			}
			if(name == "Bougainvillier"){
			loader.load( "./models/trees/Bougainvillier/Bougainvillier.json", function( geometry, materials ) {
			var scale = 20/ (MapWidth*0.5/6);
			Bougainvillier =	addMorphTree(geometry,materials,scale);
			
		
			
				
            } );
			}
			if(name == "Dracena"){
			loader.load( "./models/trees/Dracena/Dracena.json", function( geometry, materials ) {
			var scale = 20/ (MapWidth*0.5/7);
			Dracena =	addMorphTree(geometry,materials,scale);
				
            } );
			}
			if(name == "Elm"){
			loader.load( "./models/trees/Elm/Elm.json", function( geometry, materials ) {
			var scale = 20/ (MapWidth*0.5/7);
			Elm =	addMorphTree(geometry,materials,scale);
	
            } );
			}
			if(name == "Flamboyant"){
					
					loader.load( "./models/trees/Flamboyant/Flamboyant.json", function( geometry, materials ) {
			var scale = 20/ (MapWidth*0.5/5);
			Flamboyant =	addMorphTree(geometry,materials,scale);
				
            } );
			}
			if(name == "Ginger"){
					loader.load( "./models/trees/Ginger/Ginger.json", function( geometry, materials ) {
			 var scale = 20/ (MapWidth*0.5/4.5);
			Ginger =	addMorphTree(geometry,materials,scale);
				
            } );
			}
			
			
			
			if(name == "Palm_arecaceae"){		
		
					loader.load( "./models/trees/Palm-arecaceae/Palm-arecaceae.json", function( geometry, materials ) {
			var scale = 20/ (MapWidth*0.5/6);
			Palm_arecaceae =	addMorphTree(geometry,materials,scale);
				
            } );
			}
			if(name == "Pine"){
					loader.load( "./models/trees/Pine/Pine.json", function( geometry, materials ) {
			var scale = 20/ (MapWidth*0.5/40);
			Pine =	addMorphTree(geometry,materials,scale);
				
            } );
			}
			if(name == "Wintertree"){		
					loader.load( "./models/trees/Wintertree/Wintertree.json", function( geometry, materials ) {
			var scale = 20/ (MapWidth*0.5/8);
			Wintertree =	addMorphTree(geometry,materials,scale);
				
            } );
			}
				
				callback();
}	


function addMorphTree(geometry,material,scale){
	
				mat=new THREE.MeshFaceMaterial( material );
				mat.side=THREE.DoubleSide;
				Tree = new THREE.Mesh( geometry,mat);
                Tree.scale.set(scale,scale,scale);
				//Tree.position.set(x,y,z);
				Tree.rotation.x = Math.PI/2;
				
                //scene.add( Tree );
			return Tree;}