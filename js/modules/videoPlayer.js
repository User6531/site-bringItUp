export default class VideoPlayer {
    constructor({trigger, popup}) {
        this.triggers = document.querySelectorAll(trigger);
        this.popup = document.querySelector(popup);
    }
    openPopup() {
        this.triggers.forEach(trgr=>{
            trgr.addEventListener('click', ()=>{

                if (document.querySelector('iframe#frame')) {
                    this.popup.style.display = 'flex';
                } else {
                    const videoPath = trgr.parentNode.dataset.url;
                    this.createPlayer(videoPath);
                }

            });
        });
    }
    closePopup(){
        this.popup.addEventListener('click', (e)=>{
            const target = e.target;
            if (target && target == this.popup ||
                target && target.matches('.close')) {
                this.popup.style.display = 'none';
                this.player.pauseVideo();
            }
        });
    }
    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
          });
          console.log(this.player);
          this.popup.style.display = 'flex';

    }
    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.openPopup();
        this.closePopup();
    }
}