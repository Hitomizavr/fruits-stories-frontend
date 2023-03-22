export const API_URL = "http://127.0.0.1:3001";

const products = [
  {
    name: "Яблоко",
    type: "pastila",
    type_ru: "Пастила",
    cost: "160",
    image1:
      "https://fruits29.ru/images/pastila/yabloko/6067704f1e8a7_33g9-dz8dos.jpg",
    image2:
      "https://fruits29.ru/images/pastila/yabloko/6067704f1abd9_dpzqivfprpc.jpg",
    size: "33 см.",
    description:
      "Пастила из яблок. Состав: печеное яблоко, мед. Вес: 1 лист — 100гр., 1/2 листа — 50 гр.",
  },
  {
    name: "Груша",
    type: "frips",
    type_ru: "Фрипсы",
    cost: "200",
    image1:
      "https://fruits29.ru/images/fripsi/grusha/606773b2da117_zvvs4zkdsiq.jpg",
    image2:
      "https://fruits29.ru/images/fripsi/grusha/606773b2edb73_jivvh8wqseu.jpg",
    weight: "50 г.",
  },
  {
    name: "Микс",
    type: "candy",
    type_ru: "Цукаты",
    cost: "180",
    image1: "https://fruits29.ru/images/tsykati/miks/uknibheqsou.jpg",
    image2: "https://fruits29.ru/images/tsykati/miks/vzqvtqqwru0.jpg",
    weight: "100 г.",
    description:
      "Микс цукатов из свеклы, моркови и тыквы - нежнейшие, тают во рту. Идеальная замена конфеткам к чаю. В составе овощи и сахар. Пакетик 100 гр. Размер упаковки 11*18 см.",
  },
  {
    name: "Ириски",
    type: "caramel",
    type_ru: "Домашняя карамель",
    cost: "250",
    image1: "https://fruits29.ru/images/iriski/jta3xos2nzm.jpg",
    image2: "https://fruits29.ru/images/iriski/3hfcu1b2bmq.jpg",
    weight: "5 шт.",
    description:
      "Ириски. Домашнее лакомство - только из натуральных ингредиентов. Вес одной конфетки примерно 20 грамм. Вариантов вкусов несколько: Сливочная ириска с гималайской солью; Сливочная шоколадная ириска; Сливочная ириска с орешками (уточняется при заказе). Состав: сливки, сахар, сливочное масло, добавки по вкусу. Упаковка: Стакан 10 шт. / Коробочка 25 шт. Срок годности в холодильнике 30 дней, перед употреблением необходимо достать на 15 минут, чтобы ириски стали мягче.",
  },
  {
    name: "Томаты с прованскими травами",
    type: "chips",
    type_ru: "Овощные чипсы",
    cost: "270",
    image1: "https://fruits29.ru/images/ovoshnie-chips/tomat/dimn_pmput4.jpg",
    image2: "https://fruits29.ru/images/ovoshnie-chips/tomat/hvajst_3fau.jpg",
    weight: "40 гр.",
    description: "Ароматные томаты с прованскими травами. Упаковка: 14*23 см.",
  },
  {
    name: "Силиконовый поддон для для Kitfort, Rawmid 26,5 см * 29,5 см",
    type: "equipment",
    type_ru: "Оборудование",
    cost: "800",
    image1: "https://fruits29.ru/images/poddon/2.jpg",
    image2: "https://fruits29.ru/images/poddon/2-1.jpg",
    weight: "26,5 см * 29,5 см",
    description:
      "Силиконовый поддон для для Kitfort, Rawmid и других сушилок. Размер: 26,5 см * 29,5 см.",
  },
  {
    name: "Мини-наборы",
    type: "miniset",
    type_ru: "Подарочные наборы",
    cost: "250",
    image1:
      "https://fruits29.ru/images/podarochnij-nabor/mini-nabor/zcpoqmaotho.jpg",
    image2:
      "https://fruits29.ru/images/podarochnij-nabor/mini-nabor/63gmmgywvlu.jpg",
    weight: "60 гр.",
    description: "Состав: 2 вкуса пастилы и ассорти фрипсов.",
  },
  {
    name: "Урок по приготовлению домашней карамели и ирисок",
    type: "education",
    type_ru: "Обучение",
    cost: "1000",
    image1: "https://fruits29.ru/images/obuchenie/karamel/7jp3969a1ky.jpg",
    image2: "https://fruits29.ru/images/obuchenie/karamel/lkqukvjiyd4.jpg",
    description:
      "Я даю три базовых вкуса, на основе которых можно создать десятки вариаций!",
  },
];

const articles = [
  {
    name: "Как готовятся самые вкусные фрипсы?",
    dateCreated: "17 МАРТА 2021",
    image:
      "https://fruits29.ru/images/compressed/laptop/fripsi/assorti/vdermxomuhw.jpg",
  },
  {
    name: "Сушилки для пастилы и фрипсов",
    dateCreated: "25 МАРТА 2021",
    image:
      "https://fruits29.ru/images/compressed/laptop/qf0ronyor20.jpg",
  },
  {
    name: "Сушеная вишня полезна для сердца",
    dateCreated: "2 АПРЕЛЯ 2021",
    image:
      "https://fruits29.ru/images/compressed/laptop/pastila/yabloko/dpzqivfprpc.jpg",
  },
];

export { products, articles };
