function bgdel(){
    document.body.style.backgroundColor = "blue"
}

function thevibe(){
    document.getElementById("demo").append("be the best you")
}

function timeig(){
    const time = new Date();
    document.getElementById("time").append(time)
}

function picc(){
    const thepic = document.getElementById("pic");
    thepic.src = "dice-6.png"
}

function pich(){
    const pic = document.getElementById("pic")
    pic.style.visibility = "hidden"
}

function picnh(){
    const pic = document.getElementById("pic")
    pic.style.visibility = "visible"
}

function theheader(){
    const head = document.getElementById("EventDiv")
    const headb = document.getElementById("noteventdiv")
    const pic = document.getElementById("pic")
    head.style.background = "gray"
    head.style.display = "flex"
    head.style.justifyContent = "center"
    head.style.padding = "10px"
    headb.style.display = "flex"
    headb.style.flexDirection = "column"
    headb.style.alignItems = "center"
    pic.style.borderWidth = "5px"
    pic.style.borderColor = "red"
    pic.style.borderStyle = "solid"
}

function headh(){
    const head = document.getElementById("EventDiv")
    head.style.visibility = "hidden"
    const pic = document.getElementById("pic")
    pic.style.visibility = "hidden"
}

function headc(){
    const head = document.getElementById("EventDiv")
    head.style.visibility = "visible"
    const pic = document.getElementById("pic")
    pic.style.visibility = "visible"
}