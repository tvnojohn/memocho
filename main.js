$(function() {
    if (localStorage.getItem('memo')) {
        $('#memo').val(localStorage.getItem('memo'));
    }

    $('#save').click(function() {
        localStorage.setItem('memo', $('#memo').val());
        console.log(localStorage.getItem('memo'));
    });
})