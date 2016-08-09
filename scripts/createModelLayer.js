var PlantLayers= [];
var AnimalLayers= [];
var GroundLayers= [];



function CreatePlantLayer(i,Pos_Type,TotalModelPotition){
if(Pos_Type == "Point"){	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("PlantLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("PlantLayers").appendChild(newLayer);
document.getElementById("PlantLayers").appendChild(label);
document.getElementById("PlantLayers").appendChild(document.createElement("br"));

//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thX = document.createElement("th");
				thX.innerHTML = "X";
				document.getElementById(t + "tr").appendChild(thX);
				var thY = document.createElement("th");
				thY.innerHTML = "Y";
				document.getElementById(t + "tr").appendChild(thY);
				var thZ = document.createElement("th");
				thZ.innerHTML = "Z";
				document.getElementById(t + "tr").appendChild(thZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var pointAttTable = PointLayers[i][0];
					var tbody = document.getElementById(pointAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = pointAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
		}
		
				
			
					
}
if(Pos_Type == "Line"){	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("PlantLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("PlantLayers").appendChild(newLayer);
document.getElementById("PlantLayers").appendChild(label);
document.getElementById("PlantLayers").appendChild(document.createElement("br"));

//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thX = document.createElement("th");
				thX.innerHTML = "X";
				document.getElementById(t + "tr").appendChild(thX);
				var thY = document.createElement("th");
				thY.innerHTML = "Y";
				document.getElementById(t + "tr").appendChild(thY);
				var thZ = document.createElement("th");
				thZ.innerHTML = "Z";
				document.getElementById(t + "tr").appendChild(thZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var lineAttTable = LineLayers[i][0];
					var tbody = document.getElementById(lineAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = lineAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
					
					//end
					 row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					 cellID = row.insertCell(0);
					 cellModel = row.insertCell(1);
					 cellX = row.insertCell(2);
					 cellY = row.insertCell(3);
					 cellZ = row.insertCell(4);
					 cellPosReference = row.insertCell(5);
					 cellRefID = row.insertCell(6);
					 cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = tbody.rows[j].cells[5].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[6].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[7].innerHTML;
					cellPosReference.innerHTML = lineAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
		}
		//extra trees
		for(var j = 0;j< TotalModelPotition.length ;j+=3){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = TotalModelPotition[j].toFixed(4);
					cellY.innerHTML = TotalModelPotition[j+1].toFixed(4);
					cellZ.innerHTML = TotalModelPotition[j+2].toFixed(4);
					cellPosReference.innerHTML = "-";
					cellRefID.innerHTML = "-";
					cellDisplayModel.innerHTML = "true";
	
		
		}
		
				
			
					
}
if(Pos_Type == "PolyLine"){	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("PlantLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("PlantLayers").appendChild(newLayer);
document.getElementById("PlantLayers").appendChild(label);
document.getElementById("PlantLayers").appendChild(document.createElement("br"));

//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thX = document.createElement("th");
				thX.innerHTML = "X";
				document.getElementById(t + "tr").appendChild(thX);
				var thY = document.createElement("th");
				thY.innerHTML = "Y";
				document.getElementById(t + "tr").appendChild(thY);
				var thZ = document.createElement("th");
				thZ.innerHTML = "Z";
				document.getElementById(t + "tr").appendChild(thZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var lineAttTable = LineLayers[i][0];
					var tbody = document.getElementById(lineAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = lineAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
					
					
		
		}
		//extra trees
		for(var j = 0;j< TotalModelPotition.length ;j+=3){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = TotalModelPotition[j].toFixed(4);
					cellY.innerHTML = TotalModelPotition[j+1].toFixed(4);
					cellZ.innerHTML = TotalModelPotition[j+2].toFixed(4);
					cellPosReference.innerHTML = "-";
					cellRefID.innerHTML = "-";
					cellDisplayModel.innerHTML = "true";
	
		
		}
		
				
			
					
}
if(Pos_Type == "Polygon"){	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("PlantLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("PlantLayers").appendChild(newLayer);
document.getElementById("PlantLayers").appendChild(label);
document.getElementById("PlantLayers").appendChild(document.createElement("br"));

//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thX = document.createElement("th");
				thX.innerHTML = "X";
				document.getElementById(t + "tr").appendChild(thX);
				var thY = document.createElement("th");
				thY.innerHTML = "Y";
				document.getElementById(t + "tr").appendChild(thY);
				var thZ = document.createElement("th");
				thZ.innerHTML = "Z";
				document.getElementById(t + "tr").appendChild(thZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var polygonAttTable = PolygonLayers[i][0];
					var tbody = document.getElementById(polygonAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = polygonAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
					
					
		
		}
		//extra trees
		for(var j = 0;j< TotalModelPotition.length ;j+=3){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = plantName;
					cellX.innerHTML = TotalModelPotition[j].toFixed(4);
					cellY.innerHTML = TotalModelPotition[j+1].toFixed(4);
					cellZ.innerHTML = TotalModelPotition[j+2].toFixed(4);
					cellPosReference.innerHTML = "-";
					cellRefID.innerHTML = "-";
					cellDisplayModel.innerHTML = "true";
	
		
		}
		
				
			
					
}
}

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////AANIMALS////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function CreateAnimalLayer(i,Pos_Type){
	if(Pos_Type == "Point"){
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("AnimalLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};

label.appendChild(document.createTextNode(t));

document.getElementById("AnimalLayers").appendChild(newLayer);
document.getElementById("AnimalLayers").appendChild(label);
document.getElementById("AnimalLayers").appendChild(document.createElement("br"));

//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thX = document.createElement("th");
				thX.innerHTML = "X";
				document.getElementById(t + "tr").appendChild(thX);
				var thY = document.createElement("th");
				thY.innerHTML = "Y";
				document.getElementById(t + "tr").appendChild(thY);
				var thZ = document.createElement("th");
				thZ.innerHTML = "Z";
				document.getElementById(t + "tr").appendChild(thZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var pointAttTable = PointLayers[i][0];
					var tbody = document.getElementById(pointAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = animalName;
					cellX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = pointAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
		}
}
if (Pos_Type == "Line"){
	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("AnimalLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("AnimalLayers").appendChild(newLayer);
document.getElementById("AnimalLayers").appendChild(label);
document.getElementById("AnimalLayers").appendChild(document.createElement("br"));


//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thCurX = document.createElement("th");
				thCurX.innerHTML = "Current X";
				document.getElementById(t + "tr").appendChild(thCurX);
				var thCurY = document.createElement("th");
				thCurY.innerHTML = "Current Y";
				document.getElementById(t + "tr").appendChild(thCurY);
				var thCurZ = document.createElement("th");
				thCurZ.innerHTML = "Current Z";
				document.getElementById(t + "tr").appendChild(thCurZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var lineAttTable = LineLayers[i][0];
					var tbody = document.getElementById(lineAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellCurX = row.insertCell(2);
					var cellCurY = row.insertCell(3);
					var cellCurZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = animalName;
					cellCurX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellCurY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellCurZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = lineAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
			}
}
if (Pos_Type == "PolyLine"){
	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("AnimalLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("AnimalLayers").appendChild(newLayer);
document.getElementById("AnimalLayers").appendChild(label);
document.getElementById("AnimalLayers").appendChild(document.createElement("br"));


//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thCurX = document.createElement("th");
				thCurX.innerHTML = "Current X";
				document.getElementById(t + "tr").appendChild(thCurX);
				var thCurY = document.createElement("th");
				thCurY.innerHTML = "Current Y";
				document.getElementById(t + "tr").appendChild(thCurY);
				var thCurZ = document.createElement("th");
				thCurZ.innerHTML = "Current Z";
				document.getElementById(t + "tr").appendChild(thCurZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var lineAttTable = LineLayers[i][0];
					var tbody = document.getElementById(lineAttTable+"tbody"); 
					
			
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellCurX = row.insertCell(2);
					var cellCurY = row.insertCell(3);
					var cellCurZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = animalName;
					cellCurX.innerHTML = tbody.rows[0].cells[2].innerHTML;
					cellCurY.innerHTML = tbody.rows[0].cells[3].innerHTML;
					cellCurZ.innerHTML = tbody.rows[0].cells[4].innerHTML;
					cellPosReference.innerHTML = lineAttTable;
					cellRefID.innerHTML = tbody.rows[0].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
			
}				
}

function CreateWaterLayer(i){

var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("WaterLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("GroundLayers").appendChild(newLayer);
document.getElementById("GroundLayers").appendChild(label);
document.getElementById("GroundLayers").appendChild(document.createElement("br"));

//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thX = document.createElement("th");
				thX.innerHTML = "X";
				document.getElementById(t + "tr").appendChild(thX);
				var thY = document.createElement("th");
				thY.innerHTML = "Y";
				document.getElementById(t + "tr").appendChild(thY);
				var thZ = document.createElement("th");
				thZ.innerHTML = "Z";
				document.getElementById(t + "tr").appendChild(thZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var polygonAttTable = PolygonLayers[i][0];
					var tbody = document.getElementById(polygonAttTable+"tbody"); 
					
			for(var j = 0;j< tbody.rows.length ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = "Water";
					cellX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = polygonAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
		}

				
}

function CreateOtherLayer(i,Pos_Type,LayerName){
	if(Pos_Type == "Point"){
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById(LayerName).value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};

label.appendChild(document.createTextNode(t));

document.getElementById("OtherLayers").appendChild(newLayer);
document.getElementById("OtherLayers").appendChild(label);
document.getElementById("OtherLayers").appendChild(document.createElement("br"));

//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thX = document.createElement("th");
				thX.innerHTML = "X";
				document.getElementById(t + "tr").appendChild(thX);
				var thY = document.createElement("th");
				thY.innerHTML = "Y";
				document.getElementById(t + "tr").appendChild(thY);
				var thZ = document.createElement("th");
				thZ.innerHTML = "Z";
				document.getElementById(t + "tr").appendChild(thZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var pointAttTable = PointLayers[i][0];
					var tbody = document.getElementById(pointAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellX = row.insertCell(2);
					var cellY = row.insertCell(3);
					var cellZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = "Car";
					cellX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = pointAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
		}
}
if (Pos_Type == "Line"){
	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById(LayerName).value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("OtherLayers").appendChild(newLayer);
document.getElementById("OtherLayers").appendChild(label);
document.getElementById("OtherLayers").appendChild(document.createElement("br"));


//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thCurX = document.createElement("th");
				thCurX.innerHTML = "Current X";
				document.getElementById(t + "tr").appendChild(thCurX);
				var thCurY = document.createElement("th");
				thCurY.innerHTML = "Current Y";
				document.getElementById(t + "tr").appendChild(thCurY);
				var thCurZ = document.createElement("th");
				thCurZ.innerHTML = "Current Z";
				document.getElementById(t + "tr").appendChild(thCurZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var lineAttTable = LineLayers[i][0];
					var tbody = document.getElementById(lineAttTable+"tbody"); 
					
			for(var j = 0;j<= tbody.rows.length-1 ;j++){
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellCurX = row.insertCell(2);
					var cellCurY = row.insertCell(3);
					var cellCurZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = LayerName;
					cellCurX.innerHTML = tbody.rows[j].cells[2].innerHTML;
					cellCurY.innerHTML = tbody.rows[j].cells[3].innerHTML;
					cellCurZ.innerHTML = tbody.rows[j].cells[4].innerHTML;
					cellPosReference.innerHTML = lineAttTable;
					cellRefID.innerHTML = tbody.rows[j].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
			}
}
if (Pos_Type == "PolyLine"){
	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;
newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById(LayerName).value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayModelLayerModels(t+"layer")};
label.appendChild(document.createTextNode(t));

document.getElementById("OtherLayers").appendChild(newLayer);
document.getElementById("OtherLayers").appendChild(label);
document.getElementById("OtherLayers").appendChild(document.createElement("br"));


//add layer to Attributes Tables select menu
var AttributeTableLayerModelOption = document.getElementById("AttributeTableLayer_selectmenu_model");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerModelOption.add(option);



				//create attributes table


				var Displaydiv = document.createElement("div");
				Displaydiv.setAttribute("id", t);
				Displaydiv.style.overflow = "auto";
				Displaydiv.style.position = "relative";
				Displaydiv.style.display = "block";
				document.getElementById("Tab2Container").appendChild(Displaydiv);


				var h2 = document.createElement("h2");

				h2.innerHTML = "Attributes of " + t;
				document.getElementById(t).appendChild(h2);

				var closeBTN = document.createElement("button");
				closeBTN.style.position = "absolute";
				closeBTN.style.top = "8px";
				closeBTN.style.right = "0px";
				closeBTN.style.width = "1%";
				closeBTN.style.height = "20px";
				closeBTN.style.fontSize = "10px";
				closeBTN.style.color = "#FFF";
				closeBTN.style.backgroundColor = "#CC0000";
				closeBTN.innerHTML = "x";
				closeBTN.onclick = 	function(){
					document.getElementById(t).style.display = "none";
				};
				document.getElementById(t).appendChild(closeBTN);

				var table = document.createElement("table");
				table.setAttribute("id", t + "_Table");
				table.setAttribute("class", "ui-widget ui-widget-content");
				document.getElementById(t).appendChild(table);

				var thead = document.createElement("thead");
				thead.setAttribute("id",t+"thead")
				document.getElementById(t + "_Table").appendChild(thead);

				var tr = document.createElement("tr");
				tr.setAttribute("class", "ui-widget-header");
				tr.setAttribute("id", t+"tr");
				document.getElementById(t + "thead").appendChild(tr);


				var thID = document.createElement("th");
				thID.innerHTML = "ID";
				document.getElementById(t + "tr").appendChild(thID);
				var Model = document.createElement("th");
				Model.innerHTML = "Name"
				document.getElementById(t + "tr").appendChild(Model);
				var thCurX = document.createElement("th");
				thCurX.innerHTML = "Current X";
				document.getElementById(t + "tr").appendChild(thCurX);
				var thCurY = document.createElement("th");
				thCurY.innerHTML = "Current Y";
				document.getElementById(t + "tr").appendChild(thCurY);
				var thCurZ = document.createElement("th");
				thCurZ.innerHTML = "Current Z";
				document.getElementById(t + "tr").appendChild(thCurZ);
				var PosReference = document.createElement("th");
				PosReference.innerHTML = "Position Reference";
				document.getElementById(t + "tr").appendChild(PosReference);
				var RefID = document.createElement("th");
				RefID.innerHTML = "Reference ID";
				document.getElementById(t + "tr").appendChild(RefID);
				var DisplayModel = document.createElement("th");
				DisplayModel.innerHTML = "Display Model"
				document.getElementById(t + "tr").appendChild(DisplayModel);
				
				
				var tbody = document.createElement("tbody");
				tbody.setAttribute("id",t+ "tbody");

				document.getElementById(t + "_Table").appendChild(tbody);
				var hr = document.createElement("hr");
				hr.style.width = "100%";
				hr.style.color = "#000";
				document.getElementById(t).appendChild(hr);
				//add points to attributes table

				var AttTable = document.getElementById(t+ "tbody");
			
					var lineAttTable = LineLayers[i][0];
					var tbody = document.getElementById(lineAttTable+"tbody"); 
					
			
					var row = AttTable.insertRow(AttTable.rows.length);
					
					
					
					var cellID = row.insertCell(0);
					var cellModel = row.insertCell(1);
					var cellCurX = row.insertCell(2);
					var cellCurY = row.insertCell(3);
					var cellCurZ = row.insertCell(4);
					var cellPosReference = row.insertCell(5);
					var cellRefID = row.insertCell(6);
					var cellDisplayModel = row.insertCell(7);
					
					cellID.innerHTML = AttTable.rows.length;
					cellModel.innerHTML = LayerName;
					cellCurX.innerHTML = tbody.rows[0].cells[2].innerHTML;
					cellCurY.innerHTML = tbody.rows[0].cells[3].innerHTML;
					cellCurZ.innerHTML = tbody.rows[0].cells[4].innerHTML;
					cellPosReference.innerHTML = lineAttTable;
					cellRefID.innerHTML = tbody.rows[0].cells[0].innerHTML;
					cellDisplayModel.innerHTML = "true";
	
		
			
}				
}
					

