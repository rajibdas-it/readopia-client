import slide_image_1 from "../assets/images/img_1.jpg";
export default function BookCard() {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl p-4 lg:p-0">
      <figure>
        <img src={slide_image_1} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Cookies!</h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  );
}

<div className="card w-96 bg-neutral text-neutral-content"></div>;
