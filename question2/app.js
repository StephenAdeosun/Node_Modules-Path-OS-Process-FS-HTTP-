// Using the FS module:Create directory/folder named: “Students”
const fs = require('fs');
const path = require('path');


// 1. Create directory/folder named: “Students”
// const dirPath = path.join(__dirname, 'Students');
// fs.mkdir(dirPath, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Directory created successfully!');
// }
// );



// 2. In the Students directory, create a file named user.js
// const filePath = path.join(__dirname, 'Names', 'user.js');
// fs.open(filePath, 'w', (err, file) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created successfully!');
// }
// );




// 3. Update the Students directory to “Names”
// const newFolder = path.join(__dirname, 'Names')
// fs.rename(dirPath, newFolder, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     } 
//     console.log('Folder renamed successfully')
// }
// );



// 4. Add your name as content to the file user.js
// const filePath = path.join(__dirname, 'Names', 'user.js');
// const content = 'My name is: Stephen💎';
// fs.writeFile(filePath, content, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created successfully!');
// }
// );


//5. Update the file and add your age, sex, nationality, phone number and any other information about yourself
// const filePath = path.join(__dirname, 'Names', 'user.js');
// const content = '\nAge:17yrs \nNationality:Nigeria \nPhone number:07042465683'
// fs.appendFile(filePath, content, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created successfully!');

// }
// );


// 6. Update the file user.js to {your_name}.js eg daniel_adesoji.js
// const newFilePath = path.join(__dirname, 'Names', 'stephen_adeosun.js');
// fs.rename(filePath, newFilePath, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     } 
//     console.log('File renamed successfully')
// }
// );



// 7. Read the contents from {your_name}.js. User fs.open or fs.readFile
// Read the contents from {your_name}.js. User fs.open or fs.readFile
// const filePath = path.join(__dirname, 'Names', 'stephen_adeosun.js');
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// }
// );



// 8. Delete the file {your_name}.js
// Delete the file {your_name}.js
// const filePath = path.join(__dirname, 'Names', 'stephen_adeosun.js');
// fs.rm(filePath, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File deleted successfully!');
// }
// );



// 9. Delete the directory "Names"
// Delete the directory "Names"
// const dirPath = path.join(__dirname, 'Names');
// fs.rmdir(dirPath, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Directory deleted successfully!');
// }
// );
