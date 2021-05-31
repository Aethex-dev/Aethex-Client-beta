import Classes from "./Classes";
import SaveAPIClasses from "./SaveAPIClasses";

export default class App {
    /**
     * @var {any} mainVue Stores the self instance of the entry point for Vue
     */
    public mainVue: any;

    /**
     * @var Classes Class access object
     */
    public classes: Classes;

    /**
     * Entry point for the application
     * 
     * @param {Any} MainVue MainVue object
     */
    public constructor(mainVue: any) {
        // Store MainVue
        console.log("[ Aethex ] Starting application class");
        this.mainVue = mainVue;
        console.log(
            "[ Aethex ] mainVue instance has been stored. starting application logic"
        );
    
        // Start logic
        this.ready();
    }

    /**
     * Application logic entry point
     */
    public ready() {
        // Setup global API class access
        var classes = this.classes = new Classes();
        new SaveAPIClasses(this, classes);
    }
}