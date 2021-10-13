
export default class Model {

    constructor(){
        this.view = null;
        this.games = JSON.parse(localStorage.getItem('games'));
        if( !this.games || this.games.length === 0 ){
            this.currentId = 1;
            this.games = [];
        }else{
            this.currentId = this.games[this.games.length - 1 ].id + 1;
        }

    }

    setView(view) {
        this.view = view;
    }

    getGames() {
        return this.games.map( game => ({...game}) );
    }

    addGame(title, description, imageUrl) {
        const game = { 
            id: this.currentId++,
            title,
            description,
            imageUrl,
            completed: false,
            update:true
        };

        this.games.push(game);

        this.save();
        return {...game};
    }

    findGame(id){
        return this.games.findIndex( t => t.id === id);
    }

    removeGame(id){
        const index = this.findGame(id);
        this.games.splice(index, 1);
        this.save();
    }

    updateGame(id, title, description, imageUrl, completed){
        
       var gameid =  this.findGame(id);

        console.log(completed);
       const gamecontent = { 
            id: gameid,
            title,
            description,
            imageUrl,
            completed: completed,
            update:true
        };
        this.games.splice(gameid, 1, gamecontent);
        
        this.save();
    }

    toogleCompleted(id){
        const index = this.findGame(id);
        const game = this.games[index];
        game.completed = !game.completed;
        this.save();
    }

    save(){
        localStorage.setItem('games', JSON.stringify(this.games));
        document.location.reload();
    }

}