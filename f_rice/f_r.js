// JavaScript Document
       // 顶部分类栏
       $('.top-bottom-classify').hover(function(){
       	$(this).css({'color':'#fff'});
       },
       function(){
       	$(this).css({'color':'#b0b0b0'});
       });
           //顶部购物车
           $('.buy-car').hover(function(){
           	$(this).css({'background':'#fff'});
           	// alert($(this).find('img').attr('src'));
           	// $(this).find('img').attr({"src":"buy-car2.png"})
           	$(this).find('p').css({'color':'#ff6600'}).show();
           	$(this).find('span').hide();
           	$(this).find('.buy-car-detail').css({'display': 'flex'}).slideDown(500)
           	//购物车图片的切换
           	$(this).find('.false-car').stop().animate({opacity:'0'},100);
           	$(this).find('.true-car').stop().animate({opacity:'1'},100);
           },
           function(){
           	$(this).css({'background':'#424242'});
           	$(this).find('p').css({'color':'#b0b0b0'}).show();
           	$(this).find('.buy-car-detail').slideUp(300)
           	//购物车图片的切换
           	$(this).find('.false-car').stop().animate({opacity:'1'},100);
           	$(this).find('.true-car').stop().animate({opacity:'0'},100);
           });
           // 小米手机
           // $('.rice-classify-detail').mouseenter(function(){
           // 	$(this).css({'color':'#ff6600'});
           // }),
           // function(){
           // 	$(this).css({'color':''})
           // });

           
           //顶部菜单栏的信息显示
           $('.rice-classify li').mouseenter(function(){
           	$(this).find('.top-classify-bottom').css({'display':'flex'}).slideDown(600).show();
           });
           $('.rice-classify li').mouseleave( function(){
           	$(this).find('.top-classify-bottom').slideUp(600).hide();
           });
         // 搜索框
         $('.search-src').hover(function(){
         	$(this).css({'background':'#ff6600'});
         	$(this).find('.search2-img').css({'opacity':'1'});
         	$(this).find('.search-img').css({'opacity':'0'});
         },function(){
         	$(this).css({'background':'#fff'});
         	$(this).find('.search2-img').css({'opacity':'0'});
         	$(this).find('.search-img').css({'opacity':'1'});
         });
           // 轮播图
           var c=0;//总变量
//当鼠标划过 左右按钮进行显示和隐藏
$("#flash").hover(function(){
	$('.back,.next').show();
},function(){
	$('.back,.next').hide();
});
//设置定时器，控制自动轮播
var timer=setInterval(run,2000);
  //定时器调用的函数
  function run(){
  	c++;
  	c=c==5?0:c;
  //让c号图片显示，兄弟图片隐藏
 // $("#flash img").eq(c).show().siblings('img').hide();

    //让c号图片淡入，兄弟图片淡出
    $("#flash>img").eq(c).fadeIn(1000).siblings('img').fadeOut(1000);
  //让c号li变红，其它变灰
  $("#flash li").eq(c).css({'background':'#fff'}).siblings('li').css({'background':'#757575'});
};
$("#flash").hover(function(){
  //清除定时器
  clearInterval(timer);
},function(){
	timer=setInterval(run,2000);
});
//鼠标移入小圆点的效果
$("#flash ul li").mouseenter(function(){
  //获得当前移入的li的序号
  c=$(this).index();
  //让c号li改变颜色
  $("#flash li").eq(c).css({'background':'#fff',}).siblings('li').css({'background':'#757575'});
})
//鼠标点击小圆点后切换图片
$("#flash ul li").click(function(){
  //获得当前移入的li的序号
  c=$(this).index();
   //让c号图片淡入，兄弟图片淡出
   $("#flash>img").eq(c).fadeIn(2000).siblings('img').fadeOut(2000);
})
//点击左右键，图片进行切换的效果
$('.back').click(function(){
	c=c==0?4:(c-1);
	$("#flash>img").eq(c).fadeIn(2000).siblings('img').fadeOut(2000);
	$("#flash li").eq(c).css({'background':'#fff'}).siblings('li').css({'background':'#757575'});
})
$('.next').click(function(){
	c=c==4?0:(c+1);
	$("#flash>img").eq(c).fadeIn(2000).siblings('img').fadeOut(2000);
	$("#flash li").eq(c).css({'background':'#fff'}).siblings('li').css({'background':'#757575'});
});
$('.back,.next').hover(function(){
	$(this).css({'background':'#565e60'});
},
function(){
	$(this).css({'background':''});
});
// 轮播图左边菜单栏的右边部分
$('.menu-left li').mouseenter(function(){
	$(this).find('.menu-left-img').css({'background':'#ff6700'});
	$('.menu-left li').not($(this)).css({'background':''});
	$(this).find('.flash-menu-right').css({'display':'flex'}).show();
	$('.flash-menu-right').not($(this).find('.flash-menu-right')).hide();
});
$('.menu-left li').mouseleave(function(){
	$(this).find('.flash-menu-right').hide();
	$(this).find('.menu-left-img').css({'background':''});
})
// 选购手机 企业团购 移入字体 字体和图片改变
$(' .absolute-gift').hover(function(){
	$(this).find('.gift-word').css({'color':'#fff'});
	$(this).find('.gift-img1').css({'opacity':'0'});
	$(this).find('.gift-img2').css({'opacity':'1'});
},function(){
	$(this).find('.gift-word').css({'color':'#DDD'});
	$(this).find('.gift-img1').css({'opacity':'1'});
	$(this).find('.gift-img2').css({'opacity':'0'});
});

