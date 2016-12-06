

angular
.module('app.helpers', [])
.factory('Helpers',function($http){
  /**
   * If no id is given to these functions it will return everything
   */
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
    return $http.get('/api/lessons',{
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


  return {
    getLessons: getLessons,
    getCategory: getCategory,
    getUsers: getUsers,
    getlessByCat: getlessByCat,
    getlessByUser: getlessByUser
  }
  
})
