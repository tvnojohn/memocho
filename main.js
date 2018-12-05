$(function() {
    if (localStorage.getItem('memo')) {
        $('#memo').val(localStorage.getItem('memo'));
    }

    $('#clear').click(function() {
        $('#memo').val('');
        localStorage.removeItem('memo');
    });

    (function autoSave() {
        localStorage.setItem('memo', $('#memo').val());
        setTimeout(autoSave, 1000);
    })();
});