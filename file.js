const fs = require("fs");

//READING FILE

// fs.readFile('./docs/blog.txt', (error, data) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(data.toString)
// })

//WRITING FILE

// fs.writeFile('./docs/blog.txt', 'hello world', () => {
//   console.log('file written')
// })

// fs.writeFile('./docs/blog1.txt', 'hello oufous', () => {
//   console.log('file written')
// })

//DIRECTORIES

// if (!fs.existsSync("./assets")) {
// 	fs.mkdir("./assets", (err) => {
// 		if (err) console.log(err);
// 		console.log("folder created");
// 	});
// } else {
// 	fs.rmdir('./assets', (err) => {
// 		if (err)
// 			console.log(err)
// 		console.log('folder deleted')
// 	})
// }

//DELETING FILES

if (fs.existsSync('./docs/delete.txt')) {
	fs.unlink('./docs/delete.txt', (err) => {
		if (err)
			console.log(err)
	})
	console.log('deleted file')
}