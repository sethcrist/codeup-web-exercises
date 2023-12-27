window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineWidth = 3; // creates a red line going vertically (y-axis)
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();

    ctx.strokeStyle = "green"; // creates a green line horizontally (x-axis)
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();

    // const text = "Hello!";
    // const textX = canvas.width/2; //sets the text in the middle horizontally
    // const textY = canvas.height/2; //sets the text in the middle vertically
    ctx.fillStyle = "gold";
    ctx.strokeStyle = "orangered";

    ctx.font = "80px Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle" // puts the text in the middle, "top" = aligns the text above the green line, "bottom" = puts the text under the green line
    // ctx.fillText(text, textX, textY);
    // ctx.strokeText(text, textX, textY);

    const maxTextWidth = canvas.width * 0.8;

    function wrapText(text) { // for wrapping the text
        let linesArray = [];
        let lineCounter = 0;
        let line = "";
        let words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            let testLine = line + words[i] + " ";
            if (ctx.measureText(testLine).width > maxTextWidth) {
                line = words[i] + " ";
                lineCounter++;
            } else {
                line = testLine;
            }
            linesArray[lineCounter] = line;
        }
        linesArray.forEach((el, index) => {
            ctx.fillText(el, canvas.width/2, canvas.height/2 + index * 80); // prevents text from stacking so we * font size (80), can also reduce font size to make the word spacing smaller
        })
    }

    wrapText("Hello world");
});