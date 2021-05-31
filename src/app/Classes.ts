export default class Classes {
    /**
     * @var {JSON} classes All the registered classes
     */
    private classes: JSON;

    /**
     * Used for storing globaly accesable class APIs to be used from anywere in the application
     */
    public constructor() {
        // Initialize class properties
        this.classes = JSON.parse("{}");
    }

    /**
     * Get a registered class
     * 
     * @param {string} name Name of the class to get
     */
    public get(name: string): object {
        return this.classes[name];
    }

    /**
     * Add a class to storage
     * 
     * @param {string} name Name to use for accessing this class
     * @param {object} value Class object
     */
    public add(name: string, value: object): void {
        this.classes[name] = value;
    }

    /**
     * Remove a class from storage
     * 
     * @param {string} name Name of the class to remove
     */
    public remove(name: string): void {
        this.classes[name] = null;
    }
}