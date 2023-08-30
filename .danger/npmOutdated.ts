import { exec } from 'child_process';

const formatOutdatedPackages = (outdatedPackages) => {
  if (!outdatedPackages) {
    return;
  }

  const headers = [
    "| Package | Current | Wanted | latest |",
    "|---------|---------|--------|--------|"
  ];

  const content = Object.entries(outdatedPackages).map(([key, val]) => {
    const { current, wanted, latest } = val;

    return `| ${key} | ${current} | ${wanted} | ${latest} |`;
  });

  return headers.concat(content).join("\n");
};

const execAsPromise = command => {
  return new Promise((resolve, reject) => {
    const execOptions = { maxBuffer: 10 * 1024 * 1024 };

    exec(command, execOptions, (error, stdout) => {
      if (stdout) {
        resolve(JSON.parse(stdout));
      }

      if (error !== null) {
        reject(error);
      }
    });
  });
};

async function npmOutdated() {
  const outdatedCommand = "pnpm outdated --json";

  try {
    const outdatedPackages = await execAsPromise(outdatedCommand);

    if (!outdatedPackages) {
      message('All packages are up to date.');
      return;
    }

    const packagesTable = formatOutdatedPackages(outdatedPackages);

    warn(`You have ${Object.keys(outdatedPackages).length} outdated packages`);
    markdown(`
      <details>
        <summary>Outdated Packages</summary>
        ${packagesTable}
      </details>
    `);
  } catch (err) {
    fail(`npm audit plugin error: ${err.message}`);
  }
}

export {
  npmOutdated
}