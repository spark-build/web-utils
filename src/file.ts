import FileSaver from 'file-saver';

export const download = (src: string) => {
  const srcSplit = src.split('/');

  FileSaver.saveAs(src, srcSplit[srcSplit.length - 1]);
};
