export default class AddGame {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.imageUrl = document.getElementById('imageUrl');

        this.alert = document.getElementById('alert');
    }

    onClick(callback) {
        this.btn.onclick = () => {

            if(this.title.value === '' || this.description.value === '' || this.imageUrl.value === ''){
                this.alert.classList.remove('d-none');
                this.alert.innerText = 'Los campos no pueden estar vacios';
                return;
            }

            this.alert.classList.add('d-none');

            callback(this.title.value, this.description.value, this.imageUrl.value);

            this.title.value = "";
            this.description.value = "";
            this.imageUrl.value = "";
        }
    }
}