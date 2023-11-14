(() => {
    // window.alert("Javascript here!");
    //
    // setTimeout(function() {
    //     alert("you'll see this after 5 seconds.")
    // }, 5000);
    //
    // setInterval(function() {
    //     alert("you'll see this every 8 seconds.");
    // }, 8000);

// -----------------------------different example-----------------------------
//     let count = 0
//
//     const intervalId = setInterval(function() {
//         alert("you'll see this every 8 seconds.");
//         count++;
//         if (count === 3) {
//             clearInterval(intervalId);
//         }
//     }, 8000);
//     console.log(count);

// -----------------------------different example-----------------------------

    // window.location = "https://google.com";
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.background= "orange";
    }, 2000);

    setTimeout(function () {
        location.reload();
    }, 5000);


})();