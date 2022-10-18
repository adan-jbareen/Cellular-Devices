import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrudectsService {
  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  getProduct(): Observable<any> {
    return this.http.get(this.baseURL + '/getProducts');
    }

//   getPrudects(){
//   return [
//       // Apple
//       new Products (
//         '1',
//         'iphone 12 pro max',
//         5322,
//         'Apple',
//         'uses Apple six-core A14 Bionic processor, which contains a next-generation 16-core Neural Engine. It has three internal storage options: 128 GB, 256 GB, and 512 GB.',
//         'https://cellcomshop.cellcom.co.il/pub/media/catalog/product/cache/f249f79205f7cd9ac5d667d7211d17f8/f/i/file_59.png'
//       ),
//       new Products (
//         '2',
//         'iphone 12',
//         3996,
//         'Apple',
//         'use Apple six-core A14 Bionic processor, which contains a next-generation neural engine. They both have three internal storage options: 64 GB, 128 GB, and 256 GB.',
//         'https://cellcomshop.cellcom.co.il/pub/media/catalog/product/cache/f249f79205f7cd9ac5d667d7211d17f8/_/1/_12__9.png'
//       ),
//       new Products (
//         '3',
//         'iphone 11 pro max',
//         3989,
//         'Apple',
//         'both have an A13 Bionic processor. Both phones have three internal storage options: 64 GB, 256 GB, and 512 GB, and have 4 GB of RAM.',
//         'https://d3m9l0v76dty0.cloudfront.net/system/photos/5010317/extra_large/31c3b9ef61efe8b7a45f2414d9f166e4.jpg'
//       ),
//       new Products (
//         '4',
//         'iphone 11 ',
//         2396,
//         'Apple',
//         'along with the iPhone 11 Pro, uses Apple A13 Bionic processor, which contains a third-generation neural engine. It has three internal storage options: 64 GB, 128 GB, and 256 GB.',
//         'https://d3m9l0v76dty0.cloudfront.net/system/photos/4907937/extra_large/c49c43518d960c8459a3a2dc495e6642.jpg'
//       ),
//       new Products (
//         '5',
//         'iphone XS Max',
//         2900,
//         'Apple',
//         'has a design visually near-identical to the X but includes upgraded hardware, featuring the A12 Bionic chip built with a 7 nanometer process. It also features a 5.85 inch (149 mm) OLED display (marketed as 5.8 inch) and contains dual 12-megapixel rear cameras and one 7-megapixel front-facing camera',
//         'https://d3m9l0v76dty0.cloudfront.net/system/photos/4907960/extra_large/80289cd29063f062daa4b7ed2a300440.jpg'
//       ),
//       new Products (
//         '6',
//         'samsung S20',
//         1633,
//         'Samsung',
//         'have a 6.2-inch display and a 6.7-inch display, respectively, while the S20 Ultra has a 6.9-inch display.',
//         'https://cellcomshop.cellcom.co.il/pub/media/catalog/product/cache/f249f79205f7cd9ac5d667d7211d17f8/f/e/fe_2_1.png'
//       ),
//       new Products (
//         '7',
//         'samsung Note 20 Ultra',
//         2286,
//         'Samsung',
//         'The base amount of RAM is 8 GB, with an additional 12 GB option for the S20 & S20+ and a 16 GB option for the S20 Ultra.',
//         'https://cellcomshop.cellcom.co.il/pub/media/catalog/product/cache/f249f79205f7cd9ac5d667d7211d17f8/_/-/_-_5g_4.png'
//       ),
//       new Products (
//         '8',
//         'samsung A70',
//         1360,
//         'Samsung',
//         'come with a 6.7” FHD+ (1080×2400) Super AMOLED Infinity-U Display with a U-shaped notch for the frontal camera, similar to the Galaxy A50.',
//         'https://img.zap.co.il/5/3/0/7/50057035c.gif'
//       ),
//       new Products (
//         '9',
//         'samsung A51',
//         1300,
//         'Samsung',
//         'The phone has a Super AMOLED FHD+ 6.5" display, a 48 MP wide, 12 MP ultrawide, 5 MP depth, and 5 MP macro camera, a 4000 mAh battery, and an optical in-screen fingerprint sensor.',
//         'https://u.smedata.sk/recenzie/images/13/samsung-galaxy-a51-big1000-11578566113.png'
//       ),
//       new Products (
//         '10',
//         'samsung S8',
//         2400,
//         'Samsung',
//         'features an octa-core Exynos 8895 system-on-chip and 4 GB of RAM Both chips are manufactured by Samsung with a 10 nm process They contain 64 GB of internal storage, expandable via microSD card',
//         'https://img.tecnomagazine.net/2017/04/Samsung-apuesta-por-el-nuevo-Galaxy-S8-2.jpg'
//       ),
//       //LG
//       new Products (
//         '11',
//         'LG Wing ',
//         5322,
//         'LG',
//         'The LG Wing 5G is an Android-based phablet manufactured by LG Electronics. The device features a swivel design where the main display can be rotated to form a T-shape, revealing a smaller secondary display.',
//         'https://mobilemall.pk/public_html/images/product/product_1606213234LMF100EMW-D-01.jpg'
//       ),
//       new Products (
//         '12',
//         'LG Velvet',
//         2400,
//         'LG',
//         'The LG Velvet is  device shares some of its hardware with the flagship V60 ThinQ, with the same display, but a smaller battery and different cameras.',
//         'https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/l/g/lg_sunset.jpg'
//       ),
//       new Products (
//         '13',
//         'LG W30',
//         680,
//         'LG',
//         'The w30 has a Gorilla Glass 5 front and rear plate sandwiching an aluminum body and a 6.0-inch P-OLED FullVision Display, with a 2:1 aspect ratio (marketed as 18:9), manufactured by LG Display.',
//         'https://img.zap.co.il/pics/9/2/5/5/52915529c.gif'
//       ),
//       new Products (
//         '14',
//         'LG K61',
//         1080,
//         'LG',
//         'LG K61 128GB Titanium Unlocked Mobile Phone Warranty Official Importer',
//         'https://www.ivory.co.il/splendid_images/cache/files/catalog/org/1591705211o11RI___D!400X!.jpg'
//       ),
//       new Products (
//         '15',
//         'LG k41S',
//         680,
//         'LG',
//         'LG K41S smartphone 6.55 "screen 32GB memory + 3GB RAM Model LMK410ZMW ',
//         'https://www.ivory.co.il/files/catalog/org/1600758906v06XB.jpg'
//       ),
//       //Xiaomi
//       new Products (
//         '16',
//         'xiaomi 10t pro',
//         800,
//         'Xiaomi',
//         'are powered by the Snapdragon 865 processor with the Adreno GPU. Storage is non-expandable UFS 3.1  the Mi 10T Pro has 128 or 256 GBM, while the Mi 10T Pro has 8 GB of RAM; both have LPDDR5. Both phones feature a 6.67-inch (169 mm) FHD+ IPS LCD with HDR10+ support.',
//         'https://konimboimages.s3.amazonaws.com/system/photos/5739587/original/1ed8b95612c40adfe3f48906388e0351.jpg'
//       ),
//       new Products (
//         '17',
//         'xiaomi Poco F2 Pro',
//         2028,
//         'Xiaomi',
//         'includes a Snapdragon 865 processor alongside 6 or 8 GB of memory, a 6.67-inch OLED screen and a photo array that includes 4 lenses',
//         'https://www.spex.co.il/wp-content/uploads/Xiaomi-Poco-F2-Pro.jpg'
//       ),
//       new Products (
//         '18',
//         'xiaomi Redmi Note 9 Pro',
//         880,
//         'Xiaomi',
//         'Has a 6.67-inch diagonal screen with glass coating and 4K quality video photography. . Option to use 2 SIM cards at the same time + Option to expand the memory using a memory card up to 512GB.',
//         'https://www.tutiendaxiaomi.es/1227-thickbox_default/xiaomi-redmi-note-9-pro-6gb128gb.jpg'
//       ),
//       new Products (
//         '19',
//         'xiaomi Redmi Note 6 Pro',
//         480,
//         'Xiaomi',
//         'Pro is base model comes with 3GB RAM and 32GB of internal storage A variant with 4GB RAM and 64 GB',
//         'https://th.bing.com/th/id/OIP.52nSl-_vs-OtMMBFJy5_aQHaHa?pid=Api&rs=1'
//       ),
//       new Products (
//         '20',
//         'xiaomi redmi 9T',
//         720,
//         'Xiaomi',
//         'Android smartphone. Announced Jan 2021. Features 6.53″ display, Snapdragon 662 chipset, 6000 mAh battery, 128 GB storage, 6 GB RAM.',
//         'https://labo.fnac.com/wp-content/uploads/2019/06/XIaomi-Mi-9T_05.jpg'
//       ),
//       //Huawei
//       new Products (
//         '21',
//         'HUAWEI Mate 30 Pro',
//         3000,
//         'Huawei',
//         'Android smartphone. Announced Sep 2019. Features 6.53″ display, Kirin 990 chipset, 4500 mAh battery, 256 GB storage, 8 GB RAM, Corning Gorilla Glass 6.',
//         'https://www.gizmochina.com/wp-content/uploads/2020/10/Huawei-Mate-30E-Pro.jpg'
//       ),
//       new Products (
//         '22',
//         'Huawei Honor 10',
//         1400,
//         'Huawei',
//         'comes with upgraded face recognition and facial modeling. Plus, the AI-powered system creates the professional studio lighting effects.',
//         'https://ali-buy.com/wp-content/uploads/thumbs_dir/huawei-4-nwz0gg20uv1uagem19nda4au8tgoaqaglaledqprew.jpg'
//       ),
//       new Products (
//         '23',
//         'Huawei Honor 30 Pro',
//         3200,
//         'Huawei',
//         'the Honor 30 Pro Plus is a cheaper facsimile of the Huawei P40 Pro. That includes the overall design language, which is a near-perfect mirror of Huawei’s flagship.',
//         'https://tradingshenzhen.com/6537-large_default/huawei-honor30proplus-12gb-256gb.jpg'
//       ),
//       new Products (
//         '24',
//         'Huawei p40 pro',
//         5196,
//         'Huawei',
//         ' Series runs on Android 10 Open-Source, using Huawei Mobile Services (HMS) and the latest EMUI 10.1. This means that Google Mobile Services are not integrated.',
//         'https://www.gizmochina.com/wp-content/uploads/2020/10/2-3-500x500.jpg'
//       ),
//       new Products (
//         '25',
//         'Huawei Nova 5T',
//         1400,
//         'Huawei',
//         'HUAWEI nova 5T is a 6.26 inch full view display smartphone. 48 MP main sensing camera, Quad AI camera, wide angle camera.',
//         'https://touchit.co.il/wp-content/uploads/2020/01/huawei-nova-5t-dual-sim-en-azul-de-128gb-y-6gb-ram.jpg'
//       ),
//     ];
//   }
 }
class Products {
  SerialNumber: string;
  Name: string;
  Price:number;
  Category: string;
  Description: string;
  ImgUrl:string;

constructor(SerialNumber: string, Name: string,Price: number,Category: string
  ,Description: string,ImgUrl:string){
  this.SerialNumber = SerialNumber;
  this.Name = Name;
  this.Price = Price;
  this.Category = Category;
  this.Description = Description;
  this.ImgUrl = ImgUrl;
}
}