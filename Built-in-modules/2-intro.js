// const os =require('os');
// const user=os.userInfo();
// const hostname=os.hostname();
// const currentOS=os.cpus();
// const ostype=os.type();
// console.log(ostype);
// console.log(currentOS);
// console.log(hostname);
// console.log(user);
// console.log(os.uptime());

// const path=require('path');
// const absolute=path.resolve(__dirname,'/Built-in-modules','2-intro.js');
// console.log(absolute);

const {readFileSync,writeFileSync} =require('fs');

const first=readFileSync('sample.txt','utf-8');
console.log(first);