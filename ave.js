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


let newAgentCode = (
    <p>1 - Create Office365 Mail User account, give them multiple aliases,
    put them in the correct groups -
    Give them mail contact profiles in AVE O365</p>
)

let agentTermCode = (
    <div>
        <p>Agent Terminations:</p>
        <p>Property minder unlink and delete account</p>
        <p>circlepix select user and deactivate account</p>
        <p>homes connect remove agent seat and delete account</p>
        <p>active directory Remove account in admin.troopsolutions.com</p>
        <p>skyslope deactivate user in profile</p>
    </div>
)

class LoggingButton extends React.Component {
    newAgent() {
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentTermCode, document.getElementById('app'));
    }

    render() {
        return [
            <div>
            <a class="textDec linkButtons" href="javascript:void(0);" key="one" onClick={(e) => this.newAgent(e)}>1 - New Agent</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="two" onClick={(e) => this.agentTerm(e)}>2 - Agent Termination</a>
            </div>
        ];
    }
}

  ReactDOM.render(<LoggingButton />, document.getElementById('butOne'));

