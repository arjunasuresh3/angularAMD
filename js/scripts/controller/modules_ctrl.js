define(["app","ngload!service/dataServices","directive/write","directive/navMenu"],function(a){a.register.controller("ModulesController",["$scope","$log","DeferredObject","DeferredString","$rootScope",function(a,b,c,d){c.get("This is defered response",2e3).then(function(b){a.obj_response=b}),a.str_response=d.get("Show case ngWrite with promise",1e3)}])});