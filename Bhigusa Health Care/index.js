
  window.onload = function () {
      var canvasElement = document.querySelector("#myCanvas");
      var context = canvasElement.getContext("2d");
      
      // the triangle
      context.beginPath();
      context.moveTo(90,15);
      context.lineTo(42, 255);
      context.lineTo(255, 255);
      context.closePath();
      
      // the outline
      context.lineWidth = 4;
      context.strokeStyle = '#000000';
      context.stroke();
      
      // the fill color
      context.fillStyle = 'rgba(30, 114, 79, 0.842)';
      context.fill();

      var canvasElement_1 = document.querySelector("#myCanvas1");
      var context_1 = canvasElement_1.getContext("2d");
      
     /* context_1.beginPath();
      context_1.moveTo(55,35);
      context_1.lineTo(0, 150);
      context_1.lineTo(300, 150);*/
  
      context_1.moveTo(55,35);
      context_1.lineTo(0, 150);
      context_1.lineTo(300, 150)
      context_1.closePath();
      
      // the outline
      context_1.lineWidth = 2;
      context_1.strokeStyle = '#000000';
      context_1.stroke();
      
      // the fill color
      context_1.fillStyle = 'rgba(255, 0, 0, 0)';;
      context_1.fill();

      
}

$(function() {

  var slider = $('.slider');

  slider.on('change', function(e) {
    document.getElementById("myCanvas").style.visibility = "hidden";
    document.getElementById("myCanvas1").style.visibility = "hidden";
    var canvasElement_2 = document.querySelector("#myCanvas2");
      var context_2 = canvasElement_2.getContext("2d");
      
     /* context_1.beginPath();
      context_1.moveTo(55,35);
      context_1.lineTo(0, 150);
      context_1.lineTo(300, 150);*/
      if(this.value == this.min)
      {
        context_2.moveTo(50,35);
      context_2.lineTo(0, 150);
      context_2.lineTo(300, 150);
        setTimeout(function() {
          document.getElementById('myCanvas2').style.display = 'visible';
        }, 2000);
        document.getElementById('myCanvas2').style.display = 'hidden';
      }
      if(this.value == this.max)
      {
      document.getElementById("myCanvas2").style.visibility = "visible";
      context_2.moveTo(90,15);
      context_2.lineTo(42, 255);
      context_2.lineTo(255, 255);
      setTimeout(function() {
        document.getElementById('myCanvas2').style.display = 'visible';
      }, 2000);
      document.getElementById('myCanvas2').style.display = 'hidden';
      }
      context_2.closePath();
      
      // the outline
      context_2.lineWidth = 2;
      context_2.strokeStyle = '#000000';
      context_2.stroke();
      
      // the fill color
      context_2.fillStyle = 'rgba(255, 0, 0, 0)';;
      context_2.fill();
})
});
