$(document).ready(function() {

  $('form#lists').submit(function(event) {
    // var lists = [];

    var list = {
      name1: null,
      tasks: []
    };

    event.preventDefault();
    var list_name = $("input#new_list").val();
    var new_list = Object.create(list);
    new_list.name1 = list_name;
    console.log(new_list.name1);
    // lists.push(new_list);
    $("ul#list_of_lists").append("<li><span class='name_of_list'>" + new_list.name1 + "</span></li>");
    $("input#new_list").val("");

    $(".name_of_list").last().click(function() {
      $('.tasks_form').show();
      $("ul#list_of_task").empty();
      $("form#tasks").off('submit');
      $(".current_task").text(new_list.name1);
      var curr = $(".name_of_list").val();
      list.tasks.forEach(function(task) {
        $("ul#list_of_tasks").append("<li>" + task + "</li>");
      });


      $('form#tasks').submit(function(event) {
        event.preventDefault();
        var task = $("input#new_task").val();
        list.tasks.push(task);
        $("input#new_task").val("");
        $("ul#list_of_tasks").append("<li><span class='name_of_task'>" + task + "</span></li>");
        console.log(new_list.tasks);
      });
    });
  });




});
