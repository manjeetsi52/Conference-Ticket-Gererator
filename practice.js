
var arr = []
function random(){
         const num = Math.floor(10000 + Math.random() * 90000);
        if(!arr.includes(num)){
            arr.push(num)
        }
        console.log(arr)
}

random()