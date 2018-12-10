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
                <p>1 - On the left side there should be a option called "Edit Property Listing", this will take you to a list of all the currently active Everest listings. If a certain listing is having photo update issues, you can search it in the top left. You must only search by the street name, not the full address, or it won't come up. Once found, double click on it to open the full listing information. At the bottom right you want to hit update, then wait for it to finish. Then select "Picture" at the top right and select the "Resend all to Crest" checkbox and hit exit. You're going to want to hite "Store" to store the data, sometimes you have to do it twice as you will get an error the first time.</p>
                <p>2 - Once that is finished and the pictures are stored, you want to use the drop down at the top to navigate from Main Menu > Transaction Records > Monthly Franchise Rpts > Crest Integration. Make sure the "listing and transaction information" box is check and then hit "Send selected entitiy information to Crest...". Let it cycle through, and Dash should be updated soon.</p>
            </div>
        )        
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(newAgentCode, document.getElementById('app'));
    }
    agentTerm() {
        const agentTermCode = (
            <div>
                <p class="introHead">Updating an Everest Agent in BrokerWolf: </p>
                <p>1 - Navigate to the bottom left and select "Information Setup", then at the top left select Agents / Staff > Edit Agents / Staff. This will take you to all Agents / Staff in the company. You can only search by last name. Once you find the name you can double click them to get all their information, and make the neccessary changes. Once done, hit "Store" on the bottom</p>
                <p>2 - Once that is finished and the changes are stored, you want to use the drop down at the top to navigate from Main Menu > Transaction Records > Monthly Franchise Rpts > Crest Integration. Make sure the "People Information..." box is check and then hit "Send selected entitiy information to Crest...". Let it cycle through, and Dash should be updated soon.</p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(agentTermCode, document.getElementById('app'));
    }
    wcReport() {
        const wcReportCode = (
            <div>
                <p class="introHead">Running a WolfConnect MLSID Report and Adding them: </p>
                <p>1 - First you need to login to WolfConnect, this is different than BrokerWolf. Once in you want to hit the Wrench at the top right and select "Reports". Select the User Integration Report, unselect all but "Agent", and select "Agent" in User Roles, for Sort Order choose MLS IDs. Once finished hit View/Print and print out the report. Grab it from the printer, add the date to the top. Find an old report of the same kind and go through any agent that is showing 0 MLS IDs, if they are referral, ignore them, if they are full time, proceed to the next step.</p>
                <p>2 - To find the agent with the missing MLS ID, hit membership at the top of the page on WolfConnect. Select Manage, then search for the agent. Once found click on them to bring up their profile, select "MLS" on the bottom left. Here you will select "Add Entry" and select an Area (you're going to want to do all of them incase the agent has multiple MLS boards they're registered to). With an area selected hit "Look Up MLS ID" and search for their name with Ctrl+F. When found click on their MLS ID and it will add it to WolfConnect. Hit the save icon.</p>
            </div>
        )
        ReactDOM.unmountComponentAtNode;
        ReactDOM.render(wcReportCode, document.getElementById('app'));
    }
    opAdd() {
        const opAddCode = (
            <div>
                <p class="introHead">Adding an Open House in BrokerWolf: </p>
                <p>1 - This is a quick one. Log into BrokerWolf, and select Open Houses on the left side (you might want to update the listing before this incase you're "missing" an open house). Find the open house you're looking for and make and neccessary changes, or if needed add an open house, hit "Store" once done.</p>
                <p>2 - Once that is finished and the pictures are stored, you want to use the drop down at the top to navigate from Main Menu > Transaction Records > Monthly Franchise Rpts > Crest Integration. Make sure the "listing and transaction information" box is check and then hit "Send selected entitiy information to Crest...". Let it cycle through, and Dash should be updated soon.</p>
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

