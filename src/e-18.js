const filesCollection = [
  ['photo', 'postcard', 'photo', 'photo', 'video'],
  ['file', 'file', 'file', 'game', 'game'],
  ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'],
];

export default function fixFiles(files) {
  const filesObject = {};
  const result = [];

  files.forEach((file, idx) => {
    let element = filesObject[file];
    element ? element.push(idx) : (element = [idx]);
    filesObject[file] = element;
  });

  for (const idx in filesObject) {
    filesObject[idx].forEach((position, idxFile) => {
      const newFile = idxFile !== 0 ? `${idx}(${idxFile})` : `${idx}`;
      result.splice(position, 0, newFile);
    });
  }

  return result;
}

filesCollection.forEach((files) => {
  fixFiles(files);
});
