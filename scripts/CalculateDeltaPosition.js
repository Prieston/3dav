var countZRotation = 0;

function CalculateDeltaPosition(Xa,Ya,Za,delta,i,CheckRun,MorphAnimationData){
if (CheckRun == "check"){
	if(MorphAnimationData[0] == "Line"){
		var RefPositionTable = document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[5].innerHTML;
		var Sab = 10 * delta; //distance in meters per second (50km/h)
		var l = document.getElementById(RefPositionTable+"tbody").rows[MorphAnimationData[2]].cells.length - 1;
		var Gab = Number(document.getElementById(RefPositionTable+"tbody").rows[MorphAnimationData[2]].cells[l].innerHTML);
		var posXY = ThemeliodesProblima_1(Xa,Ya,Sab,Gab);
		
		var DZ = posZ(posXY.Xb,posXY.Yb)-Za;
		if(DZ<0 || DZ >0){
			var slope = DZ/Sab;
			var slopeRadians = Math.atan(slope);
			var SabNew = Math.abs(Sab*Math.cos(slopeRadians));
		
			posXY = ThemeliodesProblima_1(Xa,Ya,SabNew,Gab);
		}

	
		var PxPosition = UserCoordinatesXY(posXY.Xb,posXY.Yb);
	}

if(MorphAnimationData[0] == "PolyLine"){
	
		var RefPositionTable = document.getElementById(MorphAnimationData[1]).rows[0].cells[5].innerHTML;
		var RefRow = Number(document.getElementById(MorphAnimationData[1]).rows[0].cells[6].innerHTML)-1;
		var Sab = 10 * delta; //distance in meters per second (50km/h)
		var l = document.getElementById(RefPositionTable+"tbody").rows[0].cells.length - 1;
		var Gab = Number(document.getElementById(RefPositionTable+"tbody").rows[RefRow+1].cells[l].innerHTML);
		var posXY = ThemeliodesProblima_1(Xa,Ya,Sab,Gab);
		
		var DZ = posZ(posXY.Xb,posXY.Yb)-Za;
		if(DZ<0 || DZ >0){
			var slope = DZ/Sab;
			var slopeRadians = Math.atan(slope);
			var SabNew = Math.abs(Sab*Math.cos(slopeRadians));
		
			posXY = ThemeliodesProblima_1(Xa,Ya,SabNew,Gab);
		}


		var PxPosition = UserCoordinatesXY(posXY.Xb,posXY.Yb);
		
	}

}
if(CheckRun == "run"){
	
	if(MorphAnimationData[0] == "Line"){
			var RefPositionTable = document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[5].innerHTML;
		var Sab = 10 * delta; //distance in meters per second (50km/h)
		var l = document.getElementById(RefPositionTable+"tbody").rows[MorphAnimationData[2]].cells.length - 1;
		var Gab = Number(document.getElementById(RefPositionTable+"tbody").rows[MorphAnimationData[2]].cells[l].innerHTML);
		var posXY = ThemeliodesProblima_1(Xa,Ya,Sab,Gab);

		var DZ = posZ(posXY.Xb,posXY.Yb)-Za;
		if(DZ<0 || DZ >0){
			var slope = DZ/Sab;
			var slopeRadians = Math.atan(slope);
			var SabNew = Math.abs(Sab*Math.cos(slopeRadians));
		
			posXY = ThemeliodesProblima_1(Xa,Ya,SabNew,Gab);
		
		}

		

		document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[2].innerHTML = posXY.Xb.toFixed(4);
		document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[3].innerHTML = posXY.Yb.toFixed(4);

		document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[4].innerHTML = posZ(Xb,Yb);
		
		var PxPosition = UserCoordinatesXY(posXY.Xb,posXY.Yb);
	}
	
	if(MorphAnimationData[0] == "PolyLine"){
		
	var RefPositionTable = document.getElementById(MorphAnimationData[1]).rows[0].cells[5].innerHTML;
		var RefRow = Number(document.getElementById(MorphAnimationData[1]).rows[0].cells[6].innerHTML)-1;
		var Sab = 10 * delta; //distance in meters per second (50km/h)
		var l = document.getElementById(RefPositionTable+"tbody").rows[0].cells.length - 1;
		var Gab = Number(document.getElementById(RefPositionTable+"tbody").rows[RefRow+1].cells[l].innerHTML);
		var posXY = ThemeliodesProblima_1(Xa,Ya,Sab,Gab);

		var DZ = posZ(posXY.Xb,posXY.Yb)-Za;
		if(DZ<0 || DZ >0){
			var slope = DZ/Sab;
			var slopeRadians = Math.atan(slope);
			var SabNew = Math.abs(Sab*Math.cos(slopeRadians));
		
			posXY = ThemeliodesProblima_1(Xa,Ya,SabNew,Gab);
		}

	
		
		document.getElementById(MorphAnimationData[1]).rows[0].cells[2].innerHTML = posXY.Xb.toFixed(3);
		document.getElementById(MorphAnimationData[1]).rows[0].cells[3].innerHTML = posXY.Yb.toFixed(3);

		document.getElementById(MorphAnimationData[1]).rows[0].cells[4].innerHTML = posZ(Xb,Yb);
		/*
		AnimatedModelsAttTable.rows[i].cells[2].innerHTML = Xb.toFixed(3);
		AnimatedModelsAttTable.rows[i].cells[3].innerHTML = Yb.toFixed(3);
		AnimatedModelsAttTable.rows[i].cells[4].innerHTML = posZ(Xb,Yb);
		*/
		var PxPosition = UserCoordinatesXY(posXY.Xb,posXY.Yb);
		
	}
}

return {x:PxPosition.x , y:PxPosition.y , z:PxPosition.z};

}

