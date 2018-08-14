import React, {Component } from 'react'
import {withTracker } from 'meteor/react-meteor-data'
import EventInput from './../../ui/components/EventInput'
import EventList from './../../ui/components/EventList'
import {Events} from './../../api/events'

class AddEvents extends Component {
    constructor(props){
        super(props)
            this.inputRef=React.createRef();
        
    }

    handleEventSubmit=e=>{
        e.preventDefault();

        let inputRef = this.inputRef.current
        if(inputRef.value)
        {
            Meteor.call('events.handleEventSubmit',{
                event: inputRef.value,
                date: new Date,
                owner: this.props.currentUserId
            })
        }
        this.inputRef.current.value=""

    }

render(){
    const { events, currentUserId } = this.props

    return (
        <div>
        <h1>Add Events</h1>
        <EventInput 
        inputRef={this.inputRef}
        handleEventSubmit={this.handleEventSubmit}/>
        <EventList
        events={events}/>
        </div>

    )
}
}

export default withTracker(() => {
    return{
        currentUser:Meteor.user(),
        events: Events.find({ owner: Meteor.userId()}).fetch()
    }
  })(AddEvents);