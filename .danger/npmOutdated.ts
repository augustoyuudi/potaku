import { exec } from 'child_process';

const formatOutdatedPackages = (outdatedPackages) => {
  if (!outdatedPackages) {
    return;
  }

  const content = Object.entries(outdatedPackages).map(([key, val]) => {
    const { current, wanted, latest } = val;

    return `<p>| ${key} | ${current} | ${wanted} | ${latest} |</p>`;
  });

  return `<details>\n<summary>Outdated Packages</summary>\n<p>"| Package | Current | Wanted | latest |"</p>\n<p>"|---------|---------|--------|--------|"</p>\n${content.join("\n")}\n</details>`;
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
    console.log(packagesTable);

    // markdown(`
    //   <details>
    //     <summary>Outdated Packages</summary>
    //     ${packagesTable}
    //   </details>
    // `);
  } catch (err) {
    fail(`npm audit plugin error: ${err.message}`);
  }
}

export {
  npmOutdated
}