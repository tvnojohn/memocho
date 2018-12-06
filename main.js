$(function() {
    let memoNum = 0;
    let data = [];
    data = JSON.parse(localStorage['memo']);
    for(var i=0; i<data.length; i++){
        let a ='<ul class="collection" style="padding:0; margin:0;">'+ data[i].id +'</ul>';
        $(a).appendTo('#memo-list');
    }
    $('.textarea').val(data[memoNum].memo);

    // $('#clear').click(function() {
    //     $('.textarea').val('');
    //     localStorage.removeItem('memo');
    // });

    $('.textarea').bind('keyup', function(){
        data[memoNum].memo = $('.textarea').val();
        localStorage.setItem('memo', JSON.stringify(data));
    });
    
    $(document).on('click','.collection', function () {
        memoNum = this.innerHTML-1;
        $('.textarea').val(data[memoNum].memo);
        console.log($('.textarea'));
    })

    $('.fixed-action-btn').click(function(){
        const num = parseInt(data[data.length-1].id)+1
        data.push({id:num.toString(), memo:''});
        let a ='<ul class="collection" style="padding:0; margin:0;">'+ data[data.length-1].id +'</ul>';
        $(a).appendTo('#memo-list');
        memoNum = data.length-1;
        $('.textarea').val(data[memoNum].memo);
    })
});

function getLocalStorage () {
    if (localStorage.getItem('memo')) {
        return localStorage["memo"];;
    } else {
        return null;
    }
}