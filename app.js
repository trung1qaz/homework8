
let productsListArray = [
    {
      id: 1,
      name: "Giày ADIDAS giá rẻ",
      image:
        "https://khogiaythethao.vn/wp-content/uploads/2019/02/adidas-xplr-white-sf.jpg",
      price: "2.000.000 VND",
      discount: "75%",
      seller: "Anh A",
      phone: "0946524795",
    },
    {
      id: 2,
      name: "Giày ADIDAS giá rẻ hơn",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8b19f5114d24d878e72ad2600f615cd_9366/Giay_adidas_Forta_Run_x_LEGO(r)_VIDIYOtm_DJen_G57947_01_standard.jpg",
      price: "1.500.000 VND",
      discount: "80%",
      seller: "Anh B",
      phone: "0963214578",
    },
    {
      id: 3,
      name: "Giày ADIDAS giá rẻ nữa",
      image:
        "https://myshoes.vn/image/cache/data/adidas/giay-adidas-busenitz-vulc-ii-nam-den-trang-01-550x550.jpg",
      price: "1.000.000 VND",
      discount: "85%",
      seller: "Anh C",
      phone: "0924577896",
    },
    {
      id: 4,
      name: "Giày ADIDAS giá rẻ nhất",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/347/092/products/giay-adidas-ultraboost-20-eg0728-01.jpg?v=1603442828400",
      price: "500.000 VND",
      discount: "90%",
      seller: "Anh D",
      phone: "0325317419",
    },
  ];

const productList = document.getElementById("product-list");

function renderProductList() {
    for (let product of productsListArray){
        productList.innerHTML += `
            <div class="product-item">
                <img
                    src="${product.image}"
                    alt=""
                 />
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <div class="sale-off">
                    <p>${product.discount}</p>
                </div>
                <div class="call-to-action">
                    <p>Mua ngay!</p>
                </div>
                <div class="product-item-info">
                    <p>Tên người bán:${product.seller}</p>
                    <p>Số điện thoại:${product.phone}</p>
                </div>
            </div>
        `;
    }
};

renderProductList();
