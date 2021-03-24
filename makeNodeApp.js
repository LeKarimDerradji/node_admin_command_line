const fs = require('fs')


let directories = ['node_modules', 'public', 'views']
let subDirectories = ['javascripts', 'stylesheets']
let files = ['source.js', 'stylesheets.cvs']

const createFiles = (parentDir, path, data) => {
    fs.writeFileSync(parentDir+'/'+path+'/'+data, data)
}

const makeNodeAppDirectories = (name) => {
    fs.mkdirSync(name, {
        recursive: true
    }, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('New directory successfully created.')
        }
    })
}

const makeNodeAppSubDirectories = (parentDir, name) => {
    fs.mkdirSync(parentDir + '/' + name, {
        recursive: true
    }, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('New directory successfully created.')
        }
    })
}


for (const element of directories) {
    makeNodeAppDirectories(element);
    for (let i = 0; i < subDirectories.length; i++) {
        makeNodeAppSubDirectories(directories[i + 1], subDirectories[i]);
        createFiles(directories[i+1], subDirectories[i], files[i]);
    }
}

exports.directories = [...directories]