# Portfolio Application

This is a Next.js-based personal portfolio site. The contact form submits messages
via SMTP; see below for setup instructions.

## Local Setup

1. Install dependencies:
   ```bash
   npm install      # or yarn / pnpm install
   ```
2. Create environment file by copying the example:
   ```bash
   cp .env.local.example .env.local
   ```
   
   **What is SMTP?** SMTP stands for Simple Mail Transfer Protocol – it's the
   standard way that email is delivered between servers. In order for the
   contact form to send real emails, you provide the address and password for
   an e‑mail account (Gmail, SendGrid, etc.). If this sounds confusing, you can
   skip it entirely during development: the app will automatically generate a
   temporary “fake” account and give you a preview link instead.

   When you're ready to receive actual messages, edit `.env.local` with your
   provider's details. For example:
   ```ini
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=youremail@gmail.com
   SMTP_PASS=<your-app-password-or-smtp-password>
   ```
   (Gmail requires an <https://support.google.com/accounts/answer/185833>
   app password.)

   Alternatively, if you don't want to use your Gmail password, you can use a
   transactional email provider such as SendGrid. Steps:

   1. Sign up at https://sendgrid.com and verify your account.
   2. Create an API key (Settings → API Keys → Create API Key). Give it a
      name and `Full Access` or `Mail Send` permissions.
   3. Add the key to your `.env.local` as:

   ```ini
   SENDGRID_API_KEY=SG.your_long_api_key_here
   FROM_EMAIL=youremail@yourdomain.com  # optional, overrides FROM address
   ```

   If `SENDGRID_API_KEY` is present the app will send mail via SendGrid's API
   and you won't need an SMTP password. This is the recommended approach if you
   prefer not to store or use your Gmail password.
3. Run the development server:
   ```bash
   npm run dev
   ```
   and open <http://localhost:3000> in your browser.

## Environment Variables

The following variables are recognised (see `.env.local.example`):

- `SMTP_HOST` – SMTP server host (default `smtp.gmail.com`).
- `SMTP_PORT` – port (default `465`).
- `SMTP_USER` – username/address for authentication.
- `SMTP_PASS` – password or app password.

No other configuration is required for local testing; production deployments
should set real credentials in the hosting environment.
