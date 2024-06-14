const Productcard = ({ obj }) => {
  let { title, thumbnail, rating, price, brand, category } = obj;

  // console.log(fobj);
  return (
    <div className="card h-[25rem] w-96 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={thumbnail} alt={category}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
          <div className="badge badge-accent text-xl font-bold">{brand}</div>
          <div className="badge badge-accent text-xl font-bold">
               {category}
          </div>
        </div>
        <p className="text-xl font-bold">Price:{price}</p>
        <p className="text-xl font-bold">Rating:{rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
