import React from "react";
import Chart from "../../Components/Chart/Chart";
import { productsData } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

import { Link } from "react-router-dom";

import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In Day" data={productsData} datakey="uv" />
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/images/asus.png"
              alt="Asus LapTop"
              className="productInfoImg"
            />
            <span className="productName">Asus LapTop</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">12</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">Asus LapTop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">$12000</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productButton">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Dell Laptop" />

            <label>In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUpLoader">
              <img
                src="/images/asus.png"
                alt="profile photo"
                className="productUpLoaderImg"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Upload(Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
