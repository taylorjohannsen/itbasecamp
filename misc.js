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
    makeFile() {
        const makeFileCode = (
            <div>
                <p class="introHead">Creating a Flash Drive for Scanning: </p>
                <p>1 - Check 201X Log sheet saved to desktop for relevant listing to see which need to be made.</p>
                <p>2 - Open Skyslope, and access archives. Search by street number (confirmed closed date here if multiple entrys).</p>
                <p>3 - Click checklist documents under download and it will save the file to downloads folder.</p>
                <p>4 - Double click listing name to select listing. Click checklist at the top of the page.</p>
                <p>5 - Open Label Template from desktop on Scan PC., use the Skyslope file to fill in the template. Label should be filled out as follows:</p>
                <div>FIRST NAME LAST NAME</div>
                <div>MAIL DISC TO ADDRESS</div>
                <div>CITY, STATE ZIP</div>
                <p>6 - Get skyslope file from downloads folder then right click and extract all.</p>
                <p>7 - Delete files based on the buyer/ seller checklist located under Scanners's desk.</p>
                <p>8 - Note that an agent can represent both sides of a deal and the file may be combined buyer and seller in which case
                two disks will need to be made and logged separately on the log sheet.</p>
                <p>9 - Highlight all remaining files in the folder and right click and select combine in acrobrat.</p>
                <p>10 - Saved the combined file as StreetName Buyer/ Seller in Skyslope folder</p>
                <p>11 - Insert flash drive and open the skyslope folder. Save the newly made file to the flash drive and then eject when complete</p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(makeFileCode, document.getElementById('app'));
    }

    render() {
        return [
            <div class="dFlex">
            <a class="textDec linkButtons" href="javascript:void(0);" key="one" onClick={(e) => this.newAgent(e)}>1 - Adding Everest Mail to a iPhone</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="two" onClick={(e) => this.agentTerm(e)}>2 - Adding Everest Mail to an Android</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="three" onClick={(e) => this.scanFile(e)}>3 - Finding a file on the Scan PC for AVE</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="four" onClick={(e) => this.makeFile(e)}>4 - Create a Flash Drive for Scanning</a>
            </div>
        ];
    }
}

ReactDOM.render(<LoggingButton />, document.getElementById('butOne'));

