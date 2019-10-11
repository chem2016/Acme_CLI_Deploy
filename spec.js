const { expect } = require('chai');
const { User } = require('./db').models;
const { syncAndSeed } = require('./db');

describe('Our App', () => {
    let seedUsers;
    // it('true is true', () => {
    //     expect(true).to.equal(true);
    // })
     
    beforeEach(async () => { 
        seedUsers = await syncAndSeed()
    } )
    describe('User authenticate', () => {
        it('successed with correct credientials', async () => {
            // const { email, password } = seedUsers.moe;
            const token = await User.authenticate(seedUsers.moe)
            expect(true).to.equal(true);
        })
    })
})