export default class VideoPlayer {
    constructor({trigger, popup}) {
        this.triggers = document.querySelectorAll(trigger);
        this.popup = document.querySelector(popup);
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }
    openPopup() {
        this.triggers.forEach((trgr, i )=>{
            if ((i+1) % 2 == 0) {
                trgr.setAttribute('data-closed', 'true');
            }

            trgr.addEventListener('click', ()=>{
                if (trgr.dataset.closed !== 'true') {
                    this.btn = trgr;
                    if (document.querySelector('iframe#frame')) {
                        this.popup.style.display = 'flex';
                        if (this.videoPath !== trgr.dataset.url){
                            this.videoPath = trgr.dataset.url;
                            this.player.loadVideoById({videoId: this.videoPath});
                        }
                    } else {
                        this.videoPath = trgr.dataset.url;
                        this.createPlayer(this.videoPath);
                    }
                }
            });
        });
    }
    onPlayerStateChange(state) {
        const lockedVideo = this.btn.parentNode.nextElementSibling;
        const svg = this.btn.querySelector('svg').cloneNode(true);
        try {
        const playCircle = lockedVideo.querySelector('.play__circle');
            // if (state.data === 0) { => to the end 
            if (parseInt(this.player.getCurrentTime()) > 1000) {
                lockedVideo.querySelector('svg').remove();
                playCircle.append(svg);
                playCircle.classList.remove('closed');
                playCircle.nextElementSibling.classList.remove('attention');
                playCircle.nextElementSibling.innerHTML = 'play video';
                lockedVideo.style.cssText = `
                    opacity: 1;
                    -webkit-filter: grayscale(0);
                    filter: grayscale(0);
                `;
                playCircle.parentNode.setAttribute('data-closed', 'false');
            }
        } catch (error) {}
    }
    closePopup(){
        this.popup.addEventListener('click', (e)=>{
            const target = e.target;
            if (target && target == this.popup ||
                target && target.matches('.close')) {
                this.popup.style.display = 'none';
                try {
                    this.player.pauseVideo();
                } catch (error) {}
            }
        });
    }
    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
          });
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

