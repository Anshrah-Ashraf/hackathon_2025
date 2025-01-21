import Image from "next/image";
import Link from "next/link";
import { FaDeleteLeft } from "react-icons/fa6";

export default function SingleProduct() {
  return (
    <div className="container">
      <main>
        <div className="breadcrumbs">
          <a href="#" className="text-black font-bold text-[30px] text-center">Home {'>'}</a>  <a href="#" className="text-black font-bold text-[30px]">Shop {'>'}</a> <div className="text-black font-bold text-[30px]">Lolito</div>
        </div>

        <section className="product-details">
          <div className="product-images">
            <Image src="/Asgaard sofa 3.png" alt="Asgaard Sofa" width={500} height={300} />
          </div>
          <div className="product-info">
            <h2>Asgaard Sofa</h2>
            <p className="price">Rs. 250,000.00</p>
            <p className="rating">⭐⭐⭐⭐⭐ (5 Customer Reviews)</p>
            <p className="description">
              Setting the bar as one of the loudest speakers in its class, this sofa is a compact, stout-hearted hero.
            </p>
            <div className="color-options">
              <span>Color: </span>
              <button className="color" style={{ background: 'blue' }}></button>
              <button className="color" style={{ background: 'black' }}></button>
              <button className="color" style={{ background: 'yellow' }}></button>
            </div>
            <div className="actions">
              <Link legacyBehavior href="/cart" passHref>
              <button>Add to Cart</button></Link>
            </div>
          </div>
        </section>

        <section className="related-products">
          <h2 className="inset-0 text-black text-[30px] font-bold text-center p-3px">Description</h2>
          <p>Embodying the raw, wayward spirit of rock `&apos;`n`&apos;` roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

          <h3 className="flex flex-col gap-6 w-full font-bold text-center text-[30px] pb-4">Related Products </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="product">
              <Image src="/related image 1.png" alt="Syltherine" width={150} height={150} /> 
              <p>Syltherine</p>
              <p>Rp 2,500,000</p>
            </div>
            <div className="product">
              <Image src="/related image 2.png" alt="Leviosa" width={150} height={150} />
              <p>Leviosa</p>
              <p>Rp 2,500,000</p>
            </div>
            <div className="product">
              <Image src="/related image 3.png" alt="Lolito" width={150} height={150} />
              <p>Lolito</p>
              <p>Rp 7,000,000</p>
            </div>
            <div className="product">
              <Image src="/related image 4.png" alt="Respira" width={150} height={150} />
              <p>Respira</p>
              <p>Rp 500,000</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className="text-black font-extrabold bg-slate-200"> 2024 Furniro</p>
      </footer>
    </div>
  );
}