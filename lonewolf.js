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
                <p class="introHead">Pushing a Listing through BrokerWolf: </p>
            </div>
        )        
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        const agentTermCode = (
            <div>
                <p class="introHead">Updating an Everest Agent in BrokerWolf: </p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentTermCode, document.getElementById('app'));
    }
    wcReport() {
        const wcReportCode = (
            <div>
                <p class="introHead">Running a WolfConnect MLSID Report and Adding them: </p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(wcReportCode, document.getElementById('app'));
    }
    opAdd() {
        const opAddCode = (
            <div>
                <p class="introHead">Adding an Open House in BrokerWolf: </p>
            </div>
        )        
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(opAddCode, document.getElementById('app'));
    }

    render() {
        return [
            <div class="dFlex">
            <a class="textDec linkButtons" href="javascript:void(0);" key="one" onClick={(e) => this.newAgent(e)}>1 - Pushing Listings in BW</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="two" onClick={(e) => this.agentTerm(e)}>2 - Updating an Everest Agent</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="three" onClick={(e) => this.wcReport(e)}>3 - WolfConnect MLSID Report and ID Addition</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="four" onClick={(e) => this.opAdd(e)}>4 - Open House Addition</a>
            </div>
        ]; 
    }
}

  ReactDOM.render(<LoggingButton />, document.getElementById('butOne'));

