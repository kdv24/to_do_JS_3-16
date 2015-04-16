var lists = [];

var list = {
  name1: null,
  tasks: []
};

$(document).ready(function() {
  $('form#lists').submit(function(event) {
    event.preventDefault();
    var list_name = $("input#new_list").val();
    var new_list = Object.create(list);
    new_list.name1 = list_name;
    console.log(new_list.name1);
    lists.push(new_list);
    $("ul#list_of_lists").append("<li><span class='name_of_list'>" + new_list.name1 + "</span></li>");
  });
});
