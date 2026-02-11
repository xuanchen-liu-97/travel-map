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
    description: "春天的东京，樱花盛开，在上野公园和目黑川沿岸漫步。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        caption: "东京塔夜景"
      },
      {
        url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
        caption: "浅草寺"
      },
      {
        url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
        caption: "目黑川樱花"
      }
    ]
  },
  {
    name: "白崖",
    country: "英国",
    coords: [50.7486, 0.1900],
    date: "2025-08",
    description: "春天的东京，樱花盛开，在上野公园和目黑川沿岸漫步。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        caption: "东京塔夜景"
      },
      {
        url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
        caption: "浅草寺"
      },
      {
        url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
        caption: "目黑川樱花"
      }
    ]
  },
  {
    name: "科茨沃尔德",
    country: "英国",
    coords: [51.8902, -1.7586],
    date: "2025-08",
    description: "春天的东京，樱花盛开，在上野公园和目黑川沿岸漫步。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        caption: "东京塔夜景"
      },
      {
        url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
        caption: "浅草寺"
      },
      {
        url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
        caption: "目黑川樱花"
      }
    ]
  },
  {
    name: "景泰",
    country: "中国甘肃",
    coords: [36.8902, 104.3171],
    date: "2024-03",
    description: "千年古都的庭院与神社，时间仿佛在这里静止。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
        caption: "伏见稻荷大社"
      },
      {
        url: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800",
        caption: "岚山竹林"
      }
    ]
  },
  {
    name: "呼和浩特",
    country: "中国内蒙古",
    coords: [44.0734, 117.8832],
    date: "2024-03",
    description: "千年古都的庭院与神社，时间仿佛在这里静止。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
        caption: "伏见稻荷大社"
      },
      {
        url: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800",
        caption: "岚山竹林"
      }
    ]
  },
  {
    name: "京都",
    country: "日本",
    coords: [35.0116, 135.7681],
    date: "2024-03",
    description: "千年古都的庭院与神社，时间仿佛在这里静止。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
        caption: "伏见稻荷大社"
      },
      {
        url: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800",
        caption: "岚山竹林"
      }
    ]
  },
  {
    name: "巴黎",
    country: "法国",
    coords: [48.8566, 2.3522],
    date: "2023-09",
    description: "在塞纳河畔散步，登上埃菲尔铁塔俯瞰整座城市。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        caption: "埃菲尔铁塔"
      },
      {
        url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
        caption: "塞纳河日落"
      }
    ]
  },
  {
    name: "冰岛",
    country: "冰岛",
    coords: [64.9631, -19.0208],
    date: "2023-12",
    description: "追逐极光、徒步冰川，感受地球最原始的力量。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
        caption: "北极光"
      },
      {
        url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800",
        caption: "黑沙滩"
      }
    ]
  },
  {
    name: "纽约",
    country: "美国",
    coords: [40.7128, -74.0060],
    date: "2024-06",
    description: "城市丛林中的活力与多元文化，永远充满惊喜。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
        caption: "曼哈顿天际线"
      }
    ]
  },
  {
    name: "清迈",
    country: "泰国",
    coords: [18.7883, 98.9853],
    date: "2024-01",
    description: "在古城中穿梭，品尝街头美食，体验寺庙文化。",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1512553944907-1d8a2d4e0894?w=800",
        caption: "素贴山双龙寺"
      },
      {
        url: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800",
        caption: "周末夜市"
      }
    ]
  }
];
