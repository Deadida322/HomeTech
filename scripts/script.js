let currentType = 'Компьютер'
let currentPrice = 'Компьютер'
let toShow = 10
import pricelist from "./pricelist.js"
import redrawPrice from "./redrawPrice.js"
import types from "./types.js"

import reDrawTypes from "./redrawTypes.js"
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
    toShow += 10
    console.log('show')
    redrawPrice(currentPrice, pricelist, toShow);
    $('.prices_show_all').on('click', function() { showMore() })
}

function disable_modal(e) {
    if (e.target == document.getElementsByClassName('modal')[0]) {
        $(e.target).removeClass('show_modal')
        setTimeout(() => {
            $('.modal').css({ 'zIndex': '-999999' })
        }, 200)
    }
}
let buttons = [];
let buttonsPrice = [];
let what_to_do = 'Не выбрано'
$(function() {

    reDrawTypes(currentType, types, toShow);
    redrawPrice(currentPrice, pricelist, toShow);
    console.log('sd')
    buttons = document.querySelectorAll('.width_3');
    buttonsPrice = document.querySelectorAll('.prc');
    $('.prices_show_all').on('click', function() { showMore() })
    $('.prices_info_select .repair_info_items_item').on('click', function() {
        currentPrice = $(this).find('.repair_info_name').text()
        for (let el of buttonsPrice) {
            el.classList.remove('item_selected')
        }
        toShow = 10
        redrawPrice(currentPrice, pricelist, toShow);
        $(this).addClass('item_selected')
        $('.prices_show_all').on('click', function() { showMore() })
        $('.suggest').on('click', (e) => suggest(e))

    })
    $('.width_3').on('click', function(e) {
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