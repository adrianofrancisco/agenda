angular.module('myApp',[]).controller('Pessoa', function ($scope, $http) {
    $scope.pesquisa = "";

    $scope.novo = function () {
        $scope.pessoa = {
            name: null,
            phone: null,
            link: null
        };
    }

    function atualizarListagem() {
        $scope.novo();
        $http.get('http://localhost:8080/pessoas/').
        then(function (response) {
            var data = response.data;
            $scope.pessoas = data._embedded.pessoas;
        });
    }

    $scope.gravar = function (formValid) {
        if (formValid) {
            if ($scope.pessoa.link == null) {
                return $http.post('http://localhost:8080/pessoas/', $scope.pessoa).success(function (data, status, headers, config) {
                            atualizarListagem();
                            document.getElementById('collapseBtn').click();
                        });
            } else {
                return $http.put($scope.pessoa.link, $scope.pessoa).success(function (data, status, headers, config) {
                            atualizarListagem();
                            document.getElementById('collapseBtn').click();
                       });
            }
        } else {
            alert('Erro ao gravar o contato, verifique se preencheu os campos corretamente.');
            return false;
        }
    }
})