demo.state7 = function(){}
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffb5c5';
        console.log('state7')
        addChangeStateEventListeners()
    },
    update: function(){}
};