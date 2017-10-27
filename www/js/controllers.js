angular.module('starter.controllers', [])
  

  .controller('SignatureCtrl', function ($scope) {

  // body...
  var canvas = document.getElementById('signatureCanvas');
  var signaturePad = new SignaturePad(canvas);

  $scope.clearCanvas = function () {
    // body...
    signaturePad.clear();
  };
  $scope.saveCanvas = function () {
  	console.log("TEST");
    // body...
    var sigImg = signaturePad.toDataURL();
    console.log(sigImg);
    $scope.signature = sigImg;
  };
});