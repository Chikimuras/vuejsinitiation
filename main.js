var app = new Vue({
    el: '#app',
    data: {
        product: "Chaussettes",
        description: "De chaudes et confortable chaussettes",
        image: "greensocks.png",
        link: "https://www.google.fr",
        inStock : true,
        details: ["80% cotton", "20% polyester", "Unisexe"],
        variants: [
            {
                variantId: "2234",
                variantColor: "Green"
            },
            {
                variantId: "2235",
                variantColor: "Blue"
            }
        ],
        sizes: ["S","M","L","XL"]
    }
})
