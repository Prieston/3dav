//----------------------------Modal Form
var plant,plantTable,plantName;
var animal,animalTable,animalName;
var architecture,architectureTable,architectureName;
 $(function() {
var dialog, form,
// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
name = $( "#name" ),
email = $( "#email" ),
password = $( "#password" ),
allFields = $( [] ).add( name ).add( email ).add( password ),
tips = $( ".validateTips" );
function updateTips( t ) {
tips
.text( t )
.addClass( "ui-state-highlight" );
setTimeout(function() {
tips.removeClass( "ui-state-highlight", 1500 );
}, 500 );
}
function checkLength( o, n, min, max ) {
if ( o.val().length > max || o.val().length < min ) {
o.addClass( "ui-state-error" );
updateTips( "Length of " + n + " must be between " +
min + " and " + max + "." );
return false;
} else {
return true;
}
}
function checkRegexp( o, regexp, n ) {
if ( !( regexp.test( o.val() ) ) ) {
o.addClass( "ui-state-error" );
updateTips( n );
return false;
} else {
return true;
}
}
function addUser() {
var valid = true;
allFields.removeClass( "ui-state-error" );
valid = valid && checkLength( name, "username", 3, 16 );
valid = valid && checkLength( email, "email", 6, 80 );
valid = valid && checkLength( password, "password", 5, 16 );
valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
if ( valid ) {
$( "#users tbody" ).append( "<tr>" +
"<td>" + name.val() + "</td>" +
"<td>" + email.val() + "</td>" +
"<td>" + password.val() + "</td>" +
"</tr>" );
dialog.dialog( "close" );
}
return valid;
}
//////////////////////
dialog = $( "#dialog-form" ).dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
buttons: {
"Create an account": addUser,
Cancel: function() {
dialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
///////////load texture dialog
loadTextureDialog = $( "#load-texture-form" ).dialog({
autoOpen: false,
height: 260,
width: 350,
modal: true,
buttons: {
"Load Texture": function(){
	CreateTexture();
	loadTextureDialog.dialog( "close" );
},
Cancel: function() {
loadTextureDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
////////////
///////////create point table dialog
createPointLayerDialog = $( "#create-point-layer-form" ).dialog({
autoOpen: false,
height: 260,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	CreatePointLayer();
	createPointLayerDialog.dialog( "close" );
},
Cancel: function() {
createPointLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
////////////
///////////create line table dialog
createLineLayerDialog = $( "#create-line-layer-form" ).dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	CreateLineLayer();
	createLineLayerDialog.dialog( "close" );
},
Cancel: function() {
createLineLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
////////////
///////////create polygon table dialog
createPolygonLayerDialog = $( "#create-polygon-layer-form" ).dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	CreatePolygonLayer();
	createPolygonLayerDialog.dialog( "close" );
},
Cancel: function() {
createPolygonLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
////////////
///////////create plant table dialog
createPlantLayerDialog = $( "#create-plant-layer-form" ).dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	AddTrees(plantTable,plant);

	createPlantLayerDialog.dialog( "close" );
},
Cancel: function() {
createPlantLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
////////////
///////////create animal table dialog
createAnimalLayerDialog = $( "#create-animal-layer-form" ).dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	AddAnimals(animalTable,animal);

	createAnimalLayerDialog.dialog( "close" );
},
Cancel: function() {
createAnimalLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
///////////create water table dialog
createWaterLayerDialog = $( "#create-water-layer-form" ).dialog({
autoOpen: false,
height: 260,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	AddWater();
	createWaterLayerDialog.dialog( "close" );
},
Cancel: function() {
createWaterLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
///////////create House table dialog
createHouseLayerDialog = $( "#create-house-layer-form" ).dialog({
autoOpen: false,
height: 260,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	AddHouse();
	createHouseLayerDialog.dialog( "close" );
},
Cancel: function() {
createHouseLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
//////
//////////create Car table dialog
createCarLayerDialog = $( "#create-car-layer-form" ).dialog({
autoOpen: false,
height: 260,
width: 350,
modal: true,
buttons: {
"Create Layer": function(){
	AddCar();
	createCarLayerDialog.dialog( "close" );
},
Cancel: function() {
createCarLayerDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
//////
////////////////////////////////////////////////create world
createWorldDialog = $( "#create-world-form" ).dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
buttons: {
"Create World": function(){
	CreateNewWorld();
	createWorldDialog.dialog( "close" );
},
Cancel: function() {
createWorldDialog.dialog( "close" );
}
},
close: function() {

allFields.removeClass( "ui-state-error" );
}
});
////////////
form = dialog.find( "form" ).on( "submit", function( event ) {
event.preventDefault();
addUser();
});

$( "#create-user" ).button().on( "click", function() {
dialog.dialog( "open" );
});

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


//BUTTONS
//create water
$( "#Water-createLayer" ).button().on( "click", function() {

createWaterLayerDialog.dialog( "open" );
});
//create house
$( "#House-createLayer" ).button().on( "click", function() {
	if(typeof House === "undefined"){
	LoadOther("House");
	alert("Model is Loaded");
}


createHouseLayerDialog.dialog( "open" );
});
$( "#Car-createLayer" ).button().on( "click", function() {
	if(typeof Car === "undefined"){
	LoadOther("Car");
	alert("Model is Loaded");
}


createCarLayerDialog.dialog( "open" );
});

//create point table buttons
$( "#submit-pointLayerTable" ).button().on( "click", function() {

createPointLayerDialog.dialog( "open" );
});
$( "#clear-pointLayerTable" ).button().on( "click", function() {
clearCreatePointLayerTable();
});

//create line layers buttons
$( "#submit-lineLayerTable" ).button().on( "click", function() {

createLineLayerDialog.dialog( "open" );
});
$( "#clear-lineLayerTable" ).button().on( "click", function() {
clearCreateLineLayerTable();
});
//create polygon layers buttons
$( "#submit-polygonLayerTable" ).button().on( "click", function() {

createPolygonLayerDialog.dialog( "open" );
});
$( "#clear-polygonLayerTable" ).button().on( "click", function() {
clearCreatePolygonLayerTable();
});
//TREE BUTTONS

$( "#Beech-createLayer" ).button().on( "click", function() {
if(typeof Beech === "undefined"){
	LoadTrees("Beech");
	alert("Model is Loaded");
}
plant = Beech;
plantTable = Trees_Beech;
plantName = "Beech";
createPlantLayerDialog.dialog( "open" );


});
$( "#Bamboo-createLayer" ).button().on( "click", function() {
	if(typeof Bamboo === "undefined"){
	LoadTrees("Bamboo");
	alert("Model is Loaded");
}
plant = Bamboo;
plantTable = Trees_Bamboo;
plantName = "Bamboo";
createPlantLayerDialog.dialog( "open" );
});
$( "#Banana-createLayer" ).button().on( "click", function() {
if(typeof Banana === "undefined"){
	LoadTrees("Banana");
	alert("Model is Loaded");
}
plant = Banana;
plantTable = Trees_Banana;
plantName = "Banana";
createPlantLayerDialog.dialog( "open" );
});
$( "#Bougainvillier-createLayer" ).button().on( "click", function() {
if(typeof Bougainvillier === "undefined"){
	LoadTrees("Bougainvillier");
	alert("Model is Loaded");
}
plant = Bougainvillier;
plantTable = Trees_Bougainvillier;
plantName = "Bougainvillier";
createPlantLayerDialog.dialog( "open" );
});
$( "#Dracena-createLayer" ).button().on( "click", function() {
if(typeof Dracena === "undefined"){
	LoadTrees("Dracena");
	alert("Model is Loaded");
}
plant = Dracena;
plantTable = Trees_Dracena;
plantName = "Dracena";
createPlantLayerDialog.dialog( "open" );
});
$( "#Elm-createLayer" ).button().on( "click", function() {
if(typeof Elm === "undefined"){
	LoadTrees("Elm");
	alert("Model is Loaded");
}
plant = Elm;
plantTable = Trees_Elm;
plantName = "Elm";
createPlantLayerDialog.dialog( "open" );
});

$( "#Flamboyant-createLayer" ).button().on( "click", function() {
if(typeof Flamboyant === "undefined"){
	LoadTrees("Flamboyant");
	alert("Model is Loaded");
}
plant = Flamboyant;
plantTable = Trees_Flamboyant;
plantName = "Flamboyant";
createPlantLayerDialog.dialog( "open" );
});
$( "#Ginger-createLayer" ).button().on( "click", function() {
if(typeof Ginger === "undefined"){
	LoadTrees("Ginger");
	alert("Model is Loaded");
}
plant = Ginger;
plantTable = Trees_Ginger;
plantName = "Ginger";
createPlantLayerDialog.dialog( "open" );
});

$( "#Palm_arecaceae-createLayer" ).button().on( "click", function() {
if(typeof Palm_arecaceae === "undefined"){
	LoadTrees("Palm_arecaceae");
	alert("Model is Loaded");
}
plant = Palm_arecaceae;
plantTable = Trees_Palm_arecaceae;
plantName = "Palm_arecaceae";
createPlantLayerDialog.dialog( "open" );
});
$( "#Pine-createLayer" ).button().on( "click", function() {
if(typeof Pine === "undefined"){
	LoadTrees("Pine");
	alert("Model is Loaded");
}
plant = Pine;
plantTable = Trees_Pine;
plantName = "Pine";
createPlantLayerDialog.dialog( "open" );
});

$( "#Wintertree-createLayer" ).button().on( "click", function() {
if(typeof Wintertree === "undefined"){
	LoadTrees("Wintertree");
	alert("Model is Loaded");
}
plant = Wintertree;
plantTable = Trees_Wintertree;
plantName = "Wintertree";
createPlantLayerDialog.dialog( "open" );
});
//ANIMAL BUTTONS
$( "#Horse-createLayer" ).button().on( "click", function() {
if(typeof Horse === "undefined"){
	LoadAnimals("Horse");
	alert("Model is Loaded");
}
animal = Horse;
animalTable = morphs;
animalName = "Horse";
createAnimalLayerDialog.dialog( "open" );


});
//Set World Width Buttons
$( "#set-world-width" ).button().on( "click", function() {
SetWorldWidth();
});
//Set World Width Buttons
$( "#create-3D-Geometry" ).button().on( "click", function() {
Create3DGeometry();
});
//////////PRESENTATION BUTTONS
$( "#step-1" ).button().on( "click", function() {
	document.getElementById("Step1").style.display = "none";
Step1();//at CreateWordPRESENTATION.js
});
$( "#step-2" ).button().on( "click", function() {
	document.getElementById("Step2").style.display = "none";
Step2();//at CreateWordPRESENTATION.js
});
$( "#step-3" ).button().on( "click", function() {
	document.getElementById("Step3").style.display = "none";
Step3();//at CreateWordPRESENTATION.js
});
$( "#step-4" ).button().on( "click", function() {
	document.getElementById("Step4").style.display = "none";
Step4();//at CreateWordPRESENTATION.js
});
$( "#step-5" ).button().on( "click", function() {
	document.getElementById("Step5").style.display = "none";
Step5();//at CreateWordPRESENTATION.js
});
$( "#step-6" ).button().on( "click", function() {
	document.getElementById("Step6").style.display = "none";
Step6();//at CreateWordPRESENTATION.js
});
$( "#step-7" ).button().on( "click", function() {
	document.getElementById("Step7").style.display = "none";
Step7();//at CreateWordPRESENTATION.js
});
$( "#step-8" ).button().on( "click", function() {
	document.getElementById("Step8").style.display = "none";
Step8();//at CreateWordPRESENTATION.js
});
$( "#step-9" ).button().on( "click", function() {
	document.getElementById("Step9").style.display = "none";
Step9();//at CreateWordPRESENTATION.js
});
$( "#step-10" ).button().on( "click", function() {
	document.getElementById("Step10").style.display = "none";
Step10();//at CreateWordPRESENTATION.js
});


});