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






class LoggingButton extends React.Component {
    newAgent() {
        const newAgentCode = (
            <div>
                <p class="introHead">Find a 21Online Username: </p>
                <p>1 - First you will login to 21Online.com using our admin account. Once in you want to select "dash" from the Tool Library. Here is where you will make most changes to Agent profile information and listings. Once in you want to select "People" on the left side, type in their name in the search bar and click on their name once found. Scroll down to Brand Login ID, this is the agent's login email for 21Online.</p>
            </div>    
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        const agentTermCode = (
            <div>
                <p class="introHead">Terminating in Zap and LeadRouter: </p>
                <p>1 - Zap - Zap is rather easy to terminate. Login to Zap through the portal on 21Online under Tool Library. At the top bar, select "Personell", then type in the Agent's name. Click on their name once found and slide the green slider that "Displays on Website" to off.</p>
                <p>2 - LeadRouter - Getting here is the pretty much the same as Zap. Login in to 21Online, select LeadRouter in the Tool Library and you will be re-directed. Hover over "LeadRouter Settings" in the navigation bar, and select "Users." Search for the Agent's name, and select Edit. The edit information box will pop up, on the left side under "Status and Flags" uncheck all boxes. A Termination information box will pop up, add the reason (terminated), date, and initials to the box. Hit save in the bottom right. </p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentTermCode, document.getElementById('app'));
    }

    render() {
        return [
            <div class="dFlex">
            <a class="textDec linkButtons" href="javascript:void(0);" key="one" onClick={(e) => this.newAgent(e)}>1 - Finding a 21Online Username</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="two" onClick={(e) => this.agentTerm(e)}>2 - Terminating in Zap and LeadRouter</a>
            </div>
        ];
    }
}

  ReactDOM.render(<LoggingButton />, document.getElementById('butOne'));

