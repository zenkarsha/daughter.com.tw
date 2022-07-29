$('.main-nav-btn').click(function(){
  if($('.main-nav').hasClass('is-open'))
    $('.main-nav').removeClass('is-open').addClass('is-close');
  else
    $('.main-nav').removeClass('is-close').addClass('is-open');
});
$('.sidebar-title').click(function(){
  if($('.sidebar-list').hasClass('is-open')) {
    $('.sidebar-list').removeClass('is-open').addClass('is-close');
    $('.sidebar-title i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  }
  else {
    $('.sidebar-list').removeClass('is-close').addClass('is-open');
    $('.sidebar-title i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
  }
});

$('.corner').corner();
