const text = document.getElementById('text');
const prog = '"XIDAAR BAA KHALQIGU II YAQAAN"';
let idx = 1;

setInterval(write, 200);
function write(){
    text.innerText = prog.slice(0,idx);
    idx ++;
    if (idx > prog.length) {

        idx=1;
    }
}
