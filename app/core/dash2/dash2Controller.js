
(function () {
    'use strict';

    angular.module('app.todos.dash2', ['chart.js'])

            .controller('Dash2Controller', Dash2Controller);

            Dash2Controller.$inject = ['$scope', 'pagamentosService'];

    function Dash2Controller($scope, pagamentosService ) {
        var vm = this;

        $scope.carregado = false
        getTodos(); 



        function getTodos() {
            return pagamentosService.getTodos()
                    .then(function (data) {
                        vm.todos = data;
                        var dataAgora = new Date();
                        var dataFinal = new Date(dataAgora.getFullYear(), dataAgora.getMonth()+1,0);

                        returnDataSet(data,  new Date(dataAgora.getFullYear(), dataAgora.getMonth()-11,1),dataFinal)
                       
                    });
        }
        function returnDataSet(todos, dataInicial,dataFinal){
          
          var arr = todos.filter(
            function(f){ 
              return new Date(f.dataEfetivaLancamento.substring(6,10),(f.dataEfetivaLancamento.substring(3,5)*1),1)>=dataInicial &&
              new Date(f.dataEfetivaLancamento.substring(6,10),(f.dataEfetivaLancamento.substring(3,5)*1),1)<=dataFinal
            })
            
            var classificacoes = ["Pago","Pendente","Erro"]
            var valores = [0,0,0]
        
        
            for(var i=0;i<arr.length;i++){
              var indx=classificacoes.indexOf(arr[i].lancamentoContaCorrenteCliente.nomeSituacaoRemessa)
              if(indx==-1){
                classificacoes.push(arr[i].lancamentoContaCorrenteCliente.nomeSituacaoRemessa)
                valores.push(arr[i].valorLancamentoRemessa)
              }else{
                valores[indx] = valores[indx] +1
              }
            }


            $scope.labels = classificacoes
            $scope.data = valores
        }


    }
})();
