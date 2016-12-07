

angular
.module('app.helpers', [])
.factory('Helpers',function($http){
  /**
   * If no id is given to these functions it will return everything
   */
  const cache = {};

  const getLessons = (lessonId)=>{
    return $http.get('/api/lessons',{
      params: {
        lessonId: lessonId
      }
    })
  }

  const getCategory = (categoryId)=>{
    return $http.get('/api/category',{
      params: {
        id: categoryId
      }
    })
  }

  const getUsers = (userId)=>{
    return $http.get('/api/users',{
      params: {
        id: userId
      }
    })
  }

  const getlessByCat = (categoryId)=>{
    return $http.get('/api/lessByCat',{
      params: {
        id: categoryId
      }
    })
  }

  const getlessByUser = (userId)=>{
    return $http.get('/api/lessByUser',{
      params: {
        id: userId
      }
    })
  }

  const init = () =>{
    return getLessons()
    .then(result=>{
      cache.Lessons = result.data;
      return getCategory()
    })
    .then(result=>{
      cache.Category = result.data
      return getUsers()
    })
    .then(result=>{
      cache.Users = result.data
      return getlessByCat()
    })
    .then(result=>{
      cache.LessByCat = result.data
      return getlessByUser()
    })
    .then(result=>{
      cache.LessByUser = result.data

      /**
       * Combines all data and stores in cache for quick
       * access. Helper functions are still available
       * 
       */
      let tmp = [];
      tmp = cache.Lessons.map(lesson=>{
        let UserName = cache.Users.filter(user=>{
          if(user.id===lesson.UserId){
            return user.name;
          }
        })
        let CategoryName = cache.Category.filter(cat=>{
          if(cat.id===lesson.CategoryId){
            return cat.name;
          }
        })
        return {
          id: lesson.id,
          name: lesson.name,
          rating: lesson.rating,
          details: lesson.details,
          UserId: lesson.UserId,
          UserName: UserName[0],
          CategoryId: lesson.CategoryId,
          CategoryName: CategoryName[0],
          createdAt: lesson.createdAt,
          updatedAt: lesson.updatedAt
        }
      })
      cache.Master = tmp;
      console.log("Finished initializing helpers", cache);

      return cache;

    })
    .catch(err=>console.log(err));
  }

  const getCache = ()=>{
    return cache;
  }

  init();


  return {
    init: init,
    getCache: getCache,
    getLessons: getLessons,
    getCategory: getCategory,
    getUsers: getUsers,
    getlessByCat: getlessByCat,
    getlessByUser: getlessByUser
  }
  
})
