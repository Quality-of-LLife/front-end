import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
    <nav class="navbar fixed-top">
    <div class="container-fluid ">
      <button class="toggler sm-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><img src="/static/images/hamburger.svg"/>
      </button>
      <a class="navbar-brand" href="#"></a>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="user-page mx-auto" id="offcanvasNavbarLabel">내 활동</h5>
          <button type="button" class="close-btn sm-btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img class="arrow-btn" src="/static/images/arrow.svg"/></button>
        </div>
        <div class="user-page-body">
          <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
            <li class="nav-item">
              <p class="user-hello" >사용자 이름님, 안녕하세요?</p>
              <p class="user-page-small">User ID Here </br></br></p>
            </li>
            <hr/>
            <li class="nav-item">
              <p class="user-page-small">병원 목록</p>
              <a class="user-reservation nav-link" href="#">내가 예약한 병원
              </br></br>
              </a>
            </li>
            <hr/>
            <li class="nav-item">
            <p class="user-page-small">후기 목록</p>
              <a class="user-review nav-link" href=#>
                내가 쓴 후기
                </br></br>
              </a>
            </li>
            <hr/>
            <li class="nav-item">
            <p class="user-page-small">고객 센터</p>
              <a class="user-review nav-link" href=#>
                전화 문의
                </br></br>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="main-container">

  <form class="search-form d-flex">
  <input class="search-input my-5" type="search" aria-label="Search">
  <button class="search-btn sm-btn btn-outline-success my-5" type="submit"></button>
</form>

<div class="row mx-auto">
  <div class="main-div col-4 col-md-4">
    <button class="main-btn" type="button"><img class="main-img" src="/static/images/dnjfrud.svg" alt="월경">
    </button>
    <p class="main-p">월경</p>
  </div>
  <div class="main-div col-4 col-md-4">
    <button class="main-btn" type="button"><img class="main-img" src="/static/images/wkrndrudqndka.svg" alt="자궁경부암">
    </button>
    <p class="main-p">자궁경부암</p>
  </div>
  <div class="main-div col-4 col-md-4">
    <button class="main-btn" type="button"><img class="main-img" src="/static/images/dlatls.svg" alt="임신">
    </button>
    <p class="main-p">임신</p>
  </div>
  <div class="main-div col-4 col-md-4">
    <button class="main-btn" type="button"><img class="main-img" src="/static/images/chdmavk.svg" alt="초음파">
    </button>
    <p class="main-p">초음파</p>
  </div>
  <div class="main-div col-4 col-md-4">
    <button class="main-btn" type="button"><img class="main-img" src="/static/images/wlfdua.svg" alt="질염">
    </button>
    <p class="main-p">질염</p>
  </div>
  <div class="main-div col-4 col-md-4">
    <button class="main-btn" type="button"><img class="main-img" src="/static/images/vldla.svg" alt="피임">
    </button>
    <p class="main-p">피임</p>
  </div>
</div>

<div class="group-btn">
    <button id="reviewbtn">병원 후기 쓰기</button>
    <button id="nearbtn">가까운 병원 찾기</button>
</div>
</div>

    <script src="/static/js/components/SearchMap.js"></script>



    `;
  }
}
