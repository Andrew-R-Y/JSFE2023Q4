import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL, {
            apiKey: '291aaf093f8f4f5a9699663a8414cc4e',
        });
    }
}

export default AppLoader;
