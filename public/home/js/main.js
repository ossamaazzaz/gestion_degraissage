
(function ($) {
    "use strict";




})(jQuery);

/*autocomplete*/
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


var products = [];
var lavPrices = [];
var pentPrices = [];

// getting the products names from database
$.ajax({
    url: '/api/products',
    method: 'GET',
    contentType: 'application/json',
    success: function (result) {
        products = result[0];
        lavPrices = result[1];
        pentPrices = result[2];
        autocomplete(document.getElementById("myInput"), products);
    }
});



/* add Item */
function addItem(e) {
    e.preventDefault();
    addTr();
    var inputs = document.getElementsByClassName("item-vals");
    inputs[0].value = "";
    inputs[1].value = 1;
    let childs = inputs[2].children;
    childs[0].selected = true;
    childs[1].selected = false;
    childs[1].selected = false;
}
/* add tr to the table*/
function addTr() {
    var emptyTr = document.getElementById("empty-tr");
    if (emptyTr) {
        emptyTr.remove();
    }
    var vals = document.getElementsByClassName("item-vals");
    var name = vals[0].value;
    var quantity = vals[1].value;
    var type = $("#type-product :selected").val();
    console.log(type);
    var prix = "";
    var index = products.indexOf(name);
    if (type == "Lavage") {
        prix = lavPrices[index];
    } else {
        prix = pentPrices[index];
    }
    var tr = `
    <tr>
        <td class="column1">${name}</td>
        <td class="column2">${quantity}</td>
        <td class="column3">${type}</td>
        <td class="column4">${prix}</td>
        <td class="column4">${prix * quantity}</td>
        <td class="column6">
            <i class="fa fa-times" 
                onclick='this.parentElement.parentElement.remove()'>
            </i>
        </td>
    </tr>`;
    document.getElementById("add-area").innerHTML += tr;
}
//adding info to the form
function addInfo() {
    var content = [];
    var trss = document.getElementsByTagName("tr");
    var totale = 0;
    for (let i = 1; i < trss.length; i++) {
        let tds = trss[i].children;
        totale += parseInt(tds[4].innerHTML);
        var line = {
            name: tds[0].innerHTML,
            quantity: parseInt(tds[1].innerHTML),
            type: tds[2].innerHTML,
            prix: parseInt(tds[3].innerHTML),
            totale: parseInt(tds[4].innerHTML)
        }
        content.push(line);
    }
    document.getElementById("order-price").value = totale;
    document.getElementById("order-content").value = JSON.stringify(content);
}