$(window).load(function () {
  $(".trigger_popup").click(function() {
    $(".line6_data").hide();
    $(".line5_data").hide();
    $(".line4_data").hide();
    $(".line3_data").hide();
    $(".line2_data").hide();
  });
  $(".trigger_popup2").click(function() {
    $(".line6_data").hide();
    $(".line5_data").hide();
    $(".line4_data").hide();
    $(".line3_data").hide();
    $(".line2_data").show();
  });
  $(".trigger_popup3").click(function() {
    $(".line6_data").hide();
    $(".line5_data").hide();
    $(".line4_data").hide();
    $(".line3_data").show();
    $(".line2_data").hide();
  });
  $(".trigger_popup4").click(function() {
    $(".line6_data").hide();
    $(".line5_data").hide();
    $(".line4_data").show();
    $(".line3_data").hide();
    $(".line2_data").hide();
  });
  $(".trigger_popup5").click(function() {
    $(".line6_data").hide();
    $(".line5_data").show();
    $(".line4_data").hide();
    $(".line3_data").hide();
    $(".line2_data").hide();
  });
  $(".trigger_popup6").click(function() {
    $(".line6_data").show();
    $(".line5_data").hide();
    $(".line4_data").hide();
    $(".line3_data").hide();
    $(".line2_data").hide();
  });
});