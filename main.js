
let width=14*64; //896;
let height=7*64; //448;

let config = {
    type: Phaser.AUTO,


    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100*3 },
            debug: true,
        }
    },
    scene: [
        new Ui(),

        new Tableau_Perso ("In Space"), 
        new Tableau08("CAMERA"),
        new Tableau10("Le zoo de Kaaris"),
        new Tableau09("a moi"),
        new Tableau01("Des plateformes"),
        new Tableau00("Des étoiles"),
        new Tableau00A("JDG"),

        new Tableau02("Plein d'étoiles"),
        new Tableau03("Des plateformes qui bougent"),
        new Tableau04("Jouer avec les groupes"),
        new Tableau05("Extend un tableau"),
        new Tableau06("Un monstre!"),
        new Tableau07("Un monstre volant!"),
        

    ],
    width: width,
    height: height,
    scale: {
        mode: Phaser.Scale.FIT,
        orientation:Phaser.Scale.LANDSCAPE,
        parent: 'game',
        width: width,
        height: height,
        min: {
            width: 0,
            height: 0
        },
        max: {
            width: width*1.5,
            height: height*1.5
        },
        autoCenter:Phaser.Scale.Center.CENTER_BOTH

    },
    autoRound: false
};
let game;
function resize() {
    /*
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if(windowWidth<width || windowHeight<height){
        if(windowRatio < gameRatio){
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else {
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }else{
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }

     */

}
window.onload = function() {
    game=new Phaser.Game(config);
    window.addEventListener("resize", resize, false);
    window.addEventListener("scroll", resize, false);
}