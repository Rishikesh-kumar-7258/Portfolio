console.log("This is working");

let skills = ["Developer", "Coder", "Learner", "Teacher"];

$(function(){

    let i = 0, j = 0, len = skills.length;
    let skill = "";
    
    setInterval(() => {
        skill += skills[i][j];
        let skill_len = skills[i].length;
        $('#home h3').html(`I am a ${skill}`);
        j++;

        if (j >= skill_len)
        {
            j = 0;
            i++;
            skill = "";
        }

        if (i >= len)
        {
            i = 0;
        }

    }, 300);

    console.log("This here is also working after the time interval part");

    $('nav .hamster').click(function(){
        $('nav ul').slideToggle();
    })
})

$(window).resize(function(){
    var size = $(this).width();
    if (size >= 1000)
    {
        $('nav ul').show();
    }
})