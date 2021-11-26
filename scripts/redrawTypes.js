function drawByKey(key, types) {
    let template = ''
    let container = $('.services_container')
    for (let i in types[key]) {
        template += `<div class="services_item">
            <div class="services_item_image">
            <img src="styles/img/svg/${key}/${i}.svg"/></div>
            <div>${types[key][i]}</div>
        </div>`
    }
    container.html(template)
}

function reDrawTypes(currentType, types) {
    switch (currentType) {
        case 'Компьютер':
            drawByKey('desktop', types)
            break;
        case 'Ноутбук':
            drawByKey('laptop', types)
            break;
        case 'Планшет/Смартфон':
            drawByKey('phone', types)
            break;
        default:
            break;
    }
}

export default reDrawTypes