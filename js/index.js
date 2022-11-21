"use strict";

// Initialize and add the map
function initMap() {
  // The location of Uluru43.4509, -80.513601
  const uluru = { lat: 43.445510795690794, lng: -80.51599215263099 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });

  const styledMapType = new google.maps.StyledMapType([
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d",
        },
      ],
    },
  ]);

  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  const svgMarker = {
    path: "M16 0.875C11.8078 0.879946 7.78867 2.54749 4.82432 5.51184C1.85997 8.47618 0.192432 12.4953 0.187486 16.6875C0.182465 20.1134 1.30152 23.4463 3.37299 26.175C3.37299 26.175 3.80424 26.7428 3.87467 26.8248L16 41.125L28.131 26.8176C28.1943 26.7414 28.627 26.175 28.627 26.175L28.6284 26.1707C30.6989 23.4432 31.8174 20.1118 31.8125 16.6875C31.8075 12.4953 30.14 8.47618 27.1756 5.51184C24.2113 2.54749 20.1922 0.879946 16 0.875ZM16 22.4375C14.8627 22.4375 13.751 22.1003 12.8055 21.4685C11.8599 20.8366 11.1229 19.9386 10.6877 18.8879C10.2525 17.8373 10.1386 16.6811 10.3605 15.5657C10.5823 14.4503 11.13 13.4258 11.9341 12.6216C12.7383 11.8175 13.7628 11.2698 14.8782 11.048C15.9936 10.8261 17.1497 10.94 18.2004 11.3752C19.2511 11.8104 20.1491 12.5474 20.7809 13.493C21.4128 14.4386 21.75 15.5503 21.75 16.6875C21.7481 18.2119 21.1417 19.6733 20.0637 20.7513C18.9858 21.8292 17.5244 22.4356 16 22.4375Z",
    fillOpacity: 1,
    anchor: new google.maps.Point(32, 42),
  };
  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<p id="firstHeading" class="firstHeading">Voodoo</p>' +
  '<div id="bodyContent">' +
  "<p> 137 Glasgow St., Unit 115<br/> Kitchener, ON N2G 4X8<br/>Ukraine</p>"+
  "<div class='info'><svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>"+
  "<path fill-rule='evenodd' clip-rule='evenodd'"+
  "d='M11.375 9.16497V10.79C11.3762 11.095 11.2488 11.3864 11.024 11.5926C10.7993 11.7989 10.498 11.9008 10.1942 11.8733C8.52737 11.6922 6.92629 11.1226 5.51958 10.2104C4.21082 9.37875 3.10122 8.26915 2.26958 6.96039C1.35415 5.54729 0.784463 3.93843 0.606665 2.26414C0.579296 1.96128 0.680479 1.66086 0.885496 1.43627C1.09051 1.21167 1.38049 1.08359 1.68458 1.08331H3.30958C3.85334 1.07795 4.31681 1.47654 4.39291 2.01497C4.4615 2.53501 4.5887 3.04562 4.77208 3.53706C4.9209 3.93295 4.82571 4.37924 4.52833 4.67997L3.84041 5.36789C4.61151 6.72398 5.73433 7.8468 7.09041 8.61789L7.77833 7.92997C8.07906 7.63259 8.52536 7.53741 8.92125 7.68622C9.41269 7.8696 9.9233 7.9968 10.4433 8.06539C10.988 8.14223 11.3886 8.61507 11.375 9.16497Z'"+
  "stroke='#52514F' stroke-linecap='round' stroke-linejoin='round'/>"+
  "</svg><span>1-800-480-9597<span/></div>"+
  "<div class='info'><svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>"+
  "<path fill-rule='evenodd' clip-rule='evenodd' d='M2 2H10C10.55 2 11 2.45 11 3V9C11 9.55 10.55 10 10 10H2C1.45 10 1 9.55 1 9V3C1 2.45 1.45 2 2 2Z' stroke='#52514F' stroke-linecap='round' stroke-linejoin='round'/>"+
  "<path d='M11 3L6 6.5L1 3' stroke='#52514F' stroke-linecap='round' stroke-linejoin='round'/>"+
  "</svg>"+
  "<span>info@voodoo.com<span/>"+
  "</div>"+
  "</div>" +
  "</div>";
  
const infowindow = new google.maps.InfoWindow({
  content: contentString,
  ariaLabel: "Uluru",
});

  let marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;

// custom select

let selects, divSel, divOpt, divItem;

selects = document.querySelectorAll("select");
selects.forEach(function (select) {
  let arrSel = Array.from(select);
  divSel = document.createElement("DIV");
  divSel.setAttribute("class", "select-selected custom-select");
  divSel.innerHTML = select.options[select.selectedIndex].innerHTML;
  let parent = select.parentNode;
  parent.insertBefore(divSel, select);

  divOpt = document.createElement("DIV");
  divOpt.setAttribute("class", "select-items select-hide");

  arrSel.forEach(function (option) {
    divItem = document.createElement("DIV");
    divItem.innerHTML = option.innerHTML;

    divItem.addEventListener("click", function (e) {
      let el, y, fromSel, selectedSel;

      el = this;
      fromSel = Array.from(el.parentNode.nextSibling);
      selectedSel = el.parentNode.previousSibling;
      fromSel.forEach(function (value, index) {
        if (value.innerHTML == el.innerHTML) {
          fromSel.selectedIndex = index;
          selectedSel.innerHTML = el.innerHTML;
          y = Array.from(
            el.parentNode.getElementsByClassName("same-as-selected")
          );
          y.forEach((value) => {
            value.removeAttribute("class");
          });
          el.setAttribute("class", "same-as-selected");
          return;
        }
        selectedSel.click();
      });
    });

    divOpt.appendChild(divItem);
  });

  parent.insertBefore(divOpt, select);

  divSel.addEventListener("click", function (e) {
    e.stopPropagation();
    let el = this;
    closeAllSelect(el);
    el.nextSibling.classList.toggle("select-hide");
    el.classList.toggle("select-arrow-active");
  });
});

function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.querySelectorAll(".select-items");
  y = document.querySelectorAll(".select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
