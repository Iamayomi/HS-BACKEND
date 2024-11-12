// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  const multer = require('multer');
  const fs = require('fs');
  const path = require('path');
  const baseUrl="http://localhost:8080"
  
  
  // Configure multer for file uploads
  const upload = multer({
    dest: path.join(__dirname, '../../uploads/'),
  });
  

  return async context => {
   // console.log(context.data)
    const { uri,filename} = context.data.data; //filename, mimetype 
   // console.log(filename)
       // Prepare file metadata for storage
       const base64Data = uri.replace(/^data:\w+\/\w+;base64,/, "");
       const buffer = Buffer.from(base64Data, 'base64');
       const uniqueFilename = `${Date.now()}-${filename}`;
       // Set the local file path
       const filePath = path.join(__dirname, '../../uploads', uniqueFilename);
       // Define the external drive path (ensure this path exists)
      //const externalDrivePath = path.join('E:\\my-uploads', uniqueFilename);


       // Write the file to the filesystem
       await fs.promises.writeFile(filePath, buffer);
       const fileUrl = `${baseUrl}/fileuploads/${uniqueFilename}`

       context.data = {
         filename:uniqueFilename,
         path:filePath,
         mimetype:"",
         size:buffer.length,
         url:fileUrl
       };
//console.log(context.data)

   return context;
  };
};
