function disable_modal(e){
    if(e.target==document.getElementsByClassName('modal')[0]){
        $(e.target).removeClass('show_modal')
        setTimeout(()=>{
            $('.modal').css({'zIndex':'-999999'})
        }, 200)
    }}
let buttons = [];
let what_to_do='Не выбрано'
$(function() {
    buttons = document.querySelectorAll('.repair_info_items_item');
    $('.repair_info_items_item').on('click', function(e){
        for(let el of buttons){
            el.classList.remove('item_selected')
        }
        $(this).addClass('item_selected')
        if($(this).hasClass("width_3") || $(this).hasClass("width_5")){
            what_to_do = $(this).find('.repair_info_name').text()
        }
        console.log(what_to_do)
    })
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
    