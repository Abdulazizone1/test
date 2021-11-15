$(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        autoplayTimeout:2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               //  nav:true,
        
            },
            600:{
                items:1,
                // nav:false
        
            },
            800:{
                items:1,
               // nav:false
      
            },
            1000:{
                items:3,
              //  nav:true,

            }
        }
    })
    AOS.init();
     
  var i = 0;  
  var texts = [" Lorem ipsum dolor sit amet ","Wello co ipsum dolor sit amet ipsum ","News on tV is like awesome"," Ipsum cum ex quibusdam animi",  "Lo ex quibusdam animi, non labore?"];
  var paragraph = [" Molestias expedita veritatis sequi debitis sint possimus distinctio voluptates, natus praesentium quia pariatur eos quibusdam blanditiis eius!","Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum odio doloremque aspernatur. Molestias expedita veritatis sequi debitis sint"," Adipisicing elit. Enim rerum odio doloremque aspernatur. Molestias expedita veritatis sequi debitis sint possimus distinctio voluptates, natus praesent","Well how are uou today aspernatur. Molestias expedita veritatis sequi debitis sint possimus distinctio voluptates, natus praesentium quia pariat","Enim rerum odio doloremque aspernatur. Molestias expedita veritatis sequi debitis sint possimus distinctio voluptates, natus praesentium quia pariat", "KEllo well ohello ollo wello io doloremque aspernatur. Molestias expedita veritatis sequi debitis sint possimus distinctio voluptates, natus praesentium quia pariat"];
  setInterval(function(){
  i++;
  $('#counting').text(i);
  if(i == 5){
   i = 0;
  }
  $('#header2').text(texts[i]);
  $('#paragrahp').text(paragraph[i]);
},1000);




  });