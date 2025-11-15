# Portfolio Contact Form & Vercel Setup Guide

This project includes a secure, serverless contact form designed to be deployed on **Vercel**. It uses a Node.js serverless function to send emails via `nodemailer`, keeping all your credentials secure on the backend.

## How It Works

-   The form on the website sends the data to a backend function at `/api/send-email`.
-   This function uses `nodemailer` to connect to your Gmail account and send the email.
-   Your email credentials are stored securely as **environment variables** in your Vercel project, never in the code.

## Required Setup Steps

To make the contact form functional, you will need to follow these two setup procedures. **The form will not work locally or on Vercel until you complete these steps.**

### Step 1: Generate a Gmail App Password

For security reasons, you cannot use your regular Gmail password. You must generate a special **App Password**.

1.  **Go to your Google Account:** [myaccount.google.com](https://myaccount.google.com/)
2.  **Enable 2-Step Verification:**
    *   Navigate to the **Security** tab.
    *   Under "How you sign in to Google," click on **2-Step Verification** and follow the on-screen steps. You cannot create an App Password until this is enabled.
3.  **Generate the App Password:**
    *   Return to the **Security** tab.
    *   Click on **App passwords** (it will be in the same section as 2-Step Verification).
    *   When prompted, give the app a name (e.g., "Vercel Contact Form") and click **Create**.
    *   Google will generate a **16-character password**. Copy this password immediately and save it somewhere secure. This is your `GMAIL_APP_PASSWORD`.

### Step 2: Set Up Environment Variables in Vercel

1.  **Log in to your Vercel account** and select this project.
2.  Navigate to the project's **Settings** tab.
3.  Click on **Environment Variables** in the left-hand menu.
4.  Create two new variables:
    *   **Variable 1:**
        *   **Name:** `GMAIL_EMAIL`
        *   **Value:** Your full Gmail address (e.g., `your.email@gmail.com`)
    *   **Variable 2:**
        *   **Name:** `GMAIL_APP_PASSWORD`
        *   **Value:** The 16-character App Password you generated in Step 1.
5.  **Save** the variables. Vercel will automatically redeploy your project with these new settings.

Once your project has redeployed, the contact form will be fully functional and secure.
