import express  from "express";
import conversionController from './controllers/convertsion.js';

const PORT = 5001;

class Application{
    useMiddleware(){
        this.app.use(express.json());
        this.app.use('/conversion', conversionController);
    }

    listen(){
        this.app.listen(PORT, () => {
            console.log(`Application listerning on port ${PORT}....`)
        })
    }
    async main() {
        this.app = express();
        this.useMiddleware();
        this.listen();
       
    }
}

export default Application;