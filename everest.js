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
                <p class="introHead">New Agent Setup: </p>
                <p>1 - Office365 - Your first step is to create a Office365 mail user account, and a unique password (ask a co-worker for PW format). Their alias follows the format of first inital, last name. Give them a couple of different aliases. Put them in the correct groups according to their branch location. Once done in the Everest O365 account, head into the AVE O365 account, and create the same mail account, but as a mail contact this time.</p>
                <p>2 - PropertyMinder (c21everest.com) - Your next step is going to headover to the PropertyMinder website. After signing in, select "Agent Roster", then "Add Agent." From here you will fill in the First, Last, Branch, title (usually Agent), Cellphone, Email, Zips of Operation (you can find this on another agents profile in the same branch), and finally their litesite (format: http://FirstNameLastName.c21erg.com). Hit save. Once saved, check their litesite to see if it works, then search for the agent's name on the Agent Roster and hit "Link to Intranet."</p>
                <p>3 - Circlepix - Head into Circlepix and select "Add New Agent" on the sidebar. Here you will fill out Username (@c21everest.com email), Password, First, Last, Email, Office, Cell, and Website (litesite). Done here, quite simple.</p>
                <p>4 - HomesConnect - Next, Log into Homes.com and select the office down below. Click on the Agent Roster and then Manage Agents, once there, click on "Add New." Here you will fill out First, Last, Email, and Phone, hit "Continue". Use the prefilled office information, hit "Continue." On the last page, make sure the first and third slider are set to "Yes.", hit Complete.</p>
                <p>5 - Active Directory - Using your company credentials, login to our Password creator for Everest Forms. Input the credentials and hit Add, check after with Verify to confirm. Once confirmed, add the new user's credentials into our PW List on our File Sharing server.</p>
                <p>6 - BombBomb - Log in to BombBomb.com with the credentials provided. Click on "Contacts", then on "Add People." Here you will navigate to the Add Individual tab, input their information, then add them to the correct list (California or Utah).</p>
                <p>7 - PBX - Sign in to the correct PBX Server based on Branch location. Find an empty extension, add their name to it. From here you will add their cellphone under "Misc. Destinations", go back to their ext. and set all call fowarding to their specific "Misc. Destination." Make sure their voicemail password is the default. Add their email to the fax slot, and under the VM password slot. Sign into their User Panel and check for any old voicemails, if so, delete. Also check for any call fowarding, if so, delete.</p>
                <p>8 - Email Comfirmation - Once the agent is completely setup in our systems, you will email a certain template (ask co-worker for template) to Corporate, the OA of the branch, the Manager of the branch, and the help desk a comfirmation of the agent's setup completion. After, you will send one more email template that contains the users credentials and some "Get Started Here" links to the user's external email.</p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        const agentTermCode = (
            <div>
                <h1>Agent Terminations:</h1>
                <p>Property minder unlink and delete account</p>
                <p>circlepix select user and deactivate account</p>
                <p>homes connect remove agent seat and delete account</p>
                <p>active directory Remove account in admin.troopsolutions.com</p>
                <p>skyslope deactivate user in profile</p>
            </div>
        )        
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentTermCode, document.getElementById('app'));
    }
    printerInstall() {
        const printerInstallCode = (
            <p>//trp-simi click the printer</p>
        )    
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(printerInstallCode, document.getElementById('app'));
    }
    agentStatus() {
        const agentStatusCode = (
            <p>same as term but keep groups lul</p>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentStatusCode, document.getElementById('app'));
    }
    

    render() {
        return [
            <div class="dFlex">
            <a class="textDec linkButtons" href="javascript:void(0);" key="one" onClick={(e) => this.newAgent(e)}>1 - New Agent</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="two" onClick={(e) => this.agentTerm(e)}>2 - Agent Termination</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="three" onClick={(e) => this.agentStatus(e)}>3 - Agent Status Change</a>
            <a class="textDec linkButtons" href="javascript:void(0);" key="four" onClick={(e) => this.printerInstall(e)}>4 - Branch Printer Installation</a>
            </div>
        ];
    }
}

ReactDOM.render(<LoggingButton />, document.getElementById('butOne'));

