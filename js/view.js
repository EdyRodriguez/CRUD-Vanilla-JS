import AddGame from "./components/addGame.js";

export default class View {

    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addGameForm = new AddGame();
        this.addGameForm.onClick( (t , d,c) => this.addGame(t,d,c) );  
        this.updateForm = document.getElementById('formUpdate');
        this.titleUpdate = document.getElementById('titleUpdate');
        this.imageUrlUpdate = document.getElementById('imageUrlUpdate');
        this.descriptionUpdate = document.getElementById('descriptionUpdate');
        this.btnUpdate = document.getElementById('btnUpdate');
    }

    render() {
        const games = this.model.getGames();
        if( games && games.length > 0)
            games.forEach( t => this.createRow(t) );
    }

    setModel(model) {
        this.model = model;
    }

    addGame(title, description, imageUrl){
        const game = this.model.addGame(title, description, imageUrl);
        this.createRow(game)
    }

    removeGame(id){
        this.model.removeGame(id);
        document.getElementById(id).remove();
    }

    updateGame(id){
        //this.model.updateGame(id);
        
        console.log(id);
        
    }

    toogleCompleted(id){
        this.model.toogleCompleted(id);
    }

    settingUpdate(game){
        this.titleUpdate.value=""+game.title+"";
        this.descriptionUpdate.value=""+game.description+"";
        this.imageUrlUpdate.value=""+game.imageUrl+"";
        this.updateForm.classList.remove('d-none');
        this.btnUpdate.onclick = () => {
            console.log(game.id, this.titleUpdate.value, this.descriptionUpdate.value, this.imageUrlUpdate.value, game.completed);
            this.model.updateGame(game.id, this.titleUpdate.value, this.descriptionUpdate.value, this.imageUrlUpdate.value, game.completed);

        }
    }
    createRow(game) {
        const row = this.table.getElementsByTagName('tbody')[0].insertRow();
        row.setAttribute('id', game.id);
        row.innerHTML = `
            <td>${game.title}</td>
            <td>${game.description}</td>
            <td class="text-center></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
        `;
        
        const link = document.createElement('IMG');
        link.setAttribute("src", ""+ game.imageUrl +" ");
        link.setAttribute("width", "60");
        link.setAttribute("height", "80");
        row.children[2].appendChild(link);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = game.completed;
        checkbox.onclick = () => this.toogleCompleted(game.id);
        row.children[3].appendChild(checkbox);

        const updateBtn = document.createElement('button');
        updateBtn.classList.add('btn', 'btn-primary', 'mb-1');
        updateBtn.innerHTML = '<i class="fa fa-edit"></i>';
        updateBtn.onclick = () => this.settingUpdate(game) ;
        row.children[4].appendChild(updateBtn);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeGame(game.id) ;
        row.children[5].appendChild(removeBtn);
        
    }
}