const getAllRequests = (req, res) =>{
  /** retrieve request data from db */
}

const addOneRequest = (req, res) =>{
  /** add one request to db */
}

const updateOneRequest = (req, res) =>{
  /** 
   * grab the request based on get params from db and update it 
   * e.g. req.body.params
   */ 
}

module.exports = (app, express)=>{
  return {
    retrieveAllRequests: retrieveAllRequests,
    addOneRequest: addOneRequest,
    updateOneRequest: updateOneRequest
  }
}