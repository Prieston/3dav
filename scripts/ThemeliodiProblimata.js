
function ThemeliodesProblima_1(Xa,Ya,Sab,Gab){
	
	//1rad=63.6619772367581grads
	Xb = Xa + Sab*Math.sin(Gab/63.6619772367581);
	Yb = Ya + Sab*Math.cos(Gab/63.6619772367581);
	
	return {Xb:Xb , Yb:Yb}
}
function ThemeliodesProblima_2(Xa,Ya,Xb,Yb){
	
	
	var absDX = Math.abs(Xb-Xa);
	var absDY = Math.abs(Yb-Ya);
	var Sab = Math.sqrt( Math.pow(absDX,2) + Math.pow(absDY,2) );
	var DX = Xb-Xa;
	var DY = Yb-Ya;
	var theta =Math.atan((absDX/absDY))*63.6619772367581; //http://www.translatorscafe.com/cafe/EN/units-converter/angle/2-3/radian-grad/
	if (DX>0 && DY>0){
		var Gab = theta;
	}
	if (DX>0 && DY<0){
		var Gab = 200 - theta;
	}
	if (DX<0 && DY<0){
		var Gab = 200 + theta;
	}
	if (DX<0 && DY>0){
		var Gab = 400 - theta;
	}
	if (DX==0 && DY>0){
		var Gab = 0;
	}
	if (DX==0 && DY<0){
		var Gab = 200;
	}
	if (DX>0 && DY==0){
		var Gab = 100;
	}
	if (DX<0 && DY==0){
		var Gab = 300;
	}
	if (DX==0 && DY==0){
		var Gab = 0;
	}
	//Gab = Gab/63.6619772367581;
	return {Gab:Gab.toFixed(4) , Sab:Sab.toFixed(4)}

}