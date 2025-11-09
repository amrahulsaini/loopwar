import { NextRequest, NextResponse } from 'next/server';
import { InstancesClient } from '@google-cloud/compute';
import { GCLOUD_PROJECT_ID, GCLOUD_KEY_FILE } from '../../../../backend/config';

export async function POST(req: NextRequest) {
  try {
    const { name, zone, machineType, sourceImage } = await req.json();
    const client = new InstancesClient({
      projectId: GCLOUD_PROJECT_ID,
      keyFilename: GCLOUD_KEY_FILE,
    });
    const instanceConfig = {
      name,
      machineType: `zones/${zone}/machineTypes/${machineType}`,
      disks: [
        {
          initializeParams: {
            sourceImage,
          },
          boot: true,
          autoDelete: true,
        },
      ],
      networkInterfaces: [
        {
          network: 'global/networks/default',
        },
      ],
    };
    const [operation] = await client.insert({
      project: GCLOUD_PROJECT_ID,
      zone,
      instanceResource: instanceConfig,
    });
    return NextResponse.json({ success: true, operation });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
