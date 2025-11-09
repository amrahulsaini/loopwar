import { NextRequest, NextResponse } from 'next/server';
import { InstancesClient } from '@google-cloud/compute';
import { GCLOUD_PROJECT_ID, GCLOUD_KEY_FILE } from '../../../backend/config';

export async function GET(req: NextRequest) {
  try {
    const client = new InstancesClient({
      projectId: GCLOUD_PROJECT_ID,
      keyFilename: GCLOUD_KEY_FILE,
    });
    // Example: List all instances in a zone (replace 'us-central1-a' with your zone)
    const zone = 'us-central1-a';
    const [vms] = await client.list({
      project: GCLOUD_PROJECT_ID,
      zone,
    });
    return NextResponse.json({ vms });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
