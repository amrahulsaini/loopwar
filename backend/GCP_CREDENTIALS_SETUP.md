# Google Cloud Credentials Setup

1. **Create a Service Account in Google Cloud Console**
   - Grant it permissions for Compute Engine (VM management).
   - Download the JSON key file.

2. **Add the key file to your server (never commit to git):**
   - Place it outside your repo, e.g. `/home/loopwar.dev/gcloud-key.json`

3. **Set environment variables in your deployment environment:**
   - `GCLOUD_PROJECT_ID=your-gcp-project-id`
   - `GCLOUD_KEY_FILE=/home/loopwar.dev/gcloud-key.json`

4. **.gitignore:**
   - Make sure `.gitignore` includes any key files or `.env` files.

5. **Restart your app after setting env vars.**

**Never commit your GCP key file to git!**
