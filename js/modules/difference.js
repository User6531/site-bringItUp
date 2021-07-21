export default class Difference {
    constructor({column,items,trigger}) {
        this.column = document.querySelector(column);
        this.items = this.column.querySelectorAll(items);
        this.trigger = this.column.querySelector(trigger);
        this.counter = 0;
    }

    hideTabs() {
        this.items.forEach((item, i, arr) => {
            if (i !== (arr.length - 1)) {
                item.style.display = 'none';
            }
            if (i !== (arr.length - 1)) {
                item.style.display = 'none';
            }
        });
    }

    bindTrigger() {
        this.trigger.addEventListener('click', () => {
            this.items[this.counter ].style.display = 'flex';
            this.counter ++;
            if (this.counter  === 3) {
                this.items[this.counter].style.display = 'none';
            }
        });
    }
    
    init() {
        this.hideTabs();
        this.bindTrigger();
    }
}