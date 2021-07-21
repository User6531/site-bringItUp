export default class Download {
    constructor({triggers, path}) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = path;
    }

    downloadFile() {
        const file = document.createElement('a');
        file.setAttribute('href', this.path);
        file.setAttribute('download', 'nice_picture');
        
        document.body.append(file);
        file.style.display = 'none';
        console.log(file);
        file.click();

        file.remove();
    }

    bindTrigger() {
        this.triggers.forEach(trgr=>{
            trgr.style.cursor = 'pointer';
            trgr.addEventListener('click', ()=>{
                this.downloadFile();
            });
        });
    }

    init() {
        this.bindTrigger();
    }
}