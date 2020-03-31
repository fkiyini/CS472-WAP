function displayAlert() {
    const prodNum = document.getElementById("ProductNumber").value;
    const qtyIS = document.getElementById("QuantityInStock").value;
    const name = document.getElementById("name").value;
    const sID = document.getElementById("supplierID").value;
    const unPrice = document.getElementById("UnitPrice").value;
    const date = document.getElementById("exampleInputDate").value;
    alert("The Product Number is -:" + prodNum);
    alert("Quantity In Stock is -:" + qtyIS);
    alert("The Name  is -:" + name);
    alert("The Supplier  is -:" + sID);
    alert("Unit Price is -:" + unPrice);
    alert("The Date is -:" + date);
    // alert(document.getElementById("exampleInputDate"));
}
function displayForm1Input() {

    Console.log()

}
function funcSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("eMail").value;
    const website = document.getElementById("webSite").value;
    const pWord = document.getElementById("passWord").value;
    const chBox = document.getElementById("checkBOX").value;
    console.log("email" + email);
    console.log("website" + website);
    console.log("pWord" + pWord);
    console.log("chBox" + chBox);

}