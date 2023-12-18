//配置文件
//ssh 连接服务器
//targetDir 需要压缩的文件目录
//targetFile 指定上传文件名称
//deployDir 部署目录
//releaseDir 远端的发布目录 存放我们的代码
const config = [
  {
    name: "demo项目",
    value: "haohe的demo项目",
    targetDir: "D:\\QDstudy\\Collection\\CICD\\web-demo\\dist",
    targetFile: "dist.zip",
    deployDir: "/test/",
    releaseDir: "web",
    ssh: {
      host: "", //服务器的ip
      port: 22, //端口
      username: "", //用户名
      password: "",
      passphrase: "", //没有写个空
    },
  },
  {
    name: "demo项目--测试使用,勿选",
    value: "haohe的测试项目",
    targetDir: "",
    targetFile: "dist.zip",
    deployDir: "/test/",
    releaseDir: "web",
    ssh: {
      host: "",
      prot: 22,
      username: "",
      password: "",
      passphrase: "",
    },
  },
];

export default config;
