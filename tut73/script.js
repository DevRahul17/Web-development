function createcard(title, channelname, views, monthhold, duration, thumbnail){
    let viewstring;
    if(views < 1000){
        viewstring = views;
    }
    else if(views >= 1000000){
        viewstring = views/1000000 + "M";
    }
    else{
        viewstring = views/1000 + "K";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channelname} . ${viewstring} views . ${monthhold}</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
