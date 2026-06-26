/* Wiz iDM — UI kit screens. Composes design-system primitives from the
   bundle namespace and exposes screen components on window. */
const DS = window.WizIDMDesignSystem_42e9e3;
const { Button, IconButton, Search, Select, Input, Badge, Tabs, Steps, Table,
        Card, Divider, Avatar, TitleBar, Message, Upload, FileChip, Modal, Icon, Link } = DS;

const PAGE_BG = 'var(--grey-20)';

function StatCard({ label, value, delta, tone }) {
  return (
    <Card elevation="card" padding={18} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--grey-70)', fontWeight: 600 }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--grey-90)' }}>{value}</span>
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: tone === 'down' ? 'var(--signal-error)' : 'var(--green-60)', fontWeight: 600 }}>{delta}</span>
    </Card>
  );
}

/* ── Home ── */
function HomeScreen() {
  const cols = [
    { key: 'id', header: 'Protocol ID', sortable: true, render: v => <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{v}</span> },
    { key: 'name', header: 'Study name', sortable: true, filterable: true },
    { key: 'phase', header: 'Phase' },
    { key: 'status', header: 'Status', render: v => <Badge tone={v.tone}>{v.label}</Badge> },
    { key: 'queries', header: 'Open queries', align: 'right' },
    { key: 'act', header: 'Action', render: () => <span style={{ display: 'flex', gap: 12 }}><Link>Open</Link><Link>eCRF</Link></span> },
  ];
  const rows = [
    { id: 'PRO.00001', name: 'iTaimei EDC_UAT', phase: 'Phase II', status: { label: 'Active', tone: 'green' }, queries: 12 },
    { id: 'PRO.00018', name: 'Cardio-Renal Outcomes', phase: 'Phase III', status: { label: 'Review', tone: 'purple' }, queries: 4 },
    { id: 'PRO.00042', name: 'Onco Cohort Expansion', phase: 'Phase I', status: { label: 'Pending', tone: 'yellow' }, queries: 27 },
    { id: 'PRO.00067', name: 'Vaccine Immunogenicity', phase: 'Phase II', status: { label: 'Locked', tone: 'grey' }, queries: 0 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <h1 className="wiz-h2" style={{ margin: 0 }}>Home</h1>
        <div style={{ display: 'flex', gap: 12 }}>
          <Search placeholder="Search protocol name, ID, etc." />
          <Button variant="primary" icon="FileAddFill">New project</Button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <StatCard label="Active studies" value="18" delta="+2 this month" />
        <StatCard label="Open queries" value="43" delta="−11 this week" />
        <StatCard label="Forms to review" value="126" delta="+8 today" tone="down" />
        <StatCard label="Sites online" value="34/36" delta="2 syncing" />
      </div>
      <Card elevation="ring" padding={0} radius={12}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px' }}>
          <span className="wiz-subtitle1">Recent protocols</span>
          <Tabs variant="segmented" items={['All', 'Mine', 'Starred']} />
        </div>
        <Table columns={cols} rows={rows} selectable />
      </Card>
    </div>
  );
}

/* ── Manual Check ── */
function ManualCheckScreen() {
  const [tab, setTab] = React.useState('DVP');
  const cols = [
    { key: 'item', header: 'Check item', sortable: true },
    { key: 'field', header: 'Field', render: v => <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{v}</span> },
    { key: 'status', header: 'Status', filterable: true, render: v => <Badge tone={v.tone} variant="soft">{v.label}</Badge> },
    { key: 'sev', header: 'Severity', render: v => <Badge tone={v.tone} variant="dot">{v.label}</Badge> },
    { key: 'act', header: '', align: 'right', render: () => <span style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}><IconButton icon="EditLine" size="sm" /><IconButton icon="DeleteBinLine" size="sm" /></span> },
  ];
  const rows = [
    { item: 'AE start date ≤ end date', field: 'AE.AESTDTC', status: { label: 'Open', tone: 'red' }, sev: { label: 'High', tone: 'red' } },
    { item: 'Lab value within range', field: 'LB.LBORRES', status: { label: 'Answered', tone: 'blue' }, sev: { label: 'Med', tone: 'yellow' } },
    { item: 'Visit date in window', field: 'SV.SVSTDTC', status: { label: 'Resolved', tone: 'green' }, sev: { label: 'Low', tone: 'grey' } },
    { item: 'Concomitant med coded', field: 'CM.CMDECOD', status: { label: 'Open', tone: 'red' }, sev: { label: 'High', tone: 'red' } },
    { item: 'Dose ≤ protocol max', field: 'EX.EXDOSE', status: { label: 'Answered', tone: 'blue' }, sev: { label: 'Med', tone: 'yellow' } },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 24 }}>
      <TitleBar title="Manual Check" description="Review and resolve queries before database lock"
        actions={<><Button variant="normal" icon="UploadLine">Export</Button><Button variant="primary" icon="Sparkling2Fill">Auto-check</Button></>} />
      <Card elevation="ring" padding={20}>
        <Steps current={1} steps={[
          { label: 'Import data', description: 'Source uploaded' },
          { label: 'Run checks', description: 'In progress' },
          { label: 'Resolve queries', description: '9 open' },
          { label: 'Sign off', description: 'Locked' },
        ]} />
      </Card>
      <Message tone="warning">2 high-severity checks are still open in this dataset.</Message>
      <Card elevation="ring" padding={0} radius={12}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
          <Tabs variant="underline" items={['DVP', 'eCRF', 'Queries']} value={tab} onChange={setTab} />
          <Search width={260} placeholder="Search check item…" />
        </div>
        <Table columns={cols} rows={rows} selectable />
      </Card>
    </div>
  );
}

/* ── Verification (upload + confirm) ── */
function VerificationScreen() {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState(['Verification_Plan_Data.xlsx']);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 24, maxWidth: 760 }}>
      <h1 className="wiz-h2" style={{ margin: 0 }}>Data Verification Plan</h1>
      <Card elevation="ring" padding={20}>
        <Steps current={0} steps={[
          { label: 'Upload source', description: 'DVP workbook' },
          { label: 'Map fields', description: 'Auto-detected' },
          { label: 'Validate', description: 'Pending' },
        ]} />
      </Card>
      <Card elevation="ring" padding={20} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span className="wiz-subtitle1">Source data</span>
          <Upload onBrowse={() => setFiles(f => [...f, 'New_Upload_' + (f.length + 1) + '.xlsx'])} />
          {files.map((f, i) => <FileChip key={i} name={f} onRemove={() => setFiles(files.filter((_, j) => j !== i))} />)}
        </div>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Select label="Validation set" required options={['Standard SDTM', 'Custom DVP', 'Sponsor rules']} defaultValue="Custom DVP" />
          <Input label="Plan version" required defaultValue="v0.1" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Button variant="normal">Save draft</Button>
          <Button variant="primary" icon="Sparkling2Fill" onClick={() => setOpen(true)}>Run verification</Button>
        </div>
      </Card>
      <Modal open={open} title="Run verification?" onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onConfirm={() => setOpen(false)} confirmLabel="Run now">
        This will validate <b>{files.length}</b> source file(s) against the Custom DVP rule set. Open queries will be regenerated.
      </Modal>
    </div>
  );
}

Object.assign(window, { HomeScreen, ManualCheckScreen, VerificationScreen });
