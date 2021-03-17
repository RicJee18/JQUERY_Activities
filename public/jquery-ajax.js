
// $("#images img").on("click",function(){
    
//     var x = $(this).attr('src');
//     $('#light-image').attr('src', x);
//     $('#lightbox').fadeIn('fast');
  
// })

$(".lightbox").click(function () {
  var imgsrc = $(this).attr("src");
  $("body").append(
    "<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='" +
      imgsrc +
      "'></div>"
  );
  $(".close-lightbox, .img-popup").click(function () {
    $(".img-popup")
      .fadeOut(500, function () {
        $(this).remove();
      })
      .addClass("lightboxfadeout");
  });
});
$(".lightbox").click(function () {
  $(".img-popup").fadeIn(500);
});

var myVar;

function myFunction() {
  myVar = setTimeout(hiding, 3000);
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("preload").style.display = "none";
  document.getElementById("bio").style.display = "block";
}

function hiding() {
  document.getElementById("preload").style.animation = "fadeout 1s ease";
  document.getElementById("bio").style.animation = "fadein 1s ease";
}

$(document).ready(function(){
  setInterval(function(){
         $.ajax({
            url: "https://jsonplaceholder.typicode.com/comments",
            dataType:"json",
            success: function(data){
                var ndx = Math.floor(Math.random() * data.length - 1);
                $("#comment1").text(data[ndx].name);
                $("#comment2").text(data[ndx].body);
            }

         })
    
  }, 3000);

  
  //mouseenter
  $('#aprilImg').mouseenter(function () {
    $('.image-Descript').fadeToggle();
  })
  //mouseleave
  $('#aprilImg').mouseleave(function () {
    $('.image-Descript').fadeToggle();
  })

  $("#aprilImg").click(function () {
    $(".testimonial").toggle();
  })

  $(".friendPic1").click(function () {
    $("#testimony").toggle();
  })

  $(".friendPic2").click(function () {
    $("#testimony1").toggle();
  })

  $(".friendPic1").dblclick(function () {
    window.location.href = ($(this).data("link"));
  })

  $(".friendPic2").dblclick(function () {
    window.location.href = ($(this).data("link"));
  })

  $("#resizePic1").click(function () {
    $(".friendPic1").animate({

      height: '200px',
      width: '200px',

    }, 6000);
  })

  $("#resizePic2").click(function () {
    $(".friendPic2").animate({

      height: '200px',
      width: '200px',

    }, 6000);
  })

    

});  
  