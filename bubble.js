const blue    = '\u001b[34m';
const reset   = '\u001b[0m';

console.log(blue);
let r = process.stdout.getWindowSize()[1]-1;

let bubble_element = ".゜。。ﾟ.ﾟ｡°o";
let bubble;
let space = "";
for(let i = 0;i < process.stdout.getWindowSize()[0];i++){
    space += " ";
}

let inter = setInterval(drowbubble,100)

function drowbubble(){
    bubble = "";
    for(let i = 0;i < process.stdout.getWindowSize()[0];i++){
        bubble += bubble_element[Math.floor(Math.random()*bubble_element.length)]
    }

    require('readline').cursorTo(process.stdout,0,r);
    process.stdout.write(bubble);
    require('readline').cursorTo(process.stdout,0,r+1);
    process.stdout.write("    ");
    require('readline').cursorTo(process.stdout,process.stdout.getWindowSize()[0]-4,r+1);
    process.stdout.write("    ");
    require('readline').cursorTo(process.stdout,0,r+2);
    process.stdout.write(space);
    r--;
    if(r === -1){
        console.clear()
        console.log(reset)
        require('readline').cursorTo(process.stdout,0,0);
        clearInterval(inter);
    }
}