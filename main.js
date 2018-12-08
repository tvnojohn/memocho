$(function() {
    let memoNum = 0;
    let data = [];
    data = JSON.parse(localStorage['memo']);
    // データ修正用
    // data.push({id:'1',memo:'テスト'})
    // localStorage.setItem('memo', JSON.stringify(data));
    for(var i=0; i<data.length; i++){
        let a ='<ul class="collection" id="collection'+ data[i].id + '" style="padding:0; margin:0;">'+ subStr20Moji(data[i].memo) +'</ul>';
        $(a).appendTo('#memo-list');
    }
    $('.textarea').val(data[memoNum].memo);
    $('#collection'+data[memoNum].id).css('color', 'Red');

    $('#clear').click(function() {
        $('.textarea').val('');
        localStorage.removeItem('memo');
    });

    //$('.textarea').bind('keyup', function(){
    $(document).on('keyup', '.textarea', function(){
        data[memoNum].memo = $('.textarea').val();
        localStorage.setItem('memo', JSON.stringify(data));
        $('#collection'+(memoNum+1)).text(subStr20Moji(data[memoNum].memo));
    });
    
    $(document).on('click','.collection', function () {
        if(data[memoNum].memo === ''){
            $('#collection'+data[memoNum].id).remove();
            data.splice(memoNum,1);
            localStorage.setItem('memo', JSON.stringify(data));
        }
        //memoNum = this.innerHTML-1;
        $('#collection'+data[memoNum].id).css('color', 'Black');
        memoNum = parseInt($(this).attr('id').substr(10,1)) -1;
        data[memoNum]
        $('.textarea').val(data[memoNum].memo);
        $(this).css('color', 'Red');
    })

    $('.fixed-action-btn').click(function(){
        const num = parseInt(data[data.length-1].id)+1
        data.push({id:num.toString(), memo:''});
        let a ='<ul class="collection" id="collection' +data[data.length-1].id+ '" style="padding:0; margin:0;">'+ data[data.length-1].memo.substr(0,10) +' ... </ul>';
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

function subStr20Moji(moji){
    if(moji.length >= 20){
        return moji.substr(0,20) + ' ... ';
    }
    else{
        return moji;
    }
}