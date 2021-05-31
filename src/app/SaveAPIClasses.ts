import Classes from "./Classes";
import App from "./App";
import _OnLoad from "./APIClasses/_OnLoad";

export default class SaveAPIClasses {
    /**
     * @var {App} app App class object
     */
    public app: App;

    /**
     * Save all API classes into global class storage
     * 
     * @param {App} app App class object
     * @param {Classes} classes Storage object
     */
    public constructor(app: App, classes: Classes) {
        // Set app class
        this.app = app;

        // Set all classes
        classes.add("_OnLoad", new _OnLoad(this));
    }
}