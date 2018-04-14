$("#add").click(function(){
  let task = document.querySelector("#new-task").value
  $(".tasks").prepend('<div class="task"><div class="task-content pending">'+ task +'</div><button class="delete" type="button" name="button">X</button></div>')
  document.querySelector("#new-task").value = ""
  $(".delete").click(function(){
    console.log($(this).parent())
    $(this).parent().remove();
  })

  $(".task-content").dblclick(function(){
    if ($(this).css("text-decoration-line") === "line-through") {
      $(this).css("text-decoration", "none").addClass("pending")
    }
    else{
      $(this).css("text-decoration", "line-through").removeClass("pending")
    }
  })
})

$('#all').change(function(){
  $('.pending').parent().show()
  $('[style*="line-through"]').parent().show()
})

$("#pending").change(function(){
  $('.pending').parent().show()
  $('[style*="line-through"]').parent().hide()
})

$("#done").change(function(){
  $('[style*="line-through"]').parent().show()
  $('.pending').parent().hide()
})
