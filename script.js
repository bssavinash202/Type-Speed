const motivationalTexts = [
    "Believe in your dreams always",
    "Hard work beats talent eventually",
    "Every step counts toward success",
    "Stay positive and keep moving",
    "Success comes to the persistent",
    "Your journey is your strength",
    "Dream big and work harder",
    "Embrace failure, learn, and grow",
    "Passion drives powerful achievements",
    "Create the life you desire"
  ];
  
  const fantasyTexts = [
    "The dragon soared above mountains",
    "Magic flowed through ancient ruins",
    "The castle shimmered under moonlight",
    "Enchanted forests whispered hidden secrets",
    "The wizard's staff glowed brightly",
    "Mystical creatures guarded the treasure",
    "The hero wielded a cursed sword",
    "Darkness crept over the kingdom slowly",
    "The prophecy spoke of great power",
    "The enchanted mirror revealed truth"
  ];
  
  const technologyTexts = [
    "AI is transforming modern industries",
    "Quantum computing breaks speed limits",
    "Blockchain ensures secure data transactions",
    "Virtual reality enhances learning experiences",
    "5G connectivity revolutionizes mobile communication",
    "Smart devices simplify daily routines",
    "Cloud storage enables global collaboration",
    "Cybersecurity safeguards personal information",
    "Machine learning powers better predictions",
    "Robotics enhances manufacturing efficiency"
  ];
  
let millisec=0
let sec=0
let min=0
let border = document.getElementById('text-container')
  function startTime(){
    interval = setInterval(()=>{
        millisec+=10
        if(millisec==1000){
            millisec=0;
            sec++
        }
        if(sec==60){
            sec=0
            min++
        }
        document.getElementById('display').innerText=`${min<10?'0':''}${min} : ${sec<10?'0':''}${sec} : ${millisec<100?'0':''}${millisec}`
   
    },10)  
 }
 function stopTime(){
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    millisec = 0;
    sec = 0;
    min = 0;
    document.getElementById('display').innerText = "00 : 00 : 000";
    flag = false;
}
let str=""
let ele = document.getElementById('text')
const display=(arr)=>{
    let i = Math.floor(Math.random()*10);
    ele.innerText=arr[i]
    str = document.getElementById('text').innerText
}
const clearInput =()=>{
    document.getElementById('text-area').value=""
}
const random = ()=>{
    let arr = motivationalTexts
    display(arr)
    resetTimer()
    clearInput()
}
const random1 = ()=>{
    let arr = fantasyTexts
    display(arr)
    resetTimer()
    clearInput()
}
const random2 = ()=>{
    let arr = technologyTexts
    display(arr)
    resetTimer()
    clearInput()
}

let flag=false
const typedText=()=>{
    
    if(!flag){
        flag=true;
        startTime()
    }
    border.style.border='5px solid blue'
    let type = document.getElementById('text-area').value
    if(type===str){
        stopTime()
        border.style.border = "5px solid green"
    }
    let length = type.length;
    if(type[length-1]!=str[length-1]){
        border.style.border = "5px solid red"
    }
}


