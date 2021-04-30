// console.log("This is working");

let skills = ["Developer", "Coder", "Learner", "Teacher"];

$(function(){

    let i = 0, j = 0, len = skills.length;
    let skill = "";
    let inc = true;

    setInterval(() => {
        if (inc) skill += skills[i][j];
        else skill = skills[i].substring(0, j);

        let skill_len = skills[i].length;
        $('#home h3').html(`I am a ${skill}`);
        
        if (inc) j++;
        else j--;

        if (j >= skill_len)
        {
            inc = false;
        }
        else if (j < 0)
        {
            inc = true;
            j = 0;
            i++;
        }

        if (i >= len)
        {
            i = 0;
        }

    }, 300);

    // console.log("This here is also working after the time interval part");
    


})

let before = document.querySelectorAll('.filler .before');

before.forEach((element) => {
    console.log(element.getAttribute('data-per'));
    element.style.width = element.getAttribute('data-per');
    // element.animate({
    //     width : `${element.getAttribute('data-per')}`
    // }, 5000)
}) 


// $(window).resize(function(){
//     var size = $(this).width();
//     if (size >= 1000)
//     {
//         $('nav ul').show();
//     }
// })

// $()