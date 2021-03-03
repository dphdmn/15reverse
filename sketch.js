let str = "RDLDR2URDLU2RD2LULDRURDLULD2R2UL3DRU2LD2RU2RD2LU3RDLULDRURD2LURD";


 let input = document.getElementById('scramble');
 input.oninput = function() {
   
  str = input.value;
  str = str.replace(/R3|L3|D3|U3/g, s => s.substring(0,1)+s.substring(0,1)+s.substring(0,1));
  str = str.replace(/R2|L2|D2|U2/g, s => s.substring(0,1)+s.substring(0,1));
  str = str.split("").reverse().join("");
  str = str.replace(/R/g,"0");
  str = str.replace(/L/g,"1");
  str = str.replace(/D/g,"2");
  str = str.replace(/U/g,"3");
  str = str.replace(/0/g,"L");
  str = str.replace(/1/g,"R");
  str = str.replace(/2/g,"U");
  str = str.replace(/3/g,"D");
   
    document.getElementById('result').innerHTML = "<h2>Inversed solution:</h2><br>" + str + "</h2><br>Movecount: " + str.length;
  };

let cb = document.getElementById('1');
cb.oninput = function(){
  if (cb.checked){
  document.getElementById('header').innerHTML = "Put your smart solution here";
  }else{
    document.getElementById('header').innerHTML = "Put your stupid scramble here";
  }
}