import data from '../Data/data-testimonials.json';

export default function Testimonials(){
    return (
        <div className="testimonials-div">
            <img src="images/bg-quotes.png" alt="" />
            {data.map(item => (
                <div className="bg-card">
                    <div key={item.id} className="map-div">
                        <p>{item.text}</p>
                        <div className="map-row">
                            <div>
                                <img src={item.avatar} alt="" />
                            </div>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}