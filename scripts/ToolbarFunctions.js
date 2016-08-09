var PointLayers= [];
var LineLayers= [];
var PolygonLayers= [];
var CLT_Point=[]; //create point layer table
var CLT_Line=[]; //create point layer table
var CLT_Polygon=[]; //create point layer table
var PointModels = {};
var LineModels = {};

function CreatePointLayerTable(x,y,z){
	
	var CoordinateTable = document.getElementById("CreatePointLayer_tbody");
	
    var row = CoordinateTable.insertRow(CoordinateTable.rows.length);
	
    var cellID = row.insertCell(0);
    var cellX = row.insertCell(1);
    var cellY = row.insertCell(2);
	var cellZ = row.insertCell(3);
	
	cellID.innerHTML = CoordinateTable.rows.length;
	cellX.innerHTML = x;
	cellY.innerHTML = y;
	cellZ.innerHTML = z;
	
	
	
	}
function CreatePointLayer(){
	
	var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;


newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("PointLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayPointModels(t+"layer")};
label.appendChild(document.createTextNode(t));

if(CLT_Point.length>0 && t!==""){
	
	var Layer = PointLayers.length;
	 var PointLayer = [];
	 
	
	 
PointLayer[0] =	t;

var PointMod = new THREE.Object3D(); // create point models
	for (var i=0;i< CLT_Point.length ;i+=3){
	
		PointLayer[i+1] =	CLT_Point[i];
		PointLayer[i+2] = 	CLT_Point[i+1];
		PointLayer[i+3] =	CLT_Point[i+2];
		var Pmod = PointModel.clone();
		Pmod.position.set(CLT_Point[i],CLT_Point[i+1],CLT_Point[i+2]+0.5);
		PointMod.add(Pmod);
	
	}

PointModels[t+"layer"] = PointMod;

scene.add(PointModels[t+"layer"]);

PointLayers[Layer] = PointLayer;





document.getElementById("PointLayers").appendChild(newLayer);
document.getElementById("PointLayers").appendChild(label);
document.getElementById("PointLayers").appendChild(document.createElement("br"));

//add layer to options

var plantOption = document.getElementById("PlantPositionType_selectmenu_point");
var option = document.createElement("option");
option.text = t;
plantOption.add(option);

var animalOption = document.getElementById("AnimalPositionType_selectmenu_point");
var option = document.createElement("option");
option.text = t;
animalOption.add(option);

var otherOption = document.getElementById("OtherPositionType_selectmenu_point");
var option = document.createElement("option");
option.text = t;
otherOption.add(option);



//add layer to Attributes Tables select menu
var AttributeTableLayerMapOption = document.getElementById("AttributeTableLayer_selectmenu_map");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerMapOption.add(option);

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
var thType = document.createElement("th");
thType.innerHTML = "Type";
document.getElementById(t + "tr").appendChild(thType);
var thX = document.createElement("th");
thX.innerHTML = "X";
document.getElementById(t + "tr").appendChild(thX);
var thY = document.createElement("th");
thY.innerHTML = "Y";
document.getElementById(t + "tr").appendChild(thY);
var thZ = document.createElement("th");
thZ.innerHTML = "Z";
document.getElementById(t + "tr").appendChild(thZ);

var tbody = document.createElement("tbody");
tbody.setAttribute("id",t+ "tbody");

document.getElementById(t + "_Table").appendChild(tbody);
var hr = document.createElement("hr");
hr.style.width = "100%";
hr.style.color = "#000";
document.getElementById(t).appendChild(hr);
//add points to attributes table

var AttTable = document.getElementById(t+ "tbody");
var CoordinateTable = document.getElementById("CreatePointLayer_tbody");
	
	for (var i = 0;i<CoordinateTable.rows.length;i++){
    var row = AttTable.insertRow(AttTable.rows.length);
	
    var cellID = row.insertCell(0);
    var cellType = row.insertCell(1);
    var cellX = row.insertCell(2);
    var cellY = row.insertCell(3);
	var cellZ = row.insertCell(4);
	
	cellID.innerHTML = CoordinateTable.rows[i].cells[0].innerHTML;
	cellType.innerHTML = "Point";
	cellX.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
	cellY.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
	cellZ.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;
	}
}
}

function clearCreatePointLayerTable(){

document.getElementById("CreatePointLayer_tbody").remove();
var new_tbody = document.createElement("tbody");
new_tbody.setAttribute("id", "CreatePointLayer_tbody");
document.getElementById("CreatePointLayer_Table").appendChild(new_tbody);
CLT_Point.length=0;
				
}
////////////////////////////////////////////////LINES
function CreateLineLayerTable(x,y,z){
	
	var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
	
    var row = CoordinateTable.insertRow(CoordinateTable.rows.length);
	
    var cellID = row.insertCell(0);
    var cellX = row.insertCell(1);
    var cellY = row.insertCell(2);
	var cellZ = row.insertCell(3);
	
	cellID.innerHTML = CoordinateTable.rows.length;
	cellX.innerHTML = x;
	cellY.innerHTML = y;
	cellZ.innerHTML = z;

}

function CreateLineLayer(){
	
var newLayer = document.createElement("input");
	
newLayer.type = "checkbox";
newLayer.checked = true;

newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("LineLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayPointModels(t+"layer")};
label.appendChild(document.createTextNode(t));

if(CLT_Line.length>0 && t!==""){
	
	var Layer = LineLayers.length;
	 var LineLayer = [];
	 
	
	 
LineLayer[0] =	t;
var PointMod = new THREE.Object3D(); // create point models
	for (var i=0;i< CLT_Line.length ;i+=3){
		
		LineLayer[i+1] =	CLT_Line[i];
		LineLayer[i+2] = 	CLT_Line[i+1];
		LineLayer[i+3] =	CLT_Line[i+2];
		
		var Pmod = PointModel.clone();
		Pmod.position.set(CLT_Line[i],CLT_Line[i+1],CLT_Line[i+2]+0.5)
		PointMod.add(Pmod);
	}

PointModels[t+"layer"] = PointMod;

scene.add(PointModels[t+"layer"]);
	
LineLayers[Layer] = LineLayer;





document.getElementById("LineLayers").appendChild(newLayer);
document.getElementById("LineLayers").appendChild(label);
document.getElementById("LineLayers").appendChild(document.createElement("br"));

//add layer to options

var plantOption = document.getElementById("PlantPositionType_selectmenu_line");
var option = document.createElement("option");
option.text = t;
plantOption.add(option);

var animalOption = document.getElementById("AnimalPositionType_selectmenu_line");
var option = document.createElement("option");
option.text = t;
animalOption.add(option);

var otherOption = document.getElementById("OtherPositionType_selectmenu_line");
var option = document.createElement("option");
option.text = t;
otherOption.add(option);



//add layer to Attributes Tables select menu
var AttributeTableLayerMapOption = document.getElementById("AttributeTableLayer_selectmenu_map");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerMapOption.add(option);

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

if (document.getElementById("PolyLine").checked){
		if(document.getElementById("calculateAngle").checked && document.getElementById("calculateDistanse").checked){
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type"
			document.getElementById(t + "tr").appendChild(thType);
			var thX = document.createElement("th");
			thX.innerHTML = "X";
			document.getElementById(t + "tr").appendChild(thX);
			var thY = document.createElement("th");
			thY.innerHTML = "Y";
			document.getElementById(t + "tr").appendChild(thY);
			var thZ = document.createElement("th");
			thZ.innerHTML = "Z";
			document.getElementById(t + "tr").appendChild(thZ);
			
			var thS = document.createElement("th");
			thS.innerHTML = "Distance(S)";
			document.getElementById(t + "tr").appendChild(thS);
			var thG = document.createElement("th");
			thG.innerHTML = "Angle(G)";
			document.getElementById(t + "tr").appendChild(thG);
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i++){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1) 
				var cellX = row.insertCell(2);
				var cellY = row.insertCell(3);
				var cellZ = row.insertCell(4);
				
				var cellS = row.insertCell(5);
				var cellG = row.insertCell(6);
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "PolyLine";
				cellX.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellY.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZ.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;
				
				if(i==0){
					cellS.innerHTML = "0";
					cellG.innerHTML = "0";
				}
				else{
					var Xa = Number(CoordinateTable.rows[i-1].cells[1].innerHTML);
					var Ya = Number(CoordinateTable.rows[i-1].cells[2].innerHTML);
					var Xb = Number(CoordinateTable.rows[i].cells[1].innerHTML);
					var Yb = Number(CoordinateTable.rows[i].cells[2].innerHTML);
					var ThemProb2 = ThemeliodesProblima_2(Xa,Ya,Xb,Yb);
					cellS.innerHTML = ThemProb2.Sab;
					cellG.innerHTML = ThemProb2.Gab;
				}
				}
		}//S+G
		if(!document.getElementById("calculateAngle").checked && document.getElementById("calculateDistanse").checked){
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type"
			document.getElementById(t + "tr").appendChild(thType);
			var thX = document.createElement("th");
			thX.innerHTML = "X";
			document.getElementById(t + "tr").appendChild(thX);
			var thY = document.createElement("th");
			thY.innerHTML = "Y";
			document.getElementById(t + "tr").appendChild(thY);
			var thZ = document.createElement("th");
			thZ.innerHTML = "Z";
			document.getElementById(t + "tr").appendChild(thZ);
			
			var thS = document.createElement("th");
			thS.innerHTML = "Distance(S)";
			document.getElementById(t + "tr").appendChild(thS);
			
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i++){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1);
				var cellX = row.insertCell(2);
				var cellY = row.insertCell(3);
				var cellZ = row.insertCell(4);
				
				var cellS = row.insertCell(5);
				
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "PolyLine";
				cellX.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellY.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZ.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;
				
				if(i==0){
					cellS.innerHTML = "0";
					
				}
				else{
					var Xa = Number(CoordinateTable.rows[i-1].cells[1].innerHTML);
					var Ya = Number(CoordinateTable.rows[i-1].cells[2].innerHTML);
					var Xb = Number(CoordinateTable.rows[i].cells[1].innerHTML);
					var Yb = Number(CoordinateTable.rows[i].cells[2].innerHTML);
					var ThemProb2 = ThemeliodesProblima_2(Xa,Ya,Xb,Yb);
					cellS.innerHTML = ThemProb2.Sab;
					
				}
				}
		}
		if(document.getElementById("calculateAngle").checked && !document.getElementById("calculateDistanse").checked){
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type"
			document.getElementById(t + "tr").appendChild(thType);
			var thX = document.createElement("th");
			thX.innerHTML = "X";
			document.getElementById(t + "tr").appendChild(thX);
			var thY = document.createElement("th");
			thY.innerHTML = "Y";
			document.getElementById(t + "tr").appendChild(thY);
			var thZ = document.createElement("th");
			thZ.innerHTML = "Z";
			document.getElementById(t + "tr").appendChild(thZ);
			
			
			var thG = document.createElement("th");
			thG.innerHTML = "Angle(G)";
			document.getElementById(t + "tr").appendChild(thG);
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i++){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1);
				var cellX = row.insertCell(2);
				var cellY = row.insertCell(3);
				var cellZ = row.insertCell(4);
				
				
				var cellG = row.insertCell(5);
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "Polyline";
				cellX.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellY.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZ.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;
				
				if(i==0){
				
					cellG.innerHTML = "0";
				}
				else{
					var Xa = Number(CoordinateTable.rows[i-1].cells[1].innerHTML);
					var Ya = Number(CoordinateTable.rows[i-1].cells[2].innerHTML);
					var Xb = Number(CoordinateTable.rows[i].cells[1].innerHTML);
					var Yb = Number(CoordinateTable.rows[i].cells[2].innerHTML);
					var ThemProb2 = ThemeliodesProblima_2(Xa,Ya,Xb,Yb);
				
					cellG.innerHTML = ThemProb2.Gab;
				}
				}
		}
		if(!document.getElementById("calculateAngle").checked && !document.getElementById("calculateDistanse").checked){
			
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type"
			document.getElementById(t + "tr").appendChild(thType);
			var thX = document.createElement("th");
			thX.innerHTML = "X";
			document.getElementById(t + "tr").appendChild(thX);
			var thY = document.createElement("th");
			thY.innerHTML = "Y";
			document.getElementById(t + "tr").appendChild(thY);
			var thZ = document.createElement("th");
			thZ.innerHTML = "Z";
			document.getElementById(t + "tr").appendChild(thZ);
			
		
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i++){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1);
				var cellX = row.insertCell(2);
				var cellY = row.insertCell(3);
				var cellZ = row.insertCell(4);
				
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "Polyline";
				cellX.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellY.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZ.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;
				
			
				}
		}
		}//polyline
		
		else{
			
		if(document.getElementById("calculateAngle").checked && document.getElementById("calculateDistanse").checked){
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type";
			document.getElementById(t + "tr").appendChild(thType);
			var thXStart = document.createElement("th");
			thXStart.innerHTML = "X Start";
			document.getElementById(t + "tr").appendChild(thXStart);
			var thYStart = document.createElement("th");
			thYStart.innerHTML = "Y Start";
			document.getElementById(t + "tr").appendChild(thYStart);
			var thZStart = document.createElement("th");
			thZStart.innerHTML = "Z Start";
			document.getElementById(t + "tr").appendChild(thZStart);
			
			var thXEnd = document.createElement("th");
			thXEnd.innerHTML = "X End";
			document.getElementById(t + "tr").appendChild(thXEnd);
			var thYEnd = document.createElement("th");
			thYEnd.innerHTML = "Y End";
			document.getElementById(t + "tr").appendChild(thYEnd);
			var thZEnd = document.createElement("th");
			thZEnd.innerHTML = "Z End";
			document.getElementById(t + "tr").appendChild(thZEnd);
			
			var thS = document.createElement("th");
			thS.innerHTML = "Distance(S)";
			document.getElementById(t + "tr").appendChild(thS);
			var thG = document.createElement("th");
			thG.innerHTML = "Angle(G)";
			document.getElementById(t + "tr").appendChild(thG);
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i+=2){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1);
				var cellXStart = row.insertCell(2);
				var cellYStart = row.insertCell(3);
				var cellZStart = row.insertCell(4);
				
				var cellXEnd = row.insertCell(5);
				var cellYEnd = row.insertCell(6);
				var cellZEnd = row.insertCell(7);
				
				var cellS = row.insertCell(8);
				var cellG = row.insertCell(9);
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "Line";
				cellXStart.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellYStart.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZStart.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;			
				cellXEnd.innerHTML = CoordinateTable.rows[i+1].cells[1].innerHTML;
				cellYEnd.innerHTML = CoordinateTable.rows[i+1].cells[2].innerHTML;
				cellZEnd.innerHTML = CoordinateTable.rows[i+1].cells[3].innerHTML;
				

					var Xa = Number(CoordinateTable.rows[i].cells[1].innerHTML);
					var Ya = Number(CoordinateTable.rows[i].cells[2].innerHTML);
					var Xb = Number(CoordinateTable.rows[i+1].cells[1].innerHTML);
					var Yb = Number(CoordinateTable.rows[i+1].cells[2].innerHTML);
					var ThemProb2 = ThemeliodesProblima_2(Xa,Ya,Xb,Yb);
					cellS.innerHTML = ThemProb2.Sab;
					cellG.innerHTML = ThemProb2.Gab;
				
				}
		}//S+G
		if(!document.getElementById("calculateAngle").checked && document.getElementById("calculateDistanse").checked){
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type";
			document.getElementById(t + "tr").appendChild(thType);
			var thXStart = document.createElement("th");
			thXStart.innerHTML = "X Start";
			document.getElementById(t + "tr").appendChild(thXStart);
			var thYStart = document.createElement("th");
			thYStart.innerHTML = "Y Start";
			document.getElementById(t + "tr").appendChild(thYStart);
			var thZStart = document.createElement("th");
			thZStart.innerHTML = "Z Start";
			document.getElementById(t + "tr").appendChild(thZStart);
			
			var thXEnd = document.createElement("th");
			thXEnd.innerHTML = "X End";
			document.getElementById(t + "tr").appendChild(thXEnd);
			var thYEnd = document.createElement("th");
			thYEnd.innerHTML = "Y End";
			document.getElementById(t + "tr").appendChild(thYEnd);
			var thZEnd = document.createElement("th");
			thZEnd.innerHTML = "Z End";
			document.getElementById(t + "tr").appendChild(thZEnd);
			
			var thS = document.createElement("th");
			thS.innerHTML = "Distance(S)";
			document.getElementById(t + "tr").appendChild(thS);
			
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i+=2){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1);
				var cellXStart = row.insertCell(2);
				var cellYStart = row.insertCell(3);
				var cellZStart = row.insertCell(4);
				
				var cellXEnd = row.insertCell(5);
				var cellYEnd = row.insertCell(6);
				var cellZEnd = row.insertCell(7);
				
				var cellS = row.insertCell(8);
				
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "Line";
				cellXStart.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellYStart.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZStart.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;			
				cellXEnd.innerHTML = CoordinateTable.rows[i+1].cells[1].innerHTML;
				cellYEnd.innerHTML = CoordinateTable.rows[i+1].cells[2].innerHTML;
				cellZEnd.innerHTML = CoordinateTable.rows[i+1].cells[3].innerHTML;
				

					var Xa = Number(CoordinateTable.rows[i].cells[1].innerHTML);
					var Ya = Number(CoordinateTable.rows[i].cells[2].innerHTML);
					var Xb = Number(CoordinateTable.rows[i+1].cells[1].innerHTML);
					var Yb = Number(CoordinateTable.rows[i+1].cells[2].innerHTML);
					var ThemProb2 = ThemeliodesProblima_2(Xa,Ya,Xb,Yb);
					cellS.innerHTML = ThemProb2.Sab;
					
				
				
					
		}}
		if(document.getElementById("calculateAngle").checked && !document.getElementById("calculateDistanse").checked){
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type";
			document.getElementById(t + "tr").appendChild(thType);
			var thXStart = document.createElement("th");
			thXStart.innerHTML = "X Start";
			document.getElementById(t + "tr").appendChild(thXStart);
			var thYStart = document.createElement("th");
			thYStart.innerHTML = "Y Start";
			document.getElementById(t + "tr").appendChild(thYStart);
			var thZStart = document.createElement("th");
			thZStart.innerHTML = "Z Start";
			document.getElementById(t + "tr").appendChild(thZStart);
			
			var thXEnd = document.createElement("th");
			thXEnd.innerHTML = "X End";
			document.getElementById(t + "tr").appendChild(thXEnd);
			var thYEnd = document.createElement("th");
			thYEnd.innerHTML = "Y End";
			document.getElementById(t + "tr").appendChild(thYEnd);
			var thZEnd = document.createElement("th");
			thZEnd.innerHTML = "Z End";
			document.getElementById(t + "tr").appendChild(thZEnd);
			
			
			var thG = document.createElement("th");
			thG.innerHTML = "Angle(G)";
			document.getElementById(t + "tr").appendChild(thG);
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i+=2){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1);
				var cellXStart = row.insertCell(2);
				var cellYStart = row.insertCell(3);
				var cellZStart = row.insertCell(4);
				
				var cellXEnd = row.insertCell(5);
				var cellYEnd = row.insertCell(6);
				var cellZEnd = row.insertCell(7);
				
				
				var cellG = row.insertCell(8);
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "Line";
				cellXStart.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellYStart.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZStart.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;			
				cellXEnd.innerHTML = CoordinateTable.rows[i+1].cells[1].innerHTML;
				cellYEnd.innerHTML = CoordinateTable.rows[i+1].cells[2].innerHTML;
				cellZEnd.innerHTML = CoordinateTable.rows[i+1].cells[3].innerHTML;
				

					var Xa = Number(CoordinateTable.rows[i].cells[1].innerHTML);
					var Ya = Number(CoordinateTable.rows[i].cells[2].innerHTML);
					var Xb = Number(CoordinateTable.rows[i+1].cells[1].innerHTML);
					var Yb = Number(CoordinateTable.rows[i+1].cells[2].innerHTML);
					var ThemProb2 = ThemeliodesProblima_2(Xa,Ya,Xb,Yb);
				
					cellG.innerHTML = ThemProb2.Gab;
				
				
		}}
		if(!document.getElementById("calculateAngle").checked && !document.getElementById("calculateDistanse").checked){
			var thID = document.createElement("th");
			thID.innerHTML = "ID";
			document.getElementById(t + "tr").appendChild(thID);
			var thType = document.createElement("th");
			thType.innerHTML = "Type";
			document.getElementById(t + "tr").appendChild(thType);
			var thXStart = document.createElement("th");
			thXStart.innerHTML = "X Start";
			document.getElementById(t + "tr").appendChild(thXStart);
			var thYStart = document.createElement("th");
			thYStart.innerHTML = "Y Start";
			document.getElementById(t + "tr").appendChild(thYStart);
			var thZStart = document.createElement("th");
			thZStart.innerHTML = "Z Start";
			document.getElementById(t + "tr").appendChild(thZStart);
			
			var thXEnd = document.createElement("th");
			thXEnd.innerHTML = "X End";
			document.getElementById(t + "tr").appendChild(thXEnd);
			var thYEnd = document.createElement("th");
			thYEnd.innerHTML = "Y End";
			document.getElementById(t + "tr").appendChild(thYEnd);
			var thZEnd = document.createElement("th");
			thZEnd.innerHTML = "Z End";
			document.getElementById(t + "tr").appendChild(thZEnd);
			
			
			
			var tbody = document.createElement("tbody");
			tbody.setAttribute("id",t+ "tbody");

			document.getElementById(t + "_Table").appendChild(tbody);
			var hr = document.createElement("hr");
			hr.style.width = "100%";
			hr.style.color = "#000";
			document.getElementById(t).appendChild(hr);
			//add lines to attributes table

			var AttTable = document.getElementById(t+ "tbody");
			var CoordinateTable = document.getElementById("CreateLineLayer_tbody");
				
				for (var i = 0;i<CoordinateTable.rows.length;i+=2){
				var row = AttTable.insertRow(AttTable.rows.length);
				
				var cellID = row.insertCell(0);
				var cellType = row.insertCell(1);
				var cellXStart = row.insertCell(2);
				var cellYStart = row.insertCell(3);
				var cellZStart = row.insertCell(4);
				
				var cellXEnd = row.insertCell(5);
				var cellYEnd = row.insertCell(6);
				var cellZEnd = row.insertCell(7);
				
				
				
				cellID.innerHTML = AttTable.rows.length;
				cellType.innerHTML = "Line";
				cellXStart.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
				cellYStart.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
				cellZStart.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;			
				cellXEnd.innerHTML = CoordinateTable.rows[i+1].cells[1].innerHTML;
				cellYEnd.innerHTML = CoordinateTable.rows[i+1].cells[2].innerHTML;
				cellZEnd.innerHTML = CoordinateTable.rows[i+1].cells[3].innerHTML;
				}
		}
		}
		}//check empty layer name
}





