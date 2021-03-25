const fs = require('fs')

// Check if the number of argument entered is strictly four.
if (process.argv.length !== 4) {
    console.log('usage: node rename.js _dirname newFileName')
    process.exit(1)
}

// Retrieve stats object from the first argument passed by user
const stats = fs.statSync(process.argv[2])

// Check if the _dirPath exists.

if(!fs.existsSync(process.argv[2])) {
    console.log(`${process.argv[2]} does not exist`)
    process.exit(1)
}

// Check if the second argument is a directory
if(!stats.isDirectory()) {
    console.log('please enter a valid directory name as a first argument')
    process.exit(1)
}



/* Read all files in the directories, gather the files into an array, console.log them, 
renaming them by the new_name passed as a third arg. by the user.
*/
fs.readdir(process.argv[2], (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\nCurrent directory filenames:");
        for (let i = 0; i < files.length; i++) {
            console.log(files[i])
            fs.renameSync(process.argv[2]+'/'+files[i], process.argv[2]+'/'+ process.argv[3]+ '_' + [i] + '.txt')
        }
    }
})


