const retrieveAllRequests = (req, res) =>{
  /** retrieve request data from db */
}

const addOneRequest = (req, res) =>{
  /** add one request to db */
}

const updateOneRequest = (req, res) =>{
  /** grab the request from db and update it */ 
}

module.exports = (app, express)=>{
  return {
    retrieveAllRequests: retrieveAllRequests,
    addOneRequest: addOneRequest,
    updateOneRequest: updateOneRequest
  }
}