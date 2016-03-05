//////////////////////////////////////////////////////////////
// Title: Assignment Reminder
// Author: Patrick Walton
// Notes: This assignment reminder is meant to be used in google apps script to automate reporting that is supposed to be done on a google spreadsheet.
/////////////////////////////////////////////////////////////

function assignmentReminder() {
  //Get Assignment Report Sheet
  sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()
  var sheet = sheets[0];
  
  //Get Number of People
  emailsheight = sheet.getRange("B1").getValue()
  
  for (i = 1; i <= emailsheight; i++) {
    //Only Email Those Whose Report Cell is Empty
    if (sheet.getRange(i+1,3).getValue() == "Visited:\n\nExperience:") { //The quotations here should match the contents of the cell before reporting.
      
      //Get Email Address
      emailAddress = sheet.getRange(i+1,2).getValue() 
    
      //Send Email
      MailApp.sendEmail({
        to: emailAddress,
        //bcc: "[your email here]", //This helps you ensure that the reminder gets sent.
        subject: "Don't Forget to Report on Your Assignment",
        body: "I noticed you haven't filled in your section on the report, so here's a friendly reminder to do so.\n\nThanks!",
        //replyTo: "[your email here]"
      });
    }
    
    
  }
}
