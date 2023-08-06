import os from 'os';
import path from 'path';
import process from 'process';


// 1.
// Print out the current working directory

// process
const cwd1 = process.cwd();
console.log(cwd1);

// path

const cwd2 = path.resolve();
console.log(cwd2);

// os

const cwd3 = os.homedir();
console.log(cwd3);



// 2.
// Print out the separator of a given file path
// path
const separator = path.sep;
console.log(separator); 



// 3.
// Print out the extension name of a file path

// path
const extension = path.extname('\main.js');
console.log(extension);



// 4.
// Print out the process id of the current running process
// process
const pid = process.pid;
console.log(pid);



// 5.	
// Print out the user information of the os
// os
const userInfo = os.userInfo();
console.log(userInfo);


// 6.
// Print out the platform of an operating system
// os
const platform = os.platform();
console.log(platform);