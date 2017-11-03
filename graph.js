/* Graph */

	var vectTemp = [0,50,10,12,13,5,50,80,1,2,3,5,8,15];
	var litem = 0;//last item
	var w=500;
	var h=200;
	var TempS = w/(vectTemp.length-1);
	var tm = Math.max.apply(null, vectTemp);
	tm=h/(tm+10);
	function drawTemp(item, index){
		if(index>0){
			var canvas = document.getElementById("TempC");
			var ctx = canvas.getContext("2d");
			ctx.font = "12px Arial";
			ctx.fillText(item,TempS*(index),h-(vectTemp[index]*tm));//text
			ctx.moveTo(TempS*(index-1),h-(vectTemp[index-1]*tm));
			ctx.lineTo(TempS*(index),h-(vectTemp[index]*tm));
    	    ctx.strokeStyle = '#ff0000';
			ctx.stroke();
    	}
	}

	vectTemp.forEach(drawTemp);