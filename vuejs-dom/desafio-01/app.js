new Vue({
    el: '#desafio',
data: {
    nome: 'Airton Oliveira',
    idade:'28',
    imageSrc: 'https://academiagfai.com.br/apf/wp-content/uploads/2018/05/web-development-company.png'
},
methods: {
    multiplicarIdade: function() {          
       return this.idade * 3;
    },
    randomNumber: function() {          
        return Math.random();
     },
     changeNome: function(event) {
    	this.nome = event.target.value;
    }
    
}
});

