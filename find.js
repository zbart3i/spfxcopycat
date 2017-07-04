var find = function() {

    var tab1 = ["ura", "jax", "xps"];
    var tab2 = ["spo", "xps", "uefa"];
var exist=false;
var i;
var j;
outer_loop:
    for ( i = 0; i < tab1.length; i++) {
        for (j = 0; j < tab2.length; j++) {

              if(tab1[i]==tab2[j])
              {
                exist=true;
                break outer_loop;
              }
              console.log(exist);
        }
    }
console.log("i="+i);
console.log("j="+j);

}

find();
