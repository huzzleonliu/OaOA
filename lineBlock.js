function lineBlock(number){
    var lineBlockResult = [];
    var smallBlock;//单个方块
    var smallBlockX = 0;//方块的X坐标
    var smallBlockY;//方块的Y坐标
    var smallBlockHeight;//方块高度
    var smallBlockWidth;//方块长度
    var lineNum = number;//lineNum count from 0
    var blockSpeed = random(0,5);//方块速度



    for(i = 0; smallBlockX < width ; i++){
        smallBlockY = 0 + lineNum * unit;
        smallBlockHeight = unit;
        smallBlockWidth = blockSize[lineNum % 19][i % 8] * unit;

        smallBlock = new Block(
            smallBlockX,
            smallBlockY,
            smallBlockWidth,
            smallBlockHeight,
            blockSpeed,
        );

        lineBlockResult.push(smallBlock);

        smallBlockX = smallBlockX + smallBlockWidth;
    }

    return lineBlockResult;

}