"use client";
import { useEffect, useState } from "react";
import styles from "./VMManager.module.css";

interface VM {
  id: string;
  name: string;
  status: string;
  zone: string;
  machineType?: string;
  networkInterfaces?: any[];
  disks?: any[];
  creationTimestamp?: string;
  tags?: { items?: string[] };
  description?: string;
  selfLink?: string;
  scheduling?: any;
  metadata?: any;
  [key: string]: any;
}

const MACHINE_TYPES = [
  "e2-micro", "e2-small", "e2-medium", "e2-standard-2", "e2-standard-4", "e2-standard-8",
  "n1-standard-1", "n1-standard-2", "n1-standard-4", "n1-standard-8", "n1-standard-16",
  "n2-standard-2", "n2-standard-4", "n2-standard-8", "n2-standard-16",
  "c2-standard-4", "c2-standard-8", "c2-standard-16", "c2-standard-30",
  "t2d-standard-1", "t2d-standard-2", "t2d-standard-4", "t2d-standard-8"
];

const SOURCE_IMAGES = [
  { label: "Debian 11", value: "projects/debian-cloud/global/images/family/debian-11" },
  { label: "Debian 10", value: "projects/debian-cloud/global/images/family/debian-10" },
  { label: "Ubuntu 22.04 LTS", value: "projects/ubuntu-os-cloud/global/images/family/ubuntu-2204-lts" },
  { label: "Ubuntu 20.04 LTS", value: "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts" },
  { label: "CentOS 7", value: "projects/centos-cloud/global/images/family/centos-7" },
  { label: "Rocky Linux 8", value: "projects/rocky-linux-cloud/global/images/family/rocky-linux-8" },
  { label: "Windows Server 2022", value: "projects/windows-cloud/global/images/family/windows-2022" },
  { label: "Container-Optimized OS", value: "projects/cos-cloud/global/images/family/cos-stable" },
];

export default function VMManager() {
  const [vms, setVms] = useState<VM[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({
    name: "",
    zone: "us-central1-a",
    machineType: MACHINE_TYPES[0],
    sourceImage: SOURCE_IMAGES[0].value
  });

  const fetchVMs = () => {
    setLoading(true);
    fetch("/api/vms")
      .then((res) => res.json())
      .then((data) => {
        setVms(data.vms || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load VMs");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVMs();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMachineTypeSelect = (type: string) => {
    setForm((prev) => ({ ...prev, machineType: type }));
  };

  const handleSourceImageSelect = (img: string) => {
    setForm((prev) => ({ ...prev, sourceImage: img }));
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    setError("");
    try {
      const res = await fetch("/api/vms/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create VM");
      fetchVMs();
      setForm({
        name: "",
        zone: "us-central1-a",
        machineType: MACHINE_TYPES[0],
        sourceImage: SOURCE_IMAGES[0].value
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className={styles.vmRoot}>
      <h2>Google Cloud VM Instances</h2>
      <form onSubmit={handleCreate} className={styles.vmForm}>
        <input
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="VM Name"
          required
        />
        <select name="zone" value={form.zone} onChange={handleInputChange}>
          <option value="us-central1-a">us-central1-a</option>
          <option value="us-central1-b">us-central1-b</option>
          <option value="us-central1-c">us-central1-c</option>
        </select>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Machine Type:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {MACHINE_TYPES.map((type) => (
              <div
                key={type}
                className={styles.vmCard + ' ' + (form.machineType === type ? styles.vmCardSelected : '')}
                style={{ minWidth: 120, maxWidth: 140, cursor: 'pointer', padding: 10, border: form.machineType === type ? '2px solid #0070f3' : '1.5px solid #eee', background: form.machineType === type ? '#e6f0fa' : '#fafafa' }}
                onClick={() => handleMachineTypeSelect(type)}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Source Image:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {SOURCE_IMAGES.map((img) => (
              <div
                key={img.value}
                className={styles.vmCard + ' ' + (form.sourceImage === img.value ? styles.vmCardSelected : '')}
                style={{ minWidth: 180, maxWidth: 220, cursor: 'pointer', padding: 10, border: form.sourceImage === img.value ? '2px solid #0070f3' : '1.5px solid #eee', background: form.sourceImage === img.value ? '#e6f0fa' : '#fafafa' }}
                onClick={() => handleSourceImageSelect(img.value)}
              >
                <div style={{ fontWeight: 600 }}>{img.label}</div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 2 }}>{img.value.split('/').pop()}</div>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" disabled={creating}>
          {creating ? "Creating..." : "Create VM"}
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className={styles.vmCardList}>
        {vms.length === 0 && !loading && (
          <div className={styles.vmCardEmpty}>No VMs found.</div>
        )}
        {vms.map((vm: any) => (
          <div className={styles.vmCard} key={vm.id || vm.name}>
            <div className={styles.vmCardHeader}>
              <span className={styles.vmCardTitle}>{vm.name}</span>
              <span className={styles.vmCardStatus + ' ' + styles['vmStatus' + (vm.status ? vm.status.charAt(0).toUpperCase() + vm.status.slice(1).toLowerCase() : '')]}>{vm.status}</span>
            </div>
            <div className={styles.vmCardBody}>
              <div><b>Zone:</b> {vm.zone}</div>
              <div><b>Machine Type:</b> {vm.machineType || (vm.machineType && vm.machineType.split('/').pop()) || '-'}</div>
              <div><b>Network IP:</b> {vm.networkInterfaces && vm.networkInterfaces[0]?.networkIP}</div>
              <div><b>External IP:</b> {vm.networkInterfaces && vm.networkInterfaces[0]?.accessConfigs?.[0]?.natIP}</div>
              <div><b>Disks:</b> {vm.disks && vm.disks.map((d: any) => d.deviceName).join(', ')}</div>
              <div><b>ID:</b> {vm.id || '-'}</div>
              <div><b>Created:</b> {vm.creationTimestamp ? new Date(vm.creationTimestamp).toLocaleString() : '-'}</div>
              <div><b>Tags:</b> {vm.tags?.items?.join(', ') || '-'}</div>
              <div><b>Description:</b> {vm.description || '-'}</div>
              <div><b>Self Link:</b> <a href={vm.selfLink} target="_blank" rel="noopener noreferrer">View in GCP</a></div>
              <div><b>Scheduling:</b> {vm.scheduling ? JSON.stringify(vm.scheduling) : '-'}</div>
              <div><b>Metadata:</b> {vm.metadata ? JSON.stringify(vm.metadata) : '-'}</div>
              {/* Show all other available fields */}
              {Object.entries(vm).map(([key, value]) => {
                if (["id","name","status","zone","machineType","networkInterfaces","disks","creationTimestamp","tags","description","selfLink","scheduling","metadata"].includes(key)) return null;
                return <div key={key}><b>{key}:</b> {typeof value === 'object' ? JSON.stringify(value) : String(value)}</div>;
              })}
            </div>
            <div className={styles.vmCardActions}>
              <button disabled>Start</button>
              <button disabled>Stop</button>
              <button disabled>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
