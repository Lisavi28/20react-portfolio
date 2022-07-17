import './index.css';

function AboutMe() {

  return (
    <article className="box">
      <h2 className="title">About Me <br /></h2>
      <div className='me row'>
     <img className= "img-me col-3" src={require("../../assets/images/Yaz.jpg")} alt="" />
                  <p>
                    I like to be constantly updated, favoring the development of my skills and facilitating the path of new ones. 

                    I am a committed, organized and passionate person with what I do to provide quality work. 

                    I am located in the Smyrna area in the state of Tennessee.  
           </p>
        </div>
    </article>
  )
}

export default AboutMe;