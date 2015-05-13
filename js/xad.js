(function (window){
    
    $(window).load(function() {
        init();        
    });

    $(window).on('load resize', function(){
        window_height=$( window ).height();
        window_extra=(window_height-600)/2
        //637 is minimum height
        //trace('window_extra '+window_extra)
        //trace('window_height '+window_height)
    });

    function init(){
        $("body").fadeIn(300);

        var checkOrientation;
        function checkOrientation() {
            var viewport;
            viewport = document.querySelector("meta[name=viewport]");
            if (window.orientation === 90 || window.orientation === -90) {

                if( /iPad/i.test(navigator.userAgent) ) {
                    $('#burgervideo').hide();
                    $('#commercialipad').hide();                    
                    return viewport.setAttribute("content", "width:device-width, initial-scale=0.931, user-scalable=1");
                }else if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $('#burgervideo').hide()
                    $('#commercialipad').hide();                    
                    return viewport.setAttribute("content", "width:device-width, initial-scale=0.669, user-scalable=1");
                }

            } else {

                if( /iPad/i.test(navigator.userAgent) ) {
                    $('#burgervideo').hide()
                    $('#commercialipad').hide();                    
                    return viewport.setAttribute("content", "width:device-width, initial-scale=0.698, user-scalable=1");
                }else if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    $('#burgervideo').hide()
                    $('#commercialipad').hide();                    
                    return viewport.setAttribute("content", "width:device-width, initial-scale=0.376, user-scalable=1");
                }



            }
        };
        window.onorientationchange = function() {
            return checkOrientation();
        };
        checkOrientation();



        FastClick.attach(document.body);
        
        scrollOBJ={page_Y_location:0,top_NUMBER:0}

        var init_page_tween = TweenMax.from(scrollOBJ, 1, {page_Y_location:-200, ease:Cubic.easeInOut, onUpdate:tween_to_position});
        function tween_to_position() {
            scrollOBJ.page_Y_location=Math.ceil(scrollOBJ.page_Y_location)
            scrollOBJ.top_NUMBER=scrollOBJ.page_Y_location
            scroll_action(scrollOBJ.top_NUMBER)
        }

        $('#hammer_gesture').hammer().bind("panend panup pandown swipeleft swiperight swipeup swipedown", handleHammer);
        $('#hammer_gesture').data('hammer').get('pan').set({ direction: Hammer.DIRECTION_ALL,threshold: 0  });
        $('#hammer_gesture').data('hammer').get('swipe').set({ direction: Hammer.DIRECTION_ALL,threshold: 10  });
        $('#hammer_gesture').on('mousewheel', function(event) {
            
            init_page_tween.kill();            
            //trace(event.deltaX, event.deltaY, event.deltaFactor);
            scrollOBJ.top_NUMBER+=Math.ceil(event.deltaY);
            scrollOBJ.page_Y_location=scrollOBJ.top_NUMBER
            scroll_action(scrollOBJ.top_NUMBER)

        });

        $("body,html").bind("touchstart touchmove mousedown", function(e){
            init_page_tween.kill();            
        });


        tl_nav = new TimelineMax();
        tl_topfeature = new TimelineMax();
        tl_presentation = new TimelineMax();
        tl_slide1 = new TimelineMax();
        tl_locator = new TimelineMax();
        tl_slide2 = new TimelineMax();
        tl_video= new TimelineMax();
        tl_slide3 = new TimelineMax();

        tl_game= new TimelineMax();
        tl_slide4 = new TimelineMax();


        all_animation();


        $('#xad_menu1').click(function(){
            init_page_tween = TweenMax.to(scrollOBJ, 1, {page_Y_location:-200, ease:Cubic.easeInOut, onUpdate:tween_to_position});
        });
        $('#xad_menu2').click(function(){
            init_page_tween = TweenMax.to(scrollOBJ, 1, {page_Y_location:-850, ease:Cubic.easeInOut, onUpdate:tween_to_position});
        });
        $('#xad_menu3').click(function(){
            init_page_tween = TweenMax.to(scrollOBJ, 1, {page_Y_location:-2150, ease:Cubic.easeInOut, onUpdate:tween_to_position});
        });
        $('#xad_menu4').click(function(){
            init_page_tween = TweenMax.to(scrollOBJ, 1, {page_Y_location:-3450, ease:Cubic.easeInOut, onUpdate:tween_to_position});
        });
        $('#xad_menu5').click(function(){
            init_page_tween = TweenMax.to(scrollOBJ, 1, {page_Y_location:-4750, ease:Cubic.easeInOut, onUpdate:tween_to_position});
        });
    }

    function all_animation(){
        tl_nav.pause();
        tl_nav.to($("#xad_nav0"), 1, {css: {top: "-191"}},"navstart");
        tl_nav.to($("#xad_nav1"), 1, {css: {top: "-191"}},"navstart");
        tl_nav.to($("#xad_nav2"), 1, {css: {top: "0"}},"navstart");
        tl_nav.to($("#xad_nav3"), 1, {css: {top: "15"}},"navstart");
        tl_nav.to($("#xad_nav4"), 1, {css: {top: "10", width:'1100', height:'20'}},"navstart");
        tl_nav.to($("#xad_nav5"), 1, {css: {top: "39"}},"navstart");
        tl_nav.to($("#xad_nav6"), 1, { css: {left: '0', top: "32",width:"244",opacity:1}  } ,"navstart"   );
        tl_nav.to($(".xad_menu"), 1, { css: {height:"40"}  } ,"navstart"   );




        tl_topfeature.pause();
        tl_topfeature.from($("#xad_topfeature11"), .3, {autoAlpha:0});
        tl_topfeature.from($("#xad_topfeature12"), .3, {autoAlpha:0});
        tl_topfeature.from($("#xad_topfeature1"), .3, {autoAlpha:0});
        tl_topfeature.from($("#xad_topfeature10"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature9"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature8"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature7"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature6"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature5"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature4"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature3"), .3, {opacity:0,scale:0}, '-=.25');
        tl_topfeature.from($("#xad_topfeature2"), .3, {opacity:0,scale:0}, '-=.25');




        tl_presentation.pause();
        tl_presentation.to($("#xad_nav6"), .3, { css: {left: '243', top: "32",width:"247"}  });
        tl_presentation.to($("#xad_presentation11"), .3, {autoAlpha:0});
        tl_presentation.to($("#xad_presentation12"), .3, {autoAlpha:0},'-=.25');        
        tl_presentation.from($("#xad_presentation21"), .3, {autoAlpha:0},'second');
        tl_presentation.from($("#xad_presentation22"), .3, {autoAlpha:0},'second');
        tl_presentation.to($("#xad_presentation_black"), .5, {css: {width: "90"}},'second');

        tl_presentation.to($("#xad_presentation22"), .3, {autoAlpha:0},'+=.5');
        tl_presentation.from($("#xad_presentation31"), .3, {autoAlpha:0},'third');
        tl_presentation.from($("#xad_presentation32"), .3, {autoAlpha:0},'third');
        tl_presentation.to($("#xad_presentation_black"), .5, {css: {width: "25"}},'third');
        tl_presentation.to($("#xad_presentation21"), 0, {autoAlpha:0});

        tl_presentation.to($("#xad_presentation31"), .3, {autoAlpha:0},'+=.5');
        tl_presentation.to($("#xad_presentation32"), .3, {autoAlpha:0},'-=.25');
        tl_presentation.from($("#xad_presentation41"), .3, {autoAlpha:0},'fourth');
        tl_presentation.from($("#xad_presentation42"), .3, {autoAlpha:0},'fourth');
        tl_presentation.to($("#xad_presentation_black"), .5, {css: {width: "95"}},'fourth');





        tl_slide1.pause();
        tl_slide1.to($("#xad_slide1_img"), .3, {x:-232},'+=.3');
        tl_slide1.to($("#xad_slide1_img"), .3, {x:-464},'+=.3');






        tl_locator.pause();
        tl_locator.to($("#xad_nav6"), .3, { css: {left: '489', top: "32",width:"222"}  });
        tl_locator.to($("#xad_locator_hand"), .3, {css: {left:"430",top: "315"}} ,'locator1');
        tl_locator.to($("#xad_locator11"), .3, {autoAlpha:0} ,'locator1');
        tl_locator.to($("#xad_locator12"), .3, {autoAlpha:0} ,'locator1');
        tl_locator.from($("#xad_locator21"), .3, {autoAlpha:0} ,'locator1');
        tl_locator.from($("#xad_locator22"), .3, {autoAlpha:0} ,'locator1');


        tl_locator.to($("#xad_locator_hand"), 0, {} ,'+=.5');
        tl_locator.to($("#xad_locator_hand"), .3, {css: {left:"544",top: "272"}} ,'locator2');
        tl_locator.to($("#xad_locator21"), .3, {autoAlpha:0} ,'locator2');
        tl_locator.to($("#xad_locator22"), .3, {autoAlpha:0} ,'locator2');
        tl_locator.from($("#xad_locator31"), .3, {autoAlpha:0} ,'locator2');
        tl_locator.from($("#xad_locator32"), .3, {autoAlpha:0} ,'locator2');


        tl_locator.to($("#xad_locator_hand"), 0, {} ,'+=.5');
        tl_locator.to($("#xad_locator31"), .3, {autoAlpha:0} ,'locator3');
        tl_locator.from($("#xad_locator41"), .3, {autoAlpha:0} ,'locator3');
        tl_locator.from($("#xad_locator43"), .3, {autoAlpha:0} ,'locator3');
        tl_locator.from($("#xad_locator42"), .3, {autoAlpha:0} ,'locator3');


        tl_locator.to($("#xad_locator_hand"), 0, {} ,'+=.5');
        tl_locator.to($("#xad_locator_hand"), .7, {css: {left:"644",top: "652"}} ,'locator4');

        tl_locator.to($("#xad_locator32"), .2, {autoAlpha:0} ,'locator4');
        tl_locator.to($("#xad_locator42"), .2, {autoAlpha:0} ,'locator4');

        tl_locator.to($("#xad_locator41"), .3, {autoAlpha:0} ,'locator4');
        tl_locator.from($("#xad_locator51"), .7, {autoAlpha:0} ,'locator4');
        tl_locator.from($("#xad_locator52"), .7, {autoAlpha:0} ,'locator4');





        tl_slide2.pause();
        tl_slide2.to($("#xad_slide2_img"), .3, {x:-232},'+=.3');
        tl_slide2.to($("#xad_slide2_img"), .3, {x:-464},'+=.3');




        tl_video.pause();
        tl_video.to($("#xad_nav6"), .3, { css: {left: '710', top: "32",width:"194"}  });

        tl_video.from($("#xad_video_clock"), .3, {autoAlpha:0} ,'video1');
        tl_video.to($("#xad_video11"), .3, {autoAlpha:0} ,'video1');
        tl_video.to($("#xad_video12"), .3, {autoAlpha:0} ,'video1');
        tl_video.from($("#xad_video21"), .3, {autoAlpha:0} ,'video1');
        tl_video.from($("#xad_video22"), .3, {autoAlpha:0} ,'video1');
        tl_video.from($("#xad_video23"), .3, {autoAlpha:0} ,'video1');
        tl_video.from($("#xad_video24"), .3, {autoAlpha:0} ,'video1');


        tl_video.from($("#xad_video21"), 0, {} ,'+=.5');
        tl_video.to($("#xad_video21"), .3, {autoAlpha:0} ,'video2');
        tl_video.to($("#xad_video22"), .3, {autoAlpha:0} ,'video2');
        tl_video.to($("#xad_video23"), .3, {autoAlpha:0} ,'video2');
        tl_video.to($("#xad_video24"), .3, {autoAlpha:0} ,'video2');
        tl_video.from($("#xad_video31"), .3, {autoAlpha:0} ,'video2');
        tl_video.from($("#xad_video32"), .3, {autoAlpha:0} ,'video2');
        tl_video.from($("#xad_video33"), .3, {autoAlpha:0} ,'video2');
        tl_video.from($("#xad_video34"), .3, {autoAlpha:0} ,'video2');


        tl_video.from($("#xad_video31"), 0, {} ,'+=.5');
        tl_video.to($("#xad_video31"), .3, {autoAlpha:0} ,'video3');
        tl_video.to($("#xad_video32"), .3, {autoAlpha:0} ,'video3');
        tl_video.to($("#xad_video33"), .3, {autoAlpha:0} ,'video3');
        tl_video.to($("#xad_video34"), .3, {autoAlpha:0} ,'video3');
        tl_video.from($("#xad_video41"), .3, {autoAlpha:0} ,'video3');
        tl_video.from($("#xad_video42"), .3, {autoAlpha:0} ,'video3');
        tl_video.from($("#xad_video43"), .3, {autoAlpha:0} ,'video3');
        tl_video.from($("#xad_video44"), .3, {autoAlpha:0} ,'video3');



        tl_slide3.pause();
        tl_slide3.to($("#xad_slide3_img"), .3, {x:-232},'+=.3');



        tl_game.pause();
        tl_game.to($("#xad_nav6"), .3, { css: {left: '903', top: "32",width:"197"}  });

        tl_game.to($("#xad_game_fingerprint1"), .2, {autoAlpha:0} );
        tl_game.to($("#xad_game_fingerprint2"), .2, {autoAlpha:0} );
        tl_game.to($("#xad_game_fingerprint3"), .2, {autoAlpha:0} );        
        tl_game.to($("#xad_game11"), .3, {autoAlpha:0} ,'game1');
        tl_game.from($("#xad_game21"), .3, {autoAlpha:0} ,'game1');
        tl_game.to($("#xad_game_fingerprint1"), 0, { css: {left: '650', top: '220'}  });
        tl_game.to($("#xad_game_fingerprint2"), 0, { css: {left: '721', top: '251'}  });
        tl_game.to($("#xad_game_fingerprint3"), 0, { css: {left: '784', top: '218'}  });
        tl_game.to($("#xad_game_fingerprint1"), .2, {autoAlpha:1} );
        tl_game.to($("#xad_game_fingerprint2"), .2, {autoAlpha:1} );
        tl_game.to($("#xad_game_fingerprint3"), .2, {autoAlpha:1} );

        tl_game.to($("#xad_game_fingerprint1"), .2, {autoAlpha:0} ,'+=.5');
        tl_game.to($("#xad_game_fingerprint2"), .2, {autoAlpha:0} );
        tl_game.to($("#xad_game_fingerprint3"), .2, {autoAlpha:0} );
        tl_game.to($("#xad_game21"), .3, {autoAlpha:0} ,'game2');
        tl_game.from($("#xad_game31"), .3, {autoAlpha:0} ,'game2');
        tl_game.to($("#xad_game_fingerprint1"), 0, { css: {left: '650', top: '250'}  });
        tl_game.to($("#xad_game_fingerprint2"), 0, { css: {left: '710', top: '210'}  });
        tl_game.to($("#xad_game_fingerprint1"), .2, {autoAlpha:1} );
        tl_game.to($("#xad_game_fingerprint2"), .2, {autoAlpha:1} );

        tl_game.to($("#xad_game_fingerprint1"), .2, {autoAlpha:0} ,'+=.5');
        tl_game.to($("#xad_game_fingerprint2"), .2, {autoAlpha:0} );
        tl_game.to($("#xad_game31"), .3, {autoAlpha:0} ,'game3');
        tl_game.from($("#xad_game41"), .3, {autoAlpha:0} ,'game3');
        tl_game.to($("#xad_game_fingerprint1"), 0, { css: {left: '650', top: '220'}  });
        tl_game.to($("#xad_game_fingerprint2"), 0, { css: {left: '721', top: '251'}  });
        tl_game.to($("#xad_game_fingerprint1"), .2, {autoAlpha:1} );
        tl_game.to($("#xad_game_fingerprint2"), .2, {autoAlpha:1} );



        tl_slide4.pause();
        tl_slide4.to($("#xad_slide4_img"), .3, {x:-232},'+=.3');
        tl_slide4.to($("#xad_slide4_img"), .3, {x:-464},'+=.3');
        tl_slide4.to($("#xad_slide4_img"), .3, {x:-696},'+=.3');
    }

    function scroll_action(scroll_num){

        if(scroll_num>0){
            scroll_num=0;
            scrollOBJ.page_Y_location=0;
            scrollOBJ.top_NUMBER=0;
        }else if(scroll_num<-6050){
            scroll_num=-6050;
            scrollOBJ.page_Y_location=-6050;
            scrollOBJ.top_NUMBER=-6050;

        }
        //trace(scroll_num)

       
        $("#xad_content").css({transform: 'translateY('+scroll_num+'px)'})


        if(scroll_num>=0){
            tl_nav.progress(0)
        }else if(scroll_num<0 && scroll_num>-200){
            tl_nav.progress(-(scroll_num+0)/200)
        }else{
            tl_nav.progress(1)
        }



        if( scroll_num>=-50 ){
            tl_topfeature.progress(0)
        }else if( scroll_num< -50  && scroll_num > -200 ){
            tl_topfeature.progress( -(scroll_num+50)/150 )
        }else{
            tl_topfeature.progress(1)
        }


        // this determine if the window height is larger or smaller than each frame
        // it also determine whether the window height is longer than the initial position of this particular frame
        end_pos1=900
        ani_height1=690;//(650+40)
        if(   window_height > (ani_height1+100)  ){
            start_pos1=end_pos1-(window_height-ani_height1);
            if(  window_height  >  (end_pos1+ani_height1)   )start_pos1=end_pos1-ani_height1;
        } else {
            start_pos1=end_pos1-100
            end_pos1+=100;
        }

        if(scroll_num>=-start_pos1){
            tl_presentation.progress(0)
        }else if(scroll_num<-start_pos1 && scroll_num>-end_pos1){
            tl_presentation.progress(  -(scroll_num+start_pos1)  /   (end_pos1-start_pos1)   )
        }else{
            tl_presentation.progress(1)
        }  



        end_pos2=1500
        ani_height2=690;
        if(window_height> (ani_height2+100)  )  start_pos2=end_pos2-(window_height-ani_height2);
        else {
            start_pos2=end_pos2-100
            end_pos2+=100;
        }

        if(scroll_num>=-start_pos2){
            tl_slide1.progress(0)
        }else if(scroll_num<-start_pos2 && scroll_num>-end_pos2){
            tl_slide1.progress(  -(scroll_num+start_pos2)  /   (end_pos2-start_pos2)   )
        }else{
            tl_slide1.progress(1)
        }  



        end_pos3=2150
        ani_height3=690;
        if(window_height> (ani_height3+100)  )  start_pos3=end_pos3-(window_height-ani_height3);
        else {
            start_pos3=end_pos3-100
            end_pos3+=100;
        }

        if(scroll_num>=-start_pos3){
            tl_locator.progress(0)
        }else if(scroll_num<-start_pos3 && scroll_num>-end_pos3){
            tl_locator.progress(  -(scroll_num+start_pos3)  /   (end_pos3-start_pos3)   )
        }else{
            tl_locator.progress(1)
        }        



        end_pos4=2800
        ani_height4=690;
        if(window_height> (ani_height4+100)  )  start_pos4=end_pos4-(window_height-ani_height4);
        else {
            start_pos4=end_pos4-100
            end_pos4+=100;
        }

        if(scroll_num>=-start_pos4){
            tl_slide2.progress(0)
        }else if(scroll_num<-start_pos4 && scroll_num>-end_pos4){
            tl_slide2.progress(  -(scroll_num+start_pos4)  /   (end_pos4-start_pos4)   )
        }else{
            tl_slide2.progress(1)
        }



        end_pos5=3450
        ani_height5=690;
        if(window_height> (ani_height5+100)  )  start_pos5=end_pos5-(window_height-ani_height5);
        else {
            start_pos5=end_pos5-100
            end_pos5+=100;
        }

        if(scroll_num>=-start_pos5){
            tl_video.progress(0)
        }else if(scroll_num<-start_pos5 && scroll_num>-end_pos5){
            tl_video.progress(  -(scroll_num+start_pos5)  /   (end_pos5-start_pos5)   )
        }else{
            tl_video.progress(1)
        }



        end_pos6=4100
        ani_height6=690;
        if(window_height> (ani_height6+100)  )  start_pos6=end_pos6-(window_height-ani_height6);
        else {
            start_pos6=end_pos6-100
            end_pos6+=100;
        }

        if(scroll_num>=-start_pos6){
            tl_slide3.progress(0)
        }else if(scroll_num<-start_pos6 && scroll_num>-end_pos6){
            tl_slide3.progress(  -(scroll_num+start_pos6)  /   (end_pos6-start_pos6)   )
        }else{
            tl_slide3.progress(1)
        }



        end_pos7=4750
        ani_height7=690;
        if(window_height> (ani_height7+100)  )  start_pos7=end_pos7-(window_height-ani_height7);
        else {
            start_pos7=end_pos7-100
            end_pos7+=100;
        }

        if(scroll_num>=-start_pos7){
            tl_game.progress(0)
        }else if(scroll_num<-start_pos7 && scroll_num>-end_pos7){
            tl_game.progress(  -(scroll_num+start_pos7)  /   (end_pos7-start_pos7)   )
        }else{
            tl_game.progress(1)
        }



        end_pos8=5400
        ani_height8=690;
        if(window_height> (ani_height8+100)  )  start_pos8=end_pos8-(window_height-ani_height8);
        else {
            start_pos8=end_pos8-100
            end_pos8+=100;
        }

        if(scroll_num>=-start_pos8){
            tl_slide4.progress(0)
        }else if(scroll_num<-start_pos8 && scroll_num>-end_pos8){
            tl_slide4.progress(  -(scroll_num+start_pos8)  /   (end_pos8-start_pos8)   )
        }else{
            tl_slide4.progress(1)
        }
    }

    function handleHammer(ev) {
        
        //trace(ev.type);

        switch(ev.type) {

            case 'panup':
            case 'pandown':
                drag_offset = (ev.gesture.deltaY);
                scrollOBJ.top_NUMBER=scrollOBJ.page_Y_location+drag_offset;
                scroll_action(scrollOBJ.top_NUMBER);                
                break;


            case 'panend':
                drag_offset = (ev.gesture.deltaY);
                scrollOBJ.top_NUMBER=scrollOBJ.page_Y_location+drag_offset;
                scrollOBJ.page_Y_location=scrollOBJ.top_NUMBER
                scroll_action(scrollOBJ.top_NUMBER);
                break;

        }
    }
    
    function trace(log_string){
        $("#tracearea").html(log_string)
    }

}(window));
