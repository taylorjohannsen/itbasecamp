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
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        const agentTermCode = (
            <div>
                <p class="introHead">Adding O365 Mail to an Android: </p>
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

