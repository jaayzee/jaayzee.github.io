import React from 'react'
import '../../styles/art.css'


// Base Code: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
// Base Code: https://github.com/MingSheng92/react_isntafeed
const Feed = (props) => {
    const { id, caption, media_type, media_url, timestamp, username} = props.feed
    let post;

    const [first, ...rest] = caption.split('#')
    const leftovers = '#' + rest.join('#')

    const temp = timestamp.split(/\D+/)
    var dateConv = new Date(Date.UTC(temp[0], --temp[1], temp[2], temp[3],temp[4], temp[5], temp[6]))
    dateConv = dateConv.toString().split(' ')
    dateConv = dateConv[0] + ' - ' + dateConv[1] + ' ' + dateConv[2] + ', ' + dateConv[3]
    
    switch (media_type) {
        case "VIDEO":
            post = (
                <div className='arts'>
                    <video
                        width='100%'
                        height='auto' 
                        src={media_url} 
                        type="video/mp4" 
                        controls playsinline>
                    </video>
                    <div className='captions'> 
                        <span className='user'> {username} </span> <br /> <br />
                        <span className='date'> {dateConv} </span> <br />
                        {first}
                        <span className='text'> {leftovers} </span> 
                        
                    </div>
                </div>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <div className='arts'>
                    <img 
                        width='100%'
                        height='auto'
                        id={id} 
                        src={media_url} 
                        alt={caption} 
                    />
                    <div className='captions'> 
                        <span className='user'> {username} </span> <br /> <br />
                        <span className='date'> {dateConv} </span> <br />
                        {first}
                        <span className='text'> {leftovers} </span> 
                        
                    </div>
                </div>
            );
            break;
        default:
            post = (
                <div className='arts'>
                    <div className='artzoom'>
                        <label>
                            <input type="checkbox"></input>
                            <img 
                            // width='100%'
                            // height='auto'
                            id={id} 
                            src={media_url} 
                            alt={caption} 
                            />
                            <div className='captions'> 
                                <span className='user'> {username} </span> <br /> <br />
                                <span className='date'> {dateConv} </span> <br />
                                {first}
                                <span className='text'> {leftovers} </span> 
                            </div>
                        </label>
                    </div>
                </div>
            );
    }       

    return (
        <FadeInSection>
            <React.Fragment>
                {post}
            </React.Fragment>
        </FadeInSection>
    );
}

export default Feed;