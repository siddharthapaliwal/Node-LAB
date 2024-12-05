const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;

chai.use(chaiHttp);

describe('Express Routes', () => {

  // Test for GET /api/hello
  describe('GET /api/hello', () => {
    it('should return a success response with "Hello, world!"', (done) => {
      chai.request(app)
        .get('/api/hello')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({ message: 'Hello, world!' });
          done();
        });
    });
  });

  // Test for POST /api/echo
  describe('POST /api/echo', () => {
    it('should return echoed data when valid data is provided', (done) => {
      chai.request(app)
        .post('/api/echo')
        .send({ data: 'Test data' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({ echoed: 'Test data' });
          done();
        });
    });

    it('should return an error when no data is provided', (done) => {
      chai.request(app)
        .post('/api/echo')
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.deep.equal({ error: 'No data provided' });
          done();
        });
    });
  });

});