function clearCreateLineLayerTable(){

document.getElementById("CreateLineLayer_tbody").remove();
var new_tbody = document.createElement("tbody");
new_tbody.setAttribute("id", "CreateLineLayer_tbody");
document.getElementById("CreateLineLayer_Table").appendChild(new_tbody);
CLT_Line.length=0;
				
}
function CreatePolygonLayerTable(x,y,z){
	
	var CoordinateTable = document.getElementById("CreatePolygonLayer_tbody");
	
    var row = CoordinateTable.insertRow(CoordinateTable.rows.length);
	
    var cellID = row.insertCell(0);
    var cellX = row.insertCell(1);
    var cellY = row.insertCell(2);
	var cellZ = row.insertCell(3);
	
	cellID.innerHTML = CoordinateTable.rows.length;
	cellX.innerHTML = x;
	cellY.innerHTML = y;
	cellZ.innerHTML = z;
}

function CreatePolygonLayer(){
	
	var newLayer = document.createElement("input");
	newLayer.checked = true;
newLayer.type = "checkbox";

newLayer.style.display = "inline";
var label = document.createElement('label')
var t = document.getElementById("PolygonLayerName").value;
newLayer.value = t;
newLayer.id = t+"layer";
newLayer.onchange = function(){displayPointModels(t+"layer")};
label.appendChild(document.createTextNode(t));

if(CLT_Polygon.length>0 && t!==""){
	
	var Layer = PolygonLayers.length;
	 var PolygonLayer = [];
	 
	
	 
PolygonLayer[0] =	t;
var PointMod = new THREE.Object3D(); // create point models
	for (var i=0;i< CLT_Polygon.length ;i+=3){
	
		PolygonLayer[i+1] =	CLT_Polygon[i];
		PolygonLayer[i+2] = CLT_Polygon[i+1];
		PolygonLayer[i+3] =	CLT_Polygon[i+2];
		var Pmod = PointModel.clone();
		Pmod.position.set(CLT_Polygon[i],CLT_Polygon[i+1],CLT_Polygon[i+2]+0.5)
		PointMod.add(Pmod);
	}

	PointModels[t+"layer"] = PointMod;

scene.add(PointModels[t+"layer"]);

PolygonLayers[Layer] = PolygonLayer;





document.getElementById("PolygonLayers").appendChild(newLayer);
document.getElementById("PolygonLayers").appendChild(label);
document.getElementById("PolygonLayers").appendChild(document.createElement("br"));

//add layer to options

var plantOption = document.getElementById("PlantPositionType_selectmenu_polygon");
var option = document.createElement("option");
option.text = t;
plantOption.add(option);


var groundOption = document.getElementById("GroundPositionType_selectmenu_polygon");
var option = document.createElement("option");
option.text = t;
groundOption.add(option);

//add layer to Attributes Tables select menu
var AttributeTableLayerMapOption = document.getElementById("AttributeTableLayer_selectmenu_map");
var option = document.createElement("option");
option.text = t;
AttributeTableLayerMapOption.add(option);

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
var thType = document.createElement("th");
thType.innerHTML = "Type";
document.getElementById(t + "tr").appendChild(thType);
var thX = document.createElement("th");
thX.innerHTML = "X";
document.getElementById(t + "tr").appendChild(thX);
var thY = document.createElement("th");
thY.innerHTML = "Y";
document.getElementById(t + "tr").appendChild(thY);
var thZ = document.createElement("th");
thZ.innerHTML = "Z";
document.getElementById(t + "tr").appendChild(thZ);

var tbody = document.createElement("tbody");
tbody.setAttribute("id",t+ "tbody");

document.getElementById(t + "_Table").appendChild(tbody);
var hr = document.createElement("hr");
hr.style.width = "100%";
hr.style.color = "#000";
document.getElementById(t).appendChild(hr);
//add points to attributes table

var AttTable = document.getElementById(t+ "tbody");
var CoordinateTable = document.getElementById("CreatePolygonLayer_tbody");
	
	for (var i = 0;i<CoordinateTable.rows.length;i++){
    var row = AttTable.insertRow(AttTable.rows.length);
	
    var cellID = row.insertCell(0);
    var cellType = row.insertCell(1);
    var cellX = row.insertCell(2);
    var cellY = row.insertCell(3);
	var cellZ = row.insertCell(4);
	
	cellID.innerHTML = CoordinateTable.rows[i].cells[0].innerHTML;
	cellType.innerHTML = "Polygon";
	cellX.innerHTML = CoordinateTable.rows[i].cells[1].innerHTML;
	cellY.innerHTML = CoordinateTable.rows[i].cells[2].innerHTML;
	cellZ.innerHTML = CoordinateTable.rows[i].cells[3].innerHTML;
	}
}

}
function clearCreatePolygonLayerTable(){

document.getElementById("CreatePolygonLayer_tbody").remove();
var new_tbody = document.createElement("tbody");
new_tbody.setAttribute("id", "CreatePolygonLayer_tbody");
document.getElementById("CreatePolygonLayer_Table").appendChild(new_tbody);
CLT_Polygon.length=0;
				
}
function LoadTexture(){
	loadTextureDialog.dialog( "open" );
}
function CreateTexture(){
	var imageInput = document.getElementById("mapTexture-upload");
	var imageURL = window.URL.createObjectURL(imageInput.files[0]);
	var texture=THREE.ImageUtils.loadTexture( [imageURL] );

	var newLayer = document.createElement("input");
		
	newLayer.type = "checkbox";
	newLayer.checked = true;


	newLayer.style.display = "inline";
	var label = document.createElement('label')
	var t = document.getElementById("MapTextureLayerName").value;
	newLayer.value = t;
	newLayer.id = t+"layer";
	newLayer.onchange = function(){displayMapTexture(t+"layer")};
	var plane3 = plane.clone();
	var mat =  new THREE.MeshPhongMaterial({ambient:"white",shininess:20,color:"white",wireframe:false,map:texture});
	plane3.material = mat;
	plane3.material.needsUpdate = true;
		planeMaterials[t+"layer"] = plane3;
		scene.add(planeMaterials[t+"layer"]);
	label.appendChild(document.createTextNode(t));
	document.getElementById("TextureLayers").appendChild(newLayer);
	document.getElementById("TextureLayers").appendChild(label);
}

