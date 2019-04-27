/*jshint esnext: true */
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, describe, beforeEach, it,server, utils */


const should = require('should');
const request = require('supertest');
const server = require('../app');

describe('filter api tests', function () {

    describe('/api/photos', function () {

        it('should return 200 ', function (done) {
            request(server)
                .get('/')
                .expect(200)
                .end(function (err) {
                    should.not.exist(err);
                    done();
                });
        });

        it('should retrun public api', function (done) {
            request(server)
                .get('/api/photos?tag=Bangalore')
                .expect(200)
                .end(function (err, res) {
                    should.not.exist(err);
                    var body = res.body;
                    body.should.which.is.a.Array();
                    const pic = body[0];
                    pic.should.have.property('title');
                    pic.should.have.property('link');
                    pic.should.have.property('media').which.is.a.Object();
                    pic.should.have.property('date_taken');
                    pic.should.have.property('description');
                    pic.should.have.property('published');
                    pic.should.have.property('author');
                    pic.should.have.property('author_id');
                    pic.should.have.property('tags');
                    done();
                });
        });
    });
});