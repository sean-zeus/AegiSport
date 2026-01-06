// window.onload = function () {
// };

document.addEventListener("DOMContentLoaded", function () {
  // ****************************增加地區選擇ico事件 by zeus20240126****************************************************
  for (let _el of document.getElementsByClassName("seanRegionSelect-toggle")) {
    // if (_el == "third") {
    // throw new Error("EndIterative");
    // }
    // alert(_el);// first,sencond
    _el.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(() => {
        Swal.fire({
          allowEscapeKey: false,
          allowEnterKey: false,
          showConfirmButton: false,
          allowOutsideClick: true,
          html: htmlContent,
          backdrop: true,
          // backdrop: `rgba(0,0,0,0.5)`,
          // grow: 'fullscreen'
          // width: '80%',
          // height: '600px'
        });
      }, 100);
      // var dataId = document.getElementById('seanRegionSelect-toggle').getAttribute('data-id');
      // updateCustomerAcceptsMarketing(dataId, false).then(r => {});
      // RegionSelectLink.style.display = 'none';
    });
  }

  // ****************************桌面版用語言選擇事件 by zeus20240126****************************************************
  $(".seanLanguageSelect-toggle").hover(
    function () {
      // var position = $(this).position().left + $(this).width() / 2;
      $(this).find(".content").stop().slideDown();
      // $(".menu2-indicator").addClass("show").css("left", position);
    },
    function () {
      $(this).find(".content").stop().slideUp();
      // $(".menu2-indicator").removeClass("show");
    }
  );

  // ****************************手機版用語言選擇事件 by zeus20240126****************************************************
  $(".lang-title").click(function () {
    $(".lang-list-box").slideToggle();
    $(".lang-list-box").css("display", "flex");
  });
});
