// 上方要显示的等级和背景色
  const topAreas = [
    { title: '夯', color: '#ff0000' },
    { title: '顶级', color: '#ff7f00' },
    { title: '人上人', color: '#ffff00' },
    { title: 'NPC', color: '#ffddb3' },
    { title: '拉完了', color: '#ffffff' }
  ]
// 要显示的图片列表，图片放到public下
  const imageList = [
    '1.jpg',
    '2.jpg',
  ]
// 放大之后的评分项
  const ratingItems = ['材质', '改装', '容量', '痛层']

window.configSettings = {topAreas,imageList,ratingItems}