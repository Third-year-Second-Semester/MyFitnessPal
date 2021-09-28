import React, { useEffect, useState } from "react";
import UserNavBar from "../UserNavBar/UserNavBar";
import mealPlanServices from "../../services/mealPlanServices";
import Spinner from "../Common/Spinner";
import Styles from "./meals.module.css";
import jsPDF from 'jspdf';

export default function ViewMealPlanRegistrations() {
  const [allItems, setItems] = useState();
  useEffect(() => {
    const retriveReg = async () => {
      try {
        let result = await mealPlanServices.getAllMealPlanRegistrations();
        setItems(result.data);
        console.log(result.data);
      } catch (err) {
        console.log({ Error: err.message });
      }
    };
    retriveReg();
  }, []);


  //Instructor Report
  const generatepdf = () => {
    const doc = new jsPDF()
   // this.fetchdata()
    doc.text("Meal Plan Registraion Details ", 50, 10)
    doc.autoTable({ html: '#mealPlanTable' })
    doc.save('mealPlans.pdf')
   
}

  return (
    <div>
      <div className="container-fluied">
        <UserNavBar></UserNavBar>
        <div className={`container ${Styles.mealTable}`}>
          <h1 className="text-center mb-3">Meal Plan Delivery List</h1>
          {allItems ? (
            <div>
              <table className="table table-striped" id="mealPlanTable">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Meal Plan name</th>
                  </tr>
                </thead>
                <tbody>
                  {allItems.map((item) => {
                    return (
                      <tr>
                        <th scope="row">1</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.mobile}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.mealPlanId.title}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="row justify-content-center">
                <button
                  className={`col-12 col-md-6 btn btn-primary ${Styles.mealButtonDesign}`}
                  type="submit"
                  onClick={generatepdf}
                >
                  Download PDF
                </button>
              </div>
            </div>
          ) : (
            <Spinner></Spinner>
          )}
          {/* <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Meal Plan name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Tharindu</td>
                <td>Balasooriya</td>
                <td>071</td>
                <td>t@gamil.com</td>
                <td>asdsa</td>
                <td>7 Day diet</td>
              </tr>
             
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
