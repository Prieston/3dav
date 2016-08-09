//Layer visualize model
  var pyramidGeometry = new THREE.CylinderGeometry(0, 0.2, 1, 10, false); 
 
                for(i = 0; i < pyramidGeometry.faces.length; i++){ 
                    
                        pyramidGeometry.faces[i].vertexColors[0] = new THREE.Color(0x333333); 
                      
                            pyramidGeometry.faces[i].vertexColors[1] = new THREE.Color(0xff0000);
							pyramidGeometry.faces[i].vertexColors[2] = new THREE.Color(0xff0000); 
                          
                         
               }
  
            
               var pyramidMaterial = new THREE.MeshBasicMaterial({ 
                     vertexColors:THREE.VertexColors, 
                    side:THREE.DoubleSide 
                 }); 
  
               
                 PointModel = new THREE.Mesh(pyramidGeometry, pyramidMaterial);   
				 PointModel.rotation.x = -Math.PI/2;
