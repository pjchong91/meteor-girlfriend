import {Mongo} from 'meteor/mongo'

export const Events = new Mongo.Collection('events')

if (Meteor.isServer){
    Meteor.publish('events', function eventsPublication(){
        return Events.find({owner:this.userId})
    })
}

Meteor.methods({
    'events.handleEventSubmit'(event){
        if(event.owner !==this.userId){
            throw new Meteor.Error(
                "events.handleEventSubmit is not authorized",
                "You are not allowed to add events for other users"
            )
        }
        Events.insert(event)
    }
})