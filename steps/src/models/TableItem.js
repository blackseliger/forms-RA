import shortid from "shortid";

export default class TableItemModel {
    constructor(date, distance) {
        this.time = new Date(date);
        this.distance = distance;
        this.id = shortid.generate();
    }
} 