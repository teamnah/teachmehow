
angular
.module('app.lesson', [])
.controller('LessonCtrl',function($state, $stateParams, Helpers, authService, $timeout, $http){
  vm = this;
  let userExists = authService.showCurrent();
  if (!userExists) {
    $state.go('splash')
  }
  vm.id = $stateParams.input;
  console.log("Looking for lesson id:", vm.id);

  vm.goLesson = (input) =>{
    console.log(input);
    $state.go("lesson",{input: input})
  }

  vm.goProfile = (input) =>{
    console.log(input);
    $state.go("prof",{input: input})
  }

  vm.bookLesson = function(ev) {
    console.log("booking lesson....");
  };

  vm.initLesson = () =>{
    vm.Lesson = Helpers.getCache()
                       .Master
                       .filter(lesson=>{
                         if(lesson.id===Number(vm.id)) return lesson
                       })[0]
    vm.relLessons = Helpers.getCache()
                       .LessByCat
                       .filter(lesson=>{
                         if(lesson.name===vm.Lesson.CategoryName.name) return lesson
                       })[0]
                       .Lessons
                       .filter(lesson=>{
                         if(lesson.name!==vm.Lesson.name) return lesson
                       })
  
    console.log("Lesson found: ", vm.Lesson);
    console.log("Related Lessons found: ", vm.relLessons);
    vm.picture = vm.Lesson.UserName.picture || "http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg";
    $http.get(`http://api.giphy.com/v1/gifs/search?q=${vm.Lesson.name}&api_key=dc6zaTOxFJmzC&limit=5`)
    .then(result=>{
      vm.gifs = result.data.data.map(gif=>{
        return gif.images.fixed_height_small.url
      })
      vm.randGif = vm.gifs[Math.floor(Math.random() * vm.gifs.length)]
    })
  }



  $timeout(()=>{
    if(Object.keys(Helpers.getCache()).length === 0){
      Helpers.init()
      .then(()=>{
        vm.initLesson()
      });
    }else{
      vm.initLesson()
    }
  }, 500)
  console.log("VM id = ", vm.id);
  return vm;
})