function searchUser(a){
    if (a.value.length > 0){
        $("#search-output").fadeIn();
    }else {
        $("#search-output").fadeOut();
    }
}

$("#adduser").click(function() {
    $("#add-user" ).toggle(  function() {
       
      },function() {
       
      });
  });

  $(document).ready(function(){
    $("#search").on("keyup", function() {
        
      var value = $(this).val().toLowerCase();
      
      $("#orders .order").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    $("#date").attr("value", today);
  });

  $(".item").click(function(){
    $(this).toggleClass("active");
      $(this).find('.description-show').slideToggle();
  })

 
  $(function() {
    $(".saleContainer a").each(function(idx) {
        var $this = $(this);
        var selectElm = $("select", $this.parent());
        

        $this.click(function() {
            $("a", $this.parent()).removeClass('active');
            $this.addClass('active');
            $('option', selectElm).eq(idx + 1).prop('selected', true);
        });
    });
    $(".clothesContainer a").each(function(idx) {
        var $this = $(this);
        var selectElm = $("select", $this.parent());
        

        $this.click(function() {
            $("a", $this.parent()).removeClass('active');
            $this.addClass('active');
            $('option', selectElm).eq(idx + 1).prop('selected', true);
        });
    });
});
