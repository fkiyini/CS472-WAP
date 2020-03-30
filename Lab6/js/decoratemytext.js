function displayAlert() {
    alert("Hello, world!");
}
function changeSizeOfTA() {
    const textArea = document.getElementById("TEXT1");
    textArea.style.fontSize = "2em"
}
function toBoldText() {
    const checkedBx = document.getElementById("checkZone");
    const textArea = document.getElementById("TEXT1");
    let body = document.getElementById("body")
    if (checkedBx.checked === true) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underline";
        body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";


    }
    else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        body.style.background = "none";
    }
}
function timedEnlarging() {
    //let timer = null;
    setInterval(enlargeText, 500);
}
function enlargeText() {
    let txtSize = parseInt(document.getElementById('TEXT1').style.fontSize);
    console.log('before : ' + txtSize);
    txtSize += 2;
    document.getElementById('TEXT1').style.fontSize = txtSize + 'px';
    console.log('final : ' + txtSize);

}

