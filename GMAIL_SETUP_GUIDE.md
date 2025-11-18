# 📧 Gmail Setup Guide for Contact Form

Your contact form is now configured to send emails directly from your Gmail account! This guide will walk you through the setup process step by step.

---

## 🚀 Quick Setup (10 minutes)

### ⚠️ Important: You Need a Gmail App Password

Google requires you to use an **App Password** (not your regular Gmail password) for security. Don't worry - it's easy to set up!

---

## 📋 Step-by-Step Instructions

### Step 1: Enable 2-Factor Authentication on Your Gmail

*If you already have 2FA enabled, skip to Step 2.*

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", click on **2-Step Verification**
4. Click **Get Started**
5. Follow the prompts to set up 2FA (usually via phone)
6. Once enabled, you'll see "2-Step Verification is on" ✅

### Step 2: Generate Gmail App Password

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", click on **2-Step Verification**
4. Scroll down and click on **App passwords** (at the bottom)
   - If you don't see this option, make sure 2FA is enabled first
5. You might need to sign in again
6. In the "Select app" dropdown, choose **Mail**
7. In the "Select device" dropdown, choose **Other (Custom name)**
8. Type: **The Creative Horse Website**
9. Click **Generate**
10. **IMPORTANT:** Copy the 16-character password that appears
    - It looks like: `abcd efgh ijkl mnop` (with spaces)
    - Save it somewhere safe - you won't see it again!

---

### Step 3: Add Credentials to Your Project

#### For Local Development:

