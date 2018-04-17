let elem = ["ｻｶ","ﾓﾄ","ｹﾞｷ"];



const Click = () => {
        let randNum = Math.floor(Math.random()*3);
        console.log(randNum);


    let output = document.getElementById("output");

    output.innerHTML += elem[randNum];

    let hantei = document.getElementById("output").innerHTML.slice(-7);

    if (hantei === "ｻｶﾓﾄｹﾞｷ") {
        output.innerHTML = "ﾗﾒｰﾝ";
    }else {
        console.log("else");
        console.log(hantei);
    }


};
