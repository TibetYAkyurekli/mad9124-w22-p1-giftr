class ResourceNotFoundException extends Error {
  constructor(...arg) {
    super(...arg);
    Error.captureStackTrace(this, ResourceNotFoundException);
    this.code = 404;
    this.status = "404";
    this.title = "Resource does not exist";
    this.description = this.message;
  }
}

export default ResourceNotFoundException;
