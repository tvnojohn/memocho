$(function() {
    if (localStorage.getItem('memo')) {
        $('#memo').val(localStorage.getItem('memo'));
    }

    $('#save').click(function() {
        localStorage.setItem('memo', $('#memo').val());
    });

    $('#clear').click(function() {
        $('#memo').val('');
        localStorage.removeItem('memo');
    })
})