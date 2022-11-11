import data from '../Data/data-perks.json';

export default function PerksComponent(){
    return (
        <div className="perks">
            {data.map(item => (
                <div key={item.id} className="perks-map-data">
                    <img src={item.icon} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}