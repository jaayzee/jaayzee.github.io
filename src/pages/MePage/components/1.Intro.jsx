import '../../../styles/me.css'

const date = new Date();
const time = date.getHours();

function Intro() {
    return (
        <div className='header'>
            <div className='top-block'>
                <div className="title-small"> Good 
                    {time >= 12 ? time >= 16 ? " Evening": " Afternoon": " Morning"}! My name is </div>
                    <a className="me-link-big" href="https://www.linkedin.com/in/jjzee" target="_blank"> JOHN ZHOU</a> <br></br>
                    I'm a SoTEST-based perfectionist with a love of collaboration.  <br></br>
                    <br></br>
                    I can <a className='title-small me-link' href="https://www.instagram.com/jozhoooo/" target="_blank">illustrate</a>  <br></br>
                    I want to <a className='title-small me-link' href="https://github.com/jaayzee" target="_blank">develop</a> stuff  <br></br>
                    I <a className='title-small me-link' href="https://steamcommunity.com/id/belloga/" target="_blank">game</a> way too much
                    <br></br>
                </div>
        </div>
    ) 
}

export default Intro