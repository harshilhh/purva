/**
 * Compliancenomics contact form → Google Sheets
 *
 * Setup:
 * 1. Create a new Google Sheet (name it e.g. "Compliancenomics Contact Submissions").
 * 2. Extensions → Apps Script.
 * 3. Replace the default Code.gs with the code below.
 * 4. Deploy → New deployment → Type: Web app.
 *    - Description: Contact form endpoint
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the /exec URL and put it in your `.env` file as VITE_GOOGLE_SHEETS_URL.
 * 6. Any time you edit the script, redeploy (New deployment or Manage deployments → New version).
 *
 * The frontend sends the payload as text/plain (to avoid CORS preflight) — JSON is parsed here.
 */

const SHEET_NAME = 'Submissions';

function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};

    const sheet = getOrCreateSheet_();
    const now = new Date();
    const timestamp = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      timestamp,
      String(body.name || ''),
      String(body.email || ''),
      String(body.subject || ''),
      String(body.message || ''),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Compliancenomics contact endpoint is live.');
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Received', 'Name', 'Email', 'Subject', 'Message']);
    sheet.getRange('A1:E1').setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}
