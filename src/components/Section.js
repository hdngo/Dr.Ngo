import React, { Component } from 'react';

class Section extends Component {
    
    render(location) {
        let params = new URLSearchParams(location);
        console.log(params);
        return (
            <div className='section'>
                {/* {params} */}
            </div>
        )
    }
}

export default Section;