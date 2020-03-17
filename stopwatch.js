$(function(){
    
    /*variable*/
    var mode =0;
    /*app node*/
    var timeCounter = 0;//time counter
    
var lapCounter = 0;//lap counter
    var action;//variable for setinterval
    var lapNumber = 0;//number of laps
    //minutes,seconds,centiseconds for time and lap
    var timeMinutes,timeSeconds,timeCentiseconds,lapMinutes,lapSeconds,lapCentiseconds;
    
    
    //on app load show start and lap button,which function uwant to show with id
    hideshowButtons("#startButton","#lapButton");
    
//click on  startButton  
    $("#startButton").click(function(){
        
    
    //mode on
        mode =1;
    
//show stop and lap buttons
            hideshowButtons("#stopButton","#lapButton");
    //start counter
      startAction();   
    });
    
    
    //click on stopButton 
    $("#stopButton").click(function()
                          {
        hideshowButtons("#resumeButton","#resetButton");

    //mode on
//show resume and reset buttons
    //stop counter
        clearInterval(action);
        });
    
        
    //click on resumeButton 
        
    $("#stopButton").click(function()
                          {
    //mode on
//show stop and lap buttons
        hideshowButtons("#stopButton","#lapButton");
    //start action
        startAction();
        });

    
    
    //click on resetButton 
        $("#stopButton").click(function()
                          {
//reload the page
            location.reload();
        });
 
    
    //click on lapButton 
            $("#lapButton").click(function()
                          {
// if mode is on
                if(mode ){
                        //stop action
                    clearInterval(action);
    //reset lap and print lap details
                    lapCounter = 0;
                    addLap();
    //start actions
                    startAction();
                }

        });
    
    
    //function
    function hideshowButtons(x,y){
        //x y represent ids
        $(".control").hide();
        $(x).show();
        $(y).show();
        
    }
    //startbthe counter
    function startAction(){
        action =setInterval(function(){
              timeCounter++;
            if(timeCounter == 100*60*100)
                {
                 timeCounter = 0;   
                }
            lapCounter++;
              if(lapCounter == 100*60*100)
                {
                 lapCounter = 0;   
                }
        
            updateTime();
        },10);
      
    }
    //updateYTime is covert to min sec centi sec
    function updateTime(){
        //1 min 60 sec 1 sec 10 ms 1 ms 10 centisec then 1 min=60*100centisec=6000centi
        timeMinutes = Math.floor(timeCounter/6000);
        //1 sec=100 centi
        timeSeconds =Math.floor(timeCounter%6000/100);
           timeCentiseconds =(timeCounter%6000%100);
        
        $("#timeminute").text(format(timeMinutes));
         $("#timesecond").text(format(timeSeconds));
         $("#timecentisecond").text(format(timeCentiseconds));
        
             //1 min 60 sec 1 sec 10 ms 1 ms 10 centisec then 1 min=60*100centisec=6000centi
        lapMinutes = Math.floor(lapCounter/6000);
        //1 sec=100 centi
        lapSeconds =Math.floor(lapCounter%6000/100);
           lapCentiseconds =(lapCounter%6000%100);
        
           $("#lapminute").text(lapMinutes);
         $("#lapsecond").text(lapSeconds);
         $("#lapcentisecond").text(lapCentiseconds);
    }
    //format numbers
    function format(number){
        if(number<10){
            return '0'+number;
        }
        else{
            return number;
        }
    }
    //addLap
    function addLap(){
        lapNumber++;
        var myLapDetails = '<div class="lap">'+
 '<div class="laptimetitle">'+
 'Lap'+ lapNumber +
 '</div>'+
'<div class="laptime">'+
 '<span>'+ format(lapMinutes)
+'</span>'+
 ':<span>'+ format(lapSeconds)
+'</span>'+
 ':<span>'+ format(lapCentiseconds)
+'</span>'+
 '</div>'+
 '</div>';
 $(myLapDetails).prependTo("#laps");
 }
});