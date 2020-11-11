class Leaderboard{
    constructor(ip){
        this.leaderboard = null;
        this.ip = ip
        this.oReq = new XMLHttpRequest();
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
        //console.log(this.ip+path)
        //oReq.responseType = 'json';
        this.oReq.addEventListener("load",this.grabData)
        this.oReq.open("GET", this.ip+path,true);
        this.oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        this.oReq.send();
    }
    send(username,score,path){
        this.oReq.open("POST", this.ip+path, true);
        //Send the proper header information along with the request
        this.oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        this.oReq.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
            }
        }
        this.oReq.send(JSON.stringify({ "username":username,"score": score}));
    }
}