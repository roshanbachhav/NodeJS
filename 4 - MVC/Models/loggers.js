const path = require("path");
const fs = require("fs");

const loginUserData = [];

module.exports = class LoggersData {
  constructor(email, password) {
    this.email = email;
    this.passowrd = password;
  }

  save() {
    const filePath = path.join(__dirname, "../data", "tempDatabase.json");

    // Read the file to get existing data
    fs.readFile(filePath, (err, data) => {
      let existingData = [];
      if (!err && data.length > 0) {
        try {
          existingData = JSON.parse(data); // Parse existing JSON array
        } catch (parseErr) {
          console.error("Error parsing JSON:", parseErr);
        }
      }

      // Add the new data
      existingData.push(this);

      // Write the updated array back to the file
      fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (error) => {
        if (error) {
          console.log("Oops! Something went wrong with file", error);
        } else {
          console.log("Data saved successfully!");
        }
      });
    });
  }

  static getAll() {
    return loginUserData;
  }
};
