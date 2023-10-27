export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/books`, {
    method: "GET",
  })

  const data = await res.json();
  return (
    <div className="container text-center">
      <div className="row">
      {data.map((d:any) => (
        <div className="col-md-4">
          <div className="card p-2" key={d._id} style={{ height: "300px", overflow: "scroll" }}>
              <div className="d-flex flex-row mb-4"><img src={d.thumbnailUrl} width="70"/>
                  <div className="d-flex flex-column ml-2"><span>{d.title}</span><span>{d.authors}</span><span className="ratings"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></div>
              </div>
              <p className="d-flex flex-column ml-2" style={{ textOverflow: "ellipsis",textAlign: "justify"}}>{d.shortDescription === null ? d.longDescription : d.shortDescription}</p>
          </div>
          <br/>
        </div>
      ))}
      </div>
    </div>
  )}