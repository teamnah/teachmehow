angular
.module('app.youtube', [])
.controller('YoutubeController', function ($scope, $state, Helpers, $sce, $stateParams) {
  let vmYoutube = this;
  vmYoutube.channelId;
  vmYoutube.lessonID = $stateParams.input;

  vmYoutube.init = function () {
    vmYoutube.channelId = Helpers.getCache().Lessons[vmYoutube.lessonID - 1].youtubeKey;
    console.log('fadsa', vmYoutube.channelId);
    // console.log('this is vmYoutube in classroom ', vmYoutube.cache);
    // console.log('heres the id  ', vmYoutube.id);
  };

  vmYoutube.getChannelId = function () {
    let channel = $sce.trustAsResourceUrl('https://www.youtube.com/embed/live_stream?channel=' + vmYoutube.channelId);
    return channel;
  };

  if (Object.keys(Helpers.getCache()).length === 0) {
    Helpers.init()
      .then(() => {
        vmYoutube.init();
      });
  } else {
    vmYoutube.init();
  }
});
