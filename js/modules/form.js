export default class Form {
    constructor({form, path}) {
        try {
            this.form = document.querySelector(form);
            this.email = this.form.querySelector('input[name="email"]');
            this.statusMessage = {
                loading: 'https://acegif.com/wp-content/uploads/loading-25.gif',
                successful: 'https://img.icons8.com/emoji/452/check-mark-emoji.png',
                error: 'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-450x450.png'
            };
            this.inputs = this.form.querySelectorAll('input');
            this.select = this.form.querySelector('select');
            this.path = path;
        } catch (error) {}
    }

    clearFormsValue() {
        this.inputs.forEach(input => {
            input.value = '';
        });
        if(this.select) {
            this.select.value = 'New-York';
        }
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    }

    checkEmailvalue() {
        var reg = /[а-яА-ЯёЁі]/gi;
        this.email.addEventListener('input', () => {
            this.email.value = this.email.value.replace(reg, '');
        });
    }

    initMask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
    
            if(elem.setSelectionRange) {
                elem.setSelectionRange(pos,pos);
            }
        };
    
        function createMask(event) {
            let matrix = '+1(___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (val.length <= def.length) {
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i>=val.length ? '' : a;
            });
    
            if (event.type === 'blur') {
                if(this.value.length == 4) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    
        let inputs = document.querySelectorAll('[name="phone"]');
    
        inputs.forEach(input=>{
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    alertMessage(status) {
        this.form.style.display = 'none';

        const alertImg = document.createElement('img');
        alertImg.style.cssText = `
            display: block;
            margin: 0 auto;
            width: 200px;
        `;
        alertImg.src = status;

        this.form.parentNode.append(alertImg);

        setTimeout(() => {
            this.form.style.display = 'block' ;
            alertImg.remove();
        }, 3000);
    }

    bindForm() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const loading = document.createElement('img');
            loading.style.cssText = `
                display: block;
                margin: 0 auto;
                width: 50px;
            `;
            loading.src = this.statusMessage.loading;
    
            this.form.append(loading);

            const formData = new FormData(this.form);

            this.postData(this.path, formData)
                .then(res => {
                    this.alertMessage(this.statusMessage.successful);
                    console.log(res);
                })
                .catch(res => {
                    this.alertMessage(this.statusMessage.error);
                    console.log(res);
                })
                .finally(()=>{
                    loading.remove();
                    this.clearFormsValue();
                });
        });
    }

    init() {
        try {
            this.initMask();
            this.checkEmailvalue();
            this.bindForm();
        } catch (error) {}
    }
}