// installs console in s3 bucket

var fs = require('fs');
var path = require('path');;

var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

var basePath = '';
var files = [];
//TODO: change argv.bucket to the bucket name
console.log(`deploying console to marketing-dev-console.mymaas.net`)
process.stdout.write('uploading files...');

basePath = process.cwd() + '/dist/';
files = getAllFiles(basePath);

uploadSomeFiles()
.catch(error => {
    console.log("error:", error);
    console.log("\nstack:", error.stack);
    process.exit(1);
});


// chunk the upload (a bit) to avoid chaos
function uploadSomeFiles() {
  if(files.length == 0) {
    console.log("complete");
    return Promise.resolve();
  }

  process.stdout.write(".");

  let promises = [];
  for(let x = 0; x < 200; x++) {
    if(files.length == 0) {
      break; // we've run out
    }

    let file = files.pop();
    const params = {
      Bucket: "marketing-dev-console.mymaas.net",
      Key: file.replace(basePath, ''),
      Body: fs.readFileSync(file),
      ContentType: getContentType(file)
    };

    if(path.basename(file) === 'index.html') {
      params.CacheControl = 'no-store';
    }

    promises.push(s3.upload(params).promise());
  }

  return Promise.all(promises).then(uploadSomeFiles);
}

function getContentType(filename) {
  let extension = filename.substring(filename.lastIndexOf('.') + 1);
  switch(extension) {
      case "map": return "map";
      case "svg": return "image/svg+xml";
      case "png": return "image/png";
      case "jpg": return "image/jpg";
      case "gif": return "image/gif";
      case "html": return "text/html";
      case "js": return "application/javascript";
      case "css": return "text/css";
      default: return "application/octet-stream";
  }
}

function getAllFiles(dir, filelist) {
  filelist = filelist || [];
    
  let files = fs.readdirSync(dir);
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = getAllFiles(path.join(dir, file), filelist);
    } else {
      filelist.push(path.join(dir, file));
    }
  });

  return filelist;
}
