const fs = require('fs');

// Creating (or overwriting) a file asynchronously
fs.writeFile('asyncFile.txt', 'This is created asynchronously.', (error) => {
  if (error) {
    console.error('❌ Error creating file:', error);
    return;
  }
  console.log('✅ File created successfully (asynchronously)');
});

console.log('This will run first while file is being created...');
