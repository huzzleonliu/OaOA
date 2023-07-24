function showValue(lastStep){
    this.finalBlock = lastStep;
    OnceAndOnceAgain =[
        "01101111",
        "01101110",
        "01100011",
        "01100101",
        "00100000",
        "01100001",
        "01101110",
        "01100100",
        "00100000",
        "01101111",
        "01101110",
        "01100011",
        "01100101",
        "00100000",
        "01100001",
        "01100111",
        "01100001",
        "01101001",
        "01101110",
    ];

    for(i = 0; i< this.finalBlock.length; i ++){
        for(k = 0; k < this.finalBlock[i].length; k++){
            this.finalBlock[i][k].showValue = OnceAndOnceAgain[i % 19][k % 8];
        }
    }

    return this.finalBlock;






}