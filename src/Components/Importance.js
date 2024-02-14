import React from "react";

export default function Importance() {
  return (
    <section className="importance" id="importance">
      <h2 className="section-title">Importance of Lawn Care</h2>
      <div className="importance-list">
        <div className="importance-item">
          <div className="card">
            <div className="card-header">Fire Prevention</div>
            <div className="card-content">
              <p>Reducing fire hazards like Guinea grass ensures safer landscapes.</p>
            </div>
          </div>
        </div>
        <div className="importance-item">
          <div className="card">
            <div className="card-header">Lawn Health</div>
            <div className="card-content">
              <p>Regular maintenance promotes lush lawns, enhancing property aesthetics.</p>
            </div>
          </div>
        </div>
        {/* <div className="importance-item">
          <div className="card">
            <div className="card-header">Weed and Pest Control</div>
            <div className="card-content">
              <p>Preventing weed growth and deterring pests are vital for a healthy lawn.</p>
            </div>
          </div>
        </div> */}
        <div className="importance-item">
          <div className="card">
            <div className="card-header">Regulatory Compliance</div>
            <div className="card-content">
              <p>Adhering to local regulations ensures landowners avoid penalties.</p>
            </div>
          </div>
        </div>
        <div className="importance-item">
          <div className="card">
            <div className="card-header">Erosion Control</div>
            <div className="card-content">
              <p>Maintaining landscapes, especially on slopes, helps prevent erosion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
