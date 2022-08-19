/** Create a Button */
//CSS #btn{ width: 96px; height: 48px; font-size: 24px; }
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');      
    btn.addEventListener('click', (e) => {
        var btnVal = parseInt(btn.innerText);
        btnVal++
        btn.innerText = btnVal
    })
});


/** Buttons Container */
//CSS button{ width: 30%; height: 48px; font-size: 24px; } #btns{ width: 75%; }
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('#btns button'); 
    const btn5 = btns[4];
    var buttonsArr = [
        btns[0], btns[1], btns[2], btns[5], btns[8], btns[7], btns[6], btns[3]
    ];
    btn5.addEventListener('click', (e) => {
        var currVal
        buttonsArr.forEach((button, index) => {
            var newInnerText
            if(currVal !== undefined) newInnerText = currVal;
            else newInnerText = buttonsArr[buttonsArr.length-1].innerText
            currVal = button.innerText
            button.innerText = newInnerText;
        })
    })
});

/**  */
//CSS
/*
body{
    width: 33%;
}
#calculator{
    width: 100%;
}
#res{
    background-color: lightgray;
    border: solid;
    height: 48px;
    font-size: 20px;
}
#btn0, #btn1{
    background-color: lightgreen;
    color: brown;
}
#btnClr, #btnEql{
    background-color: darkgreen;
    color: white;
}
#btnSum, #btnSub, #btnMul, #btnDiv{
    background-color: black;
    color: red;
}
button{
    width: 25%;
    height: 36px;
    font-size: 18px;
    margin: 0px;
    float: left;
}
*/
document.addEventListener('DOMContentLoaded', () => {
    const addValueToResElements = document.getElementsByClassName('addValueToRes');
    const addValueToResButtons = Array.from(addValueToResElements);
    const btnClr = document.getElementById('btnClr');
    const btnEql = document.getElementById('btnEql');
    
    addValueToResButtons.forEach(
        btn => btn.addEventListener('click', addValueToResButtonClick)
    )
    btnClr.addEventListener('click', btnClrButtonClick)
    btnEql.addEventListener('click', btnEqlButtonClick)
    
    function addValueToResButtonClick(event){
        var res = document.getElementById('res');
        res.innerText += event.target.innerText
    }
    function btnClrButtonClick(){
        var res = document.getElementById('res');
        res.innerText = ""
    }
    function btnEqlButtonClick(){
        var res = document.getElementById('res');
        var operator = res.innerText.match(/[^0-1]/);
        if(operator){
            var binaryNums = res.innerText.split(operator[0]);
            var intResult;
            switch(operator[0]){
                case '+': 
                    intResult = parseInt(binaryNums[0], 2) + parseInt(binaryNums[1], 2);
                    break;
                case '-': 
                    intResult = parseInt(binaryNums[0], 2) - parseInt(binaryNums[1], 2);
                    break;
                case '*': 
                    intResult = parseInt(binaryNums[0], 2) * parseInt(binaryNums[1], 2);
                    break;
                case '/': 
                    intResult = parseInt(binaryNums[0], 2) / parseInt(binaryNums[1], 2);
                    break;
            }
            res.innerText = (intResult >>> 0).toString(2);
        }
    }
});