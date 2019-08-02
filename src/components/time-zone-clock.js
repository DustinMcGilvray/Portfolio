import React from 'react';
import Moment from 'moment-timezone';

const local = Moment().tz('America/Dallas')

const TimeZone = (props) => (
<div>
    {Moment().tz(props.timezone).format('MMMM Do YYYY, h:mm:ss a')}
    <p>{Moment(local).tz(props.timezone).format('Z zz')}</p>
</div>
)

export default TimeZone