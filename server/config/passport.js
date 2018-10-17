/**
 * Created by My-PC on 9/13/2016.
 */
'use strict';
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const ClientPasswordStrategy = require('passport-oauth2-client-password').Strategy;
const crypto = require('crypto');
const mongoose =  require('mongoose');
const User = mongoose.model('User');
const Client = mongoose.model('Client');
const AccessToken = mongoose.model('AccessToken');
const Order = mongoose.model('Order');
const Ingredient = mongoose.model('Ingredient');

const Promise = require("bluebird");
Promise.promisifyAll(mongoose);

module.exports = () => {
    /**
     * LocalStrategy
     *
     * This strategy is used to authenticate users based on a username and password.
     * Anytime a request is made to authorize an application, we must ensure that
     * a user is logged in before asking them to approve the request.
     */
    passport.use(new LocalStrategy(
        (userName, password, done) => {
            User.findOneAsync({
                userName:userName
            }).then(user => {
                if (!user)
                    return done(null, false);
                if (user.password !== password)
                    return done(null, user);
                return done(null, user)
            }).catch(err =>{
                return done(err);
            })
        }
    ));
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    /**
     * BasicStrategy & ClientPasswordStrategy
     *
     * These strategies are used to authenticate registered OAuth clients. They are
     * employed to protect the `token` endpoint, which consumers use to obtain
     * access tokens. The OAuth 2.0 specification suggests that clients use the
     * HTTP Basic scheme to authenticate. Use of the client password strategy
     * allows clients to send the same credentials in the request body (as opposed
     * to the `Authorization` header). While this approach is not recommended by
     * the specification, in practice it is quite common.
     */
    function verifyClient(clientId, clientSecret, done) {
        Client.findByIdAsync(clientId)
            .then(client =>{
                if (!client)
                    return done(null, false);
                if (client.clientSecret !== clientSecret)
                    return done(null, false);
                return done(null,client);
            })
            .catch(err=>{
                return done(err);
            });
    }

    passport.use(new BasicStrategy(verifyClient));

    passport.use('clientPassword',new ClientPasswordStrategy(verifyClient));
    /**
     * BearerStrategy
     *
     * This strategy is used to authenticate either users or clients based on an access token
     * (aka a bearer token). If a user, they must have previously authorized a client
     * application, which is issued an access token to make requests on behalf of
     * the authorizing user.
     */
    passport.use(new BearerStrategy(
        (accessToken, done) => {
            //const accessTokenHash = crypto.createHash('sha1').update(accessToken).digest('hex');
            AccessToken.findOneAsync({token:accessToken})
                .then(token =>{
                    if (!token)
                        return done(null, false);
                    if(token.userId){
                        User.findByIdAsync(token.userId)
                            .then(user =>{
                                if(!user)
                                    return done(null,false);
                                // To keep this example simple, restricted scopes are not implemented,
                                // and this is just for illustrative purposes.
                                done(null, user, {scope: '*'});
                            }).catch(err=>{
                            done(err);
                        })
                    }else {
                        // The request came from a client only since userId is null,
                        // therefore the client is passed back instead of a user.
                        Client.findByIdAsync(token.clientId)
                            .then(client=>{
                                if (!client)
                                    return done(null, false);
                                // To keep this example simple, restricted scopes are not implemented,
                                // and this is just for illustrative purposes.
                                done(null, client, { scope: '*' });
                            })
                            .catch(err=>{
                                return done(err);
                            })

                    }
                }).catch(err=>{
                return done(err)

            });
        }
    ));
};
