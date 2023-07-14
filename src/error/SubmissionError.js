export default class SubmissionError extends Error {
  constructor(errors) {
    super('Submit Validation Failed');
    this.errors = errors;
    this.name = this.constructor.name;
    return this;
  }
}
