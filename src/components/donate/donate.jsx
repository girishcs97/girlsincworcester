import { useEffect } from 'react';

export default function Donate() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://girlsincofworcester-bloom.kindful.com/embeds/e01b3d0d-828b-4b81-bccd-5224bdfaf659/init.js?type=button';
        script.setAttribute('data-embed-id', 'e01b3d0d-828b-4b81-bccd-5224bdfaf659');
        script.setAttribute('data-lookup-type', 'jquery-selector');
        script.setAttribute('data-lookup-value', '#kindful-donate-btn');
        document.body.appendChild(script);
    }, []);

    const openDonatePage = () => {
        window.open('https://girlsincofworcester-bloom.kindful.com/embeds/e01b3d0d-828b-4b81-bccd-5224bdfaf659/init.js?type=button', '_blank');
    };

    return (<>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="button-container d-flex text-center" style={{marginLeft:'40px'}}>
            <a className="kindful-donate-btn" id="kindful-donate-btn" style={{ cursor: 'pointer' }}>Donate</a>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
    );
}
