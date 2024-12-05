const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import app.js
const { expect } = chai;

chai.use(chaiHttp);

describe('API Routes', () => {
  // Test GET /api/hello
  it('should return a hello message', (done) => {
    chai
      .request(app)
      .get('/api/hello')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Hello, world!');
        done();
      });
  });

  // Test POST /api/add
  it('should return the sum of two numbers', (done) => {
    chai
      .request(app)
      .post('/api/add')
      .send({ a: 5, b: 10 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('result', 15);
        done();
      });
  });

  // Test POST /api/add with invalid input
  it('should return an error for invalid input', (done) => {
    chai
      .request(app)
      .post('/api/add')
      .send({ a: 'five', b: 10 })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error', 'Invalid input');
        done();
      });
  });
});
