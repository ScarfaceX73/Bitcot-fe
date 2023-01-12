import './card.css';

const Card = (props) => {
    const { item } = props

    const imageUrl = item?.images?.['Poster Art']?.url;

    return (
        <div className='card-container'>
            <div className="cards-img">
                <img src={imageUrl} alt={item.title} />
            </div>
            <div className='item-title'>
                <p>{item.title}</p>
            </div>
        </div>)
}
export default Card