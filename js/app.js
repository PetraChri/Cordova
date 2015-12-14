  document.addEventListener("DOMContentLoaded", function () {

    function appendTaskToList(val) {
        $('#list').append("<li>" + '<input type="checkbox">' + val + "<a href='#' class='del' id='" + val + "'>delete</a>" + "</li>");
        $('#' + val).on('click', NameDel);
    }


    if (localStorage['grocerychri0195']) {
        var grocerychri0195 = JSON.parse(localStorage['grocerychri0195']);
    } else {
        var grocerychri0195 = [];
    }

    for (var i = 0; i < grocerychri0195.length; i++) {
        appendTaskToList(grocerychri0195[i]);
    }

    var addTask = function () {
        // get value from #name input
        var val = $('#name').val();

        // add the task to the array
        grocerychri0195.push(val);

        // save to local storage
        localStorage["grocerychri0195"] = JSON.stringify(grocerychri0195);

        // append the name to the list
        appendTaskToList(val);

        // reset the input field and focus it.
        $('#name').val("").focus();
    }

    $('#add-btn').click(addTask);
    $('#name').keyup(function (e) {
        if (e.keyCode === 13) {
            addTask();
        }
    });

    function NameDel() {
        $(this).parent('li').slideUp();  

        //extract task name from the li element

        var nameOfTask =

            $(this).parent('li').clone().children().remove().end().text().trim();
        //find index in the task element
        var index = grocerychri0195.indexOf(nameOfTask);

        grocerychri0195.splice(index, 1);
        localStorage["grocerychri0195"] = JSON.stringify(grocerychri0195);
    };


});