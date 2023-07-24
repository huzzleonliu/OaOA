function execute(){
    unit = width / 3 / 19;//单位长度

    blockSize = [];//每一块随机长度
    for( var i = 0; i < 19; i++){
        blockSize.push(numberGen());
    }

    var fristBlock =[];
    fristBlock = rowBlock();//生成原始方块

    finalBlock = showValue(fristBlock);//给方块配置ASCII代码


    draw = function(){
        background(0);

        for( i = 0; i < finalBlock.length; i++){
            for(k = 0; k < finalBlock[i].length; k++){
                finalBlock[i][k].show();
                finalBlock[i][k].move();
            }
        }
        // }
        // r = 10;
        // g = 255;
        // b = 30;
        // rc.rectangle(50, 50, 300, 300,{
        //     fill : "rgb(" + r + "," + g + "," + b + ")"
        // });
 

    }
}