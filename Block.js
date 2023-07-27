class Block{
    constructor(x, y, blockWidth, blockHeight, speed){
        this.bHeight = blockHeight;//方块高度
        this.bWidth = blockWidth;//方块长度
        this.bX = x;//方块X位置
        this.bY = y;//方块y位置
        this.offset = speed;//方块移动速度
        this.showValue = 0;//方块的显示属性（基于ASCII）
    }

    show = function(){
        if (this.showValue == 0){
            rc.rectangle(
                this.bX,
                this.bY, 
                this.bWidth, 
                this.bHeight, 
                {
                    fill: 'white',
                    fillStyle: 'solid',
                 }
            );
        } else if(this.showValue == 1){
            rc.rectangle(
                this.bX,
                this.bY, 
                this.bWidth, 
                this.bHeight, 
                {
                    fill: 'blue',
                    fillStyle: 'zigzag',
                 }
            );
        }

    }

    move = function(){
        this.bX += this.offset;
        if(this.bX + this.bWidth > width){
            this.bX = - this.bWidth;
        }

    }
}