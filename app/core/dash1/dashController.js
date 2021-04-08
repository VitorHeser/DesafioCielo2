
(function () {
    'use strict';

    angular.module('app.todos.dash1', ['chart.js'])

            .controller('Dash1Controller', Dash1Controller);

            Dash1Controller.$inject = ['$scope', 'pagamentosService'];

    function Dash1Controller($scope, pagamentosService ) {
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
                        $scope.datasetOverride = [
                            {
                                label: 'Override Series A',
                                borderWidth: 1,
                                type: 'bar'
                            }
                        ];
                        
                    });
        }
        function returnDataSet(todos, dataInicial,dataFinal){
            var dataset = []
            var labels = []
            for(var data = dataInicial; data<dataFinal;data = new Date(data.getFullYear(), data.getMonth()+1,1)){
              
            labels.push(format1(data))

              var dado = 0
              var arr = todos.filter(
              function(f){ 
                return (f.dataEfetivaLancamento.substring(6,10)+"-"+(f.dataEfetivaLancamento.substring(3,5)*1)).indexOf(data.getFullYear()+"-"+(data.getMonth()+1))>-1
              })
        
              for(var i=0;i<arr.length;i++){
                dado=dado+arr[i].valorLancamentoRemessa
              }
              dataset.push(dado)
            }
            $scope.labels = labels
            $scope.data = [dataset]
        }


        function format1(data){
          var dia  = data.getDate().toString(),
              diaF = (dia.length == 1) ? '0'+dia : dia,
              mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
              mesF = (mes.length == 1) ? '0'+mes : mes,
              anoF = data.getFullYear();
          return mesF+"/"+anoF;
        }  
    }
})();
