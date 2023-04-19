function bastoffTimer(){
    console.log("bastoffTimer() started");
    //variable to keep time
    var currTime = 20;

    //timer at 20
    setTimeout(function(){
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 0);

    //timer at 18
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 2000);

    //timer at 16
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 4000);

    //timer at 14
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 6000);

    //timer at 12
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 8000);

    //timer at 10
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 10000);

    //timer at 8
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 12000);

    //timer at 6
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 14000);

    //timer at 4
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 16000);

    //timer at 2
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 18000);

    //timer at 0
    setTimeout(function(){
        currTime = currTime - 2;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";
    }, 20000);
}

//craps tracking variables
var wins = 0;
var loses = 0;
var draws = 0;

function playCraps(){
    console.log("playCraps() started");
    //create variable die 1 for the die 1 roll
    var die1 = 0;
    //create variable die 1 for the die 1 roll
    var die2 = 0;
    //create variable to store die1 + die2
    var sum = 0;

    //roll the dice for die 1
    //rolling the die
    die1 = 1 + Math.floor(6 * Math.random());
    //displaying the result on the console
    console.log(die1);

    //same for die 2
    //rolling the die
    die2 = 1 + Math.floor(6 * Math.random());
    //displaying the result on the console
    console.log(die2);

    //determine sum
    sum = die1 + die2;
    //displaying the result on the console
    console.log("The sum of the two dice is: " + sum);

    //display the die1 on the webpage
    document.getElementById("die1Res").innerHTML = die1;
    //display the die2 on the webpage
    document.getElementById("die2Res").innerHTML = die2;

    document.getElementById("diceSum").innerHTML = sum;

    //determine game result
    if(sum == 11 || sum == 7){
        console.log("Game result : loss");
        document.getElementById("gameRes").innerHTML = "You lose!!!!!!!!";
        loses++;
        document.getElementById("losesRes").innerHTML = loses;
    } else if(die1 == die2 && die1 % 2 == 0) {
        console.log("Game result : win");
        document.getElementById("gameRes").innerHTML = "You win!!!!!!";
        wins++;
        document.getElementById("winsRes").innerHTML = wins;
    } else {
        console.log("Game result : push");
        document.getElementById("gameRes").innerHTML = "push, you did not lose";
        draws++;
        document.getElementById("drawsRes").innerHTML = draws;
    }
}

function btrBlastoffTimer(){
    console.log("btrBlastoffTimer() started");
    //variable to keep time
    var currTime = 20;
    console.log("var currTime = 20; ran");
    //what is loop doing and how is it set up...
    for(var i = 0; i < 11; i=i+1){
        console.log("for(var i = 0; i > 11; i=i+1) started");
        //this gets done i number of times
        setTimeout(function(){
            console.log("currTime = " + currTime);
            if(currTime == 0){
                console.log("currTime == 0 started");
                document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";
            } else if(currTime < 10) {
                console.log("currTime < 10 started");
                document.getElementById("blastoffDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " sec left"
            } else {
                console.log("everything else");
                document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
            }
            currTime = currTime - 2;
        }, 2000 * i);
    }
}

function startFun(){
    console.log("startFun() started");
    document.getElementById("data").rows["time_seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, timeInterval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(timer);
    //clear the clock
    document.getElementById("clockTime").innerHTML = "Press start to display current time";
}

function playStation(){
    //used the load and play the action song
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function pauseStation(){
    //used the load and play the action song
    console.log("pauseStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.pause();
}

function playWarpFail(){
    console.log("playWarpFail()");
    mySound = new sound("failedWarp.mp3");
    mySound.play();
}

function sound(srcFile){
    console.log("sound(srcFile) started");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay() {
    console.log("updateDisplay() started");
    theTime = new Date();
    //test the time before showing
    //using special if statement for below 10 seconds, conditions ? do it true : do if false
    console.log(theTime.getHours() + ":" + 
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + 
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    //adding the screen time
    document.getElementById("clockTime").innerHTML = (theTime.getHours() + ":" + 
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + 
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    //time for tble updating
    var timeRead = data[index].time_seconds;

    if (timeRead > 9){
        document.getElementById("data").rows["time_seconds"].innerHTML =
            dataRow("Time elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, "");
        document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].latitude, "");
        document.getElementById("data").rows["gps_altitude"].innerHTML =
            dataRow("GPS altitude", data[index].gps_altitude, "");
        document.getElementById("data").rows["bmp_altitude"].innerHTML =
            dataRow("BMP altitude", data[index].bmpSensor_altitude, "");
        document.getElementById("data").rows["bmp_pressure"].innerHTML =
            dataRow("BMP pressure", data[index].bmpSensor_pressure, "");
        document.getElementById("data").rows["bmp_temperature"].innerHTML =
            dataRow("BMP temperature", data[index].bmpSensor_temp, "");
        document.getElementById("data").rows["dig_temperature"].innerHTML =
            dataRow("Digital temperature", data[index].digSensor_temp, "");
        document.getElementById("data").rows["css_temperature"].innerHTML =
            dataRow("CSS temperature", data[index].cssSensor_temp, "");
        document.getElementById("data").rows["css_eCO2"].innerHTML =
            dataRow("CSS eCO2", data[index].cssSensor_eCO2, "");
        document.getElementById("data").rows["css_TVOC"].innerHTML =
            dataRow("CSS TVOC", data[index].cssSensor_TVOC, "");
        document.getElementById("data").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, "");
        document.getElementById("data").rows["accelX"].innerHTML =
            dataRow("accelX", data[index].accelX, "");
        document.getElementById("data").rows["accelY"].innerHTML =
            dataRow("accelY", data[index].accelY, "");
        document.getElementById("data").rows["accelZ"].innerHTML =
            dataRow("accelZ", data[index].accelZ, "");
        document.getElementById("data").rows["magneticX"].innerHTML =
            dataRow("magneticX", data[index].magneticX, "");
        document.getElementById("data").rows["magneticY"].innerHTML =
            dataRow("magneticY", data[index].magneticY, "");
        document.getElementById("data").rows["magneticZ"].innerHTML =
            dataRow("magneticZ", data[index].magneticZ, "");
        document.getElementById("data").rows["gyroX"].innerHTML =
            dataRow("gyroX", data[index].gyroX, "");
        document.getElementById("data").rows["gyroY"].innerHTML =
            dataRow("gyroY", data[index].gyroY, "");
        document.getElementById("data").rows["gyroZ"].innerHTML =
            dataRow("gyroZ", data[index].gyroZ, "");
    }

    if(index < 500){
        index++;
    } else {
        index = 0;
    }
}