1. In your project root, create a file named `.env.local` (if it doesn't exist)
2. Add these lines:

```env
# Gmail Configuration
GMAIL_USER=Contact@thecreativehorse.ca
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=Contact@thecreativehorse.ca

# Google Places API (for Reviews)
GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
GOOGLE_PLACE_ID=your_google_place_id_here
```

3. Replace `abcdefghijklmnop` with your actual 16-character app password (remove spaces)
4. **Important:** The `.env.local` file is already in `.gitignore` and won't be committed to GitHub
5. Save the file
6. **Restart your dev server:**
   ```bash
   # Press Ctrl+C to stop the server
   npm run dev  # Start it again
   ```

#### For Netlify (Production):

1. Go to your **Netlify Dashboard**
2. Select your site
3. Go to **Site configuration** → **Environment variables**
4. Add these three variables:

| Variable Name | Value | Example |
|--------------|-------|---------|
| `GMAIL_USER` | Your Gmail address | `Contact@thecreativehorse.ca` |
| `GMAIL_APP_PASSWORD` | Your 16-char app password | `abcdefghijklmnop` |
| `CONTACT_EMAIL` | Where to receive emails | `Contact@thecreativehorse.ca` |

5. Click **Save**
6. **Redeploy your site:**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**

---

## ✅ Testing

### Test Locally:

1. Make sure your `.env.local` file is set up correctly
2. Restart your dev server (`npm run dev`)
3. Go to `http://localhost:3001/contact`
4. Fill out the contact form with test data:
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Message: Testing contact form
5. Click Submit
6. Check your terminal logs - you should see:
   ```
   Contact form submission received: {...}
   Email sent successfully via Gmail
   ```
7. **Check your Gmail inbox** at `Contact@thecreativehorse.ca`
8. The email should appear within seconds!

### Test on Production:

1. Make sure environment variables are set in Netlify
2. Deploy your changes
3. Visit your live contact page
4. Submit a test form
5. Check your Gmail inbox!

---

## 📧 What the Email Looks Like

When someone submits your contact form, you'll receive an email with:

**From:** The Creative Horse Website <Contact@thecreativehorse.ca>  
**To:** Contact@thecreativehorse.ca  
**Reply-To:** [Customer's Email] ← Click reply to respond directly!  
**Subject:** 🎉 New Lead: John Doe - Website Development

**Email Content:**
- Beautiful HTML-formatted email
- Customer's name, email, phone (if provided)
- Service they're interested in
- Their full message
- Submission timestamp

**Pro Tip:** When you click "Reply" in Gmail, it will automatically reply to the customer's email address!

---

## 🔧 Troubleshooting

### Issue 1: "Error sending email: Invalid login"

**Solution:**
- Make sure 2FA is enabled on your Gmail account
- Double-check your app password (no spaces!)
- Verify `GMAIL_USER` matches your Gmail address exactly
- Try generating a new app password

### Issue 2: "Error: Missing credentials"

**Solution:**
- Check that your `.env.local` file exists in the project root
- Verify variable names are spelled correctly:
  - `GMAIL_USER` (not `GMAIL_EMAIL`)
  - `GMAIL_APP_PASSWORD` (not `GMAIL_PASSWORD`)
- Restart your dev server after creating `.env.local`

### Issue 3: Emails not arriving

**Solution:**
1. Check your **Gmail Spam folder**
2. Check **All Mail** folder
3. Verify the `CONTACT_EMAIL` address is correct
4. Check Gmail's **Activity** logs:
   - Go to Gmail → Settings → See all settings → Forwarding and POP/IMAP
   - Check for any blocks or filters

### Issue 4: "535-5.7.8 Username and Password not accepted"

**Solution:**
- You're using your regular Gmail password instead of App Password
- Generate a new App Password following Step 2 above
- Use the App Password (not your regular password)

### Issue 5: Terminal shows "Email sent successfully" but no email received

**Solution:**
- Check Gmail spam/junk folder
- Verify `CONTACT_EMAIL` is spelled correctly
- Try sending to a different email address temporarily
- Check if Gmail is blocking the emails (uncommon)

---

## 🎨 Benefits of Gmail Integration

✅ **Free Forever** - No limits, no costs  
✅ **Reliable** - Gmail's infrastructure  
✅ **Familiar** - Use your existing Gmail account  
✅ **Easy Replies** - Click reply to respond to customers  
✅ **Professional** - Emails come from your domain email  
✅ **Organized** - All leads in one Gmail inbox  
✅ **Mobile Access** - Gmail app on phone  
✅ **Search** - Find old leads easily  

---

## 🔒 Security Best Practices

1. **Never share your App Password**
   - Treat it like your regular password
   - Don't commit it to GitHub (already in `.gitignore`)

2. **Use Environment Variables**
   - Always use `.env.local` for local development
   - Use Netlify's environment variables for production
   - Never hardcode passwords in your code

3. **Rotate Passwords Regularly**
   - Generate a new App Password every few months
   - Revoke old ones from Google Account settings

4. **Monitor Your Gmail**
   - Check for suspicious activity
   - Review app passwords periodically
   - Remove unused app passwords

---

## 📊 Email Rate Limits

**Gmail's sending limits:**
- **Personal Gmail:** 500 emails/day
- **Google Workspace:** 2,000 emails/day

For a small business contact form, 500/day is more than enough!

If you're getting 500+ leads per day, you'll need to:
1. Celebrate! 🎉
2. Consider upgrading to Google Workspace
3. Or use a dedicated email service like SendGrid

---

## 🎉 You're All Set!

Your contact form now sends emails directly through Gmail!

**Quick Checklist:**
- ✅ 2FA enabled on Gmail
- ✅ App Password generated
- ✅ Environment variables added
- ✅ Dev server restarted
- ✅ Tested locally
- ✅ Deployed to Netlify
- ✅ Tested on production

**Now you can:**
- Receive leads directly in Gmail
- Reply to customers with one click
- Access emails on any device
- Never miss a lead!

---

## 📞 Quick Reference

### Environment Variables Needed:

```env
GMAIL_USER=Contact@thecreativehorse.ca
GMAIL_APP_PASSWORD=your-16-char-app-password
CONTACT_EMAIL=Contact@thecreativehorse.ca
```

### File Locations:
- **Local:** `.env.local` in project root
- **Production:** Netlify → Site configuration → Environment variables

### Useful Links:
- [Google Account Security](https://myaccount.google.com/security)
- [Gmail App Passwords](https://myaccount.google.com/apppasswords)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)

---

## 💡 Pro Tips

1. **Test with a personal email first** before using your business email
2. **Set up Gmail filters** to auto-label contact form emails
3. **Create a template response** in Gmail for common inquiries
4. **Use Gmail's mobile app** to respond to leads on the go
5. **Enable desktop notifications** in Gmail settings

---

Need help? The error messages in the terminal will tell you exactly what's wrong!





