import app from './app.js';
import { config } from './config/index.js';
// import { sequelize } from './models';

// async function start() {
//     await sequelize.authenticate();
//     // eslint-disable-next-line no-console
//     console.log('Database module initialized');
// }

async function listeningServer() {
    app.listen(config.PORT, () => {
        console.log(`Server listened on port: ${config.PORT}`);
    });
}
listeningServer().catch((error) => {
    console.error(error);
    process.exit(0);
});