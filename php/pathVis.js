$("document").ready(function() {
    //alert("Firefox has the best visual effect!");

    $("circle.0").on("mouseover", enlarge);
    $("circle.0").on("mouseleave", backnormal);

    $("circle.1").on("mouseover", enlargeOne);
    $("circle.1").on("mouseleave", backnormal);
    
    $("circle.2").on("mouseover", enlargeTwo);
    $("circle.2").on("mouseleave", backnormal);
    
    $("circle.3").on("mouseover", enlargeThree);
    $("circle.3").on("mouseleave", backnormal);
    
    $("circle.4").on("mouseover", enlargeFour);
    $("circle.4").on("mouseleave", backnormal);
    
    $("circle.5").on("mouseover", enlargeFive);
    $("circle.5").on("mouseleave", backnormal);
    
    $("circle.6").on("mouseover", enlargeSix);
    $("circle.6").on("mouseleave", backnormal); 
    
    $("circle.7").on("mouseover", enlargeSeven);
    $("circle.7").on("mouseleave", backnormal);    
    
    $("circle.8").on("mouseover", enlargeEight);
    $("circle.8").on("mouseleave", backnormal);    
    
    
    function enlarge(evt) {
        
        
        //$("circle").attr("r", "6");
        $('[id^="1"], [id^="2"],[id^="3"], [id^="4"],[id^="5"], [id^="6"], [id^="7"], [id^="8"]' && '[id$="0"]'
         && '[id$="1"],[id$="2"],[id$="3"],[id$="4"],[id$="5"],[id$="6"],[id$="7"],[id$="8"]').css("font-size", "7px").css("fill","blue");
         
        
        //$("text").css("font-size", "12px");
    
        //$("circle").css("fill", "green");
    }
    function backnormal(evt) {
        //$("circle").attr("r", "4");
        $("text").css("font-size", "6px").css("fill","green");
    }
    function enlargeOne(evt)   {   $("[id^=1]").css("font-size", "7px").css("fill","blue");       }
    function enlargeTwo(evt)   {   $("[id^=2]").css("font-size", "7px").css("fill","blue");    }
    function enlargeThree(evt) {  $("[id^=3]").css("font-size", "7px").css("fill","blue");       }
    function enlargeFour(evt)  {  $("[id^=4]").css("font-size", "7px").css("fill","blue");       }
    function enlargeFive(evt)  {  $("[id^=5]").css("font-size", "7px").css("fill","blue");       }
    function enlargeSix(evt)   {  $("[id^=6]").css("font-size", "7px").css("fill","blue");       }
    function enlargeSeven(evt)   {  $("[id^=7]").css("font-size", "7px").css("fill","blue");       }
    function enlargeEight(evt)   {  $("[id^=8]").css("font-size", "7px").css("fill","blue");       }
    
    

    $("circle.11").on("mouseover", enlarge11);
    $("circle.11").on("mouseleave", backnormal);
    function enlarge11(evt) {    $("[id^=11]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.12").on("mouseover", enlarge12);
    $("circle.12").on("mouseleave", backnormal);
    function enlarge12(evt) {    $("[id^=12]").css("font-size", "7px").css("fill","blue");     }

    $("circle.13").on("mouseover", enlarge13);
    $("circle.13").on("mouseleave", backnormal);
    function enlarge13(evt) {    $("[id^=13]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.14").on("mouseover", enlarge14);
    $("circle.14").on("mouseleave", backnormal);
    function enlarge14(evt) {    $("[id^=14]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.15").on("mouseover", enlarge15);
    $("circle.15").on("mouseleave", backnormal);
    function enlarge15(evt) {    $("[id^=15]").css("font-size", "7px").css("fill","blue");     }

    $("circle.16").on("mouseover", enlarge16);
    $("circle.16").on("mouseleave", backnormal);
    function enlarge16(evt) {    $("[id^=16]").css("font-size", "7px").css("fill","blue");     }

    $("circle.17").on("mouseover", enlarge17);
    $("circle.17").on("mouseleave", backnormal);
    function enlarge17(evt) {    $("[id^=17]").css("font-size", "7px").css("fill","blue");     }

    
    
    
    $("circle.21").on("mouseover", enlarge21);
    $("circle.21").on("mouseleave", backnormal);
    function enlarge21(evt) {    $("[id^=21]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.22").on("mouseover", enlarge22);
    $("circle.22").on("mouseleave", backnormal);
    function enlarge22(evt) {    $("[id^=22]").css("font-size", "7px").css("fill","blue");     }

    $("circle.23").on("mouseover", enlarge23);
    $("circle.23").on("mouseleave", backnormal);
    function enlarge23(evt) {    $("[id^=23]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.24").on("mouseover", enlarge24);
    $("circle.24").on("mouseleave", backnormal);
    function enlarge24(evt) {    $("[id^=24]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.25").on("mouseover", enlarge25);
    $("circle.25").on("mouseleave", backnormal);
    function enlarge25(evt) {    $("[id^=25]").css("font-size", "7px").css("fill","blue");     }

    $("circle.26").on("mouseover", enlarge26);
    $("circle.26").on("mouseleave", backnormal);
    function enlarge26(evt) {    $("[id^=26]").css("font-size", "7px").css("fill","blue");     }

    $("circle.27").on("mouseover", enlarge27);
    $("circle.27").on("mouseleave", backnormal);
    function enlarge27(evt) {    $("[id^=27]").css("font-size", "7px").css("fill","blue");     }

    
     
    
    $("circle.31").on("mouseover", enlarge31);
    $("circle.31").on("mouseleave", backnormal);
    function enlarge31(evt) {    $("[id^=31]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.32").on("mouseover", enlarge32);
    $("circle.32").on("mouseleave", backnormal);
    function enlarge32(evt) {    $("[id^=32]").css("font-size", "7px").css("fill","blue");     }

    $("circle.33").on("mouseover", enlarge33);
    $("circle.33").on("mouseleave", backnormal);
    function enlarge33(evt) {    $("[id^=33]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.34").on("mouseover", enlarge34);
    $("circle.34").on("mouseleave", backnormal);
    function enlarge34(evt) {    $("[id^=34]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.35").on("mouseover", enlarge35);
    $("circle.35").on("mouseleave", backnormal);
    function enlarge35(evt) {    $("[id^=35]").css("font-size", "7px").css("fill","blue");     }

    $("circle.36").on("mouseover", enlarge36);
    $("circle.36").on("mouseleave", backnormal);
    function enlarge36(evt) {    $("[id^=36]").css("font-size", "7px").css("fill","blue");     }

    $("circle.37").on("mouseover", enlarge37);
    $("circle.37").on("mouseleave", backnormal);
    function enlarge37(evt) {    $("[id^=37]").css("font-size", "7px").css("fill","blue");     }

    
       
    
    $("circle.41").on("mouseover", enlarge41);
    $("circle.41").on("mouseleave", backnormal);
    function enlarge41(evt) {    $("[id^=41]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.42").on("mouseover", enlarge42);
    $("circle.42").on("mouseleave", backnormal);
    function enlarge42(evt) {    $("[id^=42]").css("font-size", "7px").css("fill","blue");     }

    $("circle.43").on("mouseover", enlarge43);
    $("circle.43").on("mouseleave", backnormal);
    function enlarge43(evt) {    $("[id^=43]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.44").on("mouseover", enlarge44);
    $("circle.44").on("mouseleave", backnormal);
    function enlarge44(evt) {    $("[id^=44]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.45").on("mouseover", enlarge45);
    $("circle.45").on("mouseleave", backnormal);
    function enlarge45(evt) {    $("[id^=45]").css("font-size", "7px").css("fill","blue");     }

    $("circle.46").on("mouseover", enlarge46);
    $("circle.46").on("mouseleave", backnormal);
    function enlarge46(evt) {    $("[id^=46]").css("font-size", "7px").css("fill","blue");     }

    $("circle.47").on("mouseover", enlarge47);
    $("circle.47").on("mouseleave", backnormal);
    function enlarge47(evt) {    $("[id^=47]").css("font-size", "7px").css("fill","blue");     }

   
    
    $("circle.51").on("mouseover", enlarge51);
    $("circle.51").on("mouseleave", backnormal);
    function enlarge51(evt) {    $("[id^=51]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.52").on("mouseover", enlarge52);
    $("circle.52").on("mouseleave", backnormal);
    function enlarge52(evt) {    $("[id^=52]").css("font-size", "7px").css("fill","blue");     }

    $("circle.53").on("mouseover", enlarge53);
    $("circle.53").on("mouseleave", backnormal);
    function enlarge53(evt) {    $("[id^=53]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.54").on("mouseover", enlarge54);
    $("circle.54").on("mouseleave", backnormal);
    function enlarge54(evt) {    $("[id^=54]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.55").on("mouseover", enlarge55);
    $("circle.55").on("mouseleave", backnormal);
    function enlarge55(evt) {    $("[id^=55]").css("font-size", "7px").css("fill","blue");     }

    $("circle.56").on("mouseover", enlarge56);
    $("circle.56").on("mouseleave", backnormal);
    function enlarge56(evt) {    $("[id^=56]").css("font-size", "7px").css("fill","blue");     }

    $("circle.57").on("mouseover", enlarge57);
    $("circle.57").on("mouseleave", backnormal);
    function enlarge57(evt) {    $("[id^=57]").css("font-size", "7px").css("fill","blue");     }
  

    $("circle.61").on("mouseover", enlarge61);
    $("circle.61").on("mouseleave", backnormal);
    function enlarge61(evt) {    $("[id^=61]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.62").on("mouseover", enlarge62);
    $("circle.62").on("mouseleave", backnormal);
    function enlarge62(evt) {    $("[id^=62]").css("font-size", "7px").css("fill","blue");     }

    $("circle.63").on("mouseover", enlarge63);
    $("circle.63").on("mouseleave", backnormal);
    function enlarge63(evt) {    $("[id^=63]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.64").on("mouseover", enlarge64);
    $("circle.64").on("mouseleave", backnormal);
    function enlarge64(evt) {    $("[id^=64]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.65").on("mouseover", enlarge65);
    $("circle.65").on("mouseleave", backnormal);
    function enlarge65(evt) {    $("[id^=65]").css("font-size", "7px").css("fill","blue");     }

    $("circle.66").on("mouseover", enlarge66);
    $("circle.66").on("mouseleave", backnormal);
    function enlarge66(evt) {    $("[id^=66]").css("font-size", "7px").css("fill","blue");     }

    $("circle.67").on("mouseover", enlarge67);
    $("circle.67").on("mouseleave", backnormal);
    function enlarge67(evt) {    $("[id^=67]").css("font-size", "7px").css("fill","blue");     }
        
  
    $("circle.71").on("mouseover", enlarge71);
    $("circle.71").on("mouseleave", backnormal);
    function enlarge71(evt) {    $("[id^=71]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.72").on("mouseover", enlarge72);
    $("circle.72").on("mouseleave", backnormal);
    function enlarge72(evt) {    $("[id^=72]").css("font-size", "7px").css("fill","blue");     }

    $("circle.73").on("mouseover", enlarge73);
    $("circle.73").on("mouseleave", backnormal);
    function enlarge73(evt) {    $("[id^=73]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.74").on("mouseover", enlarge74);
    $("circle.74").on("mouseleave", backnormal);
    function enlarge74(evt) {    $("[id^=74]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.75").on("mouseover", enlarge75);
    $("circle.75").on("mouseleave", backnormal);
    function enlarge75(evt) {    $("[id^=75]").css("font-size", "7px").css("fill","blue");     }

    $("circle.76").on("mouseover", enlarge76);
    $("circle.76").on("mouseleave", backnormal);
    function enlarge76(evt) {    $("[id^=76]").css("font-size", "7px").css("fill","blue");     }

    $("circle.77").on("mouseover", enlarge77);
    $("circle.77").on("mouseleave", backnormal);
    function enlarge77(evt) {    $("[id^=77]").css("font-size", "7px").css("fill","blue");     }

 
    $("circle.81").on("mouseover", enlarge81);
    $("circle.81").on("mouseleave", backnormal);
    function enlarge81(evt) {    $("[id^=81]").css("font-size", "7px").css("fill","blue");    }
        
    $("circle.82").on("mouseover", enlarge82);
    $("circle.82").on("mouseleave", backnormal);
    function enlarge82(evt) {    $("[id^=82]").css("font-size", "7px").css("fill","blue");     }

    $("circle.83").on("mouseover", enlarge83);
    $("circle.83").on("mouseleave", backnormal);
    function enlarge83(evt) {    $("[id^=83]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.84").on("mouseover", enlarge84);
    $("circle.84").on("mouseleave", backnormal);
    function enlarge84(evt) {    $("[id^=84]").css("font-size", "7px").css("fill","blue");     }
    
    $("circle.85").on("mouseover", enlarge85);
    $("circle.85").on("mouseleave", backnormal);
    function enlarge85(evt) {    $("[id^=85]").css("font-size", "7px").css("fill","blue");     }

    $("circle.86").on("mouseover", enlarge86);
    $("circle.86").on("mouseleave", backnormal);
    function enlarge86(evt) {    $("[id^=86]").css("font-size", "7px").css("fill","blue");     }

    $("circle.87").on("mouseover", enlarge87);
    $("circle.87").on("mouseleave", backnormal);
    function enlarge87(evt) {    $("[id^=87]").css("font-size", "7px").css("fill","blue");     }    
    
});