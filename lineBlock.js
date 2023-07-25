function lineBlock(number){
    var lineBlockResult = {
        lineBlock:[],
        letterContent:[],
        letterY:0,
    };
    var smallBlock;//单个方块
    var smallBlockX = 0;//方块的X坐标
    var smallBlockY;//方块的Y坐标
    var smallBlockHeight;//方块高度
    var smallBlockWidth;//方块长度
    var lineNum = number;//lineNum count from 0
    var blockSpeed = $fx.rand() * 5;//方块速度

    var lineText = "once and once again";

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

        lineBlockResult.lineBlock.push(smallBlock);

        smallBlockX = smallBlockX + smallBlockWidth;
    }

    lineBlockResult.letterContent = lineText[lineNum % 19];
    lineBlockResult.letterY = smallBlockY+unit;

    return lineBlockResult;

}