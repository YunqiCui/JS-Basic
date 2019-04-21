function Mario() {
    this.x = 0;
    this.y = 0;

    //MoveUp direct = 0,1,2,3
    this.move = function (direct) {
        var mymario = document.getElementById("mymario");

        switch (direct) {
            case 0:
                var up = mymario.style.top;
                up = parseInt(up.substring(0, up.length - 2));
                if (up <= 1) {
                    window.alert("Reach top!");
                } else {
                    mymario.style.top = (up - 15) + "px";
                }
                break;

            case 1:
                var right = mymario.style.left;
                right = parseInt(right.substring(0, right.length - 2));
                if (right > 400) {
                    window.alert("Reach right!");
                } else {
                    mymario.style.left = (right + 15) + "px";
                }
                break;

            case 2:
                var down = mymario.style.top;
                down = parseInt(down.substring(0, down.length - 2));
                if (down > 300) {
                    window.alert("Reach bottom!")
                } else {
                    mymario.style.top = (down + 15) + "px";
                }
                break;

            case 3:
                var left = mymario.style.left;
                left = parseInt(left.substring(0, left.length - 2));
                if (left <= 1) {
                    window.alert("Reach left!");
                } else {
                    mymario.style.left = (left - 15) + "px";
                }
                break;
        }
    }
}

//创建
var mario = new Mario();

function marioMove(direct) {
    switch (direct) {
        case 0:
            mario.move(direct);
            break;
        case 1:
            mario.move(direct);
            break;
        case 2:
            mario.move(direct);
            break;
        case 3:
            mario.move(direct);
            break;
    }
}

