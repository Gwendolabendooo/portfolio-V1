import React, { Component } from 'react';

class preloader extends React.Component {  
    render() {
        library.add(
            faSearch
        )

        return (
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div class="object" id="first_object"></div>
                        <div class="object" id="second_object"></div>
                        <div class="object" id="third_object"></div>
                    </div>
                </div>
            
            </div>
        )  
    }
}
export default preloader;
