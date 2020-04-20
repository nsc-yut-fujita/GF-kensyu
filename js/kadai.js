// 1.配列の中の値を昇順に並び替える

var x = [1,5,3,2,4];
//調べる範囲の開始位置を1つずつ後ろへ移動するfor文
for(var i = 0;i <x.length;i++){
    //後ろから前に向かって小さい値を浮かび上がらせるfor文
    for(var j = x.length-1;j>i;j--){
        //隣り合う2つの値を比べて、後ろが小さければ交換する
        if(x[j]<x[j-1]){
            var tmp = x[j];
            x[j] = x[j-1];
            x[j-1] = tmp;
        }
    }
}

console.log(x);
    

// 2.配列の中の値を降順に並び替える

var x = [1,5,3,2,4];
//調べる範囲の開始位置を1つずつ後ろへ移動するfor文
for(var i = 0;i <x.length;i++){
    //後ろから前に向かって小さい値を浮かび上がらせるfor文
    for(var j = x.length-1;j>i;j--){
        //隣り合う2つの値を比べて、後ろが小さければ交換する
        if(x[j]>x[j-1]){
            var tmp = x[j];
            x[j] = x[j-1];
            x[j-1] = tmp;
        }
    }
}

console.log(x);

// 3.指定した数字までのフィボナッチ数列を計算する


function fibo(suu){
    var a = [];
    if (suu>0) {
        for (let b = 0; b <= suu; b++) {
            if(a[b-2]+a[b-1]>suu){
                break;
            }
            if(b == 0){
                a.push(1);
            }else if(b==1){
            a.push(0+a[b-1]);
            }
            else {
             a.push(a[b-2]+a[b-1]);
            }
        }
    }
    return a;
}
console.log(fibo(2));

// 4.入力した値が素数かどうかをチェックする
//     条件　1より大きく1と自分自身でしか割り切れない数字

