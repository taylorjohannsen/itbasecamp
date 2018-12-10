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
                <p class="introHead">Adding O365 Mail to an iPhone: </p>
                <p>1 - Open the settings app</p>
                <p>2 - Tap Accounts and Passwords</p>
                <p>3 - Tap Add Account</p>
                <p>4 - Tap Exchange</p>
                <p>5 - Input the Agent's email and description (example: Work)</p>
                <p>6 - Hit next, input password and hit login</p>
                <p>7 - Select what you want to sync (Mail, Calendar, Contacts)</p>
                <p>8 - Tap save, check if mail is coming in on Mail App</p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        const agentTermCode = (
            <div>
                <p class="introHead">Adding O365 Mail to an Android: </p>
                <p>1 - On your device, go to Menu > Settings.</p>
                <p>2 - At the bottom of the Settings screen, tap Accounts and sync.</p>
                <p>3 - At the bottom of the Accounts and sync screen, tap Add account. </p>
                <p>4 - On the Add account screen, tap Microsoft Exchange ActiveSync.</p>
                <p>5 - On the setup screens, enter the information for our Exchange server. Tap Next to move to the next screen. </p>
                <p>6 - Set Email Checking Frequency to Push (Automatic)</p>
            </div>
        )        
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentTermCode, document.getElementById('app'));
    }
    scanFile() {
        const scanFileCode = (
            <div>
                <p class="introHead">Sending a Scan File to AVE: </p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(scanFileCode, document.getElementById('app'));
    }

    render() {
        return [
            <div class="dFlex">
            <a class="textDec linkButtons" href="javascript:void(0);" key="one" onClick={(e) => this.newAgent(e)}>1 - Adding Everest Mail to a iPhone</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="two" onClick={(e) => this.agentTerm(e)}>2 - Adding Everest Mail to an Android</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="two" onClick={(e) => this.scanFile(e)}>3 - Finding a file on the Scan PC for AVE</a>
            </div>
        ];
    }
}

ReactDOM.render(<LoggingButton />, document.getElementById('butOne'));

