function disable_modal(e){
    if(e.target==document.getElementsByClassName('modal')[0]){
        $(e.target).removeClass('show_modal')
        setTimeout(()=>{
            $('.modal').css({'zIndex':'-999999'})
        }, 200)
    }}

$(function() {
    $('.suggest').on('click',()=>{
        $('.modal').css({'zIndex':'999999'})
        setTimeout(()=>{
             $('.modal').addClass('show_modal')
        }, 200)
       
    })
    $('.modal').on('click', function(e){
        console.log(e)
        disable_modal(e)
    })
});
    