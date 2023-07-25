function execute(){
    var fontRegular = loadFont('./ast/joystix monospace.otf');

    unit = width / 3 / 19;//单位长度
    blockSize = [];//每一块随机长度
    for( var i = 0; i < 19; i++){
        blockSize.push(numberGen());
    }

    var fristBlock =[];
    fristBlock = rowBlock();//生成原始方块

    finalBlock = showValue(fristBlock);//给方块配置ASCII代码

    console.log(finalBlock);
    // console.log(finalBlock[0].lineBlock[0]);


    draw = function(){
        background(0);

        for( i = 0; i < finalBlock.length; i++){
            textSize(unit);
            textFont(fontRegular);//配置字体
            fill(255);
            text(finalBlock[i].letterContent, width - unit - unit, finalBlock[i].letterY);

            for(k = 0; k < finalBlock[i].lineBlock.length; k++){
                // console.log("1");

                finalBlock[i].lineBlock[k].show();
                finalBlock[i].lineBlock[k].move();
            }
        }

    }
}