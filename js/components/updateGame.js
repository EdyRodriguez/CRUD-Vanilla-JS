export default class updateGame {
    constructor() {
        this.btnUpdate = document.getElementById('addUpdate');
        this.titleUpdate = document.getElementById('titleUpdate');
        this.descriptionUpdate = document.getElementById('descriptionUpdate');
        this.imageUrlUpdate = document.getElementById('imageUrlUpdate');
        
        this.alertUpdate = document.getElementById('alertUpdate');
    }

    onClick(callback) {
        this.btnUpdate.onclick = () => {

            if(this.titleUpdate.value === '' || this.descriptionUpdate.value === '' || this.imageUrlUpdate.value === ''){
                this.alertUpdate.classList.remove('d-none');
                this.alertUpdate.innerText = 'Los campos no pueden estar vacios';
                console.log("empty");
                return;
            }

            this.alertUpdate.classList.add('d-none');

            callback(this.titleUpdate.value, this.imageUrlUpdate.value, this.descriptionUpdate.value);

            this.titleUpdate.value = "";
            this.descriptionUpdate.value = "";
            this.imageUrlUpdate.value = "";
            this.formUpdate.classList.add('d-none');
        }
    }
}