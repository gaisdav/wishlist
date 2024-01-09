import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

function uncapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

// Retrieve the folder name from command-line arguments
const folderName = process.argv[2];
const moduleName = process.argv[3];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!moduleName) {
  console.error('Please provide a folder name.');
  process.exit(1);
}

const createFolderAndFiles = (moduleName) => {
  // Create a folder
  const componentsDir = path.join(__dirname, `src/components/${folderName}`, moduleName);

  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir);
    console.log(`Folder '${moduleName}' created successfully.`);
  } else {
    console.error(`Folder '${moduleName}' already exists.`);
  }

  // Files to create within the folder
  const files = [
    `${moduleName}/${moduleName}.tsx`,
    `${moduleName}/index.ts`,
    `${moduleName}/types.ts`,
    `${moduleName}/styles.module.scss`,
  ];

  const interfaceName = `I${moduleName}`;

  // Content for each file
  const fileContents = [
    `import { FC, PropsWithChildren } from 'react';
import css from './styles.module.scss';
import { ${interfaceName} } from './types.ts';

export const ${moduleName}: FC<PropsWithChildren<${interfaceName}>> = ({ ...props }) => {};`,
    `export * from './${moduleName}.tsx';
export * from './types.ts';
`,
    `export interface ${interfaceName} {}`,
    `.${uncapitalizeFirstLetter(moduleName)} {
}
`,
  ];

  // Create files
  files.forEach((file, index) => {
    const filePath = path.join(__dirname, `src/components/${folderName}`, file);
    const directory = path.dirname(filePath);

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

    fs.writeFileSync(filePath, fileContents[index], 'utf-8');
    console.log(`File '${file}' created successfully.`);
  });

  console.log(`Folder '${moduleName}' and files created successfully.`);
};

createFolderAndFiles(moduleName);
