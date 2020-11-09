class Leaderboard{
    constructor(ip){
        this.leaderboard = null;
        this.ip = ip
    }
    draw(){
        if (OUTCOME != undefined){
            this.leaderboard = OUTCOME
            let StartX = width * (410/550)
            let StartY = height*(130/402)
            if (this.leaderboard != undefined )
                textSize(10*scale)
                text("USERNAME    SCORE",StartX,StartY)
                text("1: "+this.leaderboard['1'].username,StartX,StartY+(20*scale))
                text(this.leaderboard['1'].score,StartX+(100*scale),StartY+(20*scale))

                text("2: "+this.leaderboard['2'].username,StartX,StartY+(35*scale))
                text(this.leaderboard['2'].score,StartX+(100*scale),StartY+(35*scale))

                text("3: "+this.leaderboard['3'].username,StartX,StartY+(50*scale))
                text(this.leaderboard['3'].score,StartX+(100*scale),StartY+(50*scale))

                text("4: "+this.leaderboard['4'].username,StartX,StartY+(65*scale))
                text(this.leaderboard['4'].score,StartX+(100*scale),StartY+(65*scale))

                text("5: "+this.leaderboard['5'].username,StartX,StartY+(80*scale))
                text(this.leaderboard['5'].score,StartX+(100*scale),StartY+(80*scale))
        }
        //text(this.leaderboard['1'][username],400,200)
    }
    grabData(){
        OUTCOME = JSON.parse(this.response)
    }

    request(path){    
        console.log(this.ip+path)
        var oReq = new XMLHttpRequest();
        //oReq.responseType = 'json';
        oReq.addEventListener("load",this.grabData)
        oReq.open("GET", this.ip+path,false);
        oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        oReq.send();
    }
    send(username,score,path){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.ip+path, true);
        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
            }
        }
        xhr.send(JSON.stringify({ "username":username,"score": score}));
    }
}