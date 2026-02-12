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
    name: "伦敦",
    country: "英国",
    coords: [51.5, 0.1],
    date: "2025-08",
    description: "第一次来到英国",
    photos: [
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
      },
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
      },
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
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
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
      },
      {
        url: "./photos/53e63925ac1b7dc58574a0a46b39d605.jpg",
        caption: ""
      },
      {
        url: "./57c723c874ad138d2c4cbde9bb0bd623.jpg",
        caption: ""
      }
    ]
  },
  {
    name: "科茨沃尔德",
    country: "英国",
    coords: [51.8902, -1.7586],
    date: "2025-08",
    description: "尝试英国的小镇",
    photos: [
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
      },
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
      },
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
      }
    ]
  },
  {
    name: "甘肃银川",
    country: "中国",
    coords: [36.8902, 104.3171],
    date: "2024-03",
    description: "第一次一起看星星",
    photos: [
      {
        url: "DSC07776.jpg",
        caption: "黄河石林"
      },
    ]
  },
  {
    name: "呼和浩特",
    country: "中国内蒙古",
    coords: [44.0734, 117.8832],
    date: "2024-03",
    description: "第一次家人出游（未齐）",
    photos: [
      {
        url: "./photos/0560039db64b46712dfc8918f785b87d.jpg",
        caption: ""
      },
      {
        url: "",
        caption: ""
      }
    ]
  },

];
