function f(string) {
  const fileNameAndExtension = string.split('\\').slice(-1)[0];

  const extension = fileNameAndExtension.split('.').slice(-1)[0];
  const fileName = fileNameAndExtension.replace(`.${extension}`, '');

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

f('C:\\desktop\\academy\\template.pptx');
f('C:\\Projects\\website.folder\\file.name.js');
