import React from 'react'

const NewsItem = (props) => {

    let {title,description, imageUrl, newsUrlId,author,publishedAt,key} = props;
    return (
      <div className='my-3'>
        <div className="card" key={key}>
            <img style={{height: "12em"}} src={imageUrl? imageUrl : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=2000" } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}<span className="badge text-bg-info">Info</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author ? author: "NA"}, At {publishedAt ? new Date(publishedAt).toGMTString() : 'NA' }</small></p>
                <a rel='noreferrer' href={newsUrlId} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
