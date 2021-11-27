import pricelist from "./pricelist.js"
import redrawPrice from "./redrawPrice.js"
import types from "./types.js"
import reDrawTypes from "./redrawTypes.js"

let currentType = 'Компьютер'
let currentPrice = 'Компьютер'
let toShow = 8
let buttons = [];
let buttonsPrice = [];
let clientServices = [];
let what_to_do = 'Не выбрано'


let addServices = function(item) {
    $(item).addClass('service_selected')
    let el_to_push = $(item).find('.types_key').text()
    if (clientServices.indexOf(el_to_push) == -1) {
        $(item).addClass('service_selected')
        clientServices.push(el_to_push)

    } else {
        delete clientServices[clientServices.indexOf(el_to_push)]
    }
    $(item).addClass('service_selected')
    clientServices = clientServices.filter(element => element !== null)
    console.log(clientServices)
}
let suggest = (e) => {
    let txt = $(e.target).parent().find('.price_table_service').text() + ' ' +
        $(e.target).parent().find('.price_table_digits').text()
    console.log(txt)
    $('.modal_header').html(txt)
    $('.modal').css({ 'zIndex': '999999' })
    setTimeout(() => {
        $('.modal').addClass('show_modal')
    }, 200)
}

let showMore = () => {
    toShow += 8
    console.log('show')
    redrawPrice(currentPrice, pricelist, toShow);
    $('.prices_show_less').on('click', function() { showLess() })
    $('.prices_show_all').on('click', function() { showMore() })
}
let showLess = () => {
    toShow -= 8
    console.log('unshow')

    redrawPrice(currentPrice, pricelist, toShow);
    $('.prices_show_all').on('click', function() { showMore() })
    $('.prices_show_less').on('click', function() { showLess() })
}

function disable_modal(e) {
    if (e.target == document.getElementsByClassName('modal')[0]) {
        $(e.target).removeClass('show_modal')
        setTimeout(() => {
            $('.modal').css({ 'zIndex': '-999999' })
        }, 200)
    }
}

$(function() {

    reDrawTypes(currentType, types, toShow);
    redrawPrice(currentPrice, pricelist, toShow);

    buttons = document.querySelectorAll('.width_3');
    buttonsPrice = document.querySelectorAll('.prc');
    $('.prices_show_all').on('click', function() { showMore() })
    $('.prices_show_less').on('click', function() { showLess() })
    $('.prices_info_select .repair_info_items_item').on('click', function() {
        currentPrice = $(this).find('.repair_info_name').text()
        for (let el of buttonsPrice) {
            el.classList.remove('item_selected')
        }
        toShow = 8
        redrawPrice(currentPrice, pricelist, toShow);
        $(this).addClass('item_selected')
        $('.prices_show_all').on('click', function() { showMore() })
        $('.prices_show_less').on('click', function() { showLess() })
        $('.suggest').on('click', (e) => suggest(e))

    })
    $('.width_3').on('click', function(e) {
        clientServices = [];
        for (let el of buttons) {
            el.classList.remove('item_selected')
        }

        $(this).addClass('item_selected')
        if ($(this).hasClass("width_3") || $(this).hasClass("width_5")) {
            what_to_do = $(this).find('.repair_info_name').text()
        }
        reDrawTypes(what_to_do, types);
        console.log(what_to_do)
    })
    $('.suggest').on('click', (e) => suggest(e))
    $('.modal').on('click', function(e) {
        disable_modal(e)
    })
});

export default addServices