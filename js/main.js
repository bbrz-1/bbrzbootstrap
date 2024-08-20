$(document).ready(function () {
    $(".order-last").on({
        click: (e) => {
            $(e.currentTarget).fadeOut("slow");
        },
        mouseleave: () => {
            alert("PANIC!");
        }
    })

    $(".order-first").validate();
});