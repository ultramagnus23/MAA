# Prompt for Claude in Chrome: finish the Google sign-in setup

Paste everything below the line into Claude in Chrome. Stay signed in to the Google account that should own the project. Claude will stop and ask you before it does anything it should not do alone.

---

I am setting up "Sign in with Google" for the Ministry of Academic Affairs website (Ashoka University). The website code is already written. I need you to create the Google OAuth credentials and add them to the hosting settings. Work step by step and tell me what you are doing.

**Rules**
- Never type or paste my Google password. If a sign-in page appears, stop and ask me to sign in myself.
- Do not delete or change any existing project, credential or setting that I did not ask about.
- Ask me before clicking any final "Create", "Save" or "Deploy" button, and tell me what it will do.
- Do not share the client secret in the chat. When the secret is shown, copy it straight into the hosting environment variable field.

**Part 1: Google Cloud Console** (https://console.cloud.google.com)
1. Create a new project named "MAA Website", or select it if it already exists.
2. Open APIs & Services, then OAuth consent screen (also called "Google Auth Platform").
   - App name: Ministry of Academic Affairs
   - User support email and developer contact email: academicaffairs.ministry@ashoka.edu.in
   - Audience / User type: choose "Internal" if it is available (this means only Ashoka accounts can sign in). If "Internal" is not available because the project is not inside Ashoka's Google Workspace organisation, choose "External" and tell me.
   - Scopes: only the basic ones (`openid`, `email`, `profile`).
3. Open APIs & Services, then Credentials, then Create credentials, then OAuth client ID.
   - Application type: Web application
   - Name: MAA Website
   - Authorised JavaScript origins:
     - `http://localhost:3000`
     - `https://YOUR-LIVE-SITE-ADDRESS` (ask me for the live address if you do not know it)
   - Authorised redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://YOUR-LIVE-SITE-ADDRESS/api/auth/callback/google`
4. After creating it, you will see a Client ID and a Client secret. Keep this tab open for Part 2.

**Part 2: Hosting settings** (Vercel: https://vercel.com, then the MAA website project, then Settings, then Environment Variables)
Add these three variables for Production, Preview and Development:
- `AUTH_GOOGLE_ID` = the Client ID from Part 1
- `AUTH_GOOGLE_SECRET` = the Client secret from Part 1
- `AUTH_SECRET` = a long random string. If you cannot generate one, ask me to run `npx auth secret` in the project folder and give you the result.

If the site is on a different host than Vercel, tell me and add the same three variables there instead.

**Part 3: Redeploy and test**
1. Ask me before redeploying. Then redeploy the latest production deployment so the new variables take effect.
2. Open the live site in a private window. It should redirect to the login page.
3. Click "Sign in with your Ashoka email" and ask me to sign in with my @ashoka.edu.in account. Confirm that I reach the home page.
4. Ask me to try once with a personal Gmail account. Confirm that it is refused with the message about using an @ashoka.edu.in address.
5. Report what worked and what did not.

**Part 4: Optional, protect the documents too**
The website links to Google Drive documents. The site's sign-in does not protect those links. Ask me whether I want you to change the sharing on those Drive files from "Anyone with the link" to "Anyone at Ashoka University". Only do this if I say yes, and do it one file at a time with my confirmation.
