let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];

//  覆蓋套票、篩選器

const ticketCard = document.querySelector(".ticketCard-area");
const regionSearch = document.querySelector(".regionSearch");
const searchResultText = document.querySelector("#searchResult-text");

// 查無資料頁面

const cantFindarea = document.querySelector(".cantFind-area");

// 必填隱藏

// 新增套票

const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketButton = document.querySelector(".addTicket-btn");
const ticketForm = document.querySelector(".addTicket-form");


  function init(data) {
    let str = "";
    data.forEach(function (element) {
      let li = `<li class="ticketCard">
      <div class="ticketCard-img">
          <a href="#">
              <img src="${element.imgUrl} alt="">
          </a>
          <div class="ticketCard-region">${element.area}
          </div>
          <div class="ticketCard-rank">${element.rate}
          </div>
      </div>
      <div class="ticketCard-content">
          <div>
              <h3>
                  <a href="#" class="ticketCard-name">${element.name}
                  </a>
              </h3>
              <p class="ticketCard-description">${element.description}
              </p>
          </div>
          <div class="ticketCard-info">
              <p class ="ticketCard-num"> 
                  <span><i class="fas fa-exclamation-circle"></i>
                  </span>
                  <span>剩下最後<span id="ticketCard-num"> ${element.group} </span> 組
              </p>
              <p class="ticketCard-price">
                  TWD <span id="ticketCard-price">$${element.price}</span>
              </p>
          </div>
      </div>
  </li>`;
      str += li;
    });
    ticketCard.innerHTML = str;
    searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`;
  }
  // 覆蓋套票
  
  init(data);
  
  // 篩選地區

  regionSearch.addEventListener("change", addTicket);
  
  function addTicket() {
    let newData = [];
    data.forEach(function (element) {
      if (regionSearch.value == element.area) {
        cantFindarea.style.display = "block";
        newData.push(element);
        init(newData);
      } else if (regionSearch.value == "") {
        init(data);
      }
    });
  }
  
  // 新增套票
  
  addTicketButton.addEventListener("click", function (e) {
    if (ticketName.value == "") {
      return;
    } else if (ticketImgUrl.value == "") {
      return;
    } else if (ticketRegion.value == "") {
      return;
    } else if (ticketPrice.value == "") {
      return;
    } else if (ticketNum.value == "") {
      return;
    } else if (ticketRate.value == "") {
      return;
    } else if (ticketDescription.value == "") {
      return;
    } else {
      alert("新增成功！");
    }
  
    let obj = {};
    obj.name = ticketName.value;
    obj.imgUrl = ticketImgUrl.value;
    obj.area = ticketRegion.value;
    obj.price = ticketPrice.value;
    obj.group = ticketNum.value;
    obj.rate = ticketRate.value;
    obj.description = ticketDescription.value;
    data.push(obj);
  
    init(data);
    ticketForm.reset();
    ticketCard.scrollIntoView({ behavior: "auto", block: "end" });
    regionSearch.value = "";
  });
  