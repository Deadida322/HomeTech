function drawByKey(key, types, toShow) {
    let template = `<div class="price_table_item gr">
    <div class="price_table_service">Услуга</div>
    <div class="price_table_digits">Цена</div>
    <div class="price_table_button suggest"> </div>
</div>`
    let container = $('.prices_table')
    for (let i in types[key].slice(0, toShow)) {
        template += `<div class="price_table_item">
        <div class="price_table_service">${types[key][i].name}</div>
        <div class="price_table_digits">${types[key][i].price}</div>
        <div class="price_table_button suggest"> Заказать</div>
    </div>`
    }
    if (toShow < types[key].length) {
        template +=
            `<div class="prices_show_all">
                <img class="prices_show_all_ico" src="styles/img/svg/eye.svg"></img>
                <div class="prices_show_all_txt">Показать ещё</div>
            </div>`
    } else {

    }

    if (toShow > 6) {
        template +=
            `<div class="prices_show_less">
                <div class="prices_show_all_txt">Скрыть</div>
            </div>`
    }
    container.html(template)

}
export default function redrawPrice(CurrentType, types, toShow) {
    switch (CurrentType) {
        case 'Компьютер':
            drawByKey('desktop', types, toShow)
            break;
        case 'Ноутбук':
            drawByKey('laptop', types, toShow)
            break;
        case 'Планшет/Смартфон':
            drawByKey('phone', types, toShow)
            break;
        default:
            break;
    }
}