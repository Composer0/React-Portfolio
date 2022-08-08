$(document).ready(function() {
    $("h1").css("color",  "red");
})
// if script is in the head then this is used. Wait for Onload feature essentially.  Otherwise teh $("h1).css("color", "red"); can be immediately summoned.

// $("h1");
// // replaces document.queryselector("h1")
// $("button")
// // no difference between selecting one or all.


// // $("h1").css("font-size")  a single property retrieves value. Two properties is setting the value.

// $("h1").addClass("big-title margin-50");
// // $("h1").removeClass("big-title margin-50");

// // Changing text
// $("h1").text("Goodbye")

// $("button").text("Goodbye")
// // .html will take size and tags into account.

// // manipulate attributes.
// $("img").attr("src");
// // retrieve value = one item
// // set value = two items
// $("a").attr("href", "https://www.yahoo.com")
// // class is also an html attribute.

// adding event listeners
// $("h1").click(function() {
//     $("h1").css("color", "purple")
// });
// $("button").click(function() {
//     $("h1").css("color", "purple")
// })
// for loop unnecessary because jquery is selecting all buttons.

// detect keystrokes
// $(document).keypress(function(event) {
//     console.log(event.key)
// })

$(document).keypress(function(event) {
    $("h1").text(event.key)
})
    // resets text of h1. Does not need innerText.

// more flexible way of adding an event listener.
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple")
})

// adding and removing elements
$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")
// before adds element before opening tag. After vice versa
// prepend will add element just before the content of the h1 but still inside the element. Append is vice versa.

// $("button").on("click", function() {
//     $("h1").hide();
// })
// $("button").on("click", function() {
//     $("h1").show();
// })
// $("button").on("click", function() {
//     $("h1").toggle();
// })
// $("button").on("click", function() {
//     $("h1").fadeOut();
// })
// $("button").on("click", function() {
//     $("h1").fadeIn();
// })
// $("button").on("click", function() {
//     $("h1").fadeToggle();
// })
// $("button").on("click", function() {
//     $("h1").slideUp();
// })
// $("button").on("click", function() {
//     $("h1").slideDown();
// })
// $("button").on("click", function() {
//     $("h1").slideToggle();
// })
// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// })
// animate method requires you to use numeric values.

// chain animations
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
