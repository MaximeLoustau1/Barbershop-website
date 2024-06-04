import React, { useState } from 'react'

function Toggle({language, setLanguage}) {
    const [languageOption, setlanguageOption] = useState(language === 'EN' ? 'NL' : 'EN');

    function toggleLanguage() {
        if (language === 'EN') {
            setLanguage('NL');
            setlanguageOption('EN');
        }
        else {
            setLanguage('EN');
            setlanguageOption('NL');
        }
    }

    return(
        <div className="language-toggler">
            <p className="languages transparent-btn">
                <span className="en-tag">{language}</span> / <span onClick={toggleLanguage}className="nl-tag">{languageOption}</span>
            </p>
        </div>
    )
}

export default Toggle