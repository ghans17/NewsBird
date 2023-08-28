import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, updateTime, author, source } = this.props;
    return (
      <>
        <div className='comtainer my-3 '>
          <div className="card" >
          <div style={{
                display:'flex',
                justifyContent:'flex-end',
                position:'absolute',
               right:'0%'
                
              }}>
                <span className=" badge rounded-pill bg-danger" 
              >
                  {source}
             
            </span> </div>
            <img src={!imageUrl ? "https://ewscripps.brightspotcdn.com/dims4/default/ae61836/2147483647/strip/true/crop/2470x1389+0+116/resize/320x180!/format/webp/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F61%2F38%2F26aa169d47849438b341b08dd09a%2Fnews.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title ? title : ""}</h5>
              <p className="card-text">
                {description ? description : ""}
              </p>
             
            <p className="card-text"><small className="text-body-secondary">Last Updated At {new Date(updateTime).toLocaleString()} By {author ? author : "Unknown"}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">
              Read More
             
            </a>
            
          </div>
        </div>
      </div >
      </>
    )
  }
}

export default Newsitem
