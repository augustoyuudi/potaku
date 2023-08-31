import { exec } from 'child_process';

const getSummary = ({ metadata }) => {
  const { vulnerabilities, totalDependencies } = metadata;

  const summary = [];
  let vulnerabilityCount = 0;

  for (const vulnerability in vulnerabilities) {
    const vulnerabilityValue = vulnerabilities[vulnerability];

    if (vulnerabilityValue === 0) {
      continue;
    }

    summary.push(`${vulnerabilityValue} ${vulnerability}`);
    vulnerabilityCount += vulnerabilityValue;
  }

  if (vulnerabilityCount > 0) {
    return `Found ${vulnerabilityCount} vulnerabilities (${summary.join(', ')}) in ${totalDependencies} scanned packages`;
  }

  return 'No known vulnerabilities found';
};

const execAsPromise = command => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (stdout) {
        resolve(JSON.parse(stdout));
      }
      if (error !== null) {
        reject(error);
      }
    });
  });
};

async function npmAudit() {
  const auditCommand = "pnpm audit --json";

  try {
    const audit = await execAsPromise(auditCommand);
    const severityLine = getSummary(audit);
    message(severityLine);
  } catch (err) {
    fail(`npm audit plugin error: ${err.message}`);
  }
}

export {
  npmAudit
};