$(window).resize(function() {
  location.reload();
});
$(document).ready(function() {
  $("#myPicture").click(function() {
    $("#container").addClass("animated hinge")
  });

  sidePanelHeight = $('.sidePanel').height() + 30;
  if (sidePanelHeight < 150) {
    $('.content').css('margin-top', sidePanelHeight);
    menuMargin = $('#personal').height() + 10;
    $('.dropdown-content').css('margin-top', menuMargin);
  }

  $('#imgContact').click(function() {
    if ($('#contactDetail').hasClass('show')) {
      $('#contactDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    } else {
      clearPreviousClick();
      $('#contactDetail').addClass('show');
      displayMenuHeight = $('#contactDetail').height();
      $('.content').css('margin-top', sidePanelHeight + displayMenuHeight);
    }
  });

  $('#imgProfil').click(function() {
    if ($('#profilDetail').hasClass('show')) {
      $('#profilDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    } else {
      clearPreviousClick();
      $('#profilDetail').addClass('show');
      displayMenuHeight = $('#profilDetail').height();
      $('.content').css('margin-top', sidePanelHeight + displayMenuHeight);
    }
  });

  $('#imgSkill').click(function() {
    if ($('#skillDetail').hasClass('show')) {
      $('#skillDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    } else {
      clearPreviousClick();
      $('#skillDetail').addClass('show');
      displayMenuHeight = $('#skillDetail').height();
      $('.content').css('margin-top', sidePanelHeight + displayMenuHeight);
    }
  });

  $('#imgSocial').click(function() {
    if ($('#socialDetail').hasClass('show')) {
      $('#socialDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    } else {
      clearPreviousClick();
      $('#socialDetail').addClass('show');
      displayMenuHeight = $('#socialDetail').height();
      $('.content').css('margin-top', sidePanelHeight + displayMenuHeight);
    }
  });

  $(window).click(function(e) {
    var id = e.target.id;
    if (!(id === 'imgProfil' || id === 'imgContact' || id === 'imgSkill' || id === 'imgSocial')) {
      clearPreviousClick();
    }
  });

  function clearPreviousClick() {

    if ($('#contactDetail').hasClass('show')) {
      $('#contactDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    }
    if ($('#profilDetail').hasClass('show')) {
      $('#profilDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    }
    if ($('#skillDetail').hasClass('show')) {
      $('#skillDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    }
    if ($('#socialDetail').hasClass('show')) {
      $('#socialDetail').removeClass('show');
      $('.content').css('margin-top', sidePanelHeight);
    }
  };



});
