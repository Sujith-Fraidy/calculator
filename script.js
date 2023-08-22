var buffer = document.querySelector('.buffer')
var buttons = document.querySelectorAll('.calc-button')
var runningTotal=0
var activeOperator=false
var currentOperator='none'
var handleButtonClick = (event)=>{
    console.log(buffer.innerHTML,runningTotal)
    switch(event.target.innerHTML){
        case 'AC':
            handleFlush()
            break;
        case '+/-':
            runningTotal=buffer.innerHTML
            runningTotal=runningTotal-(2*runningTotal)
            buffer.innerHTML=runningTotal;
            runningTotal=0
            break;
        case '=':
            handleOperation()
            // if(!activeOperator && runningTotal===0){
            //     break;
            // }
            buffer.innerHTML=runningTotal
            activeOperator=false
            runningTotal=0
            break;
        case '%':
            runningTotal=buffer.innerHTML
            runningTotal=runningTotal/100
            buffer.innerHTML=runningTotal
            runningTotal=0
        case '+':
        case '−':
        case '×':
        case '÷':
            currentOperator=event.target.innerHTML
            runningTotal=parseFloat(buffer.innerHTML)
            activeOperator=true
            break;
        default:
            handleNumber(event)
    }
    
}
var handleFlush = ()=>{
    buffer.innerHTML='0'
    runningTotal=0
    activeOperator=false
}
var handleOperation = (event)=>{
    switch(currentOperator){
        case '+':
            return(runningTotal+=parseFloat(buffer.innerHTML))
        case '−':
            return(runningTotal-=parseFloat(buffer.innerHTML))
        case '×':
            return(runningTotal*=parseFloat(buffer.innerHTML))
        case '÷':
            return(runningTotal/=parseFloat(buffer.innerHTML))
    }
}
var handleNumber = (event)=>{
    if (buffer.innerHTML ==='0' || activeOperator){
        buffer.innerHTML=(event.target.innerHTML)
        activeOperator=false    
    }
    else{
        buffer.innerHTML+=event.target.innerHTML
    }
}
buttons.forEach(button => {
    button.addEventListener('click',(event)=>handleButtonClick(event))
});