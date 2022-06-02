var seg=0
var min=0
var hr=0
var Interval

function inicio() {
    Interval= setInterval(tempo,1)
}

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function pause(){
    clearInterval(Interval)

}

function stop(){
    clearInterval(Interval)
    sec=0
    min=0
    document.getElementById('tempo').innerText='00:00:00'
}

function tempo() {
    seg++
    if (seg==60) {
        min++
        seg=0
        if (min==60){
            min=0
            hr++
        }
    }
    document.getElementById('tempo').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(seg)
}