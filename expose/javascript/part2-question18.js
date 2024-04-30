(function loop(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    setTimeout(() => {
    console.log(time),
    loop();
    }, "1000");
})();
    