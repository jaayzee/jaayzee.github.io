import '../../styles/me.css'

function Me() {
    return (
        <main>
            <div className="title-small"> Hi, I'm </div>
                <a className="title-big me-link-big" href="https://www.linkedin.com/in/jjzee" target="_blank"> JOHN ZHOU</a>
                <body> 
                    A homebody bodying in California. <br></br>
                    <br></br>
                    I like to <a className='me-link' href="https://www.instagram.com/jozhoooo/" target="_blank">illustrate</a>  <br></br>
                    I want to be a <a className='me-link' href="https://github.com/jaayzee" target="_blank">software engineer</a>  <br></br>
                    I play too many <a className='me-link' href="https://steamcommunity.com/id/belloga/" target="_blank">games</a>
                    
                </body>
        </main>
    ) 
}

export default Me