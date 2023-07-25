function rowBlock(){
    var rowBlockResult = [];
    var blockLine;
    rowTotal = height / unit;

    for(j = 0; j < rowTotal; j++){
        blockLine = lineBlock(j);
        rowBlockResult.push(blockLine);

    }

    return rowBlockResult;
}