angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getData method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
  $scope.getMessages = function() {
    var getDataPromise = messageService.getMessages();
    getDataPromise.then(function(response) {
      $scope.messages = response;
    })
  };


  $scope.getCookies = function() {
      messageService.getCookies().then(function(response) {
      $scope.cookies = response;
    })
  };
  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the 
  //input box), 
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.
  $scope.postMessage = function(message) {
    messageService.postMessage(message).then(function(response) {
      console.log(response);
    });
  }

  $scope.postCookie = function(cookie) {
   
    messageService.postCookie(cookie).then(function(response) {
      console.log(response);
      $scope.getCookies();
    });
  }

  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
    $scope.getMessages();
    $scope.getCookies();
    }, 1500)

  })
