import React from "react";
import styles from "./../../page.module.css";

async function fetchProduct(id) {
  const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
  return resp.json();
}

export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id);
  return {
    title: product.title,
    description: product.description,
    thumbnail: product.image,

    metadataBase: new URL("https://istad.com"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      images: product.image,
      title: product.title,
      description: product.description,
    },
  };
}

export default async function ProductDetail({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.main}>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.image} className="img-fluid rounded-start w-75" alt="product.title" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{[product.title]}</h2>
              <hr/>
              <h5 className="card-text">
              {product.description}
              </h5>
            
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