// 下面全屏部分

// 查看全部颜色切换
$('.phone-look-whole').hover(function(){
	$(this).find('span').css({'color':'#ff6700'});
	$(this).find('.phone-look-whole-back').css({'background':'#ff6700'});
},function(){
	$(this).find('span').css({'color':'#333'});
	$(this).find('.phone-look-whole-back').css({'background':'#b0b0b0'});
});
// 会动的图
// $('.phone-under-left').hover(function(){
// $(this).animate({
//       'margin-top':'17px',
//     },"solw")
//   },
//   function(){
//     $(this).animate({
//       'margin-top':'20px'
//     },"solw");
//   }
//    );
  // 家电右边移入滑上效果
  $('.house-right-inner,.house-right-inner2').hover(function(){
  	$(this).find('.house-ele-hide').stop().animate({'bottom':'0px'},"slow");
  },function(){
  	$(this).find('.house-ele-hide').stop().animate({'bottom':'-75px'},"slow");
  })
  //点击右边的菜单切换图片和内容
  $(' .house-ele-li li').mouseenter(function(){
  	a=$(this).index()
  	// 改变字体颜色和底部border
  	$(this).css({
  		'color':'#ff6700',
  		'border-bottom':'2px solid #ff6700'
  	})
  	$(' .house-ele-li li').not($(this)).css({
  		'color':'#333',
  		'border':'0px'
  	});
     // 切换图片
     if(a==1){
       $(this).parent().parent().next().children().children().find('img').attr({"src":"rice-tv2.jpg"})
 //切换活动力度
 $(this).parent().parent().next().children().find('.house-right-inner').first().find('#p').css({'background':'#0f0'})
 $(this).parent().parent().next().children().find('.house-right-inner').first().next().next().find('#p').html('享7折').css({'background':'#0f0'})
  // 找到标签改变内容
  $(this).parent().parent().next().children().children().find('#p').next().next().first().html('13.3小米笔记本Air i5')
  $(this).parent().parent().next().children().find('.house-right-inner').first().find('.house-ele-detail').html('4K HDR/人工智能语音')
  $(this).parent().parent().next().children().find('.house-right-inner').first().find('.house-ele-money').find('p').html('999元')
  $(this).parent().parent().next().children().find('.house-right-inner').first().find('.house-ele-money').find('span').html('1499元')
}
if(a==0){
	$(this).parent().parent().next().children().children().find('img').attr({"src":"rice-tv1.jpg"})

	$(this).parent().parent().next().children().find('.house-right-inner').first().find('#p').css({'background':'#e53935'})
	$(this).parent().parent().next().children().find('.house-right-inner').first().next().next().find('#p').css({'background':'#e53935'})
              // 找到标签改变内容
              $(this).parent().parent().next().children().children().find('#p').next().next().next().first().html('小米电视4A 43英寸青村版')
              $(this).parent().parent().next().children().find('.house-right-inner').first().find('.house-ele-detail').html('全屏清高/人工智能语音')
              $(this).parent().parent().next().children().find('.house-right-inner').first().find('.house-ele-money').find('p').html('1499元')
              $(this).parent().parent().next().children().find('.house-right-inner').first().find('.house-ele-money').find('span').html('1699元')
      }

})

  // 点击滑动
  $('.flash-buy-back').click(function(){

  	$(this).css({'color':'#ff6700'})
  	$(this).next().next().css({'color':''})
  	$(this).parent().parent().next().find('.flash-buy-under-right').find('.flash-buy-under-right-hide').css({'margin-left':'-470px'});
  });
  $('.flash-buy-next').click(function(){

  	$(this).css({'color':'#ff6700'})
  	$(this).prev().prev().css({'color':''})
  	$(this).parent().parent().next().find('.flash-buy-under-right').find('.flash-buy-under-right-hide').css({'margin-left':'0px'});
  });
  // 小轮播图
  $('.content-under-inner').hover(function(){
  	$(this).css({'margin-top':'-5px', 'box-shadow':'3px 6px 25px 3px #b0b0b0'});
  	$(this).children().children().find('.read_left').css({'opacity':'1'});
  	$(this).children().children().find('.read_right').css({'opacity':'1'});
  },function(){
  	$(this).css({'margin-top':'0px', 'box-shadow':''});
  	$(this).find('.content-under-inner-hide-inner').find('.read_left').css({'opacity':'1'});
  	$(this).children().children().find('.read_left').css({'opacity':'0'});
  	$(this).children().children().find('.read_right').css({'opacity':'0'});
  })
  // 点击左右键 更换图片
  $('.read_right').click(function(){
  	a=$(this).parent().parent().offset().left
  	if(a==59.5){
  		$(this).parent().parent().css
  		({'margin-left':'-282px'});
  		$('.read_right').next().find('li:eq(1)').
              css ({'background':'#ff6700','border':'1px solid #ff6700',})
              .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'})

      }else if(a==-222.5){
            $(this).parent().parent().css
            ({'margin-left':'-564px'});
            $('.read_right').next().find('li:eq(2)').
            css ({'background':'#ff6700','border':'1px solid #ff6700',})
            .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'})
    }else if(a==362.15625){
            $(this).parent().parent().css
            ({'margin-left':'-282px'})
    }else if(a==80.15625){
            $(this).parent().parent().css
            ({'margin-left':'-564px'})
    }else if(a==-201.84375){
        $(this).parent().parent().css
        ({'margin-left':'-846px'})
}

})
  $('.read_left').click(function(){
  	b=$(this).parent().parent().offset().left
  	if(b==-504.5){
  		$(this).parent().parent().css
  		({'margin-left':'-282px'});
  		$('.read_right').next().find('li:eq(1)').
              css ({'background':'#ff6700','border':'1px solid #ff6700',})
              .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'})
      }else if(b==-222.5){
           $(this).parent().parent().css
           ({'margin-left':'0px'});
           $('.read_right').next().find('li:eq(0)').
           css ({'background':'#ff6700','border':'1px solid #ff6700',})
           .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'})
   }else if(b==80.15625){
           $(this).parent().parent().css
           ({'margin-left':'0px'})
   }else if(b==-201.84375){
           $(this).parent().parent().css
           ({'margin-left':'-282px'})
   }else if(b==-483.84375){
           $(this).parent().parent().css
           ({'margin-left':'-564px'})
   }
})
  // 移入小圆圈背景改变
  $(".content-cicle li").mouseenter(function(){
  //获得当前移入的li的序号
  m=$(this).index();
  //让c号li改变颜色
  $(".content-cicle li").eq(m).
  css ({'background':'#ff6700','border':'1px solid #ff6700',})
  .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'});
})
//鼠标点击小圆点后切换图片
$(".content-cicle li").click(function(){
  //获得当前点击的li的序号
  m=$(this).index();
  if(m==0){
  	$(this).parent().parent().parent().css({'margin-left':'0px'})
  	$('li:eq(0)').css ({'background':'#ff6700','border':'1px solid #ff6700',})
      .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'});
}else if(m==1){
     $(this).parent().parent().parent().css({'margin-left':'-282px'})
     $('li:eq(1)').css ({'background':'#ff6700','border':'1px solid #ff6700',})
     .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'});
}else if(m==2){
     $(this).parent().parent().parent().css({'margin-left':'-564px'})
     $('li:eq(2)').css ({'background':'#ff6700','border':'1px solid #ff6700',})
     .siblings('li').css({'background':'#b0b0b0','border':'#b0b0b0'});
}
})
// *********************************************
// $('.video-whole-top')click(function(){
//       w=$(this).index();
//       alert(w)
// })

