// import { faker } from '@faker-js/faker';
// import { getRandomInt } from 'utils/helpers';

export type Utilization = {
  item_id: string;
  quantity_ordered: number | null;
};

export type LocationUtilization = {
  name: string;
  id: string;
  utilization: Utilization[];
};

export type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

// const items = Array.from({ length: 25 }, () => ({})).map((_) => ({
//   id: faker.string.uuid(),
//   name: faker.commerce.productName(),
//   price: faker.commerce.price(),
//   description: faker.commerce.productDescription(),
// }));
export const fakeItems: Item[] = [
  {
    id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
    name: "Elegant Rubber Table",
    price: 445.0,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: "495720fa-a448-4506-8f79-157b69163740",
    name: "Generic Frozen Fish",
    price: 95.0,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  },
  {
    id: "c44d3980-674d-4a67-b565-c7b1ff993a04",
    name: "Tasty Granite Table",
    price: 585.0,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
    name: "Recycled Concrete Shirt",
    price: 191.0,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  },
  {
    id: "e1cb80f8-b2f8-4bd2-8538-05f1c6850735",
    name: "Unbranded Frozen Chicken",
    price: 827.0,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  },
  {
    id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
    name: "Licensed Bronze Soap",
    price: 284.0,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  },
  {
    id: "a04fae6d-da78-478f-b27f-6698f867766d",
    name: "Modern Soft Computer",
    price: 698.0,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  },
  {
    id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
    name: "Generic Fresh Soap",
    price: 96.0,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
  },
  {
    id: "bf06d456-6106-4830-a762-2416acaec792",
    name: "Incredible Metal Soap",
    price: 2.0,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
  },
  {
    id: "abed16c3-1a7e-4f15-9901-ea35ebad660d",
    name: "Ergonomic Concrete Tuna",
    price: 954.0,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  },
  {
    id: "3a52e666-1b64-4e4e-a2c9-09f65f7c6432",
    name: "Bespoke Frozen Sausages",
    price: 197.0,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: "19348646-becb-4613-8b83-09e38ff404ff",
    name: "Handcrafted Steel Bike",
    price: 366.0,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: "a4c52d8b-c8c4-4be2-9bd3-be1ac8facc10",
    name: "Tasty Wooden Pizza",
    price: 682.0,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
  {
    id: "9291810c-853d-465e-adba-008db417d27a",
    name: "Small Rubber Car",
    price: 92.0,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
  {
    id: "bf552be4-1ad8-4be6-9326-0666caf32635",
    name: "Sleek Metal Salad",
    price: 281.0,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  {
    id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
    name: "Handcrafted Wooden Chair",
    price: 43.0,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  },
  {
    id: "1d7e0180-db95-4817-87c1-7b59f6bd57ff",
    name: "Practical Plastic Bacon",
    price: 835.0,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  {
    id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
    name: "Oriental Granite Table",
    price: 998.0,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  },
  {
    id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
    name: "Incredible Rubber Shoes",
    price: 965.0,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
  {
    id: "d2535649-49d8-4f64-9702-bab26352193d",
    name: "Refined Fresh Tuna",
    price: 157.0,
    description: "The Football Is Good For Training And Recreational Purposes",
  },
  {
    id: "d6f659c7-d248-4e36-8337-c76f75a15df3",
    name: "Handcrafted Steel Hat",
    price: 488.0,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  },
  {
    id: "b0ba7769-3140-436a-b264-4666266d15d3",
    name: "Oriental Rubber Chair",
    price: 566.0,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
  },
  {
    id: "10f2981c-0ebb-42a3-8434-196cf72c9b92",
    name: "Bespoke Concrete Chicken",
    price: 921.0,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  {
    id: "1645ea83-6d65-46a4-aef1-1bf6098e1fdf",
    name: "Intelligent Granite Computer",
    price: 619.0,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
  },
  {
    id: "bf9f2821-a274-407d-8a36-f92288171626",
    name: "Fantastic Steel Bike",
    price: 996.0,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
];

// console.log(items);

// function getUtilization(items: Item[]): Utilization[] {
//   const itemIds = items
//     .map((item) => item.id)
//     .sort(() => (Math.random() > 0.5 ? 1 : -1))
//     .slice(0, getRandomInt(5, 21));
//   return itemIds.map((id) => ({
//     item_id: id,
//     quantity_ordered: getRandomInt(0, 100),
//   }));
// }

// const locations: LocationUtilization[] = Array.from({ length: 10 }, () => ({})).map((_) => ({
//   name: faker.location.street(),
//   id: faker.string.uuid(),
//   utilization: getUtilization(items),
// }));
export const fakeLocations: LocationUtilization[] = [
  {
    name: "Antoinette Shoal",
    id: "e5f07fb4-f90c-4b56-8324-b563a1755fc2",
    utilization: [
      {
        item_id: "abed16c3-1a7e-4f15-9901-ea35ebad660d",
        quantity_ordered: 5,
      },
      {
        item_id: "a4c52d8b-c8c4-4be2-9bd3-be1ac8facc10",
        quantity_ordered: 43,
      },
      {
        item_id: "d6f659c7-d248-4e36-8337-c76f75a15df3",
        quantity_ordered: 80,
      },
      {
        item_id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
        quantity_ordered: 88,
      },
      {
        item_id: "3a52e666-1b64-4e4e-a2c9-09f65f7c6432",
        quantity_ordered: 9,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 88,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 49,
      },
      {
        item_id: "e1cb80f8-b2f8-4bd2-8538-05f1c6850735",
        quantity_ordered: 8,
      },
      {
        item_id: "1645ea83-6d65-46a4-aef1-1bf6098e1fdf",
        quantity_ordered: 82,
      },
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 16,
      },
      {
        item_id: "495720fa-a448-4506-8f79-157b69163740",
        quantity_ordered: 92,
      },
      {
        item_id: "19348646-becb-4613-8b83-09e38ff404ff",
        quantity_ordered: 16,
      },
    ],
  },
  {
    name: "Alexis Summit",
    id: "62930815-6601-409a-b8c0-0088adfd09cb",
    utilization: [
      {
        item_id: "a4c52d8b-c8c4-4be2-9bd3-be1ac8facc10",
        quantity_ordered: 60,
      },
      {
        item_id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
        quantity_ordered: 81,
      },
      {
        item_id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
        quantity_ordered: 35,
      },
      {
        item_id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
        quantity_ordered: 47,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 46,
      },
      {
        item_id: "bf552be4-1ad8-4be6-9326-0666caf32635",
        quantity_ordered: 68,
      },
      {
        item_id: "a04fae6d-da78-478f-b27f-6698f867766d",
        quantity_ordered: 18,
      },
      {
        item_id: "1d7e0180-db95-4817-87c1-7b59f6bd57ff",
        quantity_ordered: 47,
      },
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 3,
      },
      {
        item_id: "c44d3980-674d-4a67-b565-c7b1ff993a04",
        quantity_ordered: 50,
      },
      {
        item_id: "1645ea83-6d65-46a4-aef1-1bf6098e1fdf",
        quantity_ordered: 87,
      },
      {
        item_id: "abed16c3-1a7e-4f15-9901-ea35ebad660d",
        quantity_ordered: 5,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 83,
      },
      {
        item_id: "b0ba7769-3140-436a-b264-4666266d15d3",
        quantity_ordered: 62,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 24,
      },
      {
        item_id: "10f2981c-0ebb-42a3-8434-196cf72c9b92",
        quantity_ordered: 27,
      },
      {
        item_id: "495720fa-a448-4506-8f79-157b69163740",
        quantity_ordered: 25,
      },
    ],
  },
  {
    name: "Wuckert Bypass",
    id: "6c8c6f42-6837-4a24-bbbd-78a499133741",
    utilization: [
      {
        item_id: "e1cb80f8-b2f8-4bd2-8538-05f1c6850735",
        quantity_ordered: 15,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 67,
      },
      {
        item_id: "bf9f2821-a274-407d-8a36-f92288171626",
        quantity_ordered: 53,
      },
      {
        item_id: "1645ea83-6d65-46a4-aef1-1bf6098e1fdf",
        quantity_ordered: 72,
      },
      {
        item_id: "d6f659c7-d248-4e36-8337-c76f75a15df3",
        quantity_ordered: 21,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 99,
      },
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 56,
      },
      {
        item_id: "b0ba7769-3140-436a-b264-4666266d15d3",
        quantity_ordered: 90,
      },
      {
        item_id: "d2535649-49d8-4f64-9702-bab26352193d",
        quantity_ordered: 96,
      },
      {
        item_id: "10f2981c-0ebb-42a3-8434-196cf72c9b92",
        quantity_ordered: 19,
      },
      {
        item_id: "abed16c3-1a7e-4f15-9901-ea35ebad660d",
        quantity_ordered: 36,
      },
      {
        item_id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
        quantity_ordered: 27,
      },
      {
        item_id: "bf06d456-6106-4830-a762-2416acaec792",
        quantity_ordered: 82,
      },
      {
        item_id: "1d7e0180-db95-4817-87c1-7b59f6bd57ff",
        quantity_ordered: 8,
      },
      {
        item_id: "495720fa-a448-4506-8f79-157b69163740",
        quantity_ordered: 93,
      },
      {
        item_id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
        quantity_ordered: 93,
      },
      {
        item_id: "bf552be4-1ad8-4be6-9326-0666caf32635",
        quantity_ordered: 63,
      },
      {
        item_id: "c44d3980-674d-4a67-b565-c7b1ff993a04",
        quantity_ordered: 17,
      },
    ],
  },
  {
    name: "New Street",
    id: "9d3db2cc-8e41-42c8-af03-a56f32296186",
    utilization: [
      {
        item_id: "bf552be4-1ad8-4be6-9326-0666caf32635",
        quantity_ordered: 87,
      },
      {
        item_id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
        quantity_ordered: 93,
      },
      {
        item_id: "9291810c-853d-465e-adba-008db417d27a",
        quantity_ordered: 56,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 88,
      },
      {
        item_id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
        quantity_ordered: 74,
      },
      {
        item_id: "1645ea83-6d65-46a4-aef1-1bf6098e1fdf",
        quantity_ordered: 32,
      },
      {
        item_id: "d6f659c7-d248-4e36-8337-c76f75a15df3",
        quantity_ordered: 86,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 83,
      },
      {
        item_id: "19348646-becb-4613-8b83-09e38ff404ff",
        quantity_ordered: 12,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 79,
      },
      {
        item_id: "bf06d456-6106-4830-a762-2416acaec792",
        quantity_ordered: 23,
      },
      {
        item_id: "b0ba7769-3140-436a-b264-4666266d15d3",
        quantity_ordered: 80,
      },
      {
        item_id: "495720fa-a448-4506-8f79-157b69163740",
        quantity_ordered: 86,
      },
      {
        item_id: "d2535649-49d8-4f64-9702-bab26352193d",
        quantity_ordered: 41,
      },
      {
        item_id: "a4c52d8b-c8c4-4be2-9bd3-be1ac8facc10",
        quantity_ordered: 88,
      },
      {
        item_id: "a04fae6d-da78-478f-b27f-6698f867766d",
        quantity_ordered: 17,
      },
    ],
  },
  {
    name: "E 7th Street",
    id: "d3c8cb67-6c2d-4911-98a2-bcac65afa07e",
    utilization: [
      {
        item_id: "9291810c-853d-465e-adba-008db417d27a",
        quantity_ordered: 51,
      },
      {
        item_id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
        quantity_ordered: 34,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 71,
      },
      {
        item_id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
        quantity_ordered: 92,
      },
      {
        item_id: "d6f659c7-d248-4e36-8337-c76f75a15df3",
        quantity_ordered: 71,
      },
      {
        item_id: "b0ba7769-3140-436a-b264-4666266d15d3",
        quantity_ordered: 27,
      },
      {
        item_id: "c44d3980-674d-4a67-b565-c7b1ff993a04",
        quantity_ordered: 35,
      },
      {
        item_id: "abed16c3-1a7e-4f15-9901-ea35ebad660d",
        quantity_ordered: 86,
      },
      {
        item_id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
        quantity_ordered: 38,
      },
      {
        item_id: "a4c52d8b-c8c4-4be2-9bd3-be1ac8facc10",
        quantity_ordered: 36,
      },
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 64,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 66,
      },
      {
        item_id: "3a52e666-1b64-4e4e-a2c9-09f65f7c6432",
        quantity_ordered: 97,
      },
      {
        item_id: "bf06d456-6106-4830-a762-2416acaec792",
        quantity_ordered: 55,
      },
      {
        item_id: "e1cb80f8-b2f8-4bd2-8538-05f1c6850735",
        quantity_ordered: 36,
      },
    ],
  },
  {
    name: "Bluebell Close",
    id: "4f947607-0f30-422d-9a65-2fc76206693e",
    utilization: [
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 17,
      },
      {
        item_id: "e1cb80f8-b2f8-4bd2-8538-05f1c6850735",
        quantity_ordered: 21,
      },
      {
        item_id: "b0ba7769-3140-436a-b264-4666266d15d3",
        quantity_ordered: 6,
      },
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 84,
      },
      {
        item_id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
        quantity_ordered: 55,
      },
      {
        item_id: "abed16c3-1a7e-4f15-9901-ea35ebad660d",
        quantity_ordered: 52,
      },
      {
        item_id: "bf552be4-1ad8-4be6-9326-0666caf32635",
        quantity_ordered: 50,
      },
      {
        item_id: "1645ea83-6d65-46a4-aef1-1bf6098e1fdf",
        quantity_ordered: 1,
      },
      {
        item_id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
        quantity_ordered: 71,
      },
      {
        item_id: "10f2981c-0ebb-42a3-8434-196cf72c9b92",
        quantity_ordered: 72,
      },
      {
        item_id: "3a52e666-1b64-4e4e-a2c9-09f65f7c6432",
        quantity_ordered: 32,
      },
      {
        item_id: "d2535649-49d8-4f64-9702-bab26352193d",
        quantity_ordered: 53,
      },
      {
        item_id: "bf9f2821-a274-407d-8a36-f92288171626",
        quantity_ordered: 29,
      },
      {
        item_id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
        quantity_ordered: 28,
      },
      {
        item_id: "c44d3980-674d-4a67-b565-c7b1ff993a04",
        quantity_ordered: 35,
      },
      {
        item_id: "bf06d456-6106-4830-a762-2416acaec792",
        quantity_ordered: 16,
      },
      {
        item_id: "495720fa-a448-4506-8f79-157b69163740",
        quantity_ordered: 84,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 88,
      },
      {
        item_id: "1d7e0180-db95-4817-87c1-7b59f6bd57ff",
        quantity_ordered: 45,
      },
      {
        item_id: "a04fae6d-da78-478f-b27f-6698f867766d",
        quantity_ordered: 42,
      },
    ],
  },
  {
    name: "Andres Loop",
    id: "8f1a8f90-86a4-4e72-a014-de91c917d1ee",
    utilization: [
      {
        item_id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
        quantity_ordered: 18,
      },
      {
        item_id: "a04fae6d-da78-478f-b27f-6698f867766d",
        quantity_ordered: 79,
      },
      {
        item_id: "9291810c-853d-465e-adba-008db417d27a",
        quantity_ordered: 17,
      },
      {
        item_id: "a4c52d8b-c8c4-4be2-9bd3-be1ac8facc10",
        quantity_ordered: 68,
      },
      {
        item_id: "3a52e666-1b64-4e4e-a2c9-09f65f7c6432",
        quantity_ordered: 82,
      },
      {
        item_id: "bf552be4-1ad8-4be6-9326-0666caf32635",
        quantity_ordered: 11,
      },
      {
        item_id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
        quantity_ordered: 55,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 83,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 13,
      },
      {
        item_id: "19348646-becb-4613-8b83-09e38ff404ff",
        quantity_ordered: 38,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 91,
      },
      {
        item_id: "bf06d456-6106-4830-a762-2416acaec792",
        quantity_ordered: 17,
      },
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 30,
      },
      {
        item_id: "495720fa-a448-4506-8f79-157b69163740",
        quantity_ordered: 16,
      },
      {
        item_id: "c44d3980-674d-4a67-b565-c7b1ff993a04",
        quantity_ordered: 71,
      },
    ],
  },
  {
    name: "S 8th Street",
    id: "708d034e-785c-4b61-9183-1184f292befe",
    utilization: [
      {
        item_id: "e1cb80f8-b2f8-4bd2-8538-05f1c6850735",
        quantity_ordered: 30,
      },
      {
        item_id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
        quantity_ordered: 55,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 45,
      },
      {
        item_id: "a04fae6d-da78-478f-b27f-6698f867766d",
        quantity_ordered: 15,
      },
      {
        item_id: "3a52e666-1b64-4e4e-a2c9-09f65f7c6432",
        quantity_ordered: 2,
      },
      {
        item_id: "d6f659c7-d248-4e36-8337-c76f75a15df3",
        quantity_ordered: 64,
      },
      {
        item_id: "bf9f2821-a274-407d-8a36-f92288171626",
        quantity_ordered: 52,
      },
      {
        item_id: "10f2981c-0ebb-42a3-8434-196cf72c9b92",
        quantity_ordered: 91,
      },
      {
        item_id: "1d7e0180-db95-4817-87c1-7b59f6bd57ff",
        quantity_ordered: 18,
      },
      {
        item_id: "19348646-becb-4613-8b83-09e38ff404ff",
        quantity_ordered: 35,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 58,
      },
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 44,
      },
      {
        item_id: "bf552be4-1ad8-4be6-9326-0666caf32635",
        quantity_ordered: 94,
      },
      {
        item_id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
        quantity_ordered: 51,
      },
      {
        item_id: "1645ea83-6d65-46a4-aef1-1bf6098e1fdf",
        quantity_ordered: 34,
      },
    ],
  },
  {
    name: "Thompson Canyon",
    id: "fa5c9c6e-6d7c-4330-87db-fd5780a36dd3",
    utilization: [
      {
        item_id: "d129b76a-6f4f-44c5-b3a1-1086f7a5da50",
        quantity_ordered: 56,
      },
      {
        item_id: "e1cb80f8-b2f8-4bd2-8538-05f1c6850735",
        quantity_ordered: 77,
      },
      {
        item_id: "1d7e0180-db95-4817-87c1-7b59f6bd57ff",
        quantity_ordered: 34,
      },
      {
        item_id: "10f2981c-0ebb-42a3-8434-196cf72c9b92",
        quantity_ordered: 24,
      },
      {
        item_id: "d2535649-49d8-4f64-9702-bab26352193d",
        quantity_ordered: 22,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 50,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 14,
      },
      {
        item_id: "abed16c3-1a7e-4f15-9901-ea35ebad660d",
        quantity_ordered: 44,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 79,
      },
    ],
  },
  {
    name: "Mayra Meadows",
    id: "aac9101f-63a3-4abf-9839-85e78578fc41",
    utilization: [
      {
        item_id: "a4c52d8b-c8c4-4be2-9bd3-be1ac8facc10",
        quantity_ordered: 50,
      },
      {
        item_id: "a5cc2d55-e1e6-47d5-84b5-a1f293a8697b",
        quantity_ordered: 48,
      },
      {
        item_id: "e02e5cee-791b-4c2c-be49-153f9a0b7340",
        quantity_ordered: 91,
      },
      {
        item_id: "495720fa-a448-4506-8f79-157b69163740",
        quantity_ordered: 87,
      },
      {
        item_id: "96dea6b1-1221-44fe-9fed-17cceda9b3f9",
        quantity_ordered: 86,
      },
      {
        item_id: "c44d3980-674d-4a67-b565-c7b1ff993a04",
        quantity_ordered: 57,
      },
      {
        item_id: "d684aaf9-82a8-4579-9a70-c7dcdbc50516",
        quantity_ordered: 52,
      },
      {
        item_id: "1d7e0180-db95-4817-87c1-7b59f6bd57ff",
        quantity_ordered: 48,
      },
      {
        item_id: "a04fae6d-da78-478f-b27f-6698f867766d",
        quantity_ordered: 88,
      },
      {
        item_id: "b0ba7769-3140-436a-b264-4666266d15d3",
        quantity_ordered: 9,
      },
      {
        item_id: "32dfefb2-05ea-4fcb-b50e-0fcad1cf52b3",
        quantity_ordered: 73,
      },
      {
        item_id: "d6f659c7-d248-4e36-8337-c76f75a15df3",
        quantity_ordered: 99,
      },
      {
        item_id: "8c0439e2-635f-4d19-9e9d-69a678d73504",
        quantity_ordered: 90,
      },
      {
        item_id: "d2535649-49d8-4f64-9702-bab26352193d",
        quantity_ordered: 86,
      },
      {
        item_id: "bf552be4-1ad8-4be6-9326-0666caf32635",
        quantity_ordered: 1,
      },
    ],
  },
];

// console.log(locations);
