$(function(){
    
    var arr = ['list/1.html','list/2.html','list/3.html','list/4.html','list/list_index.html']; 
    var i = 0;
    
    $("#leftBtn").mouseover(function(){
        
        $(this).css("transform","scale(1.2)");
        
    });
    
    $("#rightBtn").mouseover(function(){
       $(this).css("transform","scale(1.2)"); 
    });
    
    $("#leftBtn").mouseout(function(){
       $(this).css("transform","scale(1)"); 
    });
    
    $("#rightBtn").mouseout(function(){
        $(this).css("transform","scale(1)");
    });
    
    $("#rightBtn").click(function rightClick(){
      if(i > 4){
          i = 0;
      }
    
    $("#iframe_box").attr('src',arr[i]);    
    
      i = i+1;

      
        
        
    });
    
    $("#leftBtn").click(function leftClick(){
    
        if(i < 0){
          i = 4;
      }
      
    $("#iframe_box").attr('src',arr[i]);
    
      i = i-1;
      
        
        
    });
    

  
  
  
  });