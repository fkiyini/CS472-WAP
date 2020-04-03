"use strict"
$(document).ready(function () {
    $("#formNewProduct").submit(
        function (event) {
            event.preventDefault();
            const productName = $("#pdtName").val();
            const qty = $("#qty").val();

            console.log(productName);

            const divProductData = $("#divProductData");
            $("#pProductName").text("Product Name :"+ productName);
            $("#pQty").text("Quantity in stock :"+ qty);
            divProductData.css("display", "block");
        }
    );

});
