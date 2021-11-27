import addServices from "./script.js"

function drawByKey(key, types) {
    let template = ''
    let container = $('.services_container')
    container.empty()
    for (let i in types[key]) {
        let el = `<div class="services_item" onclick="fuck(event)">
        <div class="services_item_image" >
        <img src="styles/img/svg/${key}/${i}.svg"/></div>
        <div class="types_key">${types[key][i]}</div>
    </div>`
        container.append($(el))
    }

    $('.services_item').on('click', function() {
        addServices(this)
        $(this).addClass('service_selected')
    })


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