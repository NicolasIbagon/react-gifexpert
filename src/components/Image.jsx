import PropTypes from 'prop-types'

export const Image = ({title,url}) => {


    return(
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}



Image.propTypes = {
    title: PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
}