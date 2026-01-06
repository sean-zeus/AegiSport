// (function () {
//   
// })();

// window.onload = function () {
//   // document.getElementsByClassName("wrapperH")[0].style.height = document.getElementsByClassName("flickity-viewport")[0].style.height;
// };

// (function(){
// })();

function initLoad(openObj) {
  document.getElementById(openObj).style.display = "block";
  // 选项，默认值列表
  let flky = new Flickity(`#${openObj}`, {
    accessibility: true, // 启用键盘导航，按左右键
    adaptiveHeight: true, // 自適應高度
    autoPlay: 5000, // 自動跳转到下一个单元格，如果为true，默认间隔3秒或以毫秒为单位设置间隔时间，例如 `autoPlay: 1000` 间隔为1秒
    cellAlign: "left", // 对齐，“中心”，“左”或“右” 或小数点0-1,0是容器的开始（左），1是结束（右）
    cellSelector: undefined, // 指定单元格元素的选择器
    contain: true, // 将包含单元格到容器，所以在开始或结束时没有多余的滚动，如果启用了 wrapAround ，则不起作用
    draggable: true, // 启用拖动和触摸
    dragThreshold: 3, // 用户必须水平滚动才能开始拖动的像素数，增加触摸设备的垂直滚动空间
    freeScroll: true, // 使内容可以自由滚动和弹出，不调整单元格
    friction: 0.2, // 较小的数字=更容易滑动
    groupCells: true, // 将组包含在幻灯片中
    initialIndex: 0, // 初始选定单元的基于0的索引
    lazyLoad: true, // 启用延迟加载图像，设置图像 data-flickity-lazyload="src.jpg"，设置为加载相邻单元格的图像
    percentPosition: true, //以百分比值而不是像素设置定位，如果项目具有百分比宽度，则启用，如果项目具有像素宽度（如图像）则禁用
    prevNextButtons: true, //创建并启用按钮以点击上一个和下一个单元格
    pageDots: true, // 创建并启用页面点
    resize: true, // 监听窗口调整大小事件，以调整大小和位置
    rightToLeft: false, // 实现从右到左的布局
    setGallerySize: true, // 设置画廊的高度，如果图库已经使用CSS设置了高度，则禁用它
    watchCSS: false, // 观看内容：之后的元素，如果激活 #element:after { content: 'flickity' }
    wrapAround: false, // 在滑动结束时，首先使用无限滚动
  });

  let gg1 = document.getElementById(openObj).offsetTop;
  let gg2 = document.getElementById(openObj).offsetWidth;
  // let gg2 = document.getElementsByClassName("cell_td")[1].offsetHeight / 2;
  
  let _td = document.querySelectorAll(`#${openObj} .cell_td`);
  Array.from(_td).forEach((item, i) => {
    document.querySelectorAll(`#${openObj} .cell_th`)[i].style.top = (item.offsetTop + gg1) + "px";
    document.querySelectorAll(`#${openObj} .cell_th`)[i].style.width = gg2 + "px";
  });

  // document.getElementsByClassName("cell_th")[1].style.top = document.getElementsByClassName("cell_td")[1].offsetTop + gg1 - gg2 + "px";
  // document.getElementsByClassName("cell_th")[2].style.top =
  // document.getElementsByClassName("cell_td")[2].offsetTop + gg1 - gg2 + "px";

  // document.getElementsByClassName("cell_th")[1].style.top = document.getElementsByClassName("cell_td")[1].getBoundingClientRect().top + document.getElementsByClassName("cell_td")[1].offsetTop;
}
