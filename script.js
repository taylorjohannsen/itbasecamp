// Function to add scrolling sticky navbar
$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('.topBar').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('.topBar').addClass('sticky');
        } else {
            $('.topBar').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

let fillArray = ['<div>Steps for setting up a New Agent:</div><br><ol><li>Create Office365 Mail User account, give them multiple aliases, put them in the correct groups - Give them mail contact profiles in AVE O365</li><br><li>Create profile in PropertyMinder so they display on c21everest.com,set up lightsite</li><br><li>Create CirclePix account, just inputting information and credentials</li><br><li>Add agent information into Homes Connect template, add agent in Homes Connect by importing through the "manage agents" tab</li><br><li>Add agent to Password List, input credentials into our password checker, test getting into Everest Forms</li><br><li>Add contact information into Bomb Bomb, add them to correct  group</li><br><li>Assign agent an ext., fowarded all calls through misc destinationn unless told differently by OA or Manager, add to Directory</li><br><li>Email manager, OA, and Corporate checklist confirming Agent setup</li><br><li>Email new Agent credentials, and some common links (Ask other techs for template)</li></ol>', '<div>Agent Terminations:</div><br>Office deactivated/ license removed in office 365<br>Property minder unlink and delete account<br>circlepix select user and deactivate account<br>homes connect remove agent seat and delete account<br>skyslope deactivate user in profile<br>leadrouter unchecked as active/ trained be sure to set reason or it wont save<br>zap go to personell and click slider for website display to remove<br>pbx Change name on ext to available + Efax if applicable. Clear voicemails in vm admin<br>check fine estates and remove agent if they are listed on the site<br>BOMB BOMB account removed from contacts<br>Remove agent from contact list in AVE Office 365'];

//Function to add text to "mainText" for Everest
function fillEverest(x) {
    document.getElementById('mainText').innerHTML = fillArray[x];
};


