const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://carlsbadcravings.com/wp-content/uploads/2021/01/Dan-Dan-Noodles-20-500x500.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];




    const buttons = ["All", "Korea", "Japan", "China"];
    const btnContainer = document.querySelector(".btn-container");
    const foodMenu = document.querySelector(".section-center");

    // Menüdeki her bir itemi göstermek için aşağıya "menuitemlerigöster" fonksiyonu tanımlıyorum. burada items ve item isimlerini kullanmamın sebebi sadece bu liste özelinde değil de farklı listeler için de aynı fonksiyonu kullanabilmektir.
    function renderMenuItems(items) {
      foodMenu.innerHTML = items.map(item => `
        <div class="menu-items col-lg-6 col-sm-12">
          <img src="${item.img}" class="photo">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
          </div>
        </div>
      `).join("");
    }

    // Butonları render et
    btnContainer.innerHTML = buttons.map(cat => `
      <button class="btn btn-outline-dark btn-item">${cat}</button>
    `).join("");

    // Butonlara event ekle
    document.querySelectorAll(".btn-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.textContent.trim();
        if (category === "All") {
          renderMenuItems(menu);
        } else {
          const filtered = menu.filter(item => item.category === category);
          renderMenuItems(filtered);
        }
      });
    });      

    // Sayfa açılışında tüm menü gözüksün
    renderMenuItems(menu);





    // AÇIKLAMALAR
    /* - ASIAN KITCHEN PROJESİ
    
    const menu = [
      {
        .
        .
        .
        .
        ];
    
        const buttons = ["All", "Korea", "Japan", "China"];
        const btnContainer = document.querySelector(".btn-container");
        const foodMenu = document.querySelector(".section-center");

    

Önce verileri bir dizi olarak tutup onlara erişmem gerekiyor. bu yüzden bir dizi olarak array olarak tanımladım. 

sonra bu verileri HTML içinde nerede göstereceğimi belirttim mesela 

butonlarım şunlar şunlar,

btnContainer adındaki değişkenim html de btn-container classının içinde gösterilecek

foodMenü içindeki itemler ise HTML de section-center classına sahip divin içinde gözükecek. 

---

Pek şimdi ne yapacağım? 

önce bu menüdeki her bir itemi htmlin  içine js ile göndermek istiyorum.


    function renderMenuItems(items) {
      foodMenu.innerHTML = items.map(item => `
        <div class="menu-items col-lg-6 col-sm-12">
          <img src="${item.img}" class="photo">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
          </div>
        </div>
      `).join("");
    }


yukarıda ilk olarak menü ögelerini göster (renderMenuItems) adında bir fonksiyon ismi yazıyorum.

Bu fonksiyonun parametresi items oluyor yani items demek aslında yukarıda tanımladığım

(const menu = […     ];) demek. 

alt satıra geldiğimizde 

foodMenu.innerHTML = items.map(item => `

ben burada şunu diyorum: elimde foodMenu adında  bir DOM elementi var. Ben bu DOM elementinin innerHTMLini map ve join ile elde ettiğim stringi vereceğim. o da bu stringi alacak HTML içerisinde  classı section-center olan divin içerisinde gösterecek.    Ve bunu her bir menü içindeki  items için yapacak. Olay bu. 

Peki fonksiyonun içine girecek olursak bu foodMenu HTML de nasıl bir string gösterecek?  Onu da şu şekilde yazıyorum. 

`
        <div class="menu-items col-lg-6 col-sm-12">
          <img src="${item.img}" class="photo">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
          </div>
        </div>
      `).join("");

burada `...` içine htmlde ne göstermek istersem yazıyorum. 

burada `items.map(...)` → **her elemanı stringe çevirir**, **yeni bir dizi** döndürür.

yani dizi içinde string olur. mesela çıktısı aşağıdaki gibi olur;

[ "<div>Item 1</div>","<div>Item 2</div>", "<div>Item 3</div>" ]


fakat ben bu yukarıdaki diziyi innerHTML içine yazamam çünkü `innerHTML` → **string** olarak yazılır, bir dizi değil.

peki böyle kullanırsak ne olur ? 

- **JavaScript otomatik olarak diziyi stringe çevirir**, yani diziyi `toString()` çağırır.
- Dizi `toString()` olduğunda elemanlar **virgülle ayrılır**.

Örnek:


["<div>1</div>", "<div>2</div>"].toString()
// "<div>1</div>,<div>2</div>"



- Yani DOM’a yazılacak şey:

<div>Item 1</div>,
<div>Item 2</div>,
<div>Item 3</div>
bu şekilde HTML de gözükür faka biz HTML de divlerden sonra virgül kullanmayız. o yüzden yanlıştır. 

Çözüm olarak ben yukarıdaki diziyi join ile tek bir string haline getiriyorum. yani 
 diziyi tek bir stringe çevirip **virgülsüz** yapıyorum.

Böylelikle foodMenüye içine eklemesi için  tek bir string halinde HTML kod parçası veriyorum. o da bunu her bir item için gösteriyor. 


// Butonları render et
btnContainer.innerHTML = buttons.map(cat =>  
 <button class="btn btn-outline-dark btn-item">${cat}</button>).join("");


- `buttons.map(cat =>` ...`)`
- `buttons` dizisindeki her eleman (cat = "All", "Korea", "Japan", "China") için birer **buton HTML string’i** üretiyor.
- Sonuç: `["<button>All</button>", "<button>Korea</button>", ...]` gibi **stringlerden oluşan bir dizi**.
- `.join("")`
- Bu dizi tek bir **uzun string**e dönüştürüyor (virgül olmadan).
- Böylece DOM’a basılmaya hazır hale geliyor.
- `btnContainer.innerHTML = ...`
- Oluşan tek string’i `.btn-container` içine yazıyor → butonlar artık sayfada görünüyor.
*/