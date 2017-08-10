var mycatalog =
    {
        "myCollection": {

            "product1":
            {
                "id": 0,
                "name": "Jeans skinny fit rotos",
                "imgUrl ": "img/imagen1jpg.jpg",
                "description": "Jeans skinny fit rotos MXN 699.00 Talla modelo: 42"

            },
            "product2":
            {
                "id": 1,
                "name": "Jeans regular comfort fit",
                "imgUrl ": "img/jeans2.jpg",
                "description": "Jeans regular comfort fit MXN 449.00 Talla modelo: 42"
            },
            "product3":
            {
                "id": 2,
                "name": "Jeans regular comfort fit",
                "imgUrl ": "img/jeans2.jpg",
                "description": "Jeans regular comfort fit MXN 449.00 Talla modelo: 42"
            },
        }

    }
$(document).ready(function () {
    $("#DynamicHTML").append(buildMyProduct(mycatalog));
});

function buildMyProduct(obj) {
    var html = "";
    $.each(obj, function (element, object) {
        html += "<div class='Catalog ProducItem'>";
        html += "<div><a href='details.html?id=" + object.id + "'>" + object.title + "</a></div>";
        html += "<div><img class='Catalog' src='" + object.imgUrl + "' /></div>";
        html += "<div>" + object.description + "</div></div>";
    });
    return html;
}