$('.bottom-top-each').mouseenter(function(){
        w=$(this).index()
        $(this).find('.top-font').css({'color':'#ff6700'});
        switch(w){
                case 0:
                $(this).find('img').attr({"src":"img/xiu2.png"})
                break;
                case 1:
                $(this).find('img').attr({"src":"img/72.png"})
                break;
                case 2:
                $(this).find('img').attr({"src":"img/152.png"})
                break;
                case 3:
                $(this).find('img').attr({"src":"img/giftt2.png"})
                break; 
                case 4:
                $(this).find('img').attr({"src":"img/pos2.png"})
                break;
        }
})
$('.bottom-top-each').mouseleave(function(){
      w=$(this).index()
      $(this).find('.top-font').css({'color':'#616161'});
      switch(w){
        case 0:
        $(this).find('img').attr({"src":"img/xiu1.png"})
        break;
        case 1:
        $(this).find('img').attr({"src":"img/71.png"})
        break;
        case 2:
        $(this).find('img').attr({"src":"img/15.png"})
        break;
        case 3:
        $(this).find('img').attr({"src":"img/giftt1.png"})
        break; 
        case 4:
        $(this).find('img').attr({"src":"img/pos1.png"})
        break;
}
});
// 联系客服
$('.middle-btn').hover(function(){
        $(this).css({'background':'#ff6700'});
        $(this).find('img').attr({'src':'img/qi2.png'});
        $(this).find('p').css({'color':'#fff'})
},function(){
        $(this).css({'background':'#fff'});
        $(this).find('img').attr({'src':'img/qi1.png'});
        $(this).find('p').css({'color':'#ff6700'})
})
$(' .under-left-img').hover(function(){
        y=$(this).index()
        switch(y){
                case 0:
                $(this).find('img').attr({"src":"img/under1.png"})
                $(this).find('.under-left-show').css({'opacity':'1','background':'#fff'})
                break;
                case 1:
                $(this).find('img').attr({"src":"img/under2.png"})
                $(this).find('.under-left-show').css({'opacity':'1','background':'#fff'})
                break;
                case 2:
                $(this).find('img').attr({"src":"img/under3.png"})
                $(this).find('.under-left-show').css({'opacity':'1','background':'#fff'})
                break;
        }
},function(){
     y=$(this).index()
     switch(y){
        case 0:
        $(this).find('img').attr({"src":"img/under-1.png"})
        $(this).find('.under-left-show').css({'opacity':'0'})
        break;
        case 1:
        $(this).find('img').attr({"src":"img/under-2.png"})
        $(this).find('.under-left-show').css({'opacity':'0'})
        break;
        case 2:
        $(this).find('img').attr({"src":"img/under-3.png"})
        $(this).find('.under-left-show').css({'opacity':'0'})
        break;

}
});
$('.back-top').hover(function(){
       $(this).find('img').attr({"src":"img/under4.png"})
       $(this).find('.under-left-show').css({'opacity':'1','background':'#fff'})
},function(){
        $(this).find('img').attr({"src":"img/under-4.png"})
        $(this).find('.under-left-show').css({'opacity':'0'})
})

// $('.back-top').click(function(){
//  y=$(this).offset().top;
//  alert(y)
// });
$('.back-top').click(function(){
$(this).hide();
});
$(window).scroll(function () {
if ($(window).scrollTop() >=600) {
$(".back-top").show().css({'display':'flex'});
}else{
        $(".back-top").hide();
}
});
// $(function(){
//         var h=$('.back-top').offset().top;
//         $(window).scroll(function(){
//                 var s-h=$(this).scrollTop();
//                 if(s-h>h){
//                         $(".back-top").show();
//                 }
//         });
// });
//控制视频的播放与停止
$('#myView').play();
$('#myView').pause();