function CalculateDeltaRotation(i,MorphAnimationData,rotationData){

	if(MorphAnimationData[0] == "Line"){	
	var Xa,Ya,Za,Xb,Yb,Zb;
	
	Xa = rotationData[0];
	Ya = rotationData[1];
	Za = rotationData[2];
	
	Xb = Number(document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[2].innerHTML);
	Yb = Number(document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[3].innerHTML);
	Zb = Number(document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[4].innerHTML);
	var RefTable = document.getElementById(MorphAnimationData[1]).rows[MorphAnimationData[2]].cells[5].innerHTML
	var AngleLength = document.getElementById(RefTable+"tbody").rows[0].cells.length -1
	var RefRow = Number(document.getElementById(MorphAnimationData[1]).rows[0].cells[6].innerHTML)-1;
	
	var G = Number(document.getElementById(RefTable+"tbody").rows[RefRow].cells[AngleLength].innerHTML);
	var Sab = ThemeliodesProblima_2(Xa,Ya,Xb,Yb).Sab;
	var DZ = Zb-Za;
	var XYkathetis = ThemeliodesProblima_1(Xb,Yb,Sab,G+100);
	var Xkathetis =XYkathetis.Xb;
	var Ykathetis =XYkathetis.Yb;
	var Zkathetis = posZ(Xkathetis,Ykathetis);
	var DZkathetis = Zb-Zkathetis;
	/*
	
	
		
		var RotF = Math.atan(DZ/Sab) ;
		document.getElementById("help").innerHTML = "yo";
	var SabKathetisFINAL = ( DZ/(Math.abs(Math.sin(RotF)))) * Math.cos(Math.PI/2 - RotF);
	var XYkathetisFINAL = ThemeliodesProblima_1(Xkathetis,Ykathetis,SabKathetisFINAL,G);

	var ZkathetisFINAL = posZ(XYkathetisFINAL.Xb,XYkathetisFINAL.Yb);
	var DZkathetisFINAL = Zb-ZkathetisFINAL;
			
			
		
			
			var SabKathetis =ThemeliodesProblima_2(Xb,Yb,XYkathetisFINAL.Xb,XYkathetisFINAL.Yb)
			
			/////
			*/
	var RotationX = 0;
	var RotationY =0;
	
	if(DZ<0 || DZ >0){
			
			
		
			
			RotationX = Math.atan(DZ/Sab) ;
			RotationY = Math.atan(DZkathetis/Sab) ;
		}

	
	
	
	
		var DRotationX=rotationData[3]-RotationX;
		var DRotationY=rotationData[4]-RotationY;
	rotationData[0] = Xb;
	rotationData[1] = Yb;
	rotationData[2] = Zb;
	rotationData[3] = RotationX;
	rotationData[4] = RotationY;


	}
	
	
	if(MorphAnimationData[0] == "PolyLine"){	
	var Xa,Ya,Za,Xb,Yb,Zb;
	
	Xa = rotationData[0];
	Ya = rotationData[1];
	Za = rotationData[2];
	
	Xb = Number(document.getElementById(MorphAnimationData[1]).rows[0].cells[2].innerHTML);
	Yb = Number(document.getElementById(MorphAnimationData[1]).rows[0].cells[3].innerHTML);
	Zb = Number(document.getElementById(MorphAnimationData[1]).rows[0].cells[4].innerHTML);
	var RefTable = document.getElementById(MorphAnimationData[1]).rows[0].cells[5].innerHTML;
	var RefTableID = Number(document.getElementById(MorphAnimationData[1]).rows[0].cells[6].innerHTML);
	var AngleLength = document.getElementById(RefTable+"tbody").rows[0].cells.length -1
	var G = Number(document.getElementById(RefTable+"tbody").rows[RefTableID].cells[AngleLength].innerHTML);
var Sab = ThemeliodesProblima_2(Xa,Ya,Xb,Yb).Sab;
	var DZ = Zb-Za;
	var XYkathetis = ThemeliodesProblima_1(Xb,Yb,Sab,G+100);
	var Xkathetis =XYkathetis.Xb;
	var Ykathetis =XYkathetis.Yb;
	var Zkathetis = posZ(Xkathetis,Ykathetis);
	var DZkathetis = Zkathetis-Zb;
	
	var RotationX = 0;
	var RotationY =0;
	
	if(DZ<0 || DZ >0){
			
			
		
			
			RotationX = Math.atan(DZ/Sab) ;
			RotationY = Math.atan(DZkathetis/Sab) ;
		}

	
	
	
	
		var DRotationX=rotationData[3]-RotationX;
		var DRotationY=rotationData[4]-RotationY;
	rotationData[0] = Xb;
	rotationData[1] = Yb;
	rotationData[2] = Zb;
	rotationData[3] = RotationX;
	rotationData[4] = RotationY;

	}
	return {x:Number(DRotationX),
	y:Number(DRotationY)
			};
		
	}
