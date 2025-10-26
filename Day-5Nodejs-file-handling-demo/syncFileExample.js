const fs = require('fs');

// Creating a file synchronously
try {
  fs.writeFileSync('syncFile.txt', 'This is created synchronously.');
  console.log('✅ File created successfully (synchronously)');
} catch (error) {
  console.error('❌ Error creating file:', error);
}
