const admin = require("firebase-admin");
const serviceAccount = require("./admin_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;