const { expect } = require('chai');
const { User } = require('./db').models;
const { syncAndSeed } = require('./db');
const jwt = require('jwt-simple');

describe('Our App', () => {
    let seedUsers;
    beforeEach(async () => { 
        seedUsers = await syncAndSeed()
    } )
    describe('User authenticate', () => {
        it('successed with correct credientials', async () => {
            const expectedToken = jwt.encode({ id: seedUsers.moe.id }, process.env.SECRET)
            const token = await User.authenticate(seedUsers.moe)
            expect(token).to.equal(expectedToken);
        })
    })
})