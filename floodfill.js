function floodFill(arr, originX, originY, valUse) {
	if(valUse === undefined) {
		valUse = 10;
	}
	if(arr[originX][originY] != -1){
		return 0;
	}
	var temp = [];
	temp.push({'x':originX,'y':originY});
	arr[originX][originY] = valUse;
	var curSpot;
	var tempSpot;
	var score = 1;
	while(temp.length > 0){
		curSpot = temp.shift();
		for(var i = 0; i < xdirs.length;i++){
			tempSpot = {'x':curSpot.x + xdirs[i],'y':curSpot.y + ydirs[i]};
			if(inArray(tempSpot.x,tempSpot.y,arr))
			{
				if( arr[tempSpot.x][tempSpot.y] == -1 ) {
					score++;
					arr[tempSpot.x][tempSpot.y] = valUse;
					temp.push(tempSpot);
				}
			}
		}
	}
	return score;
}