
(function () {
    'use strict';

    angular.module('app.todos.dash3', ['chart.js'])

            .controller('Dash3Controller', Dash3Controller);

            Dash3Controller.$inject = ['$scope', 'pagamentosService'];

    function Dash3Controller($scope, pagamentosService ) {
        var vm = this;

        $scope.carregado = false
        getTodos(); 



        function getTodos() {
            return pagamentosService.getTodos()
                    .then(function (data) {
                        vm.todos = data;
                        var dataAgora = new Date();
                        var dataFinal = new Date(dataAgora.getFullYear(), dataAgora.getMonth()+1,0);

                        $scope.datasetOverride = [
                          {
                              label: 'Override Series A',
                              borderWidth: 1,
                              type: 'bar'
                          }
                      ];
                        returnDataSet(data,  new Date(dataAgora.getFullYear(), dataAgora.getMonth()-11,1),dataFinal)
                       
                    });
        }
        function returnDataSet(todos, dataInicial,dataFinal){
          var objs = []
          var bancos2 = []
            
          var arr = todos.filter(
            function(f){ 
              return new Date(f.dataEfetivaLancamento.substring(6,10),(f.dataEfetivaLancamento.substring(3,5)*1),1)>=dataInicial &&
              new Date(f.dataEfetivaLancamento.substring(6,10),(f.dataEfetivaLancamento.substring(3,5)*1),1)<=dataFinal
          })
          
          for(var i=0;i<arr.length;i++){
            var indx=bancos2.indexOf(arr[i].nomeBanco)
            if(indx==-1){
              var obj = {
                banco: arr[i].nomeBanco,
                valor: arr[i].valorLancamentoRemessa,
                qtd: 1 
              }
              objs.push(obj)
              bancos2.push(arr[i].nomeBanco)
            }else{
              objs[indx].valor = objs[indx].valor + arr[i].valorLancamentoRemessa
              objs[indx].qtd = objs[indx].qtd + 1
            }
          }
      
          //Ordenar Lista de Objetos
          objs = objs.sort(function(a,b){
            return a.valor < b.valor ? 1 : -1
          })

          var bancos = []
          var valores = []
          var qtds = []


          for(var i=0;i<objs.length;i++){
            bancos.push(objs[i].banco)
            valores.push(objs[i].valor)
            qtds.push(objs[i].qtd)
          }

          $scope.labels = bancos
          $scope.data = [valores]
        }
    }
})();
