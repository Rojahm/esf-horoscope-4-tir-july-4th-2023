import "./Form.css";
import { FaTimes } from "react-icons/fa";

import React from "react";

const Form = ({ onClick }) => {
  return (
    <div className="Form">
      <form className="border p-4 mx-5 my-3 rounded shadow">
        <div className="d-flex justify-content-end">
          <FaTimes
            color="red"
            style={{ cursor: "pointer" }}
            onClick={onClick}
          />
        </div>
        <h2 className="mb-5">فرم مشخصات</h2>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام"
                autoFocus
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام خانوادگی
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder=" نام خانوادگی"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام مادر
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام مادر"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام پدر
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام پدر"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام برادر 1
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام برادر 1"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام برادر 2
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام برادر 2"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام برادر 3
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام برادر 3"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام خواهر 1
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام خواهر 1"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام خواهر 2
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام خواهر 2"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label className="col align-self-start" />
              نام خواهر 3
            </div>
            <div className="col-7">
              <input
                type="text"
                placeholder="نام خواهر 3"
                className="form-control"
              ></input>
            </div>
          </div>

          <div>
            <input type="submit" className="btn mt-3" value={"ادامه"}></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
