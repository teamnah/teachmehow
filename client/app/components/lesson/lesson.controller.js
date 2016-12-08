angular
.module('app.lesson', [])
.controller('LessonCtrl', function($state, $stateParams, Helpers, authService, $timeout, $http) {
  vm = this;
  let userExists = authService.showCurrent();
  if (!userExists) {
    $state.go('splash');
  };
  vm.id = $stateParams.input;

  vm.goLesson = (input) => {
    $state.go("lesson", {
      input: input
    });
  };

  vm.goProfile = (input) =>{
    $state.go("prof", {
      input: input
    });
  };

  vm.bookLesson = function(ev) {
    swal({
      title: "Contact Teacher",
      text: "To book this lesson,\ncontact the teacher at:\n"+vm.Lesson.UserName.spare1,
      imageUrl: "http://marketingland.com/wp-content/ml-loads/2015/12/email_ss_1920.png"
    });
  };

  vm.initLesson = () => {
    vm.Lesson = Helpers
      .getCache()
      .Master
      .filter(lesson => {
        if(lesson.id === +vm.id) return lesson;
      })[0];

    vm.relLessons = Helpers
      .getCache()
      .LessByCat
      .filter(lesson => {
        if(lesson.name === vm.Lesson.CategoryName.name) return lesson;
      })[0]
      .Lessons
      .filter(lesson => {
        if(lesson.name !== vm.Lesson.name) return lesson;
      });
    
    /**
     * ping the giphy api to get illustrate the lesson page
     */
    vm.picture = vm.Lesson.UserName.picture || "http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg";
    $http.get(`http://api.giphy.com/v1/gifs/search?q=${vm.Lesson.name}&api_key=dc6zaTOxFJmzC&limit=5`)
    .then(result => {
      vm.gifs = result.data.data.map(gif => {
        return gif.images.fixed_height_small.url;
      });
      vm.randGif = vm.gifs[Math.floor(Math.random() * vm.gifs.length)];
    });
  };

  $timeout(() => {
    if(Object.keys(Helpers.getCache()).length === 0) {
      Helpers.init()
      .then(() => {
        vm.initLesson();
      });
    } else {
      vm.initLesson();
    };
  }, 500);
  return vm;
});