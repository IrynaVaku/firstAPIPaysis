import { expect } from 'chai';
import supertest from 'supertest';
/*describe('Auth', ()=>{
  const request = supertest('paysis.herokuapp.com')
  it('login positive', () =>{
     request.post('/auth').send({ login: 'adminius', password: 'supers3cret' }
     ).end((err,res)=>{
       expect(res.statusCode).to.eq(200)
       expect(res.body).not.to.be.undefined
     })
  })
  it('login negative', () =>{
    request.post('/auth').send({ login: 'wrong', password: '11111' }
    ).end((err,res)=>{
      expect(res.statusCode).to.eq(404)
      expect(res.body).not.to.be.undefined
    })
 })
})*/
describe('Auth clientBase2', ()=>{
  const request = supertest('https://clientbase-server.herokuapp.com/v2')
  it('login positive', () =>{
     request.post('/user/login').send({ email: "business@owner.com", password: "123123"}).end((err,res)=>{
      console.log(res.body.payload);
      console.log('token length is', res.body.payload.token.length);
       expect(res.statusCode).to.eq(200)
       expect(res.body).not.to.be.undefined
       expect(res.body.payload.token.length).to.eq(215)
     })
  })
  /*it('login negative', () =>{
    request.post('/user/login').send({ login: 'wrong', password: '11111' }
    ).end((err,res)=>{
      console.log(res.body);
      expect(res.statusCode).to.eq(404)
      expect(res.body).not.to.be.undefined
    })
 })*/
})