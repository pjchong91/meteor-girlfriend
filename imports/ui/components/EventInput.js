import React from 'react'

const EventInput = ({inputRef, handleEventSubmit}) => {
    return(
        <div>
            <form onSubmit = {(e) => handleEventSubmit(e)}>
            {/* <label>Points</label>
                    <input type="number" ref="points"/>
                    <br/><br/> */}
            <input ref={inputRef} type="text" placeholder="Add Event"/>

             {/* <label>Date</label>
                    <input type="date" ref="date" />
                    <br/><br/> */}
            </form>
            </div>
    )
}

export default EventInput