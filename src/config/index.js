if (process.env.NODE_ENV !== 'production') {
    const path = require('path');
    require('dotenv').config({ path: path.join(__dirname, '../environments/environments.env') });
}