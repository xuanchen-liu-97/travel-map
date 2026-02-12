// ============================================================
//  🌍 旅行数据配置文件
//  每次添加新地点只需要编辑这个文件
//
//  格式说明:
//  name:        地点名称
//  country:     国家
//  coords:      [纬度, 经度]  (Google Maps 右键可获取)
//  date:        旅行时间
//  description: 一句话描述
//  photos:      照片数组，每张 { url: "链接", caption: "说明" }
//
//  💡 照片链接可以用:
//     - 500px 图片直链
//     - GitHub 仓库内照片: "./photos/文件名.jpg"
//     - 其他图床链接
// ============================================================

const travelData = [
  {
    name: "剑桥",
    country: "英国",
    coords: [52.2035, 0.1146],
    date: "2025-08",
    description: "去了剑桥但没去剑桥大学",
    photos: [
      {
        url: "./photos/剑桥1.jpg",
        caption: "Exterminate!"
      },
      {
        url: "./photos/剑桥2.jpg",
        caption: "久闻叹息桥大名"
      },
      {
        url: "./photos/剑桥4.jpg",
        caption: "英国小镇的感觉一下就出来了"
      }
    ]
  },
  {
    name: "白崖",
    country: "英国",
    coords: [50.7486, 0.1900],
    date: "2025-08",
    description: "世界尽头--七姐妹白崖",
    photos: [
      {
        url: "./photos/53e63925ac1b7dc58574a0a46b39d605.jpg",
        caption: "城堡为爱守着秘密"
      },
      {
        url: "./photos/57c723c874ad138d2c4cbde9bb0bd623.jpg",
        caption: "而我为你守着回忆"
      },
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: "贴贴"
      }
    ]
  },
  {
    name: "伦敦",
    country: "英国",
    coords: [51.5074, -0.1278],
    date: "2025-08",
    description: "第一次来到英国",
    photos: [
      {
        url: "./photos/伦敦1.jpg",
        caption: "来打卡了！"
      },
      {
        url: "./photos/伦敦2.jpg",
        caption: "著名景点塔桥，结果我现在每天都看到"
      },
      {
        url: "./photos/伦敦3.jpg",
        caption: "喝到了伦敦限定！"
      }
    ]
  },
  {
    name: "内蒙古呼和浩特",
    country: "中国",
    coords: [44.0734, 117.8832],
    date: "2024-08",
    description: "第一次家人出游（未齐）",
    photos: [
      {
        url: "./photos/内蒙1.jpg",
        caption: "by Mom"
      }
    ]
  },
  {
    name: "福建霞浦",
    country: "中国",
    coords: [26.6581, 120.1281],
    date: "2024-07",
    description: "来到海边看星星",
    photos: [
      {
        url: "./photos/霞浦1.jpg",
        caption: "牛马假日"
      },
      {
        url: "./photos/霞浦2.jpg",
        caption: ""
      },
      {
        url: "./photos/霞浦3.jpg",
        caption: ""
      }
    ]
  },
  {
    name: "江西景德镇",
    country: "中国",
    coords: [29.3034, 117.2450],
    date: "2024-08",
    description: "来到卷卷工作的地方",
    photos: [
      {
        url: "./photos/景德镇1.jpg",
        caption: "城市打卡照高手"
      },
      {
        url: "./photos/景德镇2.jpg",
        caption: "我的猪真美"
      }
    ]
  },
  {
    name: "甘肃银川",
    country: "中国",
    coords: [36.8902, 104.3171],
    date: "2023-08",
    description: "第一次一起看星星",
    photos: [
      {
        url: "./photos/DSC07776.jpg",
        caption: "抬起头一起数星星"
      }
    ]
  }

];
