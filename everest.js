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
                <p>8 - Email Confirmation - Once the agent is completely setup in our systems, you will email a certain template (ask co-worker for template) to Corporate, the OA of the branch, the Manager of the branch, and the help desk a comfirmation of the agent's setup completion. After, you will send one more email template that contains the users credentials and some "Get Started Here" links to the user's external email.</p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        const agentTermCode = (
            <div>
                <p class="introHead">Agent Termination Checklist: </p>
                <p>1 - Office 365 - Log into your admin Office 365 account. From there go
                    to the admin tab and click "Edit a User". Select the user that you wish to
                    terminate and click delete user. If they have a mailbox on their account we
                    may want to keep their mail around for awhile and if that is the case you can
                    go to sign in status and block their sign in. Alternatively you can also expand the
                    Admin Centers area on the left and click "Exchange". Within Exchange you can either
                    go to mailboxes or contacts depending on the type of mailbox the user has. If they 
                    have a mailbox then you will want to use the previous method to terminate them
                    but if they have a Mail User account or are a contact then you can delete them
                    quickly within the contacts section.</p>
                <p>2 - Property Minder - To delete an agent within property minder go to the main
                    company website, c21everest.com, and scroll to the bottom of the page. Click agent
                    log in and log in on the admin account. Then click on the agent roster buttom.
                    From there, select "List of Agents" and search for the agent that will be terminated. 
                    Once you have the agent you first click "Unlink" from their name and then after
                    searching for the agent again you will have the option to delete them.</p>
                <p>3 - Homes Connect - Homesconnect changes their format frequently but at the
                    moment you may delete an agent by first visiting their main site and selecting
                    the log in as a real estate professional option. Select the branch that your agent is within. Ater
                    selecting the branch a new tab will open with the branch info. Click the drop down
                    menu on the rop right and select office settings. Then click manage agents on the
                    left. Find you agent and check their profile box and then ou can select an action.
                    Firstyou want to select "remove seat" and after that yuo can delete the agent. 
                    If you dont want to use the checkbox you can also select the gear icon and remove 
                    seats + agent there. </p>
                <p>4 - Active Directory - This area controls Everest forms and Cole directory. Log
                    into your profile in our password admin and enter the agents username. You 
                    may eneter anything you wish in the passowrd area butthe username must be correct.
                    Click the remove button and the agent will be taken out. </p>
                <p>5 - Password sheet - Now would be a good time to update our password sheet on
                    the shared drive. Mark the agent as Term and put a termination date with their
                    info tab. Be sure to move the agent cell over to the term tab. </p>
                <p>6 - Skyslope - If the agent has made a deal in the past then they will have a 
                    skyslope account. Log into the admin skyslope account and click your profile name
                    in the top right and select manage. You can search and agent name under manage
                    agents. Side note; make sure you allow the page to populate all of the agents
                    before you try to search for the agent. Once you find your agent, select their
                    account and then click the slide bar to deactivate the user. Make sure you click
                    save after deactivating.</p>
                <p>7 - Leadrouter - Log into leadrouter.com and select manage agents A-Z. Be sure
                    that you have active and inactive agents selected before you seach for your agent. 
                    Select their account and go to "View and Edit Agent's information". Then click on 
                    Edit Agent's Status. On the top left there is multiple check boxes. Make sure all
                    are unchecked and then type a termination reason within their text box. The 
                    termination reason can be as simple as the word terminated. Make sure hit 
                    save on the bottom right to save status. </p>
                <p>8 - Zap - Log in to new.myzap.com. In the search bar select the drop down for
                    personell. You may now search for your agent. Select the agent's account and under
                    the basic info tab there is a slider for the website display option. Make sure it 
                    is slid to not not display the agent and then refresh the page.</p>
                <p>9 - PBX - Log into the PBX site relevant to the agent's office. Seach for the
                    agent's extension within the list of extensions. Change the name of the extension 
                    to Availble + DID or Efax if they have one assigned. You may wants to have another
                    tech walk you through the PBX process since it can be confusing the first time
                    seeing it. Make sure you reset the password on the voicemail to the default and remove any 
                    attached emails. Near the bottom of the page remove any misc destinations and set 
                    back to default settings such as: 
                    No Answer = Unavail Voicemail
                    Busy = Line 2
                    Not Reachable = Unavail Voicemail
                    Be sure to submit and apply config. 
                    Some older extensions may have unconditional forwarding applied. Click the user
                    panel near the top and log in using the phones extension and the default password you set. 
                    go down to phone features an make sure there is no number within the forwarding section. 
                    Save and log out of the user panel. 
                    Now under setting click on Voicemail admin. 
                    Select the Extension that you just cleared and go to the usage tab. Check every box in 
                    usage and delete to clear all voicemails and personal settings for the extension. 
                    Very important that you have only the extension selected and not the whole branch or 
                    you may delete and entire branch's setting s for voicemail. </p>
                <p>10 - Fine Estates - Log into fine estates and check the agent roster for your 
                    agent. If they are present then repeat the same steps for removing and agent from
                    the property minder site. </p>
                <p>11 - Real Satisfied - Log into c21online and select realsatisfied from the tool
                    library. Search for you agent under manage and see which branch they are in. Then
                    go to the specific branch where the agent was located and select the admin tab. Click
                    on the team Members tab and search for your agent. Select your agent's profile and
                    then click on deactivate above their photo. </p>
                <p>12 - BOMBBOMB - Log into bombbomb and go to the contacts area. Search for your agent 
                    and then delete them from your contact list. </p>
                <p>13 - AVE Contact - Log into the AVE installer account and remove the agent from the
                    contact list. Click the admin tab and go to exchange. Find the agent in the contact list 
                    an delete them there.</p>
                <p>14 - Email Confirmation - Once the agent is completely terminated in our systems, you will
                    email a certain template (ask co-worker for template) to Corporate, the OA of the branch, the Manager of the branch, and the help desk a comfirmation of the agent's termination completion.</p>
            </div>
        )        
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentTermCode, document.getElementById('app'));
    }
    printerInstall() {
        const printerInstallCode = (
            <div>
                <p class="introHead">Branch Printer Installations: </p>
                <p>1 - HPLJ 600 - This is the default printer in the Everest branches. You can find the easy install by hitting the Printer Server for the branch (You can ask a coworker for the server names). Once on the server, just double-click the shared Black and White Printers.</p>
                <p>2 - Konica Minolta - These are our color copiers, the drivers are usually found on the server, under a shared folder called either "Printer Drivers" or "Copier Drivers." Once found, you can run the Setup64.exe to install the color printer. Once done, navigate to the printer and right click to find "Printer Preferences", here you will select 1 sided printing, then under the "Basic Tab", you will select "Account Track", and input their 4 Digit printing code, which you can get from the OA.</p>
            </div>
        )    
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(printerInstallCode, document.getElementById('app'));
    }
    agentStatus() {
        const agentStatusCode = (
            <div>
                <p class="introHead">Agent Status Change: </p>
                <p>The Agent Status change is very similar to setting up and termination an agent based on if the agent is changing to Full Time from Referral and vice versa, with some slight changes. Below we will start with Referral to Full Time.</p>
                <p>Click the link below to jump to Full Time to Referral.</p>
                <a class="textDec" href="#fullTime">Full Time to Referral</a>
                <br></br>
                <p class="introHead">Referral to Full Time:</p>
                <p>1 - Office365 - Your first step is to unblock the users sign in and Re-add them to the appropriate groups. </p>
                <p>2 - PropertyMinder (c21everest.com) - Your next step is going to headover to the PropertyMinder website. After signing in, select "Agent Roster", then "Add Agent." From here you will fill in the First, Last, Branch, title (usually Agent), Cellphone, Email, Zips of Operation (you can find this on another agents profile in the same branch), and finally their litesite (format: http://FirstNameLastName.c21erg.com). Hit save. Once saved, check their litesite to see if it works, then search for the agent's name on the Agent Roster and hit "Link to Intranet."</p>
                <p>3 - Circlepix - Head into Circlepix and select "Add New Agent" on the sidebar. Here you will fill out Username (@c21everest.com email), Password, First, Last, Email, Office, Cell, and Website (litesite). Done here, quite simple.</p>
                <p>4 - HomesConnect - Next, Log into Homes.com and select the office down below. Click on the Agent Roster and then Manage Agents, once there, click on "Add New." Here you will fill out First, Last, Email, and Phone, hit "Continue". Use the prefilled office information, hit "Continue." On the last page, make sure the first and third slider are set to "Yes.", hit Complete.</p>
                <p>5 - Active Directory - Using your company credentials, login to our Password creator for Everest Forms. Input the credentials and hit Add, check after with Verify to confirm. Once confirmed, change the user's status from REF to FT on our PW sheet.</p>
                <p>6 - BombBomb - Log in to BombBomb.com with the credentials provided. Click on "Contacts", then on "Add People." Here you will navigate to the Add Individual tab, input their information, then add them to the correct list (California or Utah).</p>
                <p>7 - PBX - Sign in to the correct PBX Server based on Branch location. Find an empty extension, add their name to it. From here you will add their cellphone under "Misc. Destinations", go back to their ext. and set all call fowarding to their specific "Misc. Destination." Make sure their voicemail password is the default. Add their email to the fax slot, and under the VM password slot. Sign into their User Panel and check for any old voicemails, if so, delete. Also check for any call fowarding, if so, delete.</p>
                <p>8 - Email Confirmation - Once the agent is completely re-setup in our systems, you will email a certain template (ask co-worker for template) to Corporate, the OA of the branch, the Manager of the branch, and the help desk a comfirmation of the agent's re-setup completion. After, you will send one more email template that contains the users credentials and some "Get Started Here" links to the user's external email.</p>
                <p id="fullTime"></p>
                <br></br>
                <p class="introHead">Full Time to Referral:</p>
                <p>1 - Office 365 - Log into your admin Office 365 account. From there go
                    to the admin tab and click "Edit a User". Select the user that you wish to
                    edit and remove all goups except "All Users - MGMT Use Only". If they have a mailbox on their account we
                    may want to keep their mail around for awhile and if that is the case you can
                    go to sign in status and block their sign in. Alternatively you can also expand the
                    Admin Centers area on the left and click "Exchange". Within Exchange you can either
                    go to mailboxes or contacts depending on the type of mailbox the user has. If they 
                    have a mailbox then you will want to use the previous method to terminate them
                    but if they have a Mail User account or are a contact then you can delete them
                    quickly within the contacts section.</p>
                <p>2 - Property Minder - To delete an agent within property minder go to the main
                    company website, c21everest.com, and scroll to the bottom of the page. Click agent
                    log in and log in on the admin account. Then click on the agent roster buttom.
                    From there, select "List of Agents" and search for the agent that will be terminated. 
                    Once you have the agent you first click "Unlink" from their name and then after
                    searching for the agent again you will have the option to delete them.</p>
                <p>3 - Homes Connect - Homesconnect changes their format frequently but at the
                    moment you may delete an agent by first visiting their main site and selecting
                    the log in as a real estate professional option. Select the branch that your agent is within. Ater
                    selecting the branch a new tab will open with the branch info. Click the drop down
                    menu on the rop right and select office settings. Then click manage agents on the
                    left. Find you agent and check their profile box and then ou can select an action.
                    Firstyou want to select "remove seat" and after that yuo can delete the agent. 
                    If you dont want to use the checkbox you can also select the gear icon and remove 
                    seats + agent there. </p>
                <p>4 - Active Directory - This area controls Everest forms and Cole directory. Log
                    into your profile in our password admin and enter the agents username. You 
                    may eneter anything you wish in the passowrd area butthe username must be correct.
                    Click the remove button and the agent will be taken out. </p>
                <p>5 - Password sheet - Now would be a good time to update our password sheet on
                    the shared drive. Mark the agent as REF on the PW sheet. </p>
                <p>6 - Skyslope - If the agent has made a deal in the past then they will have a 
                    skyslope account. Log into the admin skyslope account and click your profile name
                    in the top right and select manage. You can search and agent name under manage
                    agents. Side note; make sure you allow the page to populate all of the agents
                    before you try to search for the agent. Once you find your agent, select their
                    account and then click the slide bar to deactivate the user. Make sure you click
                    save after deactivating.</p>
                <p>7 - Leadrouter - Log into leadrouter.com and select manage agents A-Z. Be sure
                    that you have active and inactive agents selected before you seach for your agent. 
                    Select their account and go to "View and Edit Agent's information". Then click on 
                    Edit Agent's Status. On the top left there is multiple check boxes. Make sure all
                    are unchecked and then type a termination reason within their text box. The 
                    termination reason can be as simple as the word terminated. Make sure hit 
                    save on the bottom right to save status. </p>
                <p>8 - Zap - Log in to new.myzap.com. In the search bar select the drop down for
                    personell. You may now search for your agent. Select the agent's account and under
                    the basic info tab there is a slider for the website display option. Make sure it 
                    is slid to not not display the agent and then refresh the page.</p>
                <p>9 - PBX - Log into the PBX site relevant to the agent's office. Seach for the
                    agent's extension within the list of extensions. Change the name of the extension 
                    to Availble + DID or Efax if they have one assigned. You may wants to have another
                    tech walk you through the PBX process since it can be confusing the first time
                    seeing it. Make sure you reset the password on the voicemail to the default and remove any 
                    attached emails. Near the bottom of the page remove any misc destinations and set 
                    back to default settings such as: 
                    No Answer = Unavail Voicemail
                    Busy = Line 2
                    Not Reachable = Unavail Voicemail
                    Be sure to submit and apply config. 
                    Some older extensions may have unconditional forwarding applied. Click the user
                    panel near the top and log in using the phones extension and the default password you set. 
                    go down to phone features an make sure there is no number within the forwarding section. 
                    Save and log out of the user panel. 
                    Now under setting click on Voicemail admin. 
                    Select the Extension that you just cleared and go to the usage tab. Check every box in 
                    usage and delete to clear all voicemails and personal settings for the extension. 
                    Very important that you have only the extension selected and not the whole branch or 
                    you may delete and entire branch's setting s for voicemail. </p>
                <p>10 - Fine Estates - Log into fine estates and check the agent roster for your 
                    agent. If they are present then repeat the same steps for removing and agent from
                    the property minder site. </p>
                <p>11 - Real Satisfied - Log into c21online and select realsatisfied from the tool
                    library. Search for you agent under manage and see which branch they are in. Then
                    go to the specific branch where the agent was located and select the admin tab. Click
                    on the team Members tab and search for your agent. Select your agent's profile and
                    then click on deactivate above their photo. </p>
                <p>12 - BOMBBOMB - Log into bombbomb and go to the contacts area. Search for your agent 
                    and then delete them from your contact list. </p>
                <p>13 - AVE Contact - Log into the AVE installer account and remove the agent from the
                    contact list. Click the admin tab and go to exchange. Find the agent in the contact list 
                    an delete them there.</p>
                <p>14 - Email Confirmation - Once the agent is completely set to referral in our systems,
                    you will email a certain template (ask co-worker for template) to Corporate, the OA of the branch, the Manager of the branch, and the help desk a comfirmation of the agent's status change completion.</p>
            </div>
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

