import React, { createContext } from 'react';

const AppConfigContext = createContext()

const AppConfig = props => {
    const base_url = 'https://pokeland-legends.club/pokeland-builds/'

    function site_url(segments) {
        return base_url + segments
    }

    return (
        <AppConfigContext.Provider value={{ site_url }} site_url={site_url}>
            {props.children}
        </AppConfigContext.Provider>
    );
}

export { AppConfigContext, AppConfig }