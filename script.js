$(document).ready(function() {
    const container = $('.container');
    const largeCircle = $('.large-circle');
    const smallCircles = $('.small-circle');
    const radius = container.width() / 2 - largeCircle.width() / 2;
    let mouseDown = false;
  
    // Initialize circle positions
    smallCircles.each(function(index, circle) {
      const angle = index * 120;
      const x = radius * Math.cos(angle * (Math.PI / 180));
      const y = radius * Math.sin(angle * (Math.PI / 180));
      $(circle).css({
        'top': `calc(50% + ${y}px)`,
        'left': `calc(50% + ${x}px)`
      });
    });
  
    function updateCircles(event) {
      const centerX = container.width() / 2;
      const centerY = container.height() / 2;
  
      smallCircles.each(function(index, circle) {
        const circleX = $(circle).position().left + $(circle).width() / 2;
        const circleY = $(circle).position().top + $(circle).height() / 2;
        const dx = centerX - circleX;
        const dy = centerY - circleY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = (radius - distance) * 0.1;
  
        const angle = Math.atan2(dy, dx);
        const velocityX = force * Math.cos(angle);
        const velocityY = force * Math.sin(angle);
  
        $(circle).css({
          'top': `+=${velocityY}px`,
          'left': `+=${velocityX}px`
        });
      });
    }
  
    container.on('mousemove', updateCircles);
  });
  