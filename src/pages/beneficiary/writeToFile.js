const fs = require('fs');

const addBeneficiaryToFile = (beneficiaryData) => {
  try {
    // Read existing data from the file
    let existingData = fs.readFileSync('beneficiary.json', 'utf8');
    existingData = existingData ? JSON.parse(existingData) : [];

    // Add new beneficiary data
    existingData.push(beneficiaryData);

    // Write updated data back to the file
    fs.writeFileSync('beneficiary.json', JSON.stringify(existingData));
    
    console.log('Beneficiary data added successfully!');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
};

export default addBeneficiaryToFile;

// module.exports = addBeneficiaryToFile;
