
angular
.module('app.dash',['datatables'])
.controller('DashCtrl', function($scope, $state, $stateParams, authService, Helpers, $timeout, $http){
  if (!authService.showCurrent() /** ||!authService.showCurrent().teacherFlag */) {
    $state.go('splash')
  }
  vm = this;
  vm.lesson = {
    name: '',
    category: '',
    details: ''
  }
  vm.teacherId = $stateParams.input;
  console.log(vm.teacherId)
  vm.goLesson = (input) =>{
    console.log(input);
    $state.go("lesson",{input: input})
  }
  vm.initDash = () =>{
    vm.teacher = Helpers.getCache()
                    .LessByUser
                    .filter(user=>{
                      if(user.id===Number(vm.teacherId)) return user;
                    })[0];
    /**
     * !!!!!!!! THIS NEEDS TO BE CHANGED TO THE USERNAME OF THE PAGE !!!!!!!
     */
    vm.teacherName = vm.teacher.name;
    console.log("Teacher cache", vm.teacher);
  }

	vm.submitForm = function(isValid) {
		if (isValid) { 
			console.log(vm.lesson)
      let body = {
        userName: vm.teacherName,
        name: vm.lesson.name,
        category: vm.lesson.category,
        details: vm.lesson.details
      }
      $http.post('/api/lessons',body)
      .then(result=>{
        console.log("Response from server:", result);
        vm.lesson.$setPristine;
        for(key in vm.lesson){
          vm.lesson[key] = ''
        }
        /**
         * reinitialize cache since database has changed
         */
        Helpers.init()
        .then(()=>{
          vm.initDash()
        });
      })
      .catch(err=>{
        console.log("Error creating new lesson", result);
        vm.lesson.$setPristine;
        for(key in vm.lesson){
          vm.lesson[key] = ''
        }
      })
		}else{
      let invalid = ""
      for(key in vm.lesson){
        if(vm.lesson[key].length===0){
          invalid += key+", "
        }
      }
      alert("To create a new lesson, please correct the following: \n"+invalid.substr(0, invalid.length-2));
    }
	};

  $timeout(()=>{
    if(Object.keys(Helpers.getCache()).length === 0){
      Helpers.init()
      .then(()=>{
        vm.initDash()
      });
    }else{
      vm.initDash()
    }
  }, 500)

  return vm;
})