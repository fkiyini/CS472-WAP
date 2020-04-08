/*
Midterm Review test for Wap 2020
By KIYINI Farouk Minaour
*/

"use strict"
/* $(document).ready(function () {
    $("#formNewBankAcount").submit(
        function (event) {
            event.preventDefault();
            const acountNum = $("#exampleInputaccountNum").val();
            const customerName = $("#exampleInputcustomerName").val();
            const acountType = $("#inlineAcoountSelectPref").val();

            console.log(acountNum);

            const divProductData = $("#divAcountData");
            $("#newAccountNum").text(acountNum);
            $("#newCustomerName").text(customerName);
            $("#newAccountType").text(acountType);
            //divProductData.css("display", "block");
        }
    );

}); */

$(document).ready(function () {

    const listOfAccounts = $("#divAcountData");

    $("#formNewBankAcount").submit(
        function (event) {
            event.preventDafault();
            const acountNum = $("#exampleInputaccountNum").val();
            const customerName = $("#exampleInputcustomerName").val();
            const acountType = $("#inlineAcoountSelectPref").val();

            console.log(acountNum);

            const row = $('<div>').css({ "border": "5px solid" });
            row.text(acountNum + "|" + customerName + "|" + acountType);
            listOfAccounts.append(row);
            listOfAccounts.css("display", "block");

        }

    );

});
