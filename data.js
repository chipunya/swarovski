// parsed data from the site:
// https://www.swarovski.com/en-US/c-0202/Categories/Watches/All-watches/?sort=newIn&page=2&loadMore=true&show=All
//
// const data = [];
// document.getElementsByClassName("swa-product-tile").forEach(function (el)  {
//     const nameArr = el.firstElementChild.firstElementChild.title.split(", ")
//     let name = nameArr[0];
//     let bracelet = nameArr[1];
//     let color = nameArr[2];
//     let dial, id;
//     if(nameArr.length === 5) {
//         dial = nameArr[3];
//         id = nameArr[4];
//     } else {
//         dial = '';
//         id = nameArr[3];
//     }
//     data.push(
//         {
//             name: name.toLowerCase(),
//             bracelet: bracelet.toLowerCase(),
//             color: color.toLowerCase(),
//             dial: dial.toLowerCase(),
//             id: id.toLowerCase(),
//             imageSrc: el.firstElementChild.firstElementChild.src,
//             price: el.firstElementChild.getAttribute("data-gtm-product-price"),
//             isInStock: !el.firstElementChild.lastElementChild.className.includes("notify-me")
//         }
//     )
// })
//

export const getData = () => {
  return [
    {
      name: "octea lux chrono watch",
      bracelet: "leather strap",
      color: "green",
      dial: "rose-gold",
      id: "5452498",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_400/5452498_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BB%BF%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452498.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "eternal watch",
      bracelet: "metal bracelet",
      color: "gold",
      dial: "champagne-gold",
      id: "5377563",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_400/5377563_png/eternal-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%87%91%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5377563.png",
      price: "265.00",
      isInStock: true,
    },
    {
      name: "octea lux watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "stainless steel",
      id: "5516305",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_400/5516305_png/octea-lux-%E8%85%95%E8%A1%A8--%E6%9C%88%E4%BA%AE--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5516305.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "passage chrono watch",
      bracelet: "leather strap",
      color: "pink",
      dial: "rose-gold",
      id: "5580352",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_400/5580352_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580352.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "crystalline chic watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5544583",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_400/5544583_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5544583.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "cosmopolitan watch",
      bracelet: "metal bracelet",
      color: "gold",
      dial: "champagne-gold",
      id: "5517794",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_400/5517794_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%87%91%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5517794.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "crystalline aura watch",
      bracelet: "leather strap",
      color: "black",
      dial: "rose-gold",
      id: "5558634",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5558634_png/crystalline-aura-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5558634.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "crystalline aura watch",
      bracelet: "leather strap",
      color: "red",
      dial: "rose-gold",
      id: "5558637",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5558637_png/crystalline-aura-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5558637.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "octea lux chrono watch",
      bracelet: "metal bracelet",
      color: "gray",
      dial: "stainless steel",
      id: "5452504",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452504_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5452504.png",
      price: "257.00",
      isInStock: true,
    },
    {
      name: "cosmopolitan watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "rose-gold",
      id: "5517797",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5517797_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5517797.png",
      price: "167.00",
      isInStock: true,
    },
    {
      name: "era journey watch",
      bracelet: "leather strap",
      color: "dark red",
      dial: "rose-gold",
      id: "5416701",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5416701_png/era-journey-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E6%B7%B1%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5416701.png",
      price: "227.00",
      isInStock: true,
    },
    {
      name: "crystalline oval watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "gold",
      id: "5200339",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5200339_png/crystalline-oval-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5200339.png",
      price: "239.00",
      isInStock: true,
    },
    {
      name: "crystalline oval watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "rose-gold",
      id: "5200341",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5200341_png/crystalline-oval-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5200341.png",
      price: "239.00",
      isInStock: true,
    },
    {
      name: "stella watch",
      bracelet: "leather strap",
      color: "red",
      dial: "rose-gold",
      id: "5376839",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5376839_png/stella-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5376839.png",
      price: "179.00",
      isInStock: true,
    },
    {
      name: "crystalline sporty watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "champagne-gold",
      id: "5547976",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547976_png/crystalline-sporty-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547976.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "crystalline sporty watch",
      bracelet: "leather strap",
      color: "white",
      dial: "rose-gold",
      id: "5547635",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547635_png/crystalline-sporty-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547635.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "crystalline sporty watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "stainless steel",
      id: "5547629",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547629_png/crystalline-sporty-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5547629.png",
      price: "179.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "metal bracelet",
      color: "gray",
      dial: "champagne-gold",
      id: "5452462",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452462_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452462.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "octea lux chrono watch",
      bracelet: "leather strap",
      color: "pink",
      dial: "rose-gold",
      id: "5452501",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452501_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452501.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "cosmic rock watch",
      bracelet: "metal bracelet",
      color: "blue",
      dial: "rose-gold",
      id: "5466209",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5466209_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5466209.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "cosmic rock watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "gold plated",
      id: "5466205",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5466205_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E9%95%80%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5466205.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "crystal rose watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "rose-gold",
      id: "5484050",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5484050_png/crystal-rose-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5484050.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "cocktail watch",
      bracelet: "metal bracelet",
      color: "gold",
      dial: "champagne-gold",
      id: "5519321",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519321_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%87%91%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519321.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "cocktail watch",
      bracelet: "metal bracelet",
      color: "rose-gold",
      dial: "rose-gold",
      id: "5519327",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519327_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519327.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "dream rock watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "rose-gold",
      id: "5519306",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519306_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519306.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "cocktail watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "rose-gold plated",
      id: "5519324",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519324_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E9%95%80%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-swarovski-5519324.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "dream rock watch",
      bracelet: "metal bracelet",
      color: "blue",
      dial: "rose-gold",
      id: "5519317",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519317_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519317.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "dream rock watch",
      bracelet: "metal bracelet",
      color: "gray",
      dial: "champagne-gold",
      id: "5519315",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519315_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519315.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "dream rock watch",
      bracelet: "metal bracelet",
      color: "red",
      dial: "rose-gold",
      id: "5519312",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519312_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519312.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "octea nova watch",
      bracelet: "milanese strap",
      color: "black",
      dial: "rose-gold",
      id: "5430424",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5430424_png/octea-nova-%E8%85%95%E8%A1%A8--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5430424.png",
      price: "300.00",
      isInStock: true,
    },
    {
      name: "cosmic rock watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "rose-gold",
      id: "5376068",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5376068_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5376068.png",
      price: "230.00",
      isInStock: true,
    },
    {
      name: "cosmic rock watch",
      bracelet: "metal bracelet",
      color: "gray",
      dial: "rose-gold",
      id: "5376092",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5376092_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5376092.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "octea nova watch",
      bracelet: "leather strap",
      color: "black",
      dial: "rose-gold",
      id: "5295358",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5295358_png/octea-nova-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5295358.png",
      price: "244.00",
      isInStock: true,
    },
    {
      name: "crystal flower watch",
      bracelet: "metal bracelet",
      color: "red",
      dial: "rose-gold",
      id: "5552783",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5552783_png/crystal-flower-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5552783.png",
      price: "265.00",
      isInStock: true,
    },
    {
      name: "uptown watch",
      bracelet: "leather strap",
      color: "pink",
      dial: "rose-gold",
      id: "5547719",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547719_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547719.png",
      price: "230.00",
      isInStock: true,
    },
    {
      name: "crystal flower watch",
      bracelet: "leather strap",
      color: "red",
      dial: "rose-gold",
      id: "5552780",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5552780_png/crystal-flower-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5552780.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "uptown watch",
      bracelet: "leather strap",
      color: "black",
      dial: "rose-gold",
      id: "5547710",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547710_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547710.png",
      price: "263.00",
      isInStock: true,
    },
    {
      name: "crystal flower watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "rose -gold",
      id: "5552424",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5552424_png/crystal-flower-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2-swarovski-5552424.png",
      price: "209.00",
      isInStock: true,
    },
    {
      name: "crystal flower watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5547626",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547626_png/crystal-flower-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547626.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "uptown watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "rose-gold",
      id: "5547716",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547716_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547716.png",
      price: "230.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "blue",
      dial: "stainless steel",
      id: "5610475",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610475_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2-pvd-swarovski-5610475.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "stainless steel",
      id: "5610520",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610520_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610520.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "attract watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "gold",
      id: "5610484",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610484_png/attract-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610484.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "gold",
      id: "5610517",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610517_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610517.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "attract watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "stainless steel",
      id: "5610490",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610490_png/attract-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610490.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "rose-gold",
      id: "5612194",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5612194_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5612194.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "stainless steel",
      id: "5610472",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610472_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2-pvd-%E7%94%B5%E9%95%80-swarovski-5610472.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "rose-gold",
      id: "5610478",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610478_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610478.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "attract watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "rose-gold",
      id: "5610487",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610487_png/attract-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610487.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "stainless steel",
      id: "5610494",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610494_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610494.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5610469",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610469_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5610469.png",
      price: "499.00",
      isInStock: true,
    },
    {
      name: "octea lux sport watch",
      bracelet: "metal bracelet",
      color: "blue",
      dial: "stainless steel",
      id: "5610481",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5610481_png/octea-lux-sport-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5610481.png",
      price: "429.00",
      isInStock: true,
    },
    {
      name: "crystalline delight watch",
      bracelet: "metal bracelet",
      color: "blue",
      dial: "stainless steel",
      id: "5580533",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580533_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580533.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "passage chrono watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "rose-gold",
      id: "5580348",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580348_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580348.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "octea lux chrono watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "stainless steel",
      id: "5580600",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580600_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580600.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "crystalline delight watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "rose-gold",
      id: "5580530",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580530_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580530.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "crystalline delight watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "rose-gold",
      id: "5580541",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580541_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580541.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "crystalline delight watch",
      bracelet: "metal bracelet",
      color: "white",
      dial: "stainless steel",
      id: "5580537",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580537_png/crystalline-delight-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%99%BD%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580537.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "passage chrono watch",
      bracelet: "leather strap",
      color: "red",
      dial: "rose-gold",
      id: "5580345",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580345_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5580345.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "passage chrono watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "stainless steel",
      id: "5580342",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5580342_png/passage-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5580342.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "stella watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5470415",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5470415_png/stella-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5470415.png",
      price: "227.00",
      isInStock: true,
    },
    {
      name: "crystalline aura watch",
      bracelet: "leather strap",
      color: "white",
      dial: "rose-gold",
      id: "5519453",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519453_png/crystalline-aura-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519453.png",
      price: "179.00",
      isInStock: true,
    },
    {
      name: "duo watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "stainless steel",
      id: "5484376",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5484376_png/duo-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5484376.png",
      price: "179.00",
      isInStock: true,
    },
    {
      name: "duo watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "champagne-gold",
      id: "5484382",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5484382_png/duo-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5484382.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "duo watch",
      bracelet: "leather strap",
      color: "red",
      dial: "rose-gold",
      id: "5484379",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5484379_png/duo-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5484379.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "octea lux watch",
      bracelet: "leather strap",
      color: "black",
      dial: "rose-gold",
      id: "5414410",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5414410_png/octea-lux-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5414410.png",
      price: "227.00",
      isInStock: true,
    },
    {
      name: "octea lux watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5414429",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5414429_png/octea-lux-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5414429.png",
      price: "257.00",
      isInStock: true,
    },
    {
      name: "crystalline sporty watch",
      bracelet: "leather strap",
      color: "black",
      dial: "rose-gold",
      id: "5547632",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547632_png/crystalline-sporty-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547632.png",
      price: "197.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5452465",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452465_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452465.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "metal bracelet",
      color: "blue",
      dial: "rose-gold",
      id: "5475784",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5475784_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5475784.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "leather strap",
      color: "red",
      dial: "rose-gold",
      id: "5519219",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519219_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519219.png",
      price: "230.00",
      isInStock: true,
    },
    {
      name: "cocktail watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5519330",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519330_png/cocktail-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5519330.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "crystalline aura watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "rose-gold",
      id: "5519447",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519447_png/crystalline-aura-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519447.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "cosmopolitan watch",
      bracelet: "metal bracelet",
      color: "blue",
      dial: "stainless steel",
      id: "5517790",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5517790_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5517790.png",
      price: "199.00",
      isInStock: true,
    },
    {
      name: "eternal watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5377576",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5377576_png/eternal-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5377576.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "eternal watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5377545",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5377545_png/eternal-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5377545.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "cosmic rock watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5376080",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5376080_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5376080.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "stainless steel",
      id: "5537961",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5537961_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5537961.png",
      price: "299.00",
      isInStock: true,
    },
    {
      name: "cocktail watch",
      bracelet: "full pave",
      color: "metal bracelet",
      dial: "silver",
      id: "5547617",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547617_png/cocktail-%E8%85%95%E8%A1%A8--%E9%95%B6%E5%B5%8C--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5547617.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "octea lux chrono watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "rose-gold",
      id: "5452495",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452495_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452495.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "rose-gold",
      id: "5452455",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452455_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452455.png",
      price: "209.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "leather strap",
      color: "black",
      dial: "rose-gold",
      id: "5452452",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452452_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452452.png",
      price: "209.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5455108",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5455108_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5455108.png",
      price: "349.00",
      isInStock: true,
    },
    {
      name: "crystal rose watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5484073",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5484073_png/crystal-rose-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5484073.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "crystal rose watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5483853",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5483853_png/crystal-rose-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5483853.png",
      price: "329.00",
      isInStock: true,
    },
    {
      name: "crystalline glam watch",
      bracelet: "leather strap",
      color: "white",
      dial: "rose-gold",
      id: "5452459",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452459_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%99%BD%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5452459.png",
      price: "209.00",
      isInStock: true,
    },
    {
      name: "cosmopolitan watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5517807",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5517807_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5517807.png",
      price: "199.00",
      isInStock: true,
    },
    {
      name: "dream rock watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5519309",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519309_png/dream-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5519309.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "cosmopolitan watch",
      bracelet: "metal bracelet",
      color: "pink",
      dial: "rose-gold",
      id: "5517800",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5517800_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%B2%89%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5517800.png",
      price: "279.00",
      isInStock: true,
    },
    {
      name: "octea nova watch",
      bracelet: "milanese strap",
      color: "black",
      dial: "stainless steel",
      id: "5430420",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5430420_png/octea-nova-%E8%85%95%E8%A1%A8--%E9%BB%91%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5430420.png",
      price: "265.00",
      isInStock: true,
    },
    {
      name: "uptown watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "stainless steel",
      id: "5547713",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547713_png/uptown-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5547713.png",
      price: "209.00",
      isInStock: true,
    },
    {
      name: "crystalline chic watch",
      bracelet: "metal bracelet",
      color: "red",
      dial: "rose-gold",
      id: "5547608",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547608_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547608.png",
      price: "265.00",
      isInStock: true,
    },
    {
      name: "octea lux chrono watch",
      bracelet: "leather strap",
      color: "red",
      dial: "rose-gold",
      id: "5547642",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547642_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%BA%A2%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547642.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "crystal flower watch",
      bracelet: "metal bracelet",
      color: "silver",
      dial: "stainless steel",
      id: "5547622",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547622_png/crystal-flower-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%93%B6%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5547622.png",
      price: "263.00",
      isInStock: true,
    },
    {
      name: "crystalline chic watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5544590",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5544590_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5544590.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "crystalline chic watch",
      bracelet: "metal bracelet",
      color: "gray",
      dial: "champagne-gold",
      id: "5547611",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547611_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E9%A6%99%E6%A7%9F%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547611.png",
      price: "265.00",
      isInStock: true,
    },
    {
      name: "crystalline chic watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "rose-gold",
      id: "5544587",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5544587_png/crystalline-chic-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5544587.png",
      price: "379.00",
      isInStock: true,
    },
    {
      name: "octea lux chrono watch",
      bracelet: "leather strap",
      color: "blue",
      dial: "rose-gold",
      id: "5563480",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5563480_png/octea-lux-chrono-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E8%93%9D%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5563480.png",
      price: "399.00",
      isInStock: true,
    },
    {
      name: "crystalline aura watch",
      bracelet: "leather strap",
      color: "gray",
      dial: "rose-gold",
      id: "5519450",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5519450_png/crystalline-aura-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E7%81%B0%E8%89%B2--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5519450.png",
      price: "329.00",
      isInStock: false,
    },
    {
      name: "crystalline glam watch",
      bracelet: "metal bracelet",
      color: "gray",
      dial: "stainless steel",
      id: "5452468",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5452468_png/crystalline-glam-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%81%B0%E8%89%B2--%E4%B8%8D%E9%94%88%E9%92%A2-swarovski-5452468.png",
      price: "209.00",
      isInStock: false,
    },
    {
      name: "cosmopolitan watch",
      bracelet: "metal bracelet",
      color: "rose gold",
      dial: "rose-gold",
      id: "5517803",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5517803_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5517803.png",
      price: "279.00",
      isInStock: false,
    },
    {
      name: "cocktail watch",
      bracelet: "full pave",
      color: "metal bracelet",
      dial: "rose gold",
      id: "5547614",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547614_png/cocktail-%E8%85%95%E8%A1%A8--%E9%95%B6%E5%B5%8C--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83---%E7%8E%AB%E7%91%B0%E9%87%91%E8%89%B2%E8%B0%83-pvd-swarovski-5547614.png",
      price: "429.00",
      isInStock: false,
    },
    {
      name: "crystal flower watch",
      bracelet: "leather strap",
      color: "black",
      dial: "rose gold",
      id: "5552421",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5552421_png/crystal-flower-%E8%85%95%E8%A1%A8--%E7%9C%9F%E7%9A%AE%E8%A1%A8%E5%B8%A6--%E9%BB%91%E8%89%B2-swarovski-5552421.png",
      price: "209.00",
      isInStock: false,
    },
    {
      name: "cosmic rock watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "black",
      id: "5376071",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5376071_png/cosmic-rock-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E9%BB%91%E8%89%B2-pvd-%E7%94%B5%E9%95%80-swarovski-5376071.png",
      price: "197.00",
      isInStock: false,
    },
    {
      name: "cosmopolitan watch",
      bracelet: "metal bracelet",
      color: "black",
      dial: "black",
      id: "5547646",
      imageSrc:
        "https://asset.swarovski.com/images/$size_610/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5547646_png/cosmopolitan-%E8%85%95%E8%A1%A8--%E9%87%91%E5%B1%9E%E6%89%8B%E9%93%BE--%E9%BB%91%E8%89%B2--%E9%BB%91%E8%89%B2-pvd-%E7%94%B5%E9%95%80-swarovski-5547646.png",
      price: "199.00",
      isInStock: false,
    },
  ];
};
