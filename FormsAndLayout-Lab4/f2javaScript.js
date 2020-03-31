function displayAlert() {
    alert("Hello, world!");
    alert(document.getElementById ("exampleInputDate"));
}
function displayForm1Input(){

    Console.log()

}
function funcSubmit(event){
    event.preventDefault();
    const email = document.getElementById("eMail").value;
    const website = document.getElementById("webSite").value;
    const pWord = document.getElementById("passWord").value;
    const chBox = document.getElementById("checkBOX").value;
    console.log("email"+email);
    console.log("website"+website);
    console.log("pWord"+pWord);
    console.log("chBox"+chBox);

}