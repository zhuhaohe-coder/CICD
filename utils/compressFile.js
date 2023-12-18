import fs from "node:fs";
import archiver from "archiver";

/**
 * 压缩文件
 * @param {*} source 源文件
 * @param {*} target 压缩之后的文件
 */
const compressFile = (source, target) => {
  return new Promise((resolve) => {
    const output = fs.createWriteStream(target); //dist.zip
    const archive = archiver("zip", {
      zlib: { level: 9 }, // 0-9 数字越高压缩率越高
    });
    //文件写入完成
    output.on("close", () => {
      console.log((archive.pointer() / 1024 / 1024).toFixed(2) + "MB"); //压缩后文件的大小
      resolve();
    });
    archive.pipe(output); //将 archive 的输出通过 .pipe() 方法连接到 output
    archive.directory(source, "dist"); //要压缩的目录
    archive.finalize();
  });
};

export default compressFile;
