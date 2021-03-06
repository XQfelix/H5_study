/**
 * Created by HP-Envy-Yin on 2017/12/9.
 */
function  Rect(n,color){
    createjs.Shape.call(this);
    this.setRectType = function(type){
        this._RectType= type;
        switch (type){
            case 1:
                this.setColor(color);
                break;
            case 2:
                this.setColor("#eeeeee");
                break;
        }
    }
    this.setColor = function (colorString) {
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0,0,600/n-5,600/n-5);
        this.graphics.endFill();
    }
    this.getRectType = function () {
        return this._RectType;
    }
    this.setRectType(1);
}
Rect.prototype = new createjs.Shape();