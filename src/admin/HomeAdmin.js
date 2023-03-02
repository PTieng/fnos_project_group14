import React from 'react';

const HomeAdmin = () => {
    return ( 
        <>
       <section id="homePage">
  <div className="container">
    <h4>Trang Điều Khiển</h4>
    <div className="row">
      <div className="col-sm-12 col-md-3">
        <div className="card text-center " id="money">
          <div className="title mt-3 fs-2">Doanh Thu</div>
          <hr />
          <span className="fs-3">$500</span>
        </div>
      </div>
      <div className="col-sm-12 col-md-3">
        <div className="card text-center" id="product">
          <div className="title mt-3 fs-2">Sản Phẩm</div>
          <hr />
          <span className="fs-3">15</span>
        </div>
      </div>
      <div className="col-sm-12 col-md-3">
        <div className="card text-center" id="order">
          <div className="title mt-3 fs-2">Đơn Hàng</div>
          <hr />
          <span className="fs-3">10</span>
        </div>
      </div>
      <div className="col-sm-12 col-md-3">
        <div className="card text-center" id="user">
          <div className="title mt-3 fs-2">Người Dùng</div>
          <hr />
          <span className="fs-3">5</span>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
     );
}
 
export default HomeAdmin;