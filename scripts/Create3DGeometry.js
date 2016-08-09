function Create3DGeometry(){
	var e = document.getElementById("3DGeometryType_selectmenu");
	var strUser = e.options[e.selectedIndex].value;
	if(strUser == "Box"){
		var  WidthX = document.getElementById("BoxLength").value;
		var  DepthZ= document.getElementById("BoxWidth").value;
		var  HeightY = document.getElementById("BoxHeight").value;
		var geometry = new THREE.BoxGeometry( WidthX, DepthZ,HeightY);
		var color = "#" + document.getElementById("3DGeometryColor").value;
		var opacity = document.getElementById("3DGeometryOpacity").value;

				if(document.getElementById("3DGeometryWireFrame").checked){
					var wireframe= true;
				}
				else{var wireframe= false;}

		var material = new THREE.MeshPhongMaterial( { ambient: color, color: color,  shininess: 30,transparent:true,opacity:opacity,wireframe:wireframe } );
		var cube = new THREE.Mesh( geometry, material );
		
		var e = document.getElementById("3DGeometryBox_selectmenu_positionType");
		var strUser = e.options[e.selectedIndex].value;
		if(strUser == "0,0,0"){
			
	cube.position.set(0,0,0);
		}
		
		
		scene.add( cube );
	}
	
}