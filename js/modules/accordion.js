export default class Accordion {
    constructor({triggers, blocks}) {
        this.triggers = document.querySelectorAll(triggers);
        this.blocks = document.querySelectorAll(blocks);
    }

    bindTrigger(){
        this.triggers.forEach((trgr, i)=>{
            trgr.addEventListener('click',()=>{
                this.blocks.forEach((block, k)=>{
                    if (i == k) {
                        if (block.style.display == 'block') {
                            block.classList.add('animated', 'fadeOut');
                            setTimeout(()=>{
                                block.classList.remove('animated', 'fadeOut');
                                block.style.display = 'none';
                                }, 600);
                        } else {
                            block.classList.add('animated', 'fadeIn');
                            block.style.display = 'block';
                            setTimeout(()=>block.classList.remove('animated', 'fadeIn'), 600);
                        }
                    }
                });
            });
        });
    }

    init(){
        this.bindTrigger();
    }
